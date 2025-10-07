import React, { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next"; 
import SEO from '../components/SEO';
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
    <>
      <SEO 
        title="Contacto - LK Energy | Generadores Eléctricos"
        description="Contacta con LK Energy. Estamos aquí para ayudarte con tus necesidades de generadores eléctricos. Teléfono: 936 84 66 35. Horario: Lunes a Viernes 8:00-17:00."
        keywords="contacto LK Energy, generadores eléctricos contacto, presupuesto generadores, soporte técnico energía"
        canonical="/contacto"
        ogType="website"
      />
      
      <section className="contact-section">
        <div className="contact-form">
          {/* Schema.org markup para ContactPage */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contacto - LK Energy",
              "description": "Página de contacto de LK Energy para consultas sobre generadores eléctricos",
              "url": "https://lkenergy.com/contacto",
              "mainEntity": {
                "@type": "Organization",
                "name": "LK Energy",
                "telephone": "+34-936-84-66-35",
                "email": "info@lkenergy.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Carrer de la Font de la Parera, 5",
                  "addressLocality": "Sant Vicenç de Castellet",
                  "postalCode": "08295",
                  "addressCountry": "ES"
                },
                "openingHours": "Mo-Fr 08:00-17:00",
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=61577861317109",
                  "https://www.instagram.com/lkenergyofficial",
                  "https://www.linkedin.com/company/lk-energy/"
                ]
              }
            })}
          </script>

          <h1 className="seo-main-title" style={{display: 'none'}}>Contacto LK Energy - Fabricantes de Generadores Eléctricos</h1>
         
          <h2 dangerouslySetInnerHTML={{ __html: t("contact.title") }} />
          <p>{t("contact.intro")}</p>

          {/* Schema.org markup para ContactPoint */}
          <div itemScope itemType="https://schema.org/ContactPoint" style={{display: 'none'}}>
            <meta itemProp="telephone" content="+34-936-84-66-35" />
            <meta itemProp="email" content="info@lkenergy.com" />
            <meta itemProp="contactType" content="customer service" />
            <meta itemProp="areaServed" content="ES" />
            <meta itemProp="availableLanguage" content="Spanish,English" />
          </div>

          <form onSubmit={handleSubmit} itemScope itemType="https://schema.org/ContactPoint">
            <div className="input-row">
              <input
                type="text"
                name="nombre"
                placeholder={t("contact.form.name")}
                value={formData.nombre}
                onChange={handleChange}
                required
                aria-label="Nombre"
              />
              <input
                type="text"
                name="apellido"
                placeholder={t("contact.form.surname")}
                value={formData.apellido}
                onChange={handleChange}
                aria-label="Apellido"
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
                aria-label="Email"
              />
              <input
                type="text"
                name="telefono"
                placeholder={t("contact.form.phone")}
                value={formData.telefono}
                onChange={handleChange}
                aria-label="Teléfono"
              />
            </div>
            <textarea
              name="mensaje"
              placeholder={t("contact.form.message")}
              value={formData.mensaje}
              onChange={handleChange}
              required
              aria-label="Mensaje"
            ></textarea>
            <button type="submit" aria-label="Enviar formulario de contacto">
              {t("contact.form.submit")}
            </button>
          </form>
          
          {status && (
            <p className={`status-message ${status.includes('éxito') || status.includes('success') ? 'success' : 'error'}`}>
              {status}
            </p>
          )}
        </div>

        <div className="contact-info">
          {/* Schema.org markup para Organization */}
          <div itemScope itemType="https://schema.org/Organization" style={{display: 'none'}}>
            <meta itemProp="name" content="LK Energy" />
            <meta itemProp="telephone" content="+34-936-84-66-35" />
            <meta itemProp="email" content="info@lkenergy.com" />
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <meta itemProp="streetAddress" content="Carrer de la Font de la Parera, 5" />
              <meta itemProp="addressLocality" content="Sant Vicenç de Castellet" />
              <meta itemProp="postalCode" content="08295" />
              <meta itemProp="addressCountry" content="ES" />
            </div>
            <meta itemProp="openingHours" content="Mo-Fr 08:00-17:00" />
          </div>

          <h3 dangerouslySetInnerHTML={{ __html: t("contact.info.title") }} />
          <p dangerouslySetInnerHTML={{ __html: t("contact.info.address") }} />
          <p>
            <strong>{t("contact.info.call")}</strong> 
            <span itemProp="telephone">936 84 66 35</span>
          </p>
          <p dangerouslySetInnerHTML={{ __html: t("contact.info.schedule") }} />
          <h4>{t("contact.info.follow")}</h4>

          <div className="social-links" itemScope itemType="https://schema.org/Organization">
            <a 
              href="https://www.facebook.com/profile.php?id=61577861317109" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Síguenos en Facebook"
              itemProp="sameAs"
            >
              <FaFacebookSquare />
            </a>
            <a 
              href="https://www.instagram.com/lkenergyofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
              itemProp="sameAs"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.linkedin.com/company/lk-energy/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Síguenos en LinkedIn"
              itemProp="sameAs"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}