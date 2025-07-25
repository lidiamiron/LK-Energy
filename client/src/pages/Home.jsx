import { useState, useEffect, useRef } from 'react';
import banner from "../assets/banner.svg";
import generador from "../assets/generador.png"; 
import { FaTools, FaHammer, FaShieldAlt } from "react-icons/fa";
import workerImage from "../assets/generadores.JPG";
import Acordeon from "../components/Acordeon";
import Config from "../assets/configuracion.jpg";
import Contact from "../pages/Contacto";
import "../pages/Home.css"
import FeaturedProducts from '../components/FeaturedProducts';
import WhyChooseLK from '../components/WhyChooseLK';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [textAnimationStarted, setTextAnimationStarted] = useState(false);
  const aboutSectionRef = useRef(null);
  const aboutLeftRef = useRef(null);

  useEffect(() => {
    // Iniciar animación del texto después de un pequeño delay
    const timer = setTimeout(() => {
      setTextAnimationStarted(true);
    }, 500);

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Calcular visibilidad
      if (aboutSectionRef.current && aboutLeftRef.current) {
        const sectionRect = aboutSectionRef.current.getBoundingClientRect();
        const elementRect = aboutLeftRef.current.getBoundingClientRect();
        
        setIsVisible(
          elementRect.bottom > sectionRect.top && 
          elementRect.top < sectionRect.bottom
        );
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Calcula el desplazamiento (máximo 100px)
  const offset = Math.min(scrollY * 0.5, 10);

  const cards = [
    {
      icon: <FaTools className="cardIcon" />,
      title: "Recambios",
      text: "Disponemos de los repuestos y recambios que necesitas para la reparación y el mantenimiento de generadores industriales, asegurando la máxima eficiencia y durabilidad de tus equipos.",
    },
    {
      icon: <FaHammer className="cardIcon" />,
      title: "Reparaciones y Revisiones",
      text: "Ofrecemos repuestos y recambios originales para todos los productos de la marca LKEnergy, con servicio de reparación y mantenimiento realizado por nuestros mecánicos oficiales certificados.",
    },
    {
      icon: <FaShieldAlt className="cardIcon" />,
      title: "Garantías",
      text: "Garantías completas para todos nuestros productos de hasta 3 años de duración.",
    },
  ];

  return (
    <main>
      {/* HEADER */}
      <section className="header">
        <div className="home-banner">
          <img className="banner" src={banner} alt="banner" />
          <div className="title-container">
            <div className="title-content">
              <h1 className="title">
                <span className={`title-line title-line-1 ${textAnimationStarted ? 'animate' : ''}`}>
                  GENERADORES
                </span>
                <br/>
                <span className={`title-line title-line-2 ${textAnimationStarted ? 'animate' : ''}`}>
                  ELECTRICOS
                </span>
                <br/>
                <span className={`title-line title-line-3 ${textAnimationStarted ? 'animate' : ''}`}>
                  INDUSTRIALES
                </span>
              </h1>
              <h2 className={`subtitle ${textAnimationStarted ? 'animate' : ''}`}>
                Energía Confiable para tu Empresa
              </h2>
              <button className={`presupuesto presupuesto1 ${textAnimationStarted ? 'animate' : ''}`}>Solicita tu presupuesto</button>
            </div>
            <div className="generador-image">
              <img className="generator" src={generador} alt="foto-generador" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" ref={aboutSectionRef}>
        <div 
          ref={aboutLeftRef}
          className="about-left" 
          style={{ 
            transform: `translateY(${offset}px)`,
            transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            opacity: isVisible ? 1 : 0,
            visibility: isVisible ? 'visible' : 'hidden'
          }}
        >
          <h2 className="about-title">SOBRE NOSOTROS</h2>
          <h1 className="about-heading">LK ENERGY</h1>
          <h2 className="about-subtitle">Te ofrecemos la solución que necesitas.</h2>
          <p className="contact-us"><a href="#">CONTACTANÓS</a></p>
        </div>

        <div className="about-right">
          <div className="about-description">
            <p>
              LK Energy es una empresa líder en el suministro y mantenimiento de generadores industriales de alto rendimiento. Nos especializamos en ofrecer soluciones energéticas para empresas de diversos sectores, brindando equipos confiables y servicios de mantenimiento especializados que garantizan la continuidad operativa y la eficiencia energética.
            </p>
          </div>
          <div className="about-image">
            <img src={workerImage} alt="Generadores industriales" />
          </div>
        </div>
      </section>

      {/* CARDS SECTION */}
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            {card.icon}
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
      
      {/* ACCORDION SECTION */}
      <section className="acordeon-section">
        <div className="img-acordeon">
          <img className="img-a" src={Config} alt="Power generator" />
        </div>
        <div className="accordion-box"><Acordeon /></div> 
      </section>


   
      
            <section className='featureProducts'> 
              <FeaturedProducts />
            </section>



      {/* CONTACT SECTION */}
      <section className="contact">
        <Contact />
      </section>
    </main>
  );
}