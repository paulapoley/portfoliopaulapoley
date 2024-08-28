import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [showPdf, setShowPdf] = useState(false);

  const handleShowPdf = () => {
    setShowPdf(true);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Proyectos realizados:</h1>
      </header>

      <div className="home-content">
        {/* Imagen del proyecto */}
        <img src="/pdfs/p1.png" alt="Proyecto 1" className="project-image" />

        <p>Este es un resumen de mi proyecto. Puedes ver más detalles en el PDF a continuación.</p>

        {/* Botón para mostrar el PDF */}
        {!showPdf && (
          <button className="home-button" onClick={handleShowPdf}>
            Ver PDF
          </button>
        )}

        {/* Cuadro para mostrar el PDF */}
        {showPdf && (
          <div className="pdf-container">
            <iframe 
              src="/pdfs/proyecto1.pdf#toolbar=0&navpanes=0&scrollbar=0" 
              className="pdf-viewer" 
              title="PDF del Proyecto"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
