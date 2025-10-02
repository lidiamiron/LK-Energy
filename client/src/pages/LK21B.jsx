import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import { FaFilePdf } from "react-icons/fa";

import generatormain from "../assets/generator-main.png";
import generador1 from "../assets/generator-1.png";
import generador2 from "../assets/generator-2.png";
import generador3 from "../assets/generator-3.png";
import generador4 from "../assets/generator-4.png";
import "./ProductGallerySection.css";
// Subcomponente para especificaciones
const ProductSpecs = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState("estructura");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="specs-container">
      <h2 className="specs-title">{t('product.specifications.title')}</h2>

      <div className="specs-block">
        <div className="specs-header" onClick={() => toggleSection("estructura")}>
          <h3>{t('product.specifications.characteristics')}</h3>
          <span>{openSection === "estructura" ? "↑" : "↓"}</span>
        </div>
        {openSection === "estructura" && (
          <table className="specs-table">
            <tbody>
              <tr><td>{t('product.specifications.type')}</td><td>{t('product.specifications.closed')}</td></tr>
              <tr><td>{t('product.specifications.noiseLevel')}</td><td>75 dB</td></tr>
              <tr><td>{t('product.specifications.dimensions')}</td><td>1970 x 800 x 1075 mm</td></tr>
              <tr><td>{t('product.specifications.weight')}</td><td>700 kg</td></tr>
              <tr><td>{t('product.specifications.tank')}</td><td>12V</td></tr>
            </tbody>
          </table>
        )}
      </div>

      <div className="specs-block">
        <div className="specs-header" onClick={() => toggleSection("motor")}>
          <h3>{t('product.specifications.engine')}</h3>
          <span>{openSection === "motor" ? "↑" : "↓"}</span>
        </div>
        {openSection === "motor" && (
          <ul className="specs-list">
            <li>{t('product.specifications.engineDetails.model')} 4M06G20/5</li>
            <li>{t('product.specifications.engineDetails.cylinders')} 4</li>
            <li>{t('product.specifications.engineDetails.displacement')} 2.3 L</li>
            <li>{t('product.specifications.engineDetails.boreStroke')} 89 × 92 mm</li>
            <li>{t('product.specifications.engineDetails.compressionRatio')} 17.5:1</li>
            <li>{t('product.specifications.engineDetails.maxOilTemp')} 115 °C</li>
            <li>{t('product.specifications.engineDetails.aspiration')} {t('product.values.natural')}</li>
            <li>{t('product.specifications.engineDetails.oilPressure')} 1–5 bar</li>
            <li>{t('product.specifications.engineDetails.fuelSystem')} {t('product.values.mechanicalPump')}</li>
            <li>{t('product.specifications.engineDetails.airRestriction')}</li>
            <li className="sub-item">{t('product.specifications.engineDetails.dirtyFilter')} ≤60 mbar</li>
            <li className="sub-item">{t('product.specifications.engineDetails.cleanFilter')} ≤35 mbar</li>
            <li>{t('product.specifications.engineDetails.airFlow')} 1.38 m³/min</li>
            <li>{t('product.specifications.engineDetails.exhaustFlow')} 4.3 m³/min</li>
            <li>{t('product.specifications.engineDetails.exhaustTemp')} {t('product.values.toBeDetermined')}</li>
            <li>{t('product.specifications.engineDetails.ratedSpeed')} 1500 rpm</li>
            <li>{t('product.specifications.engineDetails.backPressure')} 80 mbar</li>
            <li>{t('product.specifications.engineDetails.enginePower')} 18 kW</li>
            <li>{t('product.specifications.engineDetails.coolantCapacity')} 3.2 L</li>
            <li>{t('product.specifications.engineDetails.governor')} {t('product.values.electronic')}</li>
            <li>{t('product.specifications.engineDetails.thermostat')} 72–82 °C</li>
            <li>{t('product.specifications.engineDetails.starter')} 12 V</li>
            <li>{t('product.specifications.engineDetails.maxTankTemp')} 105 °C</li>
            <li>{t('product.specifications.engineDetails.maxOilCapacity')} 9.5 L</li>
            <li>{t('product.specifications.engineDetails.fuelConsumption')}</li>
            <li className="sub-item">{t('product.specifications.engineDetails.fullLoad')} 4.7 L/h</li>
            <li className="sub-item">{t('product.specifications.engineDetails.load75')} 3.6 L/h</li>
            <li className="sub-item">{t('product.specifications.engineDetails.load50')} 2.6 L/h</li>
          </ul>
        )}
      </div>

      <div className="specs-block">
        <div className="specs-header" onClick={() => toggleSection("alternador")}>
          <h3>{t('product.specifications.alternator')}</h3>
          <span>{openSection === "alternador" ? "↑" : "↓"}</span>
        </div>
        {openSection === "alternador" && (
          <ul className="specs-list">
            <li>{t('product.specifications.alternatorDetails.wiring')} {t('product.values.threePhase')}</li>
            <li>{t('product.specifications.alternatorDetails.exciter')} {t('product.values.brushless')}</li>
            <li>{t('product.specifications.alternatorDetails.bearing')} 1</li>
            <li>{t('product.specifications.alternatorDetails.voltageReg')} ±(0.25 % ~ 1 %)</li>
            <li>{t('product.specifications.alternatorDetails.powerFactor')} 0.8</li>
            <li>{t('product.specifications.alternatorDetails.protection')} IP23</li>
            <li>{t('product.specifications.alternatorDetails.frequency')} 50 Hz</li>
            <li>{t('product.specifications.alternatorDetails.insulation')} H</li>
            <li>{t('product.specifications.alternatorDetails.maxSpeed')} 2250 rpm</li>
            <li>{t('product.specifications.alternatorDetails.altitude')} ≤1000 m</li>
          </ul>
        )}
      </div>

      <div className="docs-block">
        <h2 className="docs-title">{t('product.documents.title')}</h2>
        <div className="doc-item">
          <a href="/docs/LK21B.pdf" className="pdf-icon"><FaFilePdf /></a>
          <a href="/docs/LK21B.pdf" target="_blank" rel="noreferrer">
            <p className="descargas">{t('product.documents.technicalSheet')}</p>
          </a>
        </div>
        <div className="doc-item">
          <a href="/docs/MANUAL USUARIO ESP LK.pdf" className="pdf-icon"><FaFilePdf /></a>
          <a href="/docs/MANUAL USUARIO ESP LK.pdf" target="_blank" rel="noreferrer" className="descargas">
            <p className="descargas">{t('product.documents.userManual')}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

