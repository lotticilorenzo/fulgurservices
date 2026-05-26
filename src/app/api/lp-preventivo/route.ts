import { NextResponse } from 'next/server'
import { z } from 'zod'
import { getResendClient } from '@/lib/email/resend-client'
import { buildAdminEmailHtml, getAdminEmailSubject } from '@/lib/email/lp-admin-email'
import { buildAutoreplyHtml, getAutoreplySubject } from '@/lib/email/lp-autoreply-email'
import { appendLeadToSheet } from '@/lib/sheets/append-lead'

const ApiSchema = z.object({
  variant: z.enum(['uffici', 'alimentare']),
  nome: z.string().min(2).max(100),
  telefono: z.string().regex(/^[+]?[\d\s]{8,15}$/),
  email: z.string().email('Inserisci un indirizzo email valido').optional(),
  qualifier: z.string().min(1).max(100),
  gdpr: z.literal(true, { message: 'Spunta la casella per procedere' }),
  utm: z
    .object({
      source: z.string().optional(),
      medium: z.string().optional(),
      campaign: z.string().optional(),
      content: z.string().optional(),
      term: z.string().optional(),
    })
    .optional(),
  userAgent: z.string().max(500).optional(),
  website: z.string().max(0).optional(), // honeypot
})

type ParsedData = z.infer<typeof ApiSchema>

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms)
    ),
  ])
}

function getTimestampIT(): string {
  return new Intl.DateTimeFormat('it-IT', {
    timeZone: 'Europe/Rome',
    dateStyle: 'short',
    timeStyle: 'medium',
  }).format(new Date())
}

async function sendAdminEmail(data: ParsedData, timestamp: string): Promise<void> {
  const resend = getResendClient()
  const from = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'
  const to = process.env.RESEND_ADMIN_EMAIL ?? 'fulgurservice@gmail.com'
  const replyTo = process.env.RESEND_REPLY_TO ?? 'fulgurservice@gmail.com'

  const payload = {
    variant: data.variant,
    nome: data.nome,
    telefono: data.telefono,
    qualifier: data.qualifier,
    utm: data.utm,
    userAgent: data.userAgent,
    timestamp,
  }

  await resend.emails.send({
    from,
    to,
    replyTo,
    subject: getAdminEmailSubject(payload),
    html: buildAdminEmailHtml(payload),
  })
}

async function sendAutoreply(data: ParsedData): Promise<void> {
  if (!data.email) return
  const resend = getResendClient()
  const from = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'

  await resend.emails.send({
    from,
    to: data.email,
    subject: getAutoreplySubject(data.variant),
    html: buildAutoreplyHtml({
      variant: data.variant,
      nome: data.nome,
      email: data.email,
    }),
  })
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as unknown
    const data = ApiSchema.parse(body)

    // Honeypot: silently discard bot submissions
    if (data.website) {
      return NextResponse.json({ ok: true })
    }

    const timestamp = getTimestampIT()

    const results = await Promise.allSettled([
      withTimeout(sendAdminEmail(data, timestamp), 8000),
      withTimeout(sendAutoreply(data), 8000),
      withTimeout(
        appendLeadToSheet({
          variant: data.variant,
          nome: data.nome,
          telefono: data.telefono,
          email: data.email ?? '',
          qualifier: data.qualifier,
          utm: data.utm,
          userAgent: data.userAgent,
        }),
        8000
      ),
    ])

    const [adminEmailResult, , sheetResult] = results

    // Admin email is critical — fail the request if it fails
    if (adminEmailResult.status === 'rejected') {
      console.error('[lp-preventivo] admin email failed:', adminEmailResult.reason)
      return NextResponse.json(
        { ok: false, error: "Errore durante l'invio. Riprova o contattaci direttamente al 338 316 0091." },
        { status: 500 }
      )
    }

    // Sheet failure is non-critical — log and continue
    if (sheetResult.status === 'rejected') {
      console.error('[lp-preventivo] sheet append failed:', sheetResult.reason)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[lp-preventivo] error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: 'Dati non validi. Ricarica la pagina e riprova.' },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { ok: false, error: "Errore durante l'invio. Riprova o contattaci direttamente al 338 316 0091." },
      { status: 500 }
    )
  }
}
