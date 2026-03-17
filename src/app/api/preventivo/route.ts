import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Replica dello schema Zod lato server per evitare manipolazioni API (double validation)
const ApiSchema = z.object({
  servizi: z.array(z.string()).min(1),
  tipo_ambiente: z.string().min(1),
  metratura: z.number().or(z.string()).transform(v => Number(v) || 0),
  note_ambiente: z.string().optional(),
  frequenza: z.string().min(1),
  citta: z.string().min(2),
  indirizzo: z.string().optional(),
  nome: z.string().min(3),
  azienda: z.string().optional(),
  email: z.string().email(),
  tel: z.string().min(6),
  note: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Validazione robusta lato server
    const parsedData = ApiSchema.parse(body)

    // Setup Trasporto SMTP Nodemailer
    // Nota: in produzione servono credenziali in variabili d'ambiente (.env)
    // Per ora creiamo un account di dev ethereal / mock standard o configurazione neutra per compatibilità
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'fulgurservice@gmail.com',
        pass: process.env.SMTP_PASS || 'TBD_APP_PASSWORD_HERE', // Il cliente dovrà rimpiazzare questa env.
      },
    })

    const mailOptions = {
      from: `"Fulgur Service Web" <noreply@fulgurservice.it>`,
      to: 'fulgurservice@gmail.com',
      replyTo: parsedData.email,
      subject: `[Preventivo Web] Richiesta da ${parsedData.nome} - ${parsedData.azienda || 'Privato'}`,
      text: `
        Nuova richiesta di preventivo ricevuta dal sito fulgurservice.it:

        ===== CONTATTI =====
        Nome: ${parsedData.nome}
        Azienda: ${parsedData.azienda || 'Non specificata'}
        Email: ${parsedData.email}
        Telefono: ${parsedData.tel}
        Città: ${parsedData.citta}
        Indirizzo: ${parsedData.indirizzo || 'Non specificato'}

        ===== DETTAGLI RICHIESTA =====
        Tipo di ambiente: ${parsedData.tipo_ambiente}
        Metratura: ${parsedData.metratura} m²
        Frequenza desiderata: ${parsedData.frequenza}
        Servizi richiesti: ${parsedData.servizi.join(', ')}

        ===== NOTE AMBIENTE =====
        ${parsedData.note_ambiente || 'Nessuna nota sull\'ambiente inserita.'}

        ===== ALTRE NOTE / RICHIESTE =====
        ${parsedData.note || 'Nessuna nota aggiuntiva inserita.'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1A1A2E; max-width: 600px; border: 1px solid #e1e4e8; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0D1117; padding: 24px; text-align: center;">
            <h2 style="color: #4ECBA0; margin: 0;">Nuova Richiesta di Preventivo</h2>
            <p style="color: #F0F4F2; margin-top: 5px; font-size: 14px;">Dal sito fulgurservice.it</p>
          </div>
          <div style="padding: 32px;">
            <h3 style="border-bottom: 2px solid #4ECBA0; padding-bottom: 8px; margin-top: 0;">Riepilogo Contatti</h3>
            <p><strong>Nome:</strong> ${parsedData.nome}</p>
            <p><strong>Azienda:</strong> ${parsedData.azienda || '-'}</p>
            <p><strong>Email:</strong> <a href="mailto:${parsedData.email}">${parsedData.email}</a></p>
            <p><strong>Telefono:</strong> <a href="tel:${parsedData.tel}">${parsedData.tel}</a></p>
            <p><strong>Città / Indirizzo:</strong> ${parsedData.citta} - ${parsedData.indirizzo || ''}</p>

            <h3 style="border-bottom: 2px solid #4ECBA0; padding-bottom: 8px; margin-top: 32px;">Modulo Dettagli</h3>
            <p><strong>Tipo Ambiente:</strong> ${parsedData.tipo_ambiente}</p>
            <p><strong>Metratura:</strong> ${parsedData.metratura} m²</p>
            <p><strong>Frequenza:</strong> ${parsedData.frequenza}</p>
            <p><strong>Servizi Selezionati:</strong></p>
            <ul>
              ${parsedData.servizi.map(s => `<li>${s}</li>`).join('')}
            </ul>

            <h3 style="border-bottom: 2px solid #4ECBA0; padding-bottom: 8px; margin-top: 32px;">Note Aggiuntive</h3>
            <p><em>Ambiente:</em> ${parsedData.note_ambiente || 'Nessuna nota inserita.'}</p>
            <p><em>Generiche:</em> ${parsedData.note || 'Nessuna nota inserita.'}</p>
          </div>
        </div>
      `,
    }

    // DISATTIVATO PERCHÉ MANCA DOTENV - IN PRODUZIONE DECOMMENTARE QUESTO BLOCCO E CANCELLARE IL MOCK BELOW
    /* 
    await transporter.verify()
    await transporter.sendMail(mailOptions) 
    */

    // MOCK RESPONSE PER DEMO DEV SENZA CREDENZIALI GOOGLE REALI E EVITARE ERRORE
    console.log("Mock Email Inviata: \n", mailOptions.text)

    // Simuliamo un parsing server delay
    await new Promise(resolve => setTimeout(resolve, 800))

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('API /preventivo error:', error)
    // Zod validation fallback intercept
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: 'Dati form non validi. Ricarica e riprova.' }, { status: 400 })
    }
    return NextResponse.json({ success: false, error: 'Errore interno del server SMTP.' }, { status: 500 })
  }
}
