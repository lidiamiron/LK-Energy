import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./ProductGallerySection.css";
import { FaFilePdf } from "react-icons/fa";

import generatormain from "../assets/generator-main.png";
import generador1 from "../assets/generator-1.png";
import generador2 from "../assets/generator-2.png";
import generador3 from "../assets/generator-3.png";
import generador4 from "../assets/generator-4.png";

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
          <h3>{t('product.specifications.structure', 'Estructura')}</h3>
          <span>{openSection === "estructura" ? "↑" : "↓"}</span>
        </div>
        {openSection === "estructura" && (
          <table className="specs-table">
            <tbody>
              <tr><td>{t('product.specifications.structure', 'Estructura')}:</td><td>{t('product.values.open', 'Abierta')}</td></tr>
              <tr><td>{t('product.specifications.noiseLevel')}:</td><td>80 dB</td></tr>
              <tr><td>{t('product.specifications.insulationGrade', 'Grado de aislamiento')}:</td><td>F</td></tr>
              <tr><td>{t('product.specifications.dimensions')}:</td><td>1060 x 660 x 880 mm</td></tr>
              <tr><td>{t('product.specifications.weight')}:</td><td>220 kg</td></tr>
              <tr><td>{t('product.specifications.outlets', 'Tomas')}:</td><td>16A 230V + 32A 230V</td></tr>
              <tr><td>{t('product.specifications.characteristics')}:</td><td>{t('product.features.displayWheels', 'Display + Kit de ruedas')}</td></tr>
            </tbody>
          </table>
        )}
      </div>

      <div className="specs-block">
        <div className="specs-header" onClick={() => toggleSection("caracteristicas")}>
          <h3>{t('product.specifications.characteristics')}</h3>
          <span>{openSection === "caracteristicas" ? "↑" : "↓"}</span>
        </div>
        {openSection === "caracteristicas" && (
          <p className="specs-text">{t('product.specifications.additionalInfo', 'Información adicional sobre las características aquí.')}</p>
        )}
      </div>

      <div className="specs-block">
        <div className="specs-header" onClick={() => toggleSection("motor")}>
          <h3>{t('product.specifications.engine')}</h3>
          <span>{openSection === "motor" ? "↑" : "↓"}</span>
        </div>
        {openSection === "motor" && (
          <p className="specs-text">{t('product.specifications.engineDetails', 'Detalles técnicos del motor aquí.')}</p>
        )}
      </div>

      <div className="docs-block">
        <h2 className="docs-title">{t('product.documents.title')}</h2>
        <div className="doc-item">
          <a href="" className="pdf-icon"><FaFilePdf /></a>
          <a href="/docs/ficha-tecnica.pdf" target="_blank" rel="noreferrer">
            <p className="descargas">{t('product.documents.technicalSheet')}</p>
          </a>
        </div>
        <div className="doc-item">
          <a href="" className="pdf-icon"><FaFilePdf /></a>
          <a href="/docs/manual-usuario.pdf" target="_blank" rel="noreferrer" className="descargas">
            <p className="descargas">{t('product.documents.userManual')}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

// Componente principal
const ProductGallerySection = () => {
  const { t } = useTranslation();
  const images = [generatormain, generador1, generador2, generador3, generador4];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const sectionRef = useRef(null);

  return (
    <section className="gallery-section" ref={sectionRef}>
      {/* Galería e info técnica a la izquierda */}
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

      {/* Parte derecha sticky */}
      <div className="gallery-right">
        <h2 className="product-title">KDG12EA | {t('product.values.open', 'ABIERTO')}</h2>
        <p className="product-subtitle">{t('product.info.singlePhase', 'Monofásico')}</p>
        <ul className="product-info">
          <li>⚡ 10.0kW / 10.0kVA</li>
          <li>🔌 {t('product.info.singlePhase', 'Monofásico')}</li>
          <li>⚖️ 220 {t('product.info.kg', 'Kg')}</li>
          <li>✔️ {t('product.features.avrSystem', 'Sistema AVR')}</li>
          <li>✔️ {t('product.features.easyStart', 'Arranque eléctrico fácil y rápido')}</li>
          <li>✔️ {t('product.features.safetyFeatures', 'Alarma de aceite, panel Smartgen, ruedas')}</li>
          <li>✔️ {t('product.info.features.fuelCapacity')} 34 L</li>
        </ul>
        <button className="product-button">{t('product.info.findDistributor', 'Encuentra un distribuidor')} →</button>
      </div>
    </section>
  );
};

export default ProductGallerySection;