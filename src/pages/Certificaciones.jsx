import React from 'react';
import './Certificaciones.css';

const Certificaciones = () => {
  const certifications = [
    { id: 1, title: 'Curso 1', description: 'Descripción del curso 1', imgSrc: '/pdfs/p1.jpg' },
    { id: 2, title: 'Inteligencia Artificial y Big Data al Servicio de los Procesos de Selección de Personal', description: 'Certificado con el número de identificación: EC29160/15680',  imgSrc: '/pdfs/IABigData.jpg'},
    { id: 3, title: 'Introducción al Desarrollo de Aplicaciones Web', description: 'Certificado con el número de identificación: EC29160/16109' , imgSrc: '/pdfs/AppWeb.jpg' },
    { id: 4, title: 'Curso: Diagnóstico por Imagen', description: 'Certificado con el número de identificación: 1102021041669' , imgSrc: '/pdfs/DiagnosticoPorImagen.jpg'},
    { id: 5, title: 'Curso: Nuevas Técnicas de Imagen', description: 'Certificado con el número de identificación: 1102021043050' , imgSrc: '/pdfs/NuevasTecnicas.jpg'},
  ];

  return (
    <div className="certificaciones-container">
      <header className="certificaciones-header">
        <h1>Certificaciones obtenidas</h1>
      </header>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <div className="cert-info">
              <h2 className="cert-title">{cert.title}</h2>
              <p className="cert-description">{cert.description}</p>
            </div>
            <img src={cert.imgSrc} alt={`Certificación ${cert.id}`} className="cert-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificaciones;
