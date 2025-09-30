import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { nombre, apellido, email, telefono, mensaje } = req.body;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',       // remitente verificado en Resend
      to: 'lidia@gh-power.com',      // tu email de recepción
      subject: 'Nuevo mensaje de contacto',
      html: `
        <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje}</p>
      `,
    });

    return res.status(200).json({ message: 'Correo enviado' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error enviando correo' });
  }
}
