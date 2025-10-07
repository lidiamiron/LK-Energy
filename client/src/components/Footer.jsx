import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import logo from "../assets/logo-white.svg"
import { FaFacebookSquare, FaInstagram , FaLinkedin } from "react-icons/fa";
import "../components/Footer.css"

const Footer = () => {
  const { t } = useTranslation();

  // Schema.org markup para Organization - SOLO SE AÑADE ESTO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LK Energy",
    "alternateName": "LK Energy Generadores Eléctricos",
    "url": "https://lkenergy.com",
    "logo": "https://lkenergy.com/logo-white.svg",
    "description": "LK Energy - Fabricantes de generadores eléctricos industriales. Soluciones energéticas confiables para empresas e industria.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carrer Tramuntana, 2 - PI Can Mascaró",
      "addressLocality": "La Palma de Cervelló",
      "postalCode": "08756",
      "addressRegion": "Barcelona",
      "addressCountry": "ES"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+34-936-84-66-35",
      "email": "info@lkenergy.com",
      "contactType": "customer service",
      "areaServed": "ES",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61577861317109",
      "https://www.instagram.com/lkenergyofficial/",
      "https://www.linkedin.com/company/lk-energy/"
    ]
  };

  return (
    <footer className="Lk-footer">
      {/* SOLO SE AÑADE ESTE SCRIPT - No afecta diseño */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <div className="footer-top">
        <div className="footer-brand">
          <a href="/" aria-label="LK Energy - Página de inicio">
            <img src={logo} alt="LK Energy - Generadores Eléctricos Industriales" />
          </a>
          <p className="tagline">{t('footer.tagline', 'GENERADORES ELECTRICOS INDUSTRIALES')}</p>
          <p className="live-session">{t('footer.slogan', 'Energía Confiable para tu Empresa')}</p>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">{t('footer.menu', 'Menu')}</h3>
          <ul className="footer-links">
            <a href="/" aria-label="Página de empresa">
              <li>{t('footer.company', 'Empresa')}</li>
            </a>
            <a href="/Productos" aria-label="Catálogo de productos">
              <li>{t('footer.products', 'Productos')}</li>
            </a>
            <a href="/Descargas" aria-label="Descargas y documentación">
              <li>{t('footer.downloads', 'Descargas')}</li>
            </a>
            <a href="/Contacto" aria-label="Página de contacto">
              <li>{t('footer.contact', 'Contacto')}</li>
            </a>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">{t('footer.followUs', 'Síguenos')}</h3>
          <ul className="footer-links ">
             <a 
               href="https://www.facebook.com/profile.php?id=61577861317109" 
               aria-label="Síguenos en Facebook"
               rel="noopener noreferrer"
             >
               <li><FaFacebookSquare className="redes" />Facebook</li>
             </a>
             <a 
               href="https://www.instagram.com/lkenergyofficial/" 
               aria-label="Síguenos en Instagram"
               rel="noopener noreferrer"
             >
               <li><FaInstagram className="redes" />Instagram</li>
             </a>
             <a 
               href="https://www.linkedin.com/company/lk-energy/?viewAsMember=true" 
               aria-label="Síguenos en LinkedIn"
               rel="noopener noreferrer"
             >
               <li><FaLinkedin className="redes"/>Linkedin</li>
             </a>
          </ul>
        </div>

        <div className="footer-column contact-column">
          <h3 className="footer-title">{t('footer.contact', 'Contacto')}</h3>
          <div className="contact-dirrection">
            <p itemScope itemType="https://schema.org/PostalAddress">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 
              <span itemProp="streetAddress">{t(' contact.info.address.line1', 'Carrer Tramuntana, 2 - PI Can Mascaró')}</span>
              <br />
              <span itemProp="addressLocality">{t('contact.info.address.line2', '08756 La Palma de Cervelló,')}</span>
              <br />
              <span itemProp="addressRegion">{t('contact.info.address.line3', 'Barcelona')}</span>
            </p>
            <p itemScope itemType="https://schema.org/ContactPoint">
              <FontAwesomeIcon icon={faPhone} /> 
              {t('footer.phone', 'Teléfono')}: 
              <span itemProp="telephone"> +34 936 84 66 35</span>
            </p>
            <p itemScope itemType="https://schema.org/ContactPoint">
              <FontAwesomeIcon icon={faEnvelope} /> 
              {t('footer.email', 'Email')}: 
              <span itemProp="email"> info@lkenergy.com</span>
            </p>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.697121812041!2d1.981724310188269!3d41.40238353290862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4853676ccf07f%3A0xe10f291b1c649cf3!2sC%2F%20Tramuntana%2C%202%2C%2008756%20Barcelona!5e0!3m2!1ses-419!2ses!4v1752828706942!5m2!1ses-419!2ses"
              width="100%" 
              height="150" 
              style={{border: 0}} 
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('footer.mapTitle', 'Ubicación de LK Energy en mapa - Carrer Tramuntana, 2 - PI Can Mascaró, Barcelona')}>
            </iframe>
          </div>
        </div>
     </div>
      
      <div className="footer-bottom">
        <div className="legal-links">
          <span>{t('footer.terms', 'Términos y condiciones de privacidad')}</span>
        </div>
        <div className="copyright">
          {t('footer.copyright', 'Copyright © {{year}} Power10. Todos los derechos reservados.', { 
            year: new Date().getFullYear() 
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;