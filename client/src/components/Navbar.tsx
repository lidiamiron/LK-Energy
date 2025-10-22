import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaUser, FaUserPlus, FaSignOutAlt, FaAngleDown } from "react-icons/fa";
import { useAuth } from '../context/AuthContext';
import { supabase } from '../client';
import { useTranslation } from 'react-i18next';
import logo from "../assets/logo.svg";
import "../components/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [productosClickCount, setProductosClickCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { t } = useTranslation();
  const isHomePage = location.pathname === '/' || location.pathname === '/Home';
  const navRef = useRef(null); // Ref for nav to detect outside clicks

  const toggleMenu = () => {
    console.log('Toggling menu. Current isOpen:', isOpen);
    setIsOpen(!isOpen);
    if (isOpen) {
      console.log('Closing menu, resetting dropdown and click count');
      setOpenDropdown(null);
      setProductosClickCount(0);
    }
  };

  const handleProductosClick = (e) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault(); // Prevent default navigation only in mobile
      e.stopPropagation(); // Stop event propagation
      console.log('Productos clicked. Current click count:', productosClickCount, 'openDropdown:', openDropdown);
      if (productosClickCount === 0) {
        setOpenDropdown('productos');
        setProductosClickCount(1);
        console.log('Opening submenu. New openDropdown:', 'productos', 'New click count:', 1);
      } else {
        console.log('Navigating to /productos');
        navigate('/productos');
        setProductosClickCount(0);
        setOpenDropdown(null);
        console.log('Resetting state. New openDropdown:', null, 'New click count:', 0);
      }
    }
    // In desktop view (> 1024px), do nothing and allow default navigation
  };

  // Handle clicks on other menu items to close submenu
  const handleOtherMenuClick = (e) => {
    if (openDropdown === 'productos') {
      console.log('Closing submenu due to other menu item click');
      setOpenDropdown(null);
      setProductosClickCount(0);
    }
  };

  // Handle clicks outside the nav to close menu and submenu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        console.log('Clicked outside nav, closing menu and submenu');
        setIsOpen(false);
        setOpenDropdown(null);
        setProductosClickCount(0);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      sessionStorage.removeItem('token');
      window.location.href = '/';
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
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
      <script type="application/ld+json">
        {JSON.stringify(navigationSchema)}
      </script>

      <div className="container">
        <nav role="navigation" aria-label="Navegación principal" ref={navRef}>
          <div className="logo">
            <a href="/" aria-label="LK Energy - Página de inicio">
              <img src={logo}  alt="LK Energy - Generadores Eléctricos Industriales" />
            </a>
          </div>

          <div className="nav-right">
            <ul className={isOpen ? "nav-link active" : "nav-link"} id="nav-menu">
              <li>
                <a 
                  className={location.pathname === '/' ? 'active' : ''} 
                  href="/"
                  aria-current={location.pathname === '/' ? 'page' : undefined}
                  onClick={handleOtherMenuClick}
                >
                  {t('navbar.company', 'Empresa')}
                </a>
              </li>
              
              <li className="dropdown-wrapper">
                <a 
                  href="/productos" 
                  className={`${location.pathname.startsWith('/productos') ? 'active' : ''} ${openDropdown === 'productos' ? 'open' : ''}`}
                  onClick={handleProductosClick}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'productos'}
                  aria-current={location.pathname.startsWith('/productos') ? 'page' : undefined}
                >
                  {t('navbar.products', 'Productos')}
                  <FaAngleDown className={`dropdown-arrow ${openDropdown === 'productos' ? 'open' : ''}`} />
                </a>
                <div 
                  className={`submenu-container ${openDropdown === 'productos' ? 'open' : ''}`}
                  role="menu"
                  aria-label="Submenú de productos"
                >
                  <ul className="submenu">
                    <li><a href="/productos/LK21B" role="menuitem">LK21B</a></li>
                    <li><a href="/productos/LK25B" role="menuitem">LK25B</a></li>
                    <li><a href="/productos/LK36B" role="menuitem">LK36B</a></li>
                    <li><a href="/productos/LK44B" role="menuitem">LK44B</a></li>
                    <li><a href="/productos/LK50B" role="menuitem">LK50B</a></li>
                    <li><a href="/productos/LK72B" role="menuitem">LK72B</a></li>
                    <li><a href="/productos/LK88B" role="menuitem">LK88B</a></li>
                    <li><a href="/productos/LK110B" role="menuitem">LK110B</a></li>
                    <li><a href="/productos/LK150B" role="menuitem">LK150B</a></li>
                    <li><a href="/productos/LK165B" role="menuitem">LK165B</a></li>
                    <li><a href="/productos/LK188B" role="menuitem">LK188B</a></li>
                    <li><a href="/productos/LK250B" role="menuitem">LK250B</a></li>
                  </ul>
                </div>
              </li>

              <li>
                <a 
                  className={location.pathname === '/Descargas' ? 'active' : ''} 
                  href="/Descargas"
                  aria-current={location.pathname === '/Descargas' ? 'page' : undefined}
                  onClick={handleOtherMenuClick}
                >
                  {t('navbar.downloads', 'Descargas')}
                </a>
              </li>
              <li>
                <a 
                  className={location.pathname === '/Contacto' ? 'active' : ''} 
                  href="/Contacto"
                  aria-current={location.pathname === '/Contacto' ? 'page' : undefined}
                  onClick={handleOtherMenuClick}
                >
                  {t('navbar.contact', 'Contacto')}
                </a>
              </li>
            </ul>

            <div className="nav-actions">
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