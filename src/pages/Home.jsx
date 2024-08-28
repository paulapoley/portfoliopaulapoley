import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const projects = [
  { title: 'Proyecto 1', description: 'Descripción del Proyecto 1', pdf: 'proyecto1.pdf' },
  { title: 'Proyecto 2', description: 'Descripción del Proyecto 2', pdf: 'proyecto2.pdf' },
  // Añade más proyectos aquí
];

export default function Home() {
  return (
    <div>
      <h2>Mis Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}


