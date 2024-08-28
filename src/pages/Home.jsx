import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1',
    pdfUrl: '/projects/project1.pdf'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del Proyecto 2',
    pdfUrl: '/projects/project2.pdf'
  },
  // Agrega más proyectos aquí
];

const Home = () => (
  <div className="home">
    <h2>Mis Proyectos</h2>
    <div className="projects-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
);

export default Home;

