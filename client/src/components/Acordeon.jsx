import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../components/Acordeon.css";
import tratamientoAguas from "../assets/tratamientoaguas.jpg"
import centroDatos from "../assets/centrodedatos.png"
import sanitario from "../assets/sectordesalud.jpg"
import industriaPetroliera from "../assets/industriapetrolera.png"
import construccion from "../assets/sectordelaconstrucion.png"

export default function Acordeon() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    {
      title: t('accordion.whyChooseLK.title', '¿Por qué elegir LK?'),
      content: t('accordion.whyChooseLK.content', 'En LK ofrecemos soluciones energéticas confiables con más de 25 años de experiencia en el sector. Ofrecemos servicio técnico de calidad a todos nuestros distribuidores.'),
    },
    {
      title: t('accordion.energyEfficiency.title', 'Eficiencia Energética'),
      content: t('accordion.energyEfficiency.content', 'La industria moderna opera con altos niveles de eficiencia gracias a tecnologías avanzadas, procesos precisos y trabajadores altamente cualificados. Un factor clave en este rendimiento es el sistema de inventario Just in Time, donde cada componente llega a la línea de producción justo a tiempo para su ensamblaje. Para que este proceso funcione sin interrupciones, es esencial contar con un suministro de energía confiable que mantenga la producción activa incluso durante un apagón. En LK Energy proporcionamos la potencia que su operación necesita. Ofrecemos una amplia gama de soluciones energéticas de respaldo y emergencia, diseñadas para garantizar continuidad operativa en cualquier circumstancia.'),
    },
    {
      title: t('accordion.waterTreatment.title', 'Tratamiento de Aguas'),
      content: t('accordion.waterTreatment.content', 'La demanda de agua está creciendo rápidamente. El consumo de agua a nivel mundial se duplica cada 20 años. Por eso, los municipios y autoridades están enfocados en gestionar este recurso de forma más eficiente e inteligente, mediante la purificación y reutilización de aguas residuales. Hoy más que nunca, las plantas de tratamiento deben recolectar, transportar y procesar grandes volúmenes de agua, para luego devolverla al medio ambiente o reutilizarla en actividades como el regadío. Sin embargo, durante interrupciones prolongadas, un tratamiento insuficiente puede generar consecuencias ambientales y financieras graves. LK Energy ofrece soluciones energéticas confiables para el sector hídrico. La instalación de un grupo electrógeno permite mantener la operación continua de las plantas en situaciones críticas como apagones o cortes de energía, asegurando el suministro de agua a toda una ciudad incluso en circunstancias fuera de control.'),
      image: tratamientoAguas 
    },
    {
      title: t('accordion.dataCenter.title', 'Centro de Datos'),
      content: t('accordion.dataCenter.content', 'En LK Energy ofrecemos soluciones en generadores eléctricos diseñadas para garantizar un suministro estable y confiable incluso en condiciones exigentes. Nuestras tecnologías integran plataformas en la nube y virtualización en tiempo real para mejorar la continuidad operativa de nuestros clientes con equipos fáciles de mantener y preparados para funcionar en paralelo. Brindamos respaldo energético eficiente personalizado y con un diseño adaptado al entorno reduciendo el impacto visual y asegurando el máximo rendimiento en cada proyecto.'),
      image: centroDatos
    },
    {
      title: t('accordion.healthSector.title', 'Sector Sanitario'),
      content: t('accordion.healthSector.content', 'Cuando ocurre un apagón en centros de salud u hospitales, la vida de pacientes, personal y visitantes puede estar en riesgo. Durante una crisis, un hospital se convierte en un punto clave para la comunidad. Los visitantes no se van y muchas personas llegan buscando refugio, atención, comida y agua. Los generadores LK Energy ofrecen soluciones confiables para proteger cualquier edificio frente a apagones o estados de emergencia, asegurando el funcionamiento continuo y seguro de las instalaciones.'),
      image: sanitario
    },
    {
      title: t('accordion.oilIndustry.title', 'Industria Petrolera'),
      content: t('accordion.oilIndustry.content', 'La industria petrolera y gasista mueve diariamente proyectos multimillonarios que abarcan exploración, perforación, operación, refinación y distribución. Tras años de altos costos, enfrenta una fuerte presión por aumentar su eficiencia, productividad y reducir su impacto ambiental. LK Energy ofrece soluciones confiables en grupos electrógenos diseñados para soportar condiciones extremas. Nuestros equipos garantizan energía continua en entornos operativos exigentes, ideales para las necesidades del sector energético.'),
      image: industriaPetroliera

    },
    {
      title: t('accordion.constructionSector.title', 'Sector de la construcción'),
      content: t('accordion.constructionSector.content', 'La industria de la construcción es un sector competitivo, dinámico y esencial para el desarrollo económico. Impulsa el crecimiento a través de la construcción de viviendas, obras de ingeniería civil y proyectos comerciales, generando una gran cantidad de empleo en todos los países. LK Energy es el aliado ideal para cubrir todas las necesidades de suministro de energía en este sector. Ofrecemos generadores eléctricos específicos y personalizados para cada tipo de obra, adaptándonos a sus condiciones y requerimientos. Somos un proveedor enfocado en la innovación, con soluciones energéticas que marcan una diferencia real en el mercado. Nuestra experiencia incluye numerosos proyectos exitosos en el ámbito de la construcción a nivel global.'),
     image: construccion
    },
  ];

  // SOLO SE AÑADE: Schema.org FAQ markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.map((item, index) => ({
      "@type": "Question",
      "name": item.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.content
      }
    }))
  };

  return (
    <div className="accordion">
      {/* SOLO SE AÑADE ESTE SCRIPT - No afecta diseño */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

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
  <div className="accordion-inner">
    <p>{item.content}</p>
    {item.image && <img src={item.image} alt={item.title} loading="lazy" />}
  </div>
</div>
        </div>
      ))}
    </div>
  );
}