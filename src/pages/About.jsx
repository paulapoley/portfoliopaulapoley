import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Sobre mí</h1>
        <p className="about-text">
          Paula Poley 
        </p>
        <p className="about-text">
          <span className="highlight">Ingeniería de la Salud</span> con especialización en <span className="highlight">Informática Clínica</span> por la <span className="highlight">Universidad de Sevilla</span>.
        </p>
        <p className="about-text">
          Durante mi formación he manejado programación (Java, Python, SQL), gestión de bases de datos, inteligencia artificial (TensorFlow, Keras), herramientas de desarrollo (Visual Studio Code, Docker), sistemas operativos, máquinas virtuales y herramientas de diseño.
        </p>
      </div>
      <div className="about-links-container">
        <div className="about-links">
          <a href="https://www.linkedin.com/in/paulapoley/" className="about-link linkedin" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/paulapoley" className="about-link github" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="/pdfs/CV-PAULA%20POLEY%20CEBALLOS.pdf" className="about-link cv" target="_blank" rel="noopener noreferrer">
            CV 
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
