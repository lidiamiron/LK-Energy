import React from "react";
import { useTranslation } from "react-i18next";
import "./WhyChooseLK.css";
import equipo from "../assets/equipoLK.jpg"

const WhyChooseLK = () => {
  const { t } = useTranslation();

  // SOLO SE AÑADE: Schema.org para AboutPage
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "¿Por qué elegir LK Energy?",
    "description": t('whyChooseLK.description', 'En LK ofrecemos soluciones energéticas confiables con más de 25 años de experiencia en el sector. Atendemos a todo el país con generadores de alta calidad y soporte técnico especializado.'),
    "mainEntity": {
      "@type": "Organization",
      "name": "LK Energy",
      "description": "Fabricantes de generadores eléctricos industriales con más de 25 años de experiencia",
      "areaServed": "España",
      "knowsAbout": [
        "CENTROS Y LOCALES COMERCIALES",
        "SECTOR INDUSTRIAL", 
        "TRATAMIENTO DE AGUAS",
        "CENTROS DE DATOS",
        "SECTOR SANITARIO",
        "INDUSTRIA PETROLERA",
        "SECTOR CONSTRUCCIÓN"
      ],
      "yearsOfOperation": 25
    }
  };

  return (
    <section className="why-lk-section">
      {/* SOLO SE AÑADE ESTE SCRIPT - No afecta diseño */}
      <script type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </script>

      <div className="why-lk-content">
        <div className="why-lk-text">
          <h2>{t('whyChooseLK.title', '¿Por qué elegir LK?')}</h2>
          <p>
            {t('whyChooseLK.description', 'En LK ofrecemos soluciones energéticas confiables con más de 25 años de experiencia en el sector. Atendemos a todo el país con generadores de alta calidad y soporte técnico especializado.')}
          </p>
          <ul className="why-lk-list">
            <li itemProp="knowsAbout">{t('whyChooseLK.sectors.commercial', 'CENTROS Y LOCALES COMERCIALES')}</li>
            <li itemProp="knowsAbout">{t('whyChooseLK.sectors.industrial', 'SECTOR INDUSTRIAL')}</li>
            <li itemProp="knowsAbout">{t('whyChooseLK.sectors.waterTreatment', 'TRATAMIENTO DE AGUAS')}</li>
            <li itemProp="knowsAbout">{t('whyChooseLK.sectors.dataCenters', 'CENTROS DE DATOS')}</li>
            <li itemProp="knowsAbout">{t('whyChooseLK.sectors.health', 'SECTOR SANITARIO')}</li>
            <li itemProp="knowsAbout">{t('whyChooseLK.sectors.oilIndustry', 'INDUSTRIA PETROLERA')}</li>
            <li itemProp="knowsAbout">{t('whyChooseLK.sectors.construction', 'SECTOR CONSTRUCCIÓN')}</li>
          </ul>
        </div>
        <div className="why-lk-image">
          <img
            src={equipo}
            alt={t('whyChooseLK.imageAlt', 'Equipo de trabajo de LK Energy - Especialistas en generadores eléctricos')}
            loading="lazy"
            width="600"
            height="400"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLK;