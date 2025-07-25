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
            En LK ofrecemos soluciones energéticas confiables con más de 10 años de experiencia en el rubro. Atendemos a todo el país con generadores de alta calidad y soporte técnico especializado.
          </p>
          <ul className="why-lk-list">
            <li>🔧 Más de 10 años de experiencia</li>
            <li>🏢 Clientes en industria, comercio y hogar</li>
            <li>🚚 Cobertura nacional</li>
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
