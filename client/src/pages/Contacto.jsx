import React, { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../pages/Contacto.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Enviando...");

  try {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const apiUrl = isDevelopment 
      ? 'http://localhost:3000/api/send-email'  // Next.js dev server
      : '/api/send-email';                      // Producción

    console.log('🔄 Enviando datos a:', apiUrl);
    
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log('📩 Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('✅ Success:', result);

    setStatus("¡Mensaje enviado con éxito!");
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      mensaje: ""
    });
    
  } catch (error) {
    console.error('❌ Error completo:', error);
    setStatus(`Error: ${error.message}`);
  }
};
  return (
    <section className="contact-section">
      <div className="contact-form">
        <h2>
          ¡HABLEMOS <span> DE ENERGÍA!</span>
        </h2>
        <p>
          ¿Estás buscando un generador eléctrico y no sabes cuál es el ideal para ti? 
          En LK Generadores estamos para ayudarte. Déjanos tus datos y te contactaremos 
          con asesoría personalizada o un presupuesto a medida!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
          </div>
          <div className="input-row">
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="telefono"
              placeholder="Telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">ENVIAR</button>
        </form>
        {status && <p>{status}</p>}
      </div>

      <div className="contact-info">
        <h3>
          Información de <span>Contacto</span>
        </h3>
        <p>
          Carrer Tramuntana, 2 - PI Can Mascaró <br />
          08756 La Palma de Cervelló,<br /> Barcelona
        </p>
        <p>
          <strong>Llámanos</strong> 936 84 66 35
        </p>
        <p>
          Estamos abiertos de Lunes a Viernes<br />
          09:00 - 18:30
        </p>
        <h4>Follow Us</h4>

        <div className="social-links">
          <a
            href="https://www.facebook.com/profile.php?id=61577861317109"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.instagram.com/lkenergyofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/lk-energy/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
