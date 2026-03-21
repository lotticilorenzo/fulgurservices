import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const ContactApiSchema = z.object({
  nome:      z.string().min(2),
  email:     z.string().email(),
  tel:       z.string().min(5),
  messaggio: z.string().min(10),
  website:   z.string().optional(), // Honeypot
})

export async function POST(req: Request) {
  try {
    const body = await req.json() as unknown
    const parsedData = ContactApiSchema.parse(body)

    // Honeypot: risposta success per non rivelare il filtro ai bot
    if (parsedData.website) {
      return NextResponse.json({ success: true })
    }

    const htmlBody = `
      <div style="font-family:'DM Sans',Arial,sans-serif; color:#0F1F1A; max-width:600px; margin:0 auto; border:1px solid #e0ede9; border-radius:12px; overflow:hidden;">
        <div style="background-color:#4ECBA0; padding:28px 32px; text-align:center;">
          <h2 style="color:#ffffff; margin:0; font-size:20px; font-weight:700;">
            ✉️ Nuovo Messaggio di Contatto
          </h2>
          <p style="color:rgba(255,255,255,0.85); margin-top:6px; font-size:13px;">
            Ricevuto tramite fulgurservice.it
          </p>
        </div>
        <div style="padding:32px; background:#FFFFFF;">
          <h3 style="font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#7A9E97; border-bottom:1px solid #EDF5F3; padding-bottom:8px; margin-top:0;">
            Mittente
          </h3>
          <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
            <tr><td style="padding:6px 0; color:#3D6B61; font-size:13px; width:100px;">Nome</td><td style="padding:6px 0; font-weight:600; font-size:14px;">${parsedData.nome}</td></tr>
            <tr><td style="padding:6px 0; color:#3D6B61; font-size:13px;">Email</td><td style="padding:6px 0;"><a href="mailto:${parsedData.email}" style="color:#2A8C7A;">${parsedData.email}</a></td></tr>
            <tr><td style="padding:6px 0; color:#3D6B61; font-size:13px;">Telefono</td><td style="padding:6px 0;"><a href="tel:${parsedData.tel}" style="color:#2A8C7A;">${parsedData.tel}</a></td></tr>
          </table>
          <h3 style="font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#7A9E97; border-bottom:1px solid #EDF5F3; padding-bottom:8px;">
            Messaggio
          </h3>
          <p style="font-size:15px; color:#0F1F1A; line-height:1.7; white-space:pre-line; margin:0;">${parsedData.messaggio}</p>
        </div>
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
      subject: `[Contatto Web] Messaggio da ${parsedData.nome}`,
      text:    `Da: ${parsedData.nome} (${parsedData.email}, ${parsedData.tel})\n\n${parsedData.messaggio}`,
      html:    htmlBody,
    }

    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (smtpUser && smtpPass && smtpPass !== 'mock_pass') {
      const transporter = nodemailer.createTransport({
        host:   process.env.SMTP_HOST ?? 'smtp.gmail.com',
        port:   Number(process.env.SMTP_PORT ?? 465),
        secure: true,
        auth: { user: smtpUser, pass: smtpPass },
      })
      await transporter.sendMail(mailOptions)
    } else {
      await new Promise((resolve) => setTimeout(resolve, 600))
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('API /contatti error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: 'Dati non validi.' }, { status: 400 })
    }
    return NextResponse.json({ success: false, error: 'Errore interno server.' }, { status: 500 })
  }
}
