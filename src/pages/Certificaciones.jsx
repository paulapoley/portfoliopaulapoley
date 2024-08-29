import React from 'react';
import './Certificaciones.css'; // Estilos opcionales para esta página

const Certificaciones = () => {
  // Array de cursos con nombre e imagen
  const cursos = [
    { id: 1, title: 'Curso 1', imgSrc: '/public/pdfs/p1.jpg', description: 'Descripción del curso 1' },
    { id: 2, title: 'Curso 2', imgSrc: '/public/pdfs/p2.jpg', description: 'Descripción del curso 2' },
    { id: 3, title: 'Curso 3', imgSrc: '/public/pdfs/p3.jpg', description: 'Descripción del curso 3' },
    // Añade más cursos aquí
  ];

  return (
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
  );
};

export default Certificaciones;
