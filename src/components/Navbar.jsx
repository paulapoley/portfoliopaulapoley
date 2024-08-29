import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/pdfs/icon.png" alt="Logo" /> {/* Mostrar el icon.png */}
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Proyectos</Link></li>
        <li><Link to="/sobre-mi">Sobre mí</Link></li>
        <li><Link to="/certificaciones">Certificaciones</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
