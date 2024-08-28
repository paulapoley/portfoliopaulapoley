import React from 'react';
import './ProjectCard.css'; // Cambia a .module.css si usas módulos CSS

export default function ProjectCard({ project }) {
  return (
    <div className="card-container">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={`/pdfs/${project.pdf}`} target="_blank" rel="noopener noreferrer">
        Ver PDF
      </a>
    </div>
  );
}
