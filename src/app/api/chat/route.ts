import { NextRequest } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import nodemailer from 'nodemailer'

// ── Singleton cache ────────────────────────────────────────────────────────
// Persiste per tutta la vita del worker (warm starts). Si resetta ad ogni deploy.
let _cachedContext: string | null = null

async function loadSystemContext(): Promise<string> {
  if (_cachedContext !== null) return _cachedContext
  const base = process.cwd()
  const [sp, kb] = await Promise.all([
    fs.readFile(path.join(base, 'src/lib/ai/system-prompt.md'), 'utf8').catch(() => 'Sei Fulgur AI.'),
    fs.readFile(path.join(base, 'src/lib/ai/knowledge-base.md'), 'utf8').catch(() => ''),
  ])
  _cachedContext = `${sp}\n\n### KNOWLEDGE BASE REFERENCE ###\n${kb}`
  return _cachedContext
}

// ── In-memory rate limiter ─────────────────────────────────────────────────
// NOTA: su Vercel multi-instance ogni worker ha il proprio stato.
// Per rate limiting cross-instance sostituire con Vercel KV / Upstash Redis.
interface RLEntry { count: number; resetAt: number }
const rlMap = new Map<string, RLEntry>()
const RL_MAX = 20
const RL_WINDOW_MS = 10 * 60 * 1000 // 10 minuti

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  // Prune entries scadute per evitare memory leak
  for (const [k, v] of rlMap) {
    if (now > v.resetAt) rlMap.delete(k)
  }
  const entry = rlMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rlMap.set(ip, { count: 1, resetAt: now + RL_WINDOW_MS })
    return false
  }
  if (entry.count >= RL_MAX) return true
  entry.count++
  return false
}

// ── Filtri anti-abuso ──────────────────────────────────────────────────────
const JAILBREAK_RE =
  /ignora\s+le\s+istruzioni|ignore\s+(previous\s+)?instructions?|sei\s+(ora\s+)?dan\b|prompt\s+injection|jailbreak/i
const OFFENSIVE_RE = /\b(vaffanculo|fanculo|stronzo|porco\s*dio)\b/i

// ── Lead capture ───────────────────────────────────────────────────────────
const LEAD_RE = /\[LEAD:(\{[^}]+\})\]/

interface LeadPayload { nome: string; tel?: string; email?: string }

async function fireLead(data: LeadPayload): Promise<void> {
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  if (!smtpUser || !smtpPass) {
    return
  }

  const contatto = data.tel
    ? `<tr><td style="padding:6px 0; color:#3D6B61; font-size:13px; width:100px;">Telefono</td><td style="padding:6px 0;"><a href="tel:${data.tel}" style="color:#2A8C7A; font-weight:600;">${data.tel}</a></td></tr>`
    : `<tr><td style="padding:6px 0; color:#3D6B61; font-size:13px; width:100px;">Email</td><td style="padding:6px 0;"><a href="mailto:${data.email}" style="color:#2A8C7A; font-weight:600;">${data.email}</a></td></tr>`

  const html = `
    <div style="font-family:'DM Sans',Arial,sans-serif; color:#0F1F1A; max-width:600px; margin:0 auto; border:1px solid #e0ede9; border-radius:12px; overflow:hidden;">
      <div style="background-color:#4ECBA0; padding:28px 32px; text-align:center;">
        <h2 style="color:#ffffff; margin:0; font-size:20px; font-weight:700;">🤖 Nuovo Lead — Fulgur AI</h2>
        <p style="color:rgba(255,255,255,0.85); margin-top:6px; font-size:13px;">
          Richiesta ricevuta tramite il chatbot del sito
        </p>
      </div>
      <div style="padding:32px; background:#FFFFFF;">
        <h3 style="font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#7A9E97; border-bottom:1px solid #EDF5F3; padding-bottom:8px; margin-top:0;">
          Contatto
        </h3>
        <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
          <tr><td style="padding:6px 0; color:#3D6B61; font-size:13px; width:100px;">Nome</td><td style="padding:6px 0; font-weight:600; font-size:14px;">${data.nome}</td></tr>
          ${contatto}
        </table>
        <p style="font-size:13px; color:#7A9E97; margin:0;">
          Contatta il cliente entro 24 ore per fissare il sopralluogo gratuito.
        </p>
      </div>
      <div style="background:#F7FBFA; padding:16px 32px; text-align:center; border-top:1px solid #EDF5F3;">
        <p style="font-size:11px; color:#7A9E97; margin:0; text-transform:uppercase; letter-spacing:1px;">
          Fulgur Service S.R.L. · P.IVA 03063010346 · Parma, Emilia-Romagna
        </p>
      </div>
    </div>
  `

  try {
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST ?? 'smtp.gmail.com',
      port:   Number(process.env.SMTP_PORT ?? 465),
      secure: true,
      auth: { user: smtpUser, pass: smtpPass },
    })
    await transporter.sendMail({
      from:    `"Fulgur AI" <${smtpUser}>`,
      to:      'fulgurservice@gmail.com',
      subject: `[Lead AI] ${data.nome} — richiesta sopralluogo`,
      text:    `Nuovo lead dal chatbot.\nNome: ${data.nome}\n${data.tel ? `Tel: ${data.tel}` : `Email: ${data.email}`}`,
      html,
    })
  } catch (err) {
    console.error('[Fulgur AI] Errore invio email lead:', err)
  }
}

