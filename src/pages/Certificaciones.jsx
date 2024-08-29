import React from 'react';
import './Certificaciones.css';

const Certificaciones = () => {
  const certifications = [
    { id: 1, title: 'Certificación 1', description: 'Descripción breve de la certificación 1.', imgSrc: '/pdfs/IABigData.jpg' },
    { id: 2, title: 'Certificación 2', description: 'Descripción breve de la certificación 2.', imgSrc: '/pdfs/DiagnosticoPorImagen.jpg' },
    { id: 3, title: 'Certificación 3', description: 'Descripción breve de la certificación 3.', imgSrc: '/pdfs/NuevasTecnicas.jpg' },
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
