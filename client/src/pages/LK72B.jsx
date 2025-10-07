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
              <tr><td>{t('product.specifications.dimensions')}</td><td>2470 x 1010 x 1250 mm</td></tr>
              <tr><td>{t('product.specifications.weight')}</td><td>1249 kg</td></tr>
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
            <li>{t('product.specifications.engineDetails.model')} 4M10G70/5</li>
            <li>{t('product.specifications.engineDetails.cylinders')} 4</li>
            <li>{t('product.specifications.engineDetails.displacement')} 4.087 L</li>
            <li>{t('product.specifications.engineDetails.boreStroke')} 105 × 118 mm</li>
            <li>{t('product.specifications.engineDetails.compressionRatio')} 17.5:1</li>
            <li>{t('product.specifications.engineDetails.maxOilTemp')} 110 °C</li>
            <li>{t('product.specifications.engineDetails.aspiration')} {t('product.values.turbocharged')}</li>
            <li>{t('product.specifications.engineDetails.oilPressure')} 1–5 bar</li>
            <li>{t('product.specifications.engineDetails.fuelSystem')} {t('product.values.mechanicalPump')}</li>
            <li>{t('product.specifications.engineDetails.airRestriction')}</li>
            <li className="sub-item">{t('product.specifications.engineDetails.dirtyFilter')} ≤60 mbar</li>
            <li className="sub-item">{t('product.specifications.engineDetails.cleanFilter')} ≤30 mbar</li>
            <li>{t('product.specifications.engineDetails.airFlow')} 3.97 m³/min</li>
            <li>{t('product.specifications.engineDetails.exhaustFlow')} 13.04 m³/min</li>
            <li>{t('product.specifications.engineDetails.exhaustTemp')} 570℃</li>
            <li>{t('product.specifications.engineDetails.ratedSpeed')} 1500 rpm</li>
            <li>{t('product.specifications.engineDetails.backPressure')} 50 mbar</li>
            <li>{t('product.specifications.engineDetails.enginePower')} 60 kW</li>
            <li>{t('product.specifications.engineDetails.coolantCapacity')} 8.5 L</li>
            <li>{t('product.specifications.engineDetails.governor')} {t('product.values.electronic')}</li>
            <li>{t('product.specifications.engineDetails.thermostat')} 72–82 °C</li>
            <li>{t('product.specifications.engineDetails.starter')} 12 V</li>
            <li>{t('product.specifications.engineDetails.maxTankTemp')} 105 °C</li>
            <li>{t('product.specifications.engineDetails.maxOilCapacity')} 14 L</li>
            <li>{t('product.specifications.engineDetails.fuelConsumption')}</li>
            <li className="sub-item">{t('product.specifications.engineDetails.fullLoad')} 15 L/h</li>
            <li className="sub-item">{t('product.specifications.engineDetails.load75')} 11.1 L/h</li>
            <li className="sub-item">{t('product.specifications.engineDetails.load50')} 7.7 L/h</li>
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
          <a href="/docs/LK72B.pdf" className="pdf-icon"><FaFilePdf /></a>
          <a href="/docs/LK72B.pdf" target="_blank" rel="noreferrer">
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
const LK72B = () => {
  const { t } = useTranslation();
  const images = [generatormain, generador1, generador2, generador3, generador4];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const sectionRef = useRef(null);

  // SOLO SE AÑADE: Schema.org para Product
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Generador LK72B - LK Energy",
    "description": "Generador eléctrico LK72B de 72 KVA, 57 kW. Motor diésel turboalimentado 4M10G70/5, 4 cilindros, 4.087L. Alta potencia para aplicaciones industriales exigentes.",
    "brand": {
      "@type": "Brand",
      "name": "LK Energy"
    },
    "model": "LK72B",
    "sku": "LK72B",
    "mpn": "LK72B",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Potencia",
        "value": "72 KVA / 57 kW"
      },
      {
        "@type": "PropertyValue",
        "name": "Tipo de Motor", 
        "value": "Diésel Turboalimentado"
      },
      {
        "@type": "PropertyValue",
        "name": "Cilindros",
        "value": "4"
      },
      {
        "@type": "PropertyValue",
        "name": "Cilindrada",
        "value": "4.087 L"
      },
      {
        "@type": "PropertyValue",
        "name": "Peso",
        "value": "1249 kg"
      },
      {
        "@type": "PropertyValue",
        "name": "Dimensiones",
        "value": "2470 x 1010 x 1250 mm"
      },
      {
        "@type": "PropertyValue",
        "name": "Modelo Motor",
        "value": "4M10G70/5"
      },
      {
        "@type": "PropertyValue",
        "name": "Consumo Plena Carga",
        "value": "15 L/h"
      }
    ],
    "url": "https://lkenergy.com/productos/LK72B"
  };

  return (
    <>
      <SEO 
        title="Generador LK72B - 72 KVA | LK Energy | Motor 4M10G70/5 Turboalimentado"
        description="Generador eléctrico LK72B de 72 KVA, 57 kW. Motor diésel turboalimentado 4M10G70/5, 4 cilindros, 4.087L. Consumo: 15 L/h a plena carga. Especificaciones completas."
        keywords="generador LK72B, LK72B 72 KVA, generador turboalimentado, motor 4M10G70/5, LK Energy, 57 kW, generador industrial alta potencia"
        canonical="/productos/LK72B"
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
            alt="Generador eléctrico LK72B - Vista principal" 
            className="main-image" 
          />
          <div className="thumbnails">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Generador LK72B - Vista ${index + 1}`}
                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <ProductSpecs />
        </div>

        {/* Parte derecha sticky */}
        <div className="gallery-right">
          <h1 className="product-title">LK72B</h1>
          <p className="product-subtitle">{t('product.info.subtitle')}</p>
          <ul className="product-info">
            <li>{t('product.info.features.prpPower')} 52kW / 65kVA</li>
            <li>{t('product.info.features.espPower')} 57kW / 72kVA</li>
            <li>{t('product.info.features.threePhase')}</li>
            <li>{t('product.info.features.weight')} 1249 Kg</li>
            <li>{t('product.info.features.engine')}</li>
            <li>{t('product.info.features.alternator')}</li>
            <li>{t('product.info.features.fuelCapacity')} 14 L</li>
          </ul>
          <a href="/Contacto" aria-label="Solicitar presupuesto para generador LK72B">
            <button className="product-button">{t('product.info.contactButton')}</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default LK72B;