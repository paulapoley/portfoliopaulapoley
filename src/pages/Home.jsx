import React from 'react';
import './Home.css';

const Home = () => {
  const projects = [
    { id: 1, title: 'Proyecto 1', description: 'Descripción breve del proyecto 1.', imgSrc: '/pdfs/p1.jpg', pdfSrc: '/pdfs/proyecto1.pdf' },
    { id: 2, title: 'Proyecto 2', description: 'Descripción breve del proyecto 2.', imgSrc: '/pdfs/p2.jpg', pdfSrc: '/pdfs/proyecto2.pdf' },
  ];

  const handleOpenPdf = (pdfSrc) => {
    window.open(pdfSrc, '_blank'); // Abre el PDF en una nueva pestaña
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Proyectos realizados:</h1>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
            <img src={project.imgSrc} alt={`Proyecto ${project.id}`} className="project-image" />
            <button className="home-button" onClick={() => handleOpenPdf(project.pdfSrc)}>
              Ver PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