// Componente principal
const LK21B = () => {
  const { t } = useTranslation();
  const images = [generatormain, generador1, generador2, generador3, generador4];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const sectionRef = useRef(null);

  // Detectar si es mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="gallery-section" ref={sectionRef}>
      {/* En mobile, la info va primero */}
      {isMobile && (
        <div className="gallery-right">
          <h2 className="product-title">LK21B</h2>
          <p className="product-subtitle">{t('product.info.subtitle')}</p>
          <ul className="product-info">
            <li>{t('product.info.features.prpPower')} 15kW / 19kVA</li>
            <li>{t('product.info.features.espPower')} 17kW / 21kVA</li>
            <li>{t('product.info.features.threePhase')}</li>
            <li>{t('product.info.features.weight')} 700 Kg</li>
            <li>{t('product.info.features.engine')}</li>
            <li>{t('product.info.features.alternator')}</li>
            <li>{t('product.info.features.fuelCapacity')} 9.5 L</li>
          </ul>
          <a href="http://localhost:5173/Contacto">
            <button className="product-button">{t('product.info.contactButton')}</button>
          </a>
        </div>
      )}

      {/* Galería */}
      <div className="gallery-left">
        <img src={selectedImage} alt="Principal" className="main-image" />
        <div className="thumbnails">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Miniatura ${index + 1}`}
              className={`thumbnail ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <ProductSpecs />
      </div>

      {/* En desktop, la info va a la derecha */}
      {!isMobile && (
        <div className="gallery-right">
          <h2 className="product-title">LK21B</h2>
          <p className="product-subtitle">{t('product.info.subtitle')}</p>
          <ul className="product-info">
            <li>{t('product.info.features.prpPower')} 15kW / 19kVA</li>
            <li>{t('product.info.features.espPower')} 17kW / 21kVA</li>
            <li>{t('product.info.features.threePhase')}</li>
            <li>{t('product.info.features.weight')} 700 Kg</li>
            <li>{t('product.info.features.engine')}</li>
            <li>{t('product.info.features.alternator')}</li>
            <li>{t('product.info.features.fuelCapacity')} 9.5 L</li>
          </ul>
          <a href="http://localhost:5173/Contacto">
            <button className="product-button">{t('product.info.contactButton')}</button>
          </a>
        </div>
      )}
    </section>
  );
};

export default LK21B;