// ── DeepSeek SSE chunk type ────────────────────────────────────────────────
interface DSChunk {
  choices: Array<{ delta: { content?: string }; finish_reason: string | null }>
}

// ── Helpers ────────────────────────────────────────────────────────────────
function jsonError(msg: string, status: number): Response {
  return new Response(JSON.stringify({ error: msg }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function streamStatic(text: string): Response {
  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ t: text })}\n\n`))
      controller.enqueue(encoder.encode('data: [DONE]\n\n'))
      controller.close()
    },
  })
  return new Response(readable, {
    headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' },
  })
}

// ── Route handler ──────────────────────────────────────────────────────────
export async function POST(req: NextRequest): Promise<Response> {
  // 1. Rate limit per IP
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return jsonError('Troppe richieste. Riprova tra qualche minuto.', 429)
  }

  // 2. Parse & validazione body
  let messages: Array<{ role: string; content: string }>
  try {
    const body = (await req.json()) as { messages: unknown }
    if (!Array.isArray(body.messages)) throw new Error()
    messages = body.messages as Array<{ role: string; content: string }>
  } catch {
    return jsonError('Formato non valido', 400)
  }

  if (messages.length > 30) return jsonError('Conversazione troppo lunga', 400)

  const last = messages[messages.length - 1]
  if (!last || typeof last.content !== 'string') return jsonError('Messaggio non valido', 400)
  if (last.content.length > 1000) return jsonError('Messaggio troppo lungo', 400)

  // 3. Filtri contenuto
  if (JAILBREAK_RE.test(last.content) || OFFENSIVE_RE.test(last.content)) {
    return jsonError('Messaggio non consentito', 400)
  }

  // 4. Dedup — stesso messaggio consecutivo evita chiamata a DeepSeek
  const userMsgs = messages.filter(m => m.role === 'user')
  if (
    userMsgs.length >= 2 &&
    userMsgs[userMsgs.length - 1].content.trim() ===
      userMsgs[userMsgs.length - 2].content.trim()
  ) {
    return streamStatic(
      'Sembra che stia ripetendo la stessa domanda. Per assistenza personalizzata la invito a contattarci direttamente al +39 338 316 0091.'
    )
  }

  // 5. Carica contesto (singleton cache)
  const systemContext = await loadSystemContext().catch(
    () => 'Sei Fulgur AI, assistente di Fulgur Service.'
  )

  // 6. Chiamata DeepSeek con stream: true
  // AbortSignal.timeout: se DeepSeek non risponde entro 25s → 502 pulito, nessun hang
  const dsRes = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY ?? ''}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [{ role: 'system', content: systemContext }, ...messages],
      temperature: 0.3,
      max_tokens: 500,
      stream: true,
    }),
    signal: AbortSignal.timeout(25_000),
  }).catch(() => null)

  if (!dsRes?.ok || !dsRes.body) {
    return jsonError('Servizio AI non disponibile', 502)
  }

  // 7. Stream SSE verso il client + rilevamento lead
  const encoder = new TextEncoder()
  let accumulated = ''

  const readable = new ReadableStream({
    async start(controller) {
      const reader = dsRes.body!.getReader()
      const decoder = new TextDecoder()
      let lineBuffer = ''

      try {
        outerLoop: while (true) {
          const { done, value } = await reader.read()
          if (done) break

          // lineBuffer gestisce line split tra chunk diversi
          lineBuffer += decoder.decode(value, { stream: true })
          const lines = lineBuffer.split('\n')
          lineBuffer = lines.pop() ?? ''

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue
            const raw = line.slice(6).trim()
            if (raw === '[DONE]') break outerLoop

            try {
              const parsed = JSON.parse(raw) as DSChunk
              const token = parsed.choices[0]?.delta.content ?? ''
              if (token) {
                accumulated += token
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ t: token })}\n\n`))
              }
            } catch {
              // chunk malformato — skip
            }
          }
        }

        // Rilevamento lead dopo fine stream
        const match = LEAD_RE.exec(accumulated)
        if (match) {
          try {
            const leadData = JSON.parse(match[1]) as LeadPayload
            void fireLead(leadData) // fire-and-forget
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ lead: leadData })}\n\n`)
            )
          } catch {
            // JSON del lead malformato — ignora
          }
        }

        controller.enqueue(encoder.encode('data: [DONE]\n\n'))
        controller.close()
      } catch (err) {
        console.error('[Fulgur AI] Stream error:', err)
        controller.error(err)
      }
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}
