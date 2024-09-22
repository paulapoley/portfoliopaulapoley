import React from 'react';
import './Certificaciones.css'; // Asegúrate de que este archivo esté correctamente importado

const Certificaciones = () => {
  const certifications = [
    { id: 1, title: 'Programa de Inteligencia Artificial', description: 'Junio 2024 - Agosto 2024\n SkillUp Online - IBM SkillsBuild.\nVerify: https://www.credly.com/go/00bpHpx3', imgSrc: '/pdfs/IA curso.jpg' },
    { id: 2, title: 'Inteligencia Artificial y Big Data al Servicio de los Procesos de Selección de Personal', description: '08/03/2023\nInstituto Andaluz de la Juventud, Junta de Andalucía\nCertificado con el número de identificación: EC29160/15680', imgSrc: '/pdfs/IABigData.jpg'},
    { id: 3, title: 'Introducción al Desarrollo de Aplicaciones Web', description: '01/03/2023\nInstituto Andaluz de la Juventud, Junta de Andalucía\nCertificado con el número de identificación: EC29160/16109', imgSrc: '/pdfs/AppWeb.jpg' },
    { id: 4, title: 'Curso: Diagnóstico por Imagen', description: '24/05/2021\nUniversidad Antonio de Nebrija\nCertificado con el número de identificación: 1102021041669', imgSrc: '/pdfs/DiagnosticoPorImagen.jpg'},
    { id: 5, title: 'Curso: Nuevas Técnicas de Imagen', description: '24/05/2021\nUniversidad Antonio de Nebrija\nCertificado con el número de identificación: 1102021043050', imgSrc: '/pdfs/NuevasTecnicas.jpg'},
  ];

  return (
    <div className="certificaciones-container">
      <h1 className="certificaciones-header">Certificaciones</h1>
      <div className="certifications-grid">
        {certifications.map(cert => (
          <div key={cert.id} className="cert-card">
            <img src={cert.imgSrc} alt={cert.title} className="cert-image" />
            <div className="cert-info">
              <h2 className="cert-title">{cert.title}</h2>
              <p className="cert-description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificaciones;
