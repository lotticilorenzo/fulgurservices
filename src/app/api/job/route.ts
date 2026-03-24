import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const nome = formData.get('nome') as string;
    const email = formData.get('email') as string;
    const citta = formData.get('citta') as string;
    const lettera = formData.get('lettera') as string;
    const cvFile = formData.get('cv') as File | null;

    if (!nome || !email) {
      return NextResponse.json({ message: 'Nome e Email sono obbligatori.' }, { status: 400 });
    }

    // Configurazione Trasportatore Nodemailer
    // Nota: SMTP_USER e SMTP_PASS devono essere settati nel .env
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const attachments = [];
    if (cvFile && cvFile.size > 0) {
      const arrayBuffer = await cvFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: cvFile.name,
        content: buffer,
      });
    }

    const mailOptions = {
      from: `"Sito Web Fulgur" <${process.env.GMAIL_USER}>`,
      to: 'fulgurservice@gmail.com',
      replyTo: email,
      subject: `LAVORA CON NOI - Nuova Candidatura: ${nome}`,
      text: `
        Hai ricevuto una nuova candidatura dal modulo "Lavora con Noi" del sito web.

        DATI CANDIDATO:
        --------------------------------------------------
        Nome e Cognome: ${nome}
        Email: ${email}
        Città di Residenza: ${citta || 'Non specificata'}

        LETTERA DI PRESENTAZIONE / NOTE:
        --------------------------------------------------
        ${lettera || 'Nessuna nota aggiuntiva fornita.'}

        --------------------------------------------------
        L'eventuale CV (curriculum vitae) è allegato a questa email.
        Rispondi direttamente a questa email per contattare il candidato.
      `,
      attachments,
    };

    // Invio email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Candidatura inviata correttamente.' 
    }, { status: 200 });

  } catch (error: any) {
    console.error('Submission Error:', error);
    
    // Gestione errori SMTP o parsing
    return NextResponse.json({ 
      success: false, 
      message: 'Si è verificato un errore nell\'elaborazione della richiesta. Riprova più tardi.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}
