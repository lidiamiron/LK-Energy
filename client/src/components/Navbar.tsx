import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/Home';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={isHomePage ? "fixed-header" : "sticky-header"}> {/* Cambiado a sticky-header */}
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
            <li>
              <a className={location.pathname === '/Productos' ? 'active' : ''} href="/Productos">
                Productos
              </a>
            </li>
            <li>
              <a className={location.pathname === '/Descargar' ? 'active' : ''} href="/Descargar">
                Descargar
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