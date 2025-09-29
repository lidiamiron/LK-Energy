import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaUser, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from '../context/AuthContext';
import { supabase } from '../client';
import logo from "../assets/logo.svg";
import "../components/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const isHomePage = location.pathname === '/' || location.pathname === '/Home';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdownName) => {
    if (window.innerWidth <= 768) {
      setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      // Limpiar el token de sessionStorage
      sessionStorage.removeItem('token');
      // Recargar la página para actualizar el estado
      window.location.href = '/';
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  // Obtener el nombre del usuario (email o metadata)
  const getUserName = () => {
    if (!user) return '';
    
    // Intentar obtener el nombre completo de metadata
    if (user.user_metadata?.full_name) {
      return user.user_metadata.full_name;
    }
    
    // Si no hay nombre completo, usar el email sin el dominio
    if (user.email) {
      return user.email.split('@')[0];
    }
    
    return 'Usuario';
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
                  Empresa
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
                  Productos
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
                  Descargas
                </a>
              </li>
              <li>
                <a className={location.pathname === '/Contacto' ? 'active' : ''} href="/Contacto">
                  Contacto
                </a>
              </li>
            </ul>

            {/* Iconos de autenticación */}
            <div className="auth-icons">
              {loading ? (
                // Estado de carga
                <div className="auth-loading">
                  <span>Cargando...</span>
                </div>
              ) : user ? (
                // Usuario logueado - Mostrar nombre y logout
                <>
                  <div className="user-welcome">
                    <FaUser className="user-icon" />
                    <span className="user-name">Hola, {getUserName()}</span>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="auth-icon logout"
                    title="Cerrar Sesión"
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                // Usuario no logueado - Mostrar login y signup
                <>
                  <a href="/login" className="auth-icon" title="Iniciar Sesión">
                    <FaUser />
                    <span>Login</span>
                  </a>
                  <a href="/signup" className="auth-icon signup" title="Registrarse">
                    <FaUserPlus />
                    <span>Sign Up</span>
                  </a>
                </>
              )}
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