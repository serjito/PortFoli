import { createTransport } from 'nodemailer';

export interface EmailData {
  name: string;
  surname?: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<void> {
  const transporter = createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_TO, // tu email en Brevo (ej: sergiomdpro@gmail.com)
      pass: process.env.BREVO_KEY, // tu API Key SMTP de Brevo
    },
  });

  await transporter.sendMail({
    from: data.email,
    to: process.env.EMAIL_TO,
    subject: data.subject,
    text: `
      Nombre: ${data.name}
      Email: ${data.email}
      Mensaje: ${data.message}
    `,
  });

  transporter.close();
}
