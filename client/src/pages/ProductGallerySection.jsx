import React, { useState, useRef } from "react";
import "./ProductGallerySection.css";

import generatormain from "../assets/generator-main.png";
import generador1 from "../assets/generator-1.png";
import generador2 from "../assets/generator-2.png";
import generador3 from "../assets/generator-3.png";
import generador4 from "../assets/generator-4.png";

// Subcomponente para especificaciones
const ProductSpecs = () => {
  const [openSection, setOpenSection] = useState("estructura");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="specs-container">
      <h2 className="specs-title">Especificaciones Técnicas</h2>

      <div className="specs-block">
        <div className="specs-header" onClick={() => toggleSection("estructura")}>
          <h3>Estructura</h3>
          <span>{openSection === "estructura" ? "↑" : "↓"}</span>
        </div>
        {openSection === "estructura" && (
          <table className="specs-table">
            <tbody>
              <tr><td>Estructura:</td><td>Abierta</td></tr>
              <tr><td>Nivel de ruido (a 7 m):</td><td>80 dB</td></tr>
              <tr><td>Grado de aislamiento:</td><td>F</td></tr>
              <tr><td>Dimensiones:</td><td>1060 x 660 x 880 mm</td></tr>
              <tr><td>Peso neto:</td><td>220 kg</td></tr>
              <tr><td>Tomas:</td><td>16A 230V + 32A 230V</td></tr>
              <tr><td>Características:</td><td>Display + Kit de ruedas</td></tr>
            </tbody>
          </table>
        )}
      </div>

      <div className="specs-block">
        <div className="specs-header" onClick={() => toggleSection("caracteristicas")}>
          <h3>Características</h3>
          <span>{openSection === "caracteristicas" ? "↑" : "↓"}</span>
        </div>
        {openSection === "caracteristicas" && (
          <p className="specs-text">Información adicional sobre las características aquí.</p>
        )}
      </div>

      <div className="specs-block">
        <div className="specs-header" onClick={() => toggleSection("motor")}>
          <h3>Motor</h3>
          <span>{openSection === "motor" ? "↑" : "↓"}</span>
        </div>
        {openSection === "motor" && (
          <p className="specs-text">Detalles técnicos del motor aquí.</p>
        )}
      </div>

      <div className="docs-block">
        <h2 className="docs-title">Manuales y documentos</h2>
        <div className="doc-item">
          <a href="/docs/ficha-tecnica.pdf" target="_blank" rel="noreferrer">
            Ficha técnica
          </a>
        </div>
        <div className="doc-item">
          <a href="/docs/manual-usuario.pdf" target="_blank" rel="noreferrer">
            Manual de usuario
          </a>
        </div>
      </div>
    </div>
  );
};

// Componente principal
const ProductGallerySection = () => {
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
        <h2 className="product-title">KDG12EA | ABIERTO</h2>
        <p className="product-subtitle">Monofásico</p>
        <ul className="product-info">
          <li>⚡ 10.0kW / 10.0kVA</li>
          <li>🔌 Monofásico</li>
          <li>⚖️ 220 Kg</li>
          <li>✔️ Sistema AVR</li>
          <li>✔️ Arranque eléctrico fácil y rápido</li>
          <li>✔️ Alarma de aceite, panel Smartgen, ruedas</li>
          <li>✔️ Capacidad de combustible: 34 L</li>
        </ul>
        <button className="product-button">Encuentra un distribuidor →</button>
      </div>
    </section>
  );
};

export default ProductGallerySection;
