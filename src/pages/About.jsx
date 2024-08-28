import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Sobre mí</h1>
        <p className="about-text">
          Soy <span className="highlight">Paula Poley Ceballos</span>, estudiante de último curso de <span className="highlight">Ingeniería de la Salud</span> con especialización en <span className="highlight">Informática Clínica</span> por la <span className="highlight">Universidad de Sevilla</span>.
        </p>
      </div>
      <div className="about-links-container">
        <p className="about-links-intro">
          Puedes ver más de mi trabajo o conectar conmigo a través de los siguientes enlaces:
        </p>
        <div className="about-links">
          <a href="https://www.linkedin.com/in/paulapoley/" className="about-link linkedin" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/paulapoley" className="about-link github" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
