import { useState } from "react";


const data = [
  {
    title: "Equipo Comercial",
    content:
      "Nuestro equipo comercial ofrece un servicio totalmente personalizado, enfocado en satisfacer todas las necesidades de nuestros clientes en España, Portugal y Francia. Con amplia experiencia y compromiso, nuestros asesores se convierten en aliados estratégicos que impulsan nuestras soluciones energéticas. Son la principal fuerza comercial de LK Energy."
  },
  {
    title: "Logística y Gestión de Pedidos",
    content:
      "Trabajamos con las principales empresas de transporte para asegurar una cobertura logística completa en España, Portugal y Francia. Ofrecemos servicios de envío urgentes y regulares. Además, contamos con un sistema de gestión de pedidos 100% informatizado que permite rastrear cada envío en tiempo real, desde su recepción hasta la entrega."
  },
  {
    title: "Servicio Técnico y Repuestos",
    content:
      "Nuestro servicio técnico está formado por profesionales altamente cualificados, preparados para resolver cualquier consulta técnica relacionada con nuestros generadores industriales. Ofrecemos atención ágil y repuestos originales que garantizan la eficiencia y durabilidad de sus equipos."
  }
];

export default function Acordeon() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div className="accordion-item" key={index}>
         <button
  className={`accordion-title ${activeIndex === index ? "active" : ""}`}
  onClick={() => toggle(index)}
  aria-expanded={activeIndex === index}
  aria-controls={`accordion-content-${index}`}
>
  {item.title}
  <span aria-hidden="true">{activeIndex === index ? "-" : "+"}</span>
</button>
<div 
  id={`accordion-content-${index}`}
  className={`accordion-content ${activeIndex === index ? "open" : ""}`}
>
  <p>{item.content}</p>
</div>
        </div>
      ))}
    </div>
  );
}
