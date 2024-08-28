
import ProjectCard from "../components/ProjectCard";
import projects from "../../projects.json";
import styles from "../styles/globals.css";

export default function Home() {
  return (
    <div>
      <h1>Mis Proyectos de la Universidad</h1>
      <div className={styles.project_gallery}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
