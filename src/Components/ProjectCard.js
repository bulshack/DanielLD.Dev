// src/components/ProjectCard.js

import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';
import {
  FaReact,
  FaCss3Alt,
  FaJsSquare,
} from 'react-icons/fa';
import {
  SiUnity,
  SiCsharp,
  SiGodotengine,
  SiCplusplus,
  SiFigma,
  SiJira,
  SiConfluence,
  SiRider,
  SiGithub,
  SiVisualstudio,
} from 'react-icons/si';

// Mapea los nombres de tecnologías a los íconos correspondientes
const techIcons = {
  React: <FaReact />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJsSquare />,
  Unity: <SiUnity />,
  'C#': <SiCsharp />,
  'C++': <SiCplusplus />,
  Godot: <SiGodotengine />,
  Figma: <SiFigma />,
  Jira: <SiJira />,
  Confluence: <SiConfluence />,
  Rider: <SiRider />,
  Github: <SiGithub />,
  VS: <SiVisualstudio />,  
  // Añade más mapeos según sea necesario
};

// Definir variantes para los íconos de tecnologías
const techVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: [0, 10, -10, 10, -10, 0],
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

const ProjectCard = ({ project, uniqueId, setSelectedProject }) => {
  const openModal = () => {
    console.log(`Opening modal for ${uniqueId}`);
    setSelectedProject(project); // Pasa directamente los datos del proyecto
  };

  const imageUrl = project.image
    ? project.image.startsWith('http')
      ? project.image
      : project.image.startsWith('/')
      ? `${process.env.PUBLIC_URL}${project.image}`
      : `${process.env.PUBLIC_URL}/${project.image}`
    : '/default_image.jpg'; // Asegúrate de que esta imagen exista en public

  return (
    <motion.div
      className="project-card"
      onClick={openModal}
      layoutId={`card-container-${uniqueId}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter') openModal();
      }}
    >
      <motion.img
        src={imageUrl}
        alt={project.title}
        className="project-image"
        layoutId={`card-image-${uniqueId}`}
        loading="lazy"
      />
      <div className="project-overlay">
        <h3 className="project-title">{project.title}</h3>
        {project.company && <p className="project-company">{project.company}</p>}
        {project.technologies && (
          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="project-tech"
                variants={techVariants}
                initial="initial"
                whileHover="hover"
              >
                {techIcons[tech] || tech}
                <span>{tech}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
