import React from "react";
import "./WhyChooseLK.css";
import equipo from "../assets/equipoLK.jpg"

const WhyChooseLK = () => {
  return (
    <section className="why-lk-section">
      <div className="why-lk-content">
        <div className="why-lk-text">
          <h2>¿Por qué elegir LK?</h2>
          <p>
            En LK ofrecemos soluciones energéticas confiables con más de 25 años de experiencia en el sector. Atendemos a todo el país con generadores de alta calidad y soporte técnico especializado.
          </p>
          <ul className="why-lk-list">
            <li>CENTROS Y LOCALES COMERCIALES</li>
            <li>SECTOR INDUSTRIAL</li>
            <li>TRATAMIENTO DE AGUAS</li>
            <li>CENTROS DE DATOS</li>
            <li>SECTOR SANITARIO</li>
            <li>INDUSTRIA PETROLERA</li>
            <li>SECTOR CONSTRUCCIÓN</li>
          </ul>
        </div>
        <div className="why-lk-image">
          <img
            src= {equipo}
            alt="Equipo de trabajo de LK"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLK;
