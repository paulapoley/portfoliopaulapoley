import React from 'react';
import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card_container}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.pdf} target="_blank" rel="noopener noreferrer">
        Ver PDF
      </a>
    </div>
  );
}
