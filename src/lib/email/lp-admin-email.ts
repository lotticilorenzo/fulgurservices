export interface AdminEmailPayload {
  variant: 'uffici' | 'alimentare'
  nome: string
  telefono: string
  qualifier: string
  utm?: {
    source?: string
    medium?: string
    campaign?: string
    content?: string
    term?: string
  }
  userAgent?: string
  timestamp: string
}

export function getAdminEmailSubject(payload: AdminEmailPayload): string {
  const tag = payload.variant === 'uffici' ? '[LP-UFFICI-LEAD]' : '[LP-ALIMENTARE-LEAD]'
  return `${tag} ${payload.nome} · ${payload.telefono} · ${payload.qualifier}`
}

export function buildAdminEmailHtml(payload: AdminEmailPayload): string {
  const isUffici = payload.variant === 'uffici'
  const subjectLabel = isUffici ? 'Pulizie Uffici' : 'Settore Alimentare'
  const lpPath = isUffici ? 'pulizie-uffici' : 'settore-alimentare'
  const qualifierLabel = isUffici ? 'Tipo di sede' : 'Tipo di attività'

  const utmRows = payload.utm
    ? Object.entries(payload.utm)
        .filter(([, v]) => v)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:5px 0; color:#3D6B61; font-size:12px; width:140px;">utm_${k}</td><td style="padding:5px 0; font-size:12px;">${v}</td></tr>`
        )
        .join('')
    : ''

  return `
    <div style="font-family:'DM Sans',Arial,sans-serif; color:#0F1F1A; max-width:600px; margin:0 auto; border:1px solid #e0ede9; border-radius:12px; overflow:hidden;">

      <div style="background-color:#4ECBA0; padding:24px 32px; text-align:center;">
        <h2 style="color:#ffffff; margin:0; font-size:20px; font-weight:700; letter-spacing:-0.5px;">
          ⚡ Nuovo Lead LP ${subjectLabel}
        </h2>
        <p style="color:rgba(255,255,255,0.85); margin-top:6px; font-size:13px;">
          Campagna Google Ads · fulgurservice.it/lp/${lpPath} · ${payload.timestamp}
        </p>
      </div>

      <div style="padding:28px 32px; background:#FFFFFF;">
        <h3 style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#7A9E97; border-bottom:1px solid #EDF5F3; padding-bottom:8px; margin-top:0;">
          Dati del lead
        </h3>
        <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">
          <tr><td style="padding:8px 0; color:#3D6B61; font-size:13px; width:140px;">Nome</td><td style="padding:8px 0; font-weight:600; font-size:14px;">${payload.nome}</td></tr>
          <tr><td style="padding:8px 0; color:#3D6B61; font-size:13px;">Telefono</td><td style="padding:8px 0;"><a href="tel:${payload.telefono}" style="color:#2A8C7A; font-weight:700; font-size:18px;">${payload.telefono}</a></td></tr>
          <tr><td style="padding:8px 0; color:#3D6B61; font-size:13px;">${qualifierLabel}</td><td style="padding:8px 0; font-size:14px;">${payload.qualifier}</td></tr>
        </table>

        <div style="background:#EDF5F3; border-radius:8px; padding:14px 16px; margin-bottom:20px;">
          <p style="margin:0; font-size:13px; color:#2A8C7A; font-weight:600;">
            Chiama entro 30 minuti per massimizzare la probabilità di chiusura.
          </p>
        </div>

        ${utmRows ? `
        <h3 style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#7A9E97; border-bottom:1px solid #EDF5F3; padding-bottom:8px;">
          Sorgente traffico
        </h3>
        <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">
          ${utmRows}
        </table>
        ` : ''}

        ${payload.userAgent ? `
        <p style="font-size:11px; color:#7A9E97; margin:0; word-break:break-all;">
          User Agent: ${payload.userAgent}
        </p>
        ` : ''}
      </div>

      <div style="background:#F7FBFA; padding:14px 32px; text-align:center; border-top:1px solid #EDF5F3;">
        <p style="font-size:11px; color:#7A9E97; margin:0; text-transform:uppercase; letter-spacing:1px;">
          Fulgur Service S.R.L. · P.IVA 03063010346 · Parma, Emilia-Romagna
        </p>
      </div>
    </div>
  `
}
