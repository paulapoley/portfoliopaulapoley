import React from 'react';
import './Certificaciones.css';

const Certificaciones = () => {
  const certificaciones = [
    { id: 1, title: 'Proyecto 1', description: 'Descripción breve del proyecto 1.', imgSrc: '/pdfs/p1.jpg', pdfSrc: '/pdfs/proyecto1.pdf' },
    { id: 2, title: 'Proyecto 2', description: 'Descripción breve del proyecto 2.', imgSrc: '/pdfs/p2.jpg', pdfSrc: '/pdfs/proyecto2.pdf' },
    { id: 3, title: 'Proyecto 3', description: 'Descripción breve del proyecto 3.', imgSrc: '/pdfs/p3.jpg', pdfSrc: '/pdfs/proyecto3.pdf' },
    { id: 4, title: 'Proyecto 1', description: 'Descripción breve del proyecto 1.', imgSrc: '/pdfs/p1.jpg', pdfSrc: '/pdfs/proyecto1.pdf' },
    { id: 5, title: 'Proyecto 2', description: 'Descripción breve del proyecto 2.', imgSrc: '/pdfs/p2.jpg', pdfSrc: '/pdfs/proyecto2.pdf' },
    { id: 6, title: 'Proyecto 3', description: 'Descripción breve del proyecto 3.', imgSrc: '/pdfs/p3.jpg', pdfSrc: '/pdfs/proyecto3.pdf' },
    { id: 7, title: 'Proyecto 1', description: 'Descripción breve del proyecto 1.', imgSrc: '/pdfs/p1.jpg', pdfSrc: '/pdfs/proyecto1.pdf' },
    { id: 8, title: 'Proyecto 2', description: 'Descripción breve del proyecto 2.', imgSrc: '/pdfs/p2.jpg', pdfSrc: '/pdfs/proyecto2.pdf' },
    { id: 9, title: 'Proyecto 3', description: 'Descripción breve del proyecto 3.', imgSrc: '/pdfs/p3.jpg', pdfSrc: '/pdfs/proyecto3.pdf' },
  ];

  const handleOpenPdf = (pdfSrc) => {
    window.open(pdfSrc, '_blank'); // Abre el PDF en una nueva pestaña
  };

  return (
    <div className="homecertificaciones-container">
      <header className="certificaciones-header">
        <h1>Proyectos realizados</h1>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
            <img src={project.imgSrc} alt={`Proyecto ${project.id}`} className="project-image" />
            <button className="certificaciones-button" onClick={() => handleOpenPdf(project.pdfSrc)}>
              Ver PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificaciones;
