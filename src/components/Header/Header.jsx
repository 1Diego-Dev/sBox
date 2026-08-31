// Hoja de estilos y logo
import './header.css';
import logo from '../../images/logo.png'

// Componente Link
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header({
  openAllPopups
}) {
  // Estado local para el interruptor del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to='/'><img src={logo} alt="sBox Logo" className="header__logo-img" /></Link>
      </div>

      {/* Botón Hamburguesa: Solo existirá visualmente en móviles */}
      <button 
        className="header__hamburger-btn" 
        onClick={toggleMenu} 
        aria-label="Abrir menú"
      >
        {/* SVG de 3 líneas horizontales */}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Contenedor de Navegación: Recibe la clase modificadora que comprueba si está abierto */}
      <nav className={`header__nav ${isMenuOpen ? 'header__nav_open' : ''}`}>
        
        {/* Botón de cierre (X): Solo visible dentro del overlay móvil */}
        <button 
          className="header__close-btn" 
          onClick={toggleMenu} 
          aria-label="Cerrar menú"
        >
          ✕
        </button>

        <Link to="/" className="header__link" onClick={toggleMenu}>Inicio</Link>
        <Link to="/explorar" className="header__link" onClick={toggleMenu}>Explorar</Link>
        <Link to="/guardados" className="header__link" onClick={toggleMenu}>Guardados</Link>
        
        <button 
          className="header__auth-btn" 
          onClick={() => {
            toggleMenu(); 
            openAllPopups(); 
          }}
        >
          Inscribirse
        </button>
      </nav>
    </header>
  );
}

export default Header;