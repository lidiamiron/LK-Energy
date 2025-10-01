import React, { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next"; 
import "./Contacto.css";

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const [status, setStatus] = useState("");

  const EMAILJS_SERVICE_ID = 'service_3rop2or';
  const EMAILJS_TEMPLATE_ID = 'template_22jr6w7'; 
  const EMAILJS_PUBLIC_KEY = 'PCIrH42CmhrTcQhLc';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setStatus(t("contact.status.required"));
      return;
    }

    setStatus(t("contact.status.sending"));

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.nombre} ${formData.apellido}`.trim(),
          from_email: formData.email,
          phone: formData.telefono || 'No proporcionado',
          message: formData.mensaje
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus(t("contact.status.success"));
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        mensaje: ""
      });

    } catch (error) {
      if (error.text?.includes('template ID not found')) {
        setStatus(t("contact.status.config_error"));
      } else {
        setStatus(t("contact.status.error"));
      }
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-form">
        {/* 👇 renderiza HTML dentro del JSON (span, br) */}
        <h2 dangerouslySetInnerHTML={{ __html: t("contact.title") }} />
        <p>{t("contact.intro")}</p>

        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              name="nombre"
              placeholder={t("contact.form.name")}
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="apellido"
              placeholder={t("contact.form.surname")}
              value={formData.apellido}
              onChange={handleChange}
            />
          </div>
          <div className="input-row">
            <input
              type="email"
              name="email"
              placeholder={t("contact.form.email")}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="telefono"
              placeholder={t("contact.form.phone")}
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="mensaje"
            placeholder={t("contact.form.message")}
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">{t("contact.form.submit")}</button>
        </form>
        
        {status && (
          <p className={`status-message ${status.includes('éxito') || status.includes('success') ? 'success' : 'error'}`}>
            {status}
          </p>
        )}
      </div>

      <div className="contact-info">
        {/* 👇 también mantiene el span */}
        <h3 dangerouslySetInnerHTML={{ __html: t("contact.info.title") }} />
        <p dangerouslySetInnerHTML={{ __html: t("contact.info.address") }} />
        <p>
          <strong>{t("contact.info.call")}</strong> 936 84 66 35
        </p>
        <p dangerouslySetInnerHTML={{ __html: t("contact.info.schedule") }} />
        <h4>{t("contact.info.follow")}</h4>

        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=61577861317109" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
          <a href="https://www.instagram.com/lkenergyofficial" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/lk-energy/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
