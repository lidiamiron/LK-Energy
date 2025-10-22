import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import banner from "../assets/banner3.png";
import generador from "../assets/generador-ai.png"; 
import { FaTools, FaHammer, FaShieldAlt } from "react-icons/fa";
import workerImage from "../assets/generadores.mp4";
import Acordeon from "../components/Acordeon";
import Config from "../assets/configuracion.png";
import Contact from "../pages/Contacto";
import "../pages/Home.css"
import FeaturedProducts from '../components/FeaturedProducts';
import SEO from '../components/SEO';

export default function Home() {
  const { t } = useTranslation();
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
      title: t("home.sparePartsTitle"),
      text: t("home.sparePartsDescription"),
    },
    {
      icon: <FaHammer className="cardIcon" />,
      title: t("home.technicalServiceTitle"),
      text: t("home.technicalServiceDescription"),
    },
    {
      icon: <FaShieldAlt className="cardIcon" />,
      title: t("home.warrantiesTitle"),
      text: t("home.warrantiesDescription"),
    },
  ];

  return (
    <main>
      <SEO 
        title="LK Energy - Generadores Eléctricos Industriales | 25 Años de Experiencia"
        description="LK Energy - Fabricantes de generadores eléctricos industriales con 25 años de experiencia. Servicio técnico, repuestos y garantías. Soluciones energéticas para todos los sectores."
        keywords="generadores eléctricos, LK Energy, generadores industriales, energía de respaldo, grupos electrógenos, servicio técnico generadores"
        canonical="/"
        ogType="website"
      />

      {/* HEADER */}
      <section className="header">
        <div className="home-banner">
          <img className="banner" src={banner} alt="banner" />
          <div className="title-container">
            <div className="title-content">
              <h1 className="title">
                <span className={`title-line title-line-1 ${textAnimationStarted ? 'animate' : ''}`}>
                  {t("home.titleLine1")}
                </span>
                <br/>
                <span className={`title-line title-line-2 ${textAnimationStarted ? 'animate' : ''}`}>
                  {t("home.titleLine2")}
                </span>
                <br/>
              </h1>
              <h2 className={`subtitle ${textAnimationStarted ? 'animate' : ''}`}>
                {t("home.subtitle")}
              </h2>
              <a href="http://lkenergy.com/Contacto">
                <button className={`presupuesto presupuesto1 ${textAnimationStarted ? 'animate' : ''}`}>
                  {t("home.budgetButton")}
                </button>
              </a>
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
          <h2 className="about-title">{t("home.aboutTitle")}</h2>
          <h1 className="about-heading">{t("home.aboutHeading")}</h1>
          <h2 className="about-subtitle">{t("home.aboutSubtitle")}</h2>
          <p className="contact-us">
            <a href="http://lkenergy.com/Contacto">
              {t("home.aboutContact")}
            </a>
          </p>
        </div>

        <div className="about-right">
          <div className="about-description">
            <p>
              {t("home.aboutDescription")}
            </p>
          </div>
          <div className="about-image">
            <video src={workerImage} 
        autoPlay
        loop
        muted alt="Generadores industriales" />
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
      
      {/* FEATURED PRODUCTS SECTION */}
      <section className='featureProducts'> 
        <FeaturedProducts />
      </section>

      {/* CONTACT SECTION */}
      <section className="contact">
        <Contact />
      </section>
    </main>
  );}