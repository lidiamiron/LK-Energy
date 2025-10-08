import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/ProtectedLink.css'; // Import the CSS file

const SimpleProtectedLink = ({ href, children, className = '' }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const token = sessionStorage.getItem('token');
    
    if (!token) {
      e.preventDefault();
      e.stopPropagation();
      console.log('No hay token, redirigiendo a login');
      navigate('/login', { 
        state: { from: window.location.pathname } 
      });
      return false;
    }
    console.log('Token encontrado, permitiendo descarga');
  };

  const token = sessionStorage.getItem('token');
  
  if (!token) {
    return (
      <span 
        className={`protected-link-span ${className}`} // Add class for span
        onClick={handleClick}
      >
        {children}
        <small className="protected-link-small">
          (Inicia sesión)
        </small>
      </span>
    );
  }

  return (
    <a 
      href={href} 
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default SimpleProtectedLink;