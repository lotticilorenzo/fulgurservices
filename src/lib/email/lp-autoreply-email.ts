export interface AutoreplyEmailPayload {
  variant: 'uffici' | 'alimentare'
  nome: string
  email: string
}

export function getAutoreplySubject(variant: 'uffici' | 'alimentare'): string {
  return variant === 'uffici'
    ? 'Abbiamo ricevuto la tua richiesta — Fulgur Service'
    : 'La tua richiesta è arrivata — Fulgur Service'
}

export function buildAutoreplyHtml(payload: AutoreplyEmailPayload): string {
  const isUffici = payload.variant === 'uffici'
  const contextLine = isUffici
    ? 'per il sopralluogo di fine cantiere'
    : 'per il sopralluogo dello studio'

  return `
    <div style="font-family:'DM Sans',Arial,sans-serif; color:#0F1F1A; max-width:560px; margin:0 auto; border:1px solid #e0ede9; border-radius:12px; overflow:hidden;">

      <div style="background-color:#4ECBA0; padding:24px 32px; text-align:center;">
        <h2 style="color:#ffffff; margin:0; font-size:18px; font-weight:700;">
          Fulgur Service
        </h2>
        <p style="color:rgba(255,255,255,0.9); margin-top:4px; font-size:13px;">
          Impresa di pulizie professionali · Parma
        </p>
      </div>

      <div style="padding:32px; background:#FFFFFF; line-height:1.6;">
        <p style="margin-top:0; font-size:15px;">Ciao ${payload.nome},</p>

        <p style="font-size:15px;">
          Abbiamo ricevuto la tua richiesta ${contextLine}.
          Ti richiamamo entro 24 ore lavorative al numero che hai indicato.
        </p>

        <p style="font-size:15px;">
          Se hai fretta o preferisci parlare subito, chiama direttamente:
        </p>

        <div style="text-align:center; margin:24px 0;">
          <a href="tel:+393383160091"
             style="display:inline-block; background:#4ECBA0; color:#ffffff; font-size:18px; font-weight:700; padding:14px 28px; border-radius:50px; text-decoration:none;">
            338 316 0091
          </a>
        </div>

        <p style="font-size:14px; color:#3D6B61;">
          Dal lunedì al venerdì, 8:00 – 18:00.
        </p>

        <p style="font-size:15px;">
          A presto,<br>
          <strong>Il team Fulgur Service · Parma</strong>
        </p>
      </div>

      <div style="background:#F7FBFA; padding:14px 32px; text-align:center; border-top:1px solid #EDF5F3;">
        <p style="font-size:11px; color:#7A9E97; margin:0;">
          Fulgur Service S.R.L. · P.IVA 03063010346 · Via Alfredo Veroni 22, 43122 Parma<br>
          <a href="https://www.fulgurservice.it" style="color:#2A8C7A;">www.fulgurservice.it</a>
        </p>
      </div>
    </div>
  `
}
