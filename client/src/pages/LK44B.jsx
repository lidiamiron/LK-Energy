import React, { useState, useRef } from "react";
import "./LK44B.css";
import { FaFilePdf } from "react-icons/fa";

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
              <tr><td>Estructura:</td><td>Cerrada</td></tr>
              <tr><td>Nivel de ruido (a 7 m):</td><td>75 dB</td></tr>
           
              <tr><td>Dimensiones:</td><td>2170 x 850 x 1075 mm</td></tr>
              <tr><td>Peso neto:</td><td>820 kg</td></tr>
              <tr><td>Motor de arranque</td><td>12V</td></tr>
             
            </tbody>
          </table>
        )}
      </div>
      <div className="specs-block">
        <div className="specs-header" onClick={() => toggleSection("motor")}>
          <h3>Motor</h3>
          <span>{openSection === "motor" ? "↑" : "↓"}</span>
        </div>
        {openSection === "motor" && (
  <ul className="specs-list">
    <li>Modelo: 4M06G44/5</li>
    <li>Temperatura máxima del aceite: 115 °C</li>
    <li>Aspiración: Turbocharged</li>
    <li>Presión del aceite (operación continua): 1–5 bar</li>
    <li>Sistema de combustible: Bomba mecánica</li>
    <li>Restricción de entrada de aire:</li>
    <li className="sub-item">Filtro sucio: ≤60 mbar</li>
    <li className="sub-item">Filtro limpio: ≤35 mbar</li>
    <li>Número de cilindros: 4</li>
    <li>Cilindrada: 2.3 L</li>
    <li>Diámetro x Carrera: 89 × 92 mm</li>
    <li>Relación de compresión: 17.5:1</li>
    <li>Flujo de aire de admisión: 2.1 m³/min</li>
    <li>Flujo de gases de escape: 7.26 m³/min</li>
    <li>Temperatura de gases de escape: 650℃</li>
    <li>Velocidad nominal: 1500 rpm</li>
    <li>Presión de contraflujo máxima (escape): 80 mbar</li>
    <li>Potencia bruta del motor: 37 kW</li>
    <li>Capacidad del refrigerante: 4.4 L</li>
    <li>Tipo de regulador (gobernador): Electrónico</li>
    <li>Rango de operación del termostato: 72–82 °C</li>
    <li>Motor de arranque: 12 V</li>
    <li>Temperatura máxima del tanque superior: 105 °C</li>
    <li>Consumo de combustible (a 1500 rpm):</li>
    <li className="sub-item">100% de carga (potencia principal): 9.5 L/h</li>
    <li className="sub-item">75% de carga: 7 L/h</li>
    <li className="sub-item">50% de carga: 4.7 L/h</li>
    <li>Capacidad máxima de aceite: 9.5 L</li>
  </ul>
)}
      </div>

      <div className="specs-block">
        <div className="specs-header" onClick={() => toggleSection("alternador")}>
          <h3>Alternador</h3>
          <span>{openSection === "alternador" ? "↑" : "↓"}</span>
        </div>
        {openSection === "alternador" && (
  <ul className="specs-list">
   
    <li>Tipo de cableado: Trifásico, 4 polos, tipo Y</li>
    <li>Tipo de excitador: Sin escobillas, autoexcitado</li>
    <li>Rodamiento: 1</li>
    <li>Regulación de voltaje: ±(0.25 % ~ 1 %)</li>
    <li>Factor de potencia: 0.8</li>
    <li>Grado de protección: IP23</li>
    <li>Frecuencia: 50 Hz</li>
    <li>Clase de aislamiento: H</li>
    <li>Velocidad máxima (overspeed): 2250 rpm</li>
    <li>Altitud: ≤1000 m</li>
    
  </ul>
)}
      </div>


      <div className="docs-block">
        <h2 className="docs-title">Manuales y documentos</h2>
        <div className="doc-item" ><a href="" className="pdf-icon"><FaFilePdf /></a>
          <a href="/docs/ficha-tecnica.pdf" target="_blank" rel="noreferrer" >
           
 <p className="descargas">Ficha técnica</p>
          </a>
        </div>
        <div className="doc-item"><a href="" className="pdf-icon"><FaFilePdf /></a>
          <a href="/docs/manual-usuario.pdf" target="_blank" rel="noreferrer" className="descargas">
          
            <p className="descargas">Manual de usuario</p>
          </a>
        </div>
      </div>
    </div>
  );
};

// Componente principal
const LK44B = () => {
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
        <h2 className="product-title">LK44B</h2>
        <p className="product-subtitle">Trifásico</p>
        <ul className="product-info">
          <li>⚡ Potencia PRP: 32kW / 40kVA</li>
          <li>⚡ Potencia ESP: 35kW / 44kVA</li>
          <li>⚡ 35kW / 44kVA</li>
          <li>🔌 Trifásico</li>
          <li>⚖️ 934 Kg</li>
          <li>✔️ Motor Baudoin</li>
          <li>✔️ Alternador LK Power</li>
          <li>✔️ Capacidad de combustible: 9.5 L</li>
        </ul>
        <a href="http://localhost:5173/Contacto"><button className="product-button">Contactanos→</button></a>
      </div>
    </section>
  );
};

export default LK44B;
