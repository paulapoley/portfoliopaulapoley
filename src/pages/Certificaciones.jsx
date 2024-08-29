import React from 'react';
import './Certificaciones.css'; // Estilos opcionales para esta página

const Certificaciones = () => {
  const cursos = [
    { id: 1, title: 'Curso 1', imgSrc: '/pdfs/p1.jpg', description: 'Descripción del curso 1' },
    { id: 2, title: 'Inteligencia Artificial y Big Data al Servicio de los Procesos de Selección de Personal', imgSrc: '/pdfs/IABigData.jpg', description: 'Certificado con el número de identificación: EC29160/15680' },
    { id: 3, title: 'Introducción al Desarrollo de Aplicaciones Web', imgSrc: '/pdfs/AppWeb.jpg', description: 'Certificado con el número de identificación: EC29160/16109' },
    { id: 4, title: 'Curso: Diagnóstico por Imagen', imgSrc: '/pdfs/DiagnosticoPorImagen.jpg', description: 'Certificado con el número de identificación: 1102021041669' },
    { id: 5, title: 'Curso: Nuevas Técnicas de Imagen', imgSrc: '/pdfs/NuevasTecnicas.jpg', description: 'Certificado con el número de identificación: 1102021043050' },
  ];
  
  return (
    <div className="content">
      <div className="certificaciones-container">
        <header className="certificaciones-header">
          <h1>Certificaciones</h1>
        </header>
        <div className="certificaciones-grid">
          {cursos.map((curso) => (
            <div className="certificacion-card" key={curso.id}>
              <img src={curso.imgSrc} alt={curso.title} className="certificacion-image" />
              <h2 className="certificacion-title">{curso.title}</h2>
              <p className="certificacion-description">{curso.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificaciones;
