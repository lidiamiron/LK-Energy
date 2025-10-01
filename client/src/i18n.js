import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar las traducciones
import en from './locales/en/translation.json';
import es from './locales/es/translation.json';
import fr from './locales/fr/translation.json';

// Configuración simple y directa
const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  },
  fr: {
    translation: fr
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Idioma por defecto
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    debug: true // Mantén esto para ver errores
  });

export default i18n;