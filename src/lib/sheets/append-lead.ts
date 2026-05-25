import type { LeadPayload } from '@/lib/lp-data'

export async function appendLeadToSheet(
  payload: LeadPayload
): Promise<{ ok: boolean }> {
  try {
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    const token      = process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN

    if (!webhookUrl || !token) {
      console.error('[sheets] GOOGLE_SHEETS_WEBHOOK_URL o TOKEN non configurati')
      return { ok: false }
    }

    const controller = new AbortController()
    const timeout    = setTimeout(() => controller.abort(), 5000)

    const res = await fetch(`${webhookUrl}?token=${token}`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp:   new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' }),
        variant:     payload.variant,
        nome:        payload.nome,
        telefono:    payload.telefono,
        email:       payload.email,
        qualifier:   payload.qualifier,
        utmSource:   payload.utm?.source    ?? '',
        utmCampaign: payload.utm?.campaign  ?? '',
        utmContent:  payload.utm?.content   ?? '',
        userAgent:   payload.userAgent      ?? '',
      }),
      signal: controller.signal,
    })

    clearTimeout(timeout)
    const json = await res.json() as { ok: boolean }
    return { ok: json.ok === true }

  } catch (err) {
    console.error('[sheets] append failed:', err instanceof Error ? err.message : err)
    return { ok: false }
  }
}
