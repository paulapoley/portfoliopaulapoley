import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-links">
      <a href="/">Home</a>
      <a href="/about">Sobre mi</a>
    </div>
    <button className="connect-button">Connect</button> {/* Example button */}
  </nav>
);

export default Navbar;
