import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Solo permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      message: 'Method not allowed',
      allowed: ['POST']
    });
  }

  try {
    const { nombre, apellido, email, telefono, mensaje } = req.body;

    // Validar campos requeridos
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ 
        message: 'Faltan campos requeridos: nombre, email, mensaje' 
      });
    }

    // Enviar email
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'lidia@gh-power.com',
      subject: 'Nuevo mensaje de contacto',
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return res.status(500).json({ 
        message: 'Error enviando correo',
        error: error.message 
      });
    }

    return res.status(200).json({ 
      message: 'Correo enviado correctamente',
      data 
    });

  } catch (error) {
    console.error('Error general:', error);
    return res.status(500).json({ 
      message: 'Error interno del servidor',
      error: error.message 
    });
  }
}