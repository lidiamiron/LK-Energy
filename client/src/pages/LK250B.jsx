import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./ProductGallerySection.css";
import { FaFilePdf } from "react-icons/fa";
import generatormain from "../assets/generator-main.png";
import generador1 from "../assets/generator-1.png";
import generador2 from "../assets/generator-2.png";
import generador3 from "../assets/generator-3.png";
import generador4 from "../assets/generator-4.png";
import SEO from '../components/SEO';

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
              <tr><td>{t('product.specifications.dimensions')}</td><td>3920 x 1180 x 1900 mm</td></tr>
              <tr><td>{t('product.specifications.weight')}</td><td>2750 kg</td></tr>
              <tr><td>{t('product.specifications.tank')}</td><td>24V</td></tr>
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
            <li>{t('product.specifications.engineDetails.model')} 6M16G250/5</li>
            <li>{t('product.specifications.engineDetails.cylinders')} 6</li>
            <li>{t('product.specifications.engineDetails.displacement')} 9.726 L</li>
            <li>{t('product.specifications.engineDetails.boreStroke')} 126 × 130 mm</li>
            <li>{t('product.specifications.engineDetails.compressionRatio')} 17:1</li>
            <li>{t('product.specifications.engineDetails.maxOilTemp')} 105 °C</li>
            <li>{t('product.specifications.engineDetails.aspiration')} {t('product.values.turbochargedAftercooled')}</li>
            <li>{t('product.specifications.engineDetails.oilPressure')} 1.3–5.8 bar</li>
            <li>{t('product.specifications.engineDetails.fuelSystem')} {t('product.values.mechanicalPump')}</li>
            <li>{t('product.specifications.engineDetails.airRestriction')}</li>
            <li className="sub-item">{t('product.specifications.engineDetails.dirtyFilter')} ≤70 mbar</li>
            <li className="sub-item">{t('product.specifications.engineDetails.cleanFilter')} ≤35 mbar</li>
            <li>{t('product.specifications.engineDetails.airFlow')} 14.4 m³/min</li>
            <li>{t('product.specifications.engineDetails.exhaustFlow')} 39.6.82 m³/min</li>
            <li>{t('product.specifications.engineDetails.exhaustTemp')} 600℃</li>
            <li>{t('product.specifications.engineDetails.ratedSpeed')} 1500 rpm</li>
            <li>{t('product.specifications.engineDetails.backPressure')} 60 mbar</li>
            <li>{t('product.specifications.engineDetails.enginePower')} 216 kW</li>
            <li>{t('product.specifications.engineDetails.coolantCapacity')} 13 L</li>
            <li>{t('product.specifications.engineDetails.governor')} {t('product.values.electronic')}</li>
            <li>{t('product.specifications.engineDetails.thermostat')} 71–82 °C</li>
            <li>{t('product.specifications.engineDetails.starter')} 24 V</li>
            <li>{t('product.specifications.engineDetails.maxTankTemp')} 105 °C</li>
            <li>{t('product.specifications.engineDetails.maxOilCapacity')} 22L</li>
            <li>{t('product.specifications.engineDetails.fuelConsumption')}</li>
            <li className="sub-item">{t('product.specifications.engineDetails.fullLoad')} 50.9 L/h</li>
            <li className="sub-item">{t('product.specifications.engineDetails.load75')} 38 L/h</li>
            <li className="sub-item">{t('product.specifications.engineDetails.load50')} 25.8 L/h</li>
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
          <a href="/docs/LK250B.pdf" className="pdf-icon"><FaFilePdf /></a>
          <a href="/docs/LK250B.pdf" target="_blank" rel="noreferrer">
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
const LK250B = () => {
  const { t } = useTranslation();
  const images = [generatormain, generador1, generador2, generador3, generador4];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const sectionRef = useRef(null);

  // SOLO SE AÑADE: Schema.org para Product
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Generador LK250B - LK Energy",
    "description": "Generador eléctrico LK250B de 250 KVA, 200 kW. Motor diésel 6 cilindros turboalimentado con aftercooling 6M16G250/5, 9.726L. Máxima potencia industrial con sistema 24V para aplicaciones de alta demanda.",
    "brand": {
      "@type": "Brand",
      "name": "LK Energy"
    },
    "model": "LK250B",
    "sku": "LK250B",
    "mpn": "LK250B",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Potencia",
        "value": "250 KVA / 200 kW"
      },
      {
        "@type": "PropertyValue",
        "name": "Tipo de Motor", 
        "value": "Diésel 6 Cilindros Turboalimentado con Aftercooling"
      },
      {
        "@type": "PropertyValue",
        "name": "Cilindros",
        "value": "6"
      },
      {
        "@type": "PropertyValue",
        "name": "Cilindrada",
        "value": "9.726 L"
      },
      {
        "@type": "PropertyValue",
        "name": "Compresión",
        "value": "17:1"
      },
      {
        "@type": "PropertyValue",
        "name": "Peso",
        "value": "2750 kg"
      },
      {
        "@type": "PropertyValue",
        "name": "Dimensiones",
        "value": "3920 x 1180 x 1900 mm"
      },
      {
        "@type": "PropertyValue",
        "name": "Modelo Motor",
        "value": "6M16G250/5"
      },
      {
        "@type": "PropertyValue",
        "name": "Sistema Arranque",
        "value": "24V"
      },
      {
        "@type": "PropertyValue",
        "name": "Potencia Motor",
        "value": "216 kW"
      },
      {
        "@type": "PropertyValue",
        "name": "Consumo Plena Carga",
        "value": "50.9 L/h"
      },
      {
        "@type": "PropertyValue",
        "name": "Flujo de Aire",
        "value": "14.4 m³/min"
      }
    ],
    "url": "https://lkenergy.com/productos/LK250B"
  };

  return (
    <>
      <SEO 
        title="Generador LK250B - 250 KVA | LK Energy | Motor 6 Cilindros 6M16G250/5"
        description="Generador eléctrico LK250B de 250 KVA, 200 kW. Motor diésel 6 cilindros turboalimentado con aftercooling 6M16G250/5, 9.726L. Consumo: 50.9 L/h a plena carga. Máxima potencia industrial."
        keywords="generador LK250B, LK250B 250 KVA, generador 6 cilindros, motor 6M16G250/5, LK Energy, 200 kW, cilindrada 9.726L, generador industrial máxima potencia"
        canonical="/productos/LK250B"
        ogType="product"
      />

      {/* SOLO SE AÑADE ESTE SCRIPT - No afecta diseño */}
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>

      <section className="gallery-section" ref={sectionRef}>
        {/* Galería e info técnica a la izquierda */}
        <div className="gallery-left">
          <img 
            src={selectedImage} 
            alt="Generador eléctrico LK250B - Vista principal" 
            className="main-image" 
          />
          <div className="thumbnails">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Generador LK250B - Vista ${index + 1}`}
                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <ProductSpecs />
        </div>

        {/* Parte derecha sticky */}
        <div className="gallery-right">
          <h1 className="product-title">LK250B</h1>
          <p className="product-subtitle">{t('product.info.subtitle')}</p>
          <ul className="product-info">
            <li>{t('product.info.features.prpPower')} 184kW / 230kVA</li>
            <li>{t('product.info.features.espPower')} 200kW / 250kVA</li>
            <li>{t('product.info.features.threePhase')}</li>
            <li>{t('product.info.features.weight')} 2750 Kg</li>
            <li>{t('product.info.features.engine')}</li>
            <li>{t('product.info.features.alternator')}</li>
            <li>{t('product.info.features.fuelCapacity')} 22 L</li>
          </ul>
          <a href="/Contacto" aria-label="Solicitar presupuesto para generador LK250B">
            <button className="product-button">{t('product.info.contactButton')}</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default LK250B;