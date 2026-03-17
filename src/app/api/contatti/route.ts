import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const ContactApiSchema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  tel: z.string().min(5),
  messaggio: z.string().min(10),
  website: z.string().optional(), // Honeypot
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsedData = ContactApiSchema.parse(body)

    // Honeypot check: if 'website' is filled, it's a bot.
    // We return success to fool the bot without sending the email.
    if (parsedData.website) {
      return NextResponse.json({ success: true })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'fulgurservice@gmail.com',
        pass: process.env.SMTP_PASS || 'mock_pass',
      },
    })

    const mailOptions = {
      from: `"Fulgur Service Web" <noreply@fulgurservice.it>`,
      to: 'fulgurservice@gmail.com',
      replyTo: parsedData.email,
      subject: `[Contatto Web] Messaggio da ${parsedData.nome}`,
      text: `
        Nuovo messaggio ricevuto dal form contatti generico:

        Nome: ${parsedData.nome}
        Email: ${parsedData.email}
        Telefono: ${parsedData.tel}

        Messaggio:
        ${parsedData.messaggio}
      `,
    }

    // DISATTIVATO PERCHÉ MANCA DOTENV - IN PRODUZIONE DECOMMENTARE QUESTO BLOCCO
    /* await transporter.sendMail(mailOptions) */
    console.log("Mock Email Contatti Inviata: \n", mailOptions.text)
    
    // Simula delay per UX loading
    await new Promise(res => setTimeout(res, 800))

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('API /contatti error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: 'Dati non validi.' }, { status: 400 })
    }
    return NextResponse.json({ success: false, error: 'Errore interno server.' }, { status: 500 })
  }
}
