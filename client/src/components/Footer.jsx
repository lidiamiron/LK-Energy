import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import logo from "../assets/logo-white.svg"
import { FaFacebookSquare, FaInstagram , FaLinkedin } from "react-icons/fa";
import "../components/Footer.css"

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="Lk-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="/Home"><img src={logo} alt="Logo LK Energy" /></a>
          <p className="tagline">{t('footer.tagline', 'GENERADORES ELECTRICOS INDUSTRIALES')}</p>
          <p className="live-session">{t('footer.slogan', 'Energía Confiable para tu Empresa')}</p>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">{t('footer.menu', 'Menu')}</h3>
          <ul className="footer-links">
            <a href="/"><li>{t('footer.company', 'Empresa')}</li></a>
            <a href="/Productos"><li>{t('footer.products', 'Productos')}</li></a>
            <a href="/Descargas"><li>{t('footer.downloads', 'Descargas')}</li></a>
            <a href="/Contacto"><li>{t('footer.contact', 'Contacto')}</li></a>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">{t('footer.followUs', 'Síguenos')}</h3>
          <ul className="footer-links ">
             <a href="https://www.facebook.com/profile.php?id=61577861317109"><li><FaFacebookSquare className="redes" />Facebook</li></a>
             <a href="https://www.instagram.com/lkenergyofficial/"><li><FaInstagram className="redes" />Instagram</li></a>
             <a href="https://www.linkedin.com/company/lk-energy/?viewAsMember=true"><li><FaLinkedin className="redes"/>Linkedin</li></a>
          </ul>
        </div>

        <div className="footer-column contact-column">
          <h3 className="footer-title">{t('footer.contact', 'Contacto')}</h3>
          <div className="contact-dirrection">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 
              {t(' contact.info.address.line1', 'Carrer Tramuntana, 2 - PI Can Mascaró')}
              <br />
              {t('contact.info.address.line2', '08756 La Palma de Cervelló,')}
              <br />
              {t('contact.info.address.line3', 'Barcelona')}
            </p>
            <p><FontAwesomeIcon icon={faPhone} /> {t('footer.phone', 'Teléfono')}: +34 936 84 66 35 </p>
            <p><FontAwesomeIcon icon={faEnvelope} /> {t('footer.email', 'Email')}: info@lkpower.es</p>
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
              title={t('footer.mapTitle', 'Ubicación en mapa')}>
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