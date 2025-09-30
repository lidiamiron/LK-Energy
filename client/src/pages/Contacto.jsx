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
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("¡Mensaje enviado con éxito!");
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          mensaje: ""
        });
      } else {
        setStatus("Error al enviar el mensaje.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error al enviar el mensaje.");
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
