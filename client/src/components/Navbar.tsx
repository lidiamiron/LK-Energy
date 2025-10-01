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

  return (
    <header className={isHomePage ? "fixed-header" : "sticky-header"}>
      <div className="container">
        <nav>
          {/* Logo a la izquierda */}
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          {/* Contenedor para menú y auth icons a la derecha */}
          <div className="nav-right">
            {/* Menú de navegación */}
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <a className={location.pathname === '/' ? 'active' : ''} href="/">
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
                >
                  {t('navbar.products', 'Productos')}
                </a>
                <div className={`submenu-container ${openDropdown === 'productos' ? 'open' : ''}`}>
                  <ul className="submenu">
                    <li><a href="/productos/LK21B">LK21B</a></li>
                    <li><a href="/productos/LK25B">LK25B</a></li>
                    <li><a href="/productos/LK36B">LK36B</a></li>
                    <li><a href="/productos/LK44B">LK44B</a></li>
                    <li><a href="/productos/LK50B">LK50B</a></li>
                    <li><a href="/productos/LK72B">LK72B</a></li>
                    <li><a href="/productos/LK88B">LK88B</a></li>
                    <li><a href="/productos/LK110B">LK110B</a></li>
                    <li><a href="/productos/LK150B">LK150B</a></li>
                    <li><a href="/productos/LK165B">LK165B</a></li>
                    <li><a href="/productos/LK188B">LK188B</a></li>
                    <li><a href="/productos/LK250B">LK250B</a></li>
                  </ul>
                </div>
              </li>

              <li>
                <a className={location.pathname === '/Descargas' ? 'active' : ''} href="/Descargas">
                  {t('navbar.downloads', 'Descargas')}
                </a>
              </li>
              <li>
                <a className={location.pathname === '/Contacto' ? 'active' : ''} href="/Contacto">
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
                      <FaUser className="user-icon" />
                      <span className="user-name">{t('navbar.hello', 'Hola')}, {getUserName()}</span>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="auth-icon logout"
                      title={t('navbar.logout', 'Cerrar Sesión')}
                    >
                      <FaSignOutAlt />
                      <span>{t('navbar.logout', 'Logout')}</span>
                    </button>
                  </>
                ) : (
                  <>
                    <a href="/login" className="auth-icon" title={t('navbar.login', 'Iniciar Sesión')}>
                      <FaUser />
                      <span>{t('navbar.login', 'Login')}</span>
                    </a>
                    <a href="/signup" className="auth-icon signup" title={t('navbar.signup', 'Registrarse')}>
                      <FaUserPlus />
                      <span>{t('navbar.signup', 'Sign Up')}</span>
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Ícono del menú hamburguesa */}
            <div className="icon" onClick={toggleMenu}>
              <FaBars />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}