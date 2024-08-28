import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a mi Proyecto</h1>
      </header>

      <div className="home-content">
        {/* Imagen del proyecto */}
        <img src="/pdfs/proyecto1.jpg" alt="Proyecto 1" className="project-image" />

        <p>Este es un resumen de mi proyecto. Puedes ver más detalles en el PDF a continuación.</p>

        {/* Cuadro para mostrar el PDF */}
        <div className="pdf-container">
          <iframe 
            src="/pdfs/proyecto1.pdf#toolbar=0&navpanes=0&scrollbar=0" 
            className="pdf-viewer" 
            title="PDF del Proyecto"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
