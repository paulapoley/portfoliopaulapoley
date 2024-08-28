import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [currentProject, setCurrentProject] = useState(null); // Estado para el proyecto actual
  const [pdfZoom, setPdfZoom] = useState(1); // Estado para el zoom del PDF

  const projects = [
    { id: 1, imgSrc: '/pdfs/p1.jpg', pdfSrc: '/pdfs/proyecto1.pdf' },
    { id: 2, imgSrc: '/pdfs/p2.jpg', pdfSrc: '/pdfs/proyecto2.pdf' },
  ];

  const handleShowPdf = (pdfSrc) => {
    setCurrentProject(pdfSrc);
  };

  const handleHidePdf = () => {
    setCurrentProject(null);
    setPdfZoom(1); // Restablecer zoom al ocultar el PDF
  };

  const handleZoomIn = () => {
    setPdfZoom((prevZoom) => prevZoom + 0.25); // Aumentar zoom
  };

  const handleZoomOut = () => {
    setPdfZoom((prevZoom) => (prevZoom > 0.25 ? prevZoom - 0.25 : 0.25)); // Disminuir zoom, con un límite mínimo
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Proyectos realizados:</h1>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.imgSrc} alt={`Proyecto ${project.id}`} className="project-image" />
            <button className="home-button" onClick={() => handleShowPdf(project.pdfSrc)}>
              Ver PDF
            </button>
          </div>
        ))}
      </div>

      {/* Mostrar el PDF del proyecto actual */}
      {currentProject && (
        <div className="pdf-container">
          <div className="pdf-controls">
            <button className="home-button" onClick={handleHidePdf}>
              Volver
            </button>
            <button className="home-button" onClick={handleZoomIn}>
              Aumentar
            </button>
            <button className="home-button" onClick={handleZoomOut}>
              Reducir
            </button>
          </div>
          <iframe 
            src={`${currentProject}#toolbar=0&navpanes=0&scrollbar=0`} 
            className="pdf-viewer" 
            title="PDF del Proyecto"
            style={{ transform: `scale(${pdfZoom})`, transformOrigin: '0 0' }}
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Home;
