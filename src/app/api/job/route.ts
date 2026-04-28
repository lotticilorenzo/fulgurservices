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

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass && smtpPass !== 'TBD_APP_PASSWORD_HERE') {
      // Pulizia password da eventuali spazi salvati male (comune con Gmail)
      const cleanPass = smtpPass.replace(/\s+/g, '');

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: { 
          user: smtpUser, 
          pass: cleanPass 
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
        from: `"Sito Web Fulgur" <${smtpUser}>`,
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

      await transporter.sendMail(mailOptions);
    } else {
      // Mock mode for development
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Candidatura inviata correttamente.' 
    }, { status: 200 });

  } catch (error: unknown) {
    console.error('Submission Error:', error);
    const errorMessage = error instanceof Error ? error.message : undefined
    
    // Gestione errori SMTP o parsing
    return NextResponse.json({ 
      success: false, 
      message: 'Si è verificato un errore nell\'elaborazione della richiesta. Riprova più tardi.',
      error: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    }, { status: 500 });
  }
}
