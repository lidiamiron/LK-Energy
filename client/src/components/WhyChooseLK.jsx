import React from "react";
import { useTranslation } from "react-i18next";
import "./WhyChooseLK.css";
import equipo from "../assets/equipoLK.jpg"

const WhyChooseLK = () => {
  const { t } = useTranslation();

  return (
    <section className="why-lk-section">
      <div className="why-lk-content">
        <div className="why-lk-text">
          <h2>{t('whyChooseLK.title', '¿Por qué elegir LK?')}</h2>
          <p>
            {t('whyChooseLK.description', 'En LK ofrecemos soluciones energéticas confiables con más de 25 años de experiencia en el sector. Atendemos a todo el país con generadores de alta calidad y soporte técnico especializado.')}
          </p>
          <ul className="why-lk-list">
            <li>{t('whyChooseLK.sectors.commercial', 'CENTROS Y LOCALES COMERCIALES')}</li>
            <li>{t('whyChooseLK.sectors.industrial', 'SECTOR INDUSTRIAL')}</li>
            <li>{t('whyChooseLK.sectors.waterTreatment', 'TRATAMIENTO DE AGUAS')}</li>
            <li>{t('whyChooseLK.sectors.dataCenters', 'CENTROS DE DATOS')}</li>
            <li>{t('whyChooseLK.sectors.health', 'SECTOR SANITARIO')}</li>
            <li>{t('whyChooseLK.sectors.oilIndustry', 'INDUSTRIA PETROLERA')}</li>
            <li>{t('whyChooseLK.sectors.construction', 'SECTOR CONSTRUCCIÓN')}</li>
          </ul>
        </div>
        <div className="why-lk-image">
          <img
            src={equipo}
            alt={t('whyChooseLK.imageAlt', 'Equipo de trabajo de LK')}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLK;