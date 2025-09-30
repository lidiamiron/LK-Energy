import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { nombre, apellido, email, telefono, mensaje } = await request.json();

    // Validar campos requeridos
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos: nombre, email, mensaje' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'lidia@gh-power.com',
      subject: 'Nuevo mensaje de contacto',
      html: `
        <h2>Nuevo mensaje de contacto desde LK Energy</h2>
        <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
        <hr>
        <p><em>Enviado desde el formulario de contacto de LK Energy</em></p>
      `,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return NextResponse.json(
        { error: 'Error enviando correo: ' + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      message: 'Correo enviado correctamente',
      data 
    });

  } catch (error) {
    console.error('Error general:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor: ' + error.message },
      { status: 500 }
    );
  }
}

// Opcional: También puedes manejar otros métodos HTTP
export async function GET() {
  return NextResponse.json({ message: 'Método no permitido' }, { status: 405 });
}