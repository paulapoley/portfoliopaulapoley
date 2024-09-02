import React from 'react';
import './Home.css';

const Home = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Influencia de Variables Exógenas en la Detección de Enfermedades de Piel mediante Redes Neuronales', 
      description: 'Este TFG explora cómo variables exógenas (ubicación de la lesión, edad, sexo del paciente y tipo de diagnóstico) afectan la precisión de modelos de redes neuronales convolucionales (CNN) para la detección de enfermedades cutáneas. Se comparan modelos con y sin estas variables adicionales para evaluar mejoras en la clasificación de imágenes médicas.', 
      imgSrc: '/pdfs/TFG-PAULAPOLEY.jpg', 
      pdfSrc: '/pdfs/TFG-PAULAPOLEY.pdf',
      topics: ['Python', 'Machine Learning', 'Deep Learning', 'Artificial Intelligence', 'Image Classification'] 
    },
    { 
      id: 2, 
      title: 'App HUA+', 
      description: 'La aplicación móvil desarrollada en Android Studio utilizando Kotlin, HUA+, está enfocada en la gestión y provisión de información sobre la Hemorragia Uterina Anormal (HUA), dirigida tanto a pacientes como a profesionales médicos.', 
      imgSrc: '/pdfs/app-hua.png', 
      pdfSrc: '/pdfs/APP-HUA.pdf',
      topics: ['BPMN', 'Kotlin-Android Studio', 'Firebase-Authentication']
    },
    { 
      id: 3, 
      title: 'ClínicaConnect: App Móvil para Gestión de Citas Médicas y Tratamientos. Generación de un POC (Proof of Concept).', 
      description: 'Es una aplicación integral para la gestión de clínicas, diseñada para médicos, administrativos y profesionales de atención al paciente. Ofrece funcionalidades avanzadas para la gestión de citas, tratamientos, pacientes, y comunicación, optimizando la eficiencia en la atención médica y administrativa.', 
      imgSrc: '/pdfs/POC-PPC.jpg', 
      pdfSrc:'/pdfs/Generación de un POC- PPC.pdf',
      pdfSrc2: "/pdfs/Presentacion Cliente-PPC.pdf",
      topics: ['HTML5', 'Visual Paradigm', 'Requisitos', 'Mocap', 'User Interface','Prototyping','Mockups', 'Marvel App']
    },
    { 
      id: 4, 
      title: 'Computación en la Nube con Amazon Web Services (AWS).', 
      description: 'Uso de Amazon Web Services (AWS) para implementar y gestionar instancias EC2, configurar balanceadores de carga, y asignar direcciones IP fijas. El objetivo es familiarizarse con la infraestructura en la nube y aprender a manejar diferentes servicios y configuraciones dentro de AWS.', 
      imgSrc: '/pdfs/AWS.jpg', 
      pdfSrc: '/pdfs/Computacion-nube-AWS-PPC.pdf',
      topics: ['AWS', 'EC2', 'Ubuntu Server', 'Cloudcomputing']
    },
    { 
      id: 5, 
      title: 'BYODSEC: Implementación de BYOD en una Entidad Hospitalaria con VPN Road Warrior TLS', 
      description: 'Implementación de una arquitectura segura cliente-servidor en Java utilizando TLS para asegurar las comunicaciones. Se configuraron KeyStores, se desarrollaron sockets TLS y se validó el rendimiento para manejar hasta 300 conexiones concurrentes, garantizando autenticación y cifrado de datos.', 
      imgSrc: '/pdfs/p3.jpg', 
      pdfSrc: '/pdfs/proyecto3.pdf',
      topics: ['Java', 'TLS', 'VPN', 'BYOD', 'Seguridad']
    },
    { 
      id: 6, 
      title: 'Digitalización de la Autenticación y el Control de Acceso para Servicio de Salud de Comunidad Autónoma', 
      description: 'Implementación y gestión de certificados digitales para asegurar comunicaciones en servicios de salud. Incluye instalación y verificación de certificados, firma y validación de documentos, y automatización de políticas de control de acceso.', 
      imgSrc: '/pdfs/p2.jpg', 
      pdfSrc: '/pdfs/proyecto2.pdf',
      topics: ['Certificados Digitales', 'Seguridad', 'Automatización', 'Control de Acceso']
    },
    { 
      id: 7, 
      title: 'Análisis de Datos con Weka, Optimización y Evaluación de Modelos de Aprendizaje Automático.', 
      description: 'Implementación y ajuste de modelos de machine learning en Weka, incluyendo Bagging y agrupamiento con SimpleKMeans y EM. Optimización de parámetros y evaluación de rendimiento para mejorar la precisión y crear clasificadores personalizados.', 
      imgSrc: '/pdfs/p1.jpg', 
      pdfSrc: '/pdfs/proyecto1.pdf',
      topics: ['Weka', 'Machine Learning', 'Optimización', 'Clasificadores']
    },
    { 
      id: 8, 
      title: 'Bone Marrow Transplant: Children Data Set', 
      description: 'Análisis predictivo de trasplante de médula ósea en pacientes pediátricos utilizando modelos de regresión logística y random forest. Incluye análisis y visualizaciones de datos clínicos para predecir la recaída post-trasplante.', 
      imgSrc: '/pdfs/bone.png', 
      pdfSrc: '/pdfs/Bone-marrow-transplant..pdf',
      topics: ['Data Science', 'Machine Learning', 'R', 'Random Forest']
    },
    { 
      id: 9, 
      title: 'Programación de Procesadores Multinúcleo usando OpenMP', 
      description: 'aborda la programación de procesadores multinúcleo utilizando OpenMP en un entorno Linux, explorando técnicas de paralelización, sincronización de hilos, y optimización del rendimiento en cálculos complejos como la estimación del valor de Pi.', 
      imgSrc: '/pdfs/openmp.jpg', 
      pdfSrc: '/pdfs/Procesadores-multinucleo-openmp-PPC.pdf',
        topics: ['Linux', 'OpenMP', 'Parallel Computing']
    },
    { 
      id: 10, 
      title: 'Computación Paralela con Computadores de Memoria Distribuida usando MPI', 
      description: 'Se exploraron y aplicaron técnicas de computación paralela utilizando MPI en sistemas de memoria distribuida. Se modificaron y optimizaron programas para medir tiempos de ejecución, realizar estimaciones numéricas y analizar el rendimiento en diferentes configuraciones de procesos. La práctica incluyó ejercicios que abarcaron desde la modificación básica de programas hasta la ejecución paralela en múltiples PCs.', 
      imgSrc: '/pdfs/MPI.jpg', 
      pdfSrc: '/pdfs/MPI--ASSB.pdf',
        topics: ['C', 'Linux', 'gnuplot', 'Open MPI']
    },
  ];

  const handleOpenPdf = (pdfSrc) => {
    window.open(pdfSrc, '_blank'); // Abre el PDF en una nueva pestaña
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Proyectos realizados</h1>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.imgSrc} alt={`Proyecto ${project.id}`} className="project-image" />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-topics">
                {project.topics && project.topics.map((topic, index) => (
                  <span key={index} className="topic">• {topic}</span>
                ))}
              </div>
            </div>
            <button className="home-button" onClick={() => handleOpenPdf(project.pdfSrc)}>
              Ver PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

