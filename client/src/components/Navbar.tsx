import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaUser, FaUserPlus, FaSignOutAlt, FaGlobe } from "react-icons/fa";
import { useAuth } from '../context/AuthContext';
import { supabase } from '../client';
import { useTranslation } from 'react-i18next';
import logo from "../assets/logo.svg";
import "../components/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { t, i18n } = useTranslation();
  const isHomePage = location.pathname === '/' || location.pathname === '/Home';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdownName) => {
    if (window.innerWidth <= 768) {
      setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    }
  };

  const toggleLanguageDropdown = () => {
    setLanguageOpen(!languageOpen);
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      sessionStorage.removeItem('token');
      window.location.href = '/';
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageOpen(false);
  };

  const getUserName = () => {
    if (!user) return '';
    
    if (user.user_metadata?.full_name) {
      return user.user_metadata.full_name;
    }
    
    if (user.email) {
      return user.email.split('@')[0];
    }
    
    return t('navbar.user', 'Usuario');
  };

  // Obtener el nombre del idioma actual
  const getCurrentLanguageName = () => {
    return i18n.language === 'es' ? 'ES' : 'EN';
  };

  // SOLO SE AÑADE: Schema.org para SiteNavigationElement
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Navegación Principal LK Energy",
    "description": "Menú de navegación para generadores eléctricos LK Energy",
    "mainEntity": [
      {
        "@type": "SiteNavigationElement",
        "name": t('navbar.company', 'Empresa'),
        "url": "https://lkenergy.com/",
        "position": 1
      },
      {
        "@type": "SiteNavigationElement", 
        "name": t('navbar.products', 'Productos'),
        "url": "https://lkenergy.com/productos",
        "position": 2,
        "hasMenuItem": [
          { "@type": "SiteNavigationElement", "name": "LK21B", "url": "https://lkenergy.com/productos/LK21B" },
          { "@type": "SiteNavigationElement", "name": "LK25B", "url": "https://lkenergy.com/productos/LK25B" },
          { "@type": "SiteNavigationElement", "name": "LK36B", "url": "https://lkenergy.com/productos/LK36B" },
          { "@type": "SiteNavigationElement", "name": "LK44B", "url": "https://lkenergy.com/productos/LK44B" },
          { "@type": "SiteNavigationElement", "name": "LK50B", "url": "https://lkenergy.com/productos/LK50B" },
          { "@type": "SiteNavigationElement", "name": "LK72B", "url": "https://lkenergy.com/productos/LK72B" },
          { "@type": "SiteNavigationElement", "name": "LK88B", "url": "https://lkenergy.com/productos/LK88B" },
          { "@type": "SiteNavigationElement", "name": "LK110B", "url": "https://lkenergy.com/productos/LK110B" },
          { "@type": "SiteNavigationElement", "name": "LK150B", "url": "https://lkenergy.com/productos/LK150B" },
          { "@type": "SiteNavigationElement", "name": "LK165B", "url": "https://lkenergy.com/productos/LK165B" },
          { "@type": "SiteNavigationElement", "name": "LK188B", "url": "https://lkenergy.com/productos/LK188B" },
          { "@type": "SiteNavigationElement", "name": "LK250B", "url": "https://lkenergy.com/productos/LK250B" }
        ]
      },
      {
        "@type": "SiteNavigationElement",
        "name": t('navbar.downloads', 'Descargas'),
        "url": "https://lkenergy.com/descargas",
        "position": 3
      },
      {
        "@type": "SiteNavigationElement",
        "name": t('navbar.contact', 'Contacto'),
        "url": "https://lkenergy.com/contacto",
        "position": 4
      }
    ]
  };

  return (
    <header className={isHomePage ? "fixed-header" : "sticky-header"}>
      {/* SOLO SE AÑADE ESTE SCRIPT - No afecta diseño */}
      <script type="application/ld+json">
        {JSON.stringify(navigationSchema)}
      </script>

      <div className="container">
        <nav role="navigation" aria-label="Navegación principal">
          {/* Logo a la izquierda */}
          <div className="logo">
            <a href="/" aria-label="LK Energy - Página de inicio">
              <img src={logo} alt="LK Energy - Generadores Eléctricos Industriales" />
            </a>
          </div>

          {/* Contenedor para menú y auth icons a la derecha */}
          <div className="nav-right">
            {/* Menú de navegación */}
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <a 
                  className={location.pathname === '/' ? 'active' : ''} 
                  href="/"
                  aria-current={location.pathname === '/' ? 'page' : undefined}
                >
                  {t('navbar.company', 'Empresa')}
                </a>
              </li>
              
              <li 
                className="dropdown-wrapper"
                onClick={() => toggleDropdown('productos')}
                onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown('productos')}
                onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
              >
                <a 
                  href="/productos" 
                  className={`${location.pathname.startsWith('/productos') ? 'active' : ''} ${openDropdown === 'productos' ? 'open' : ''}`}
                  onClick={(e) => window.innerWidth <= 768 && e.preventDefault()}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'productos'}
                  aria-current={location.pathname.startsWith('/productos') ? 'page' : undefined}
                >
                  {t('navbar.products', 'Productos')}
                </a>
                <div 
                  className={`submenu-container ${openDropdown === 'productos' ? 'open' : ''}`}
                  role="menu"
                  aria-label="Submenú de productos"
                >
                  <ul className="submenu">
                    <li>
                      <a href="/productos/LK21B" role="menuitem">LK21B</a>
                    </li>
                    <li>
                      <a href="/productos/LK25B" role="menuitem">LK25B</a>
                    </li>
                    <li>
                      <a href="/productos/LK36B" role="menuitem">LK36B</a>
                    </li>
                    <li>
                      <a href="/productos/LK44B" role="menuitem">LK44B</a>
                    </li>
                    <li>
                      <a href="/productos/LK50B" role="menuitem">LK50B</a>
                    </li>
                    <li>
                      <a href="/productos/LK72B" role="menuitem">LK72B</a>
                    </li>
                    <li>
                      <a href="/productos/LK88B" role="menuitem">LK88B</a>
                    </li>
                    <li>
                      <a href="/productos/LK110B" role="menuitem">LK110B</a>
                    </li>
                    <li>
                      <a href="/productos/LK150B" role="menuitem">LK150B</a>
                    </li>
                    <li>
                      <a href="/productos/LK165B" role="menuitem">LK165B</a>
                    </li>
                    <li>
                      <a href="/productos/LK188B" role="menuitem">LK188B</a>
                    </li>
                    <li>
                      <a href="/productos/LK250B" role="menuitem">LK250B</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a 
                  className={location.pathname === '/Descargas' ? 'active' : ''} 
                  href="/Descargas"
                  aria-current={location.pathname === '/Descargas' ? 'page' : undefined}
                >
                  {t('navbar.downloads', 'Descargas')}
                </a>
              </li>
              <li>
                <a 
                  className={location.pathname === '/Contacto' ? 'active' : ''} 
                  href="/Contacto"
                  aria-current={location.pathname === '/Contacto' ? 'page' : undefined}
                >
                  {t('navbar.contact', 'Contacto')}
                </a>
              </li>
            </ul>

            {/* Contenedor para idiomas y auth */}
            <div className="nav-actions">

              {/* Iconos de autenticación */}
              <div className="auth-icons">
                {loading ? (
                  <div className="auth-loading">
                    <span>{t('navbar.loading', 'Cargando...')}</span>
                  </div>
                ) : user ? (
                  <>
                    <div className="user-welcome">
                      <FaUser className="user-icon" aria-hidden="true" />
                      <span className="user-name">{t('navbar.hello', 'Hola')}, {getUserName()}</span>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="auth-icon logout"
                      title={t('navbar.logout', 'Cerrar Sesión')}
                      aria-label={t('navbar.logout', 'Cerrar Sesión')}
                    >
                      <FaSignOutAlt aria-hidden="true" />
                      <span>{t('navbar.logout', 'Logout')}</span>
                    </button>
                  </>
                ) : (
                  <>
                    <a 
                      href="/login" 
                      className="auth-icon" 
                      title={t('navbar.login', 'Iniciar Sesión')}
                      aria-label={t('navbar.login', 'Iniciar Sesión')}
                    >
                      <FaUser aria-hidden="true" />
                      <span>{t('navbar.login', 'Login')}</span>
                    </a>
                    <a 
                      href="/signup" 
                      className="auth-icon signup" 
                      title={t('navbar.signup', 'Registrarse')}
                      aria-label={t('navbar.signup', 'Registrarse')}
                    >
                      <FaUserPlus aria-hidden="true" />
                      <span>{t('navbar.signup', 'Sign Up')}</span>
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Ícono del menú hamburguesa */}
            <div 
              className="icon" 
              onClick={toggleMenu}
              role="button"
              aria-label="Menú de navegación"
              aria-expanded={isOpen}
              aria-controls="nav-menu"
            >
              <FaBars aria-hidden="true" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}