import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";
import "../components/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/Home';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdownName) => {
    if (window.innerWidth <= 768) {
      setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    }
  };

  return (
    <header className={isHomePage ? "fixed-header" : "sticky-header"}>
      <div className="container">
        <nav>
          {/* Logo */}
          <div className="logo">
            <a href="/Home">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          {/* Menú de navegación */}
          <ul className={isOpen ? "nav-link active" : "nav-link"}>
            <li>
              <a className={location.pathname === '/Home' ? 'active' : ''} href="/Home">
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
                  <li><a href="/productos/generador">LK25147</a></li>
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

          {/* Ícono del menú hamburguesa */}
          <div className="icon" onClick={toggleMenu}>
            <FaBars />
          </div>
        </nav>
      </div>
    </header>
  );
}