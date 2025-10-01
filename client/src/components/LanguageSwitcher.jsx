import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaTimes } from "react-icons/fa";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const getCurrentLanguageName = () => {
    return i18n.language === 'es' ? 'ES' : 'EN';
  };

  const getFullLanguageName = () => {
    return i18n.language === 'es' ? 'Español' : 'English';
  };

  return (
    <div className="language-switcher-fixed">
      {/* Botón flotante */}
      <button 
        className="language-trigger-fixed"
        onClick={toggleLanguageMenu}
        title={`Idioma actual: ${getFullLanguageName()}`}
      >
        <FaGlobe className="globe-icon-fixed" />
        <span className="current-language-fixed">{getCurrentLanguageName()}</span>
      </button>

      {/* Menú desplegable */}
      <div className={`language-dropdown-fixed ${isOpen ? 'open' : ''}`}>
       
        <div className="language-options">
          <button 
            onClick={() => changeLanguage('es')}
            className={`language-option-fixed ${i18n.language === 'es' ? 'active' : ''}`}
          >
            <span className="language-code-fixed">ES</span>
            <span className="language-name-fixed">Español</span>
          </button>
          <button 
            onClick={() => changeLanguage('en')}
            className={`language-option-fixed ${i18n.language === 'en' ? 'active' : ''}`}
          >
            <span className="language-code-fixed">EN</span>
            <span className="language-name-fixed">English</span>
          </button>
        </div>
      </div>

      {/* Overlay para cerrar al hacer clic fuera */}
      {isOpen && (
        <div 
          className="language-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}