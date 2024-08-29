import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/">Proyectos</Link></li> 
        <li><Link to="/about">Sobre mí</Link></li> 
        <li><Link to="/certificaciones">Certificaciones</Link></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
