import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Replica schema Zod lato server — double validation contro manipolazioni API
const ApiSchema = z.object({
  servizi:       z.array(z.string()).min(1),
  tipo_ambiente: z.string().min(1),
  metratura:     z.number().or(z.string()).transform((v) => Number(v) || 0),
  note_ambiente: z.string().optional(),
  frequenza:     z.string().min(1),
  citta:         z.string().min(2),
  indirizzo:     z.string().optional(),
  nome:          z.string().min(3),
  azienda:       z.string().optional(),
  email:         z.string().email(),
  tel:           z.string().min(6),
  note:          z.string().optional(),
  website:       z.string().optional(), // Honeypot
})

export async function POST(req: Request) {
  try {
    const body = await req.json() as unknown
    const parsedData = ApiSchema.parse(body)

    // Honeypot: se compilato è un bot, rispondiamo success per non rivelare il filtro
    if (parsedData.website) {
      return NextResponse.json({ success: true })
    }

    // ─── Template email HTML — palette brand Fulgur Service ───
    const htmlBody = `
      <div style="font-family:'DM Sans',Arial,sans-serif; color:#0F1F1A; max-width:600px; margin:0 auto; border:1px solid #e0ede9; border-radius:12px; overflow:hidden;">

        <!-- HEADER -->
        <div style="background-color:#4ECBA0; padding:28px 32px; text-align:center;">
          <h2 style="color:#ffffff; margin:0; font-size:20px; font-weight:700; letter-spacing:-0.5px;">
            ⚡ Nuova Richiesta di Preventivo
          </h2>
          <p style="color:rgba(255,255,255,0.85); margin-top:6px; font-size:13px; letter-spacing:0.5px;">
            Ricevuta tramite fulgurservice.it
          </p>
        </div>

        <!-- BODY -->
        <div style="padding:32px; background:#FFFFFF;">

          <h3 style="font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#7A9E97; border-bottom:1px solid #EDF5F3; padding-bottom:8px; margin-top:0;">Contatti</h3>
          <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
            <tr><td style="padding:6px 0; color:#3D6B61; font-size:13px; width:140px;">Nome</td><td style="padding:6px 0; font-weight:600; font-size:14px;">${parsedData.nome}</td></tr>
            <tr><td style="padding:6px 0; color:#3D6B61; font-size:13px;">Azienda</td><td style="padding:6px 0; font-size:14px;">${parsedData.azienda || '—'}</td></tr>
            <tr><td style="padding:6px 0; color:#3D6B61; font-size:13px;">Email</td><td style="padding:6px 0;"><a href="mailto:${parsedData.email}" style="color:#2A8C7A;">${parsedData.email}</a></td></tr>
            <tr><td style="padding:6px 0; color:#3D6B61; font-size:13px;">Telefono</td><td style="padding:6px 0;"><a href="tel:${parsedData.tel}" style="color:#2A8C7A;">${parsedData.tel}</a></td></tr>
            <tr><td style="padding:6px 0; color:#3D6B61; font-size:13px;">Città</td><td style="padding:6px 0; font-size:14px;">${parsedData.citta}${parsedData.indirizzo ? ` — ${parsedData.indirizzo}` : ''}</td></tr>
          </table>

          <h3 style="font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#7A9E97; border-bottom:1px solid #EDF5F3; padding-bottom:8px;">Dettagli Richiesta</h3>
          <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
            <tr><td style="padding:6px 0; color:#3D6B61; font-size:13px; width:140px;">Tipo ambiente</td><td style="padding:6px 0; font-size:14px;">${parsedData.tipo_ambiente}</td></tr>
            <tr><td style="padding:6px 0; color:#3D6B61; font-size:13px;">Metratura</td><td style="padding:6px 0; font-size:14px;">${parsedData.metratura} m²</td></tr>
            <tr><td style="padding:6px 0; color:#3D6B61; font-size:13px;">Frequenza</td><td style="padding:6px 0; font-size:14px;">${parsedData.frequenza}</td></tr>
          </table>

          <h3 style="font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#7A9E97; border-bottom:1px solid #EDF5F3; padding-bottom:8px;">Servizi Selezionati</h3>
          <ul style="padding-left:20px; margin:0 0 24px 0;">
            ${parsedData.servizi.map((s) => `<li style="padding:4px 0; font-size:14px; color:#0F1F1A;">${s}</li>`).join('')}
          </ul>

          ${parsedData.note_ambiente || parsedData.note ? `
          <h3 style="font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#7A9E97; border-bottom:1px solid #EDF5F3; padding-bottom:8px;">Note</h3>
          ${parsedData.note_ambiente ? `<p style="font-size:14px; color:#3D6B61; margin:0 0 8px 0;"><strong>Ambiente:</strong> ${parsedData.note_ambiente}</p>` : ''}
          ${parsedData.note ? `<p style="font-size:14px; color:#3D6B61; margin:0;"><strong>Generiche:</strong> ${parsedData.note}</p>` : ''}
          ` : ''}

        </div>

        <!-- FOOTER -->
        <div style="background:#F7FBFA; padding:16px 32px; text-align:center; border-top:1px solid #EDF5F3;">
          <p style="font-size:11px; color:#7A9E97; margin:0; text-transform:uppercase; letter-spacing:1px;">
            Fulgur Service S.R.L. · P.IVA 03063010346 · Parma, Emilia-Romagna
          </p>
        </div>
      </div>
    `

    const mailOptions = {
      from:    `"Fulgur Service Web" <${process.env.SMTP_USER ?? 'fulgurservice@gmail.com'}>`,
      to:      'fulgurservice@gmail.com',
      replyTo: parsedData.email,
      subject: `[Preventivo] ${parsedData.nome} — ${parsedData.tipo_ambiente} a ${parsedData.citta}`,
      text:    `Preventivo da ${parsedData.nome} (${parsedData.email}) — ${parsedData.tipo_ambiente}, ${parsedData.metratura}m², ${parsedData.frequenza}. Tel: ${parsedData.tel}. Servizi: ${parsedData.servizi.join(', ')}.`,
      html:    htmlBody,
    }

    // ─── Invio reale se le credenziali sono configurate ───
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (smtpUser && smtpPass && smtpPass !== 'TBD_APP_PASSWORD_HERE') {
      const transporter = nodemailer.createTransport({
        host:   process.env.SMTP_HOST ?? 'smtp.gmail.com',
        port:   Number(process.env.SMTP_PORT ?? 465),
        secure: true,
        auth: { user: smtpUser, pass: smtpPass },
      })
      await transporter.verify()
      await transporter.sendMail(mailOptions)
    } else {
      // Modalità sviluppo — simula delay senza inviare
      await new Promise((resolve) => setTimeout(resolve, 600))
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('API /preventivo error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Dati del form non validi. Ricarica la pagina e riprova.' },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { success: false, error: 'Errore durante l\'invio. Riprova o contattaci direttamente.' },
      { status: 500 }
    )
  }
}
