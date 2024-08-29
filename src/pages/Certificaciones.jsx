import React from 'react';
import './Certificaciones.css';

const Certificaciones = () => {
  const certifications = [
    { id: 1, title: 'Certificación 1', description: 'Descripción breve de la certificación 1.', imgSrc: '/pdfs/c1.jpg', pdfSrc: '/pdfs/certificacion1.pdf' },
    { id: 2, title: 'Certificación 2', description: 'Descripción breve de la certificación 2.', imgSrc: '/pdfs/c2.jpg', pdfSrc: '/pdfs/certificacion2.pdf' },
    { id: 3, title: 'Certificación 3', description: 'Descripción breve de la certificación 3.', imgSrc: '/pdfs/c3.jpg', pdfSrc: '/pdfs/certificacion3.pdf' },
    { id: 4, title: 'Certificación 4', description: 'Descripción breve de la certificación 4.', imgSrc: '/pdfs/c4.jpg', pdfSrc: '/pdfs/certificacion4.pdf' },
    { id: 5, title: 'Certificación 5', description: 'Descripción breve de la certificación 5.', imgSrc: '/pdfs/c5.jpg', pdfSrc: '/pdfs/certificacion5.pdf' },
    { id: 6, title: 'Certificación 6', description: 'Descripción breve de la certificación 6.', imgSrc: '/pdfs/c6.jpg', pdfSrc: '/pdfs/certificacion6.pdf' },
  ];

  const handleOpenPdf = (pdfSrc) => {
    window.open(pdfSrc, '_blank'); // Abre el PDF en una nueva pestaña
  };

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
            <button className="cert-button" onClick={() => handleOpenPdf(cert.pdfSrc)}>
              Ver PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificaciones;
