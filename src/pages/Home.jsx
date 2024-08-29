import React from 'react';
import './Home.css';

const Home = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Influencia de Variables Exógenas en la Detección de Enfermedades de Piel mediante Redes Neuronales', 
      description: 'Este TFG explora cómo variables exógenas (ubicación de la lesión, edad, sexo del paciente y tipo de diagnóstico) afectan la precisión de modelos de redes neuronales convolucionales (CNN) para la detección de enfermedades cutáneas. Se comparan modelos con y sin estas variables adicionales para evaluar mejoras en la clasificación de imágenes médicas.', 
      imgSrc: '/pdfs/TFG-PAULAPOLEY.jpg', 
      pdfSrc: '/pdfs/TFG-PAULAPOLEY.pdf' 
    },
    { 
      id: 2, 
      title: 'BYODSEC: Implementación de BYOD en una Entidad Hospitalaria con VPN Road Warrior TLS', 
      description: 'Implementación de una arquitectura segura cliente-servidor en Java utilizando TLS para asegurar las comunicaciones. Se configuraron KeyStores, se desarrollaron sockets TLS y se validó el rendimiento para manejar hasta 300 conexiones concurrentes, garantizando autenticación y cifrado de datos.', 
      imgSrc: '/pdfs/p3.jpg', 
      pdfSrc: '/pdfs/proyecto3.pdf' 
    },
    { 
      id: 3, 
      title: 'Digitalización de la autenticación y el control de acceso para servicio de salud de comunidad autónoma', 
      description: 'Implementación y gestión de certificados digitales para asegurar comunicaciones en servicios de salud. Incluye instalación y verificación de certificados, firma y validación de documentos, y automatización de políticas de control de acceso.', 
      imgSrc: '/pdfs/p2.jpg', 
      pdfSrc: '/pdfs/proyecto2.pdf' 
    },
    { 
      id: 4, 
      title: 'Análisis de datos con Weka, optimización y evaluación de modelos de aprendizaje automático.', 
      description: 'Implementación y ajuste de modelos de machine learning en Weka, incluyendo Bagging y agrupamiento con SimpleKMeans y EM. Optimización de parámetros y evaluación de rendimiento para mejorar la precisión y crear clasificadores personalizados.', 
      imgSrc: '/pdfs/p1.jpg', 
      pdfSrc: '/pdfs/proyecto1.pdf' 
    },
  ];

  const handleOpenPdf = (pdfSrc) => {
    window.open(pdfSrc, '_blank'); // Abre el PDF en una nueva pestaña
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Proyectos realizados</h1>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.imgSrc} alt={`Proyecto ${project.id}`} className="project-image" />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
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

