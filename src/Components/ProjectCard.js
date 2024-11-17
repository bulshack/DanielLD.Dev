// ProjectCard.js

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
} from 'react-icons/si';

// Map technology names to icons
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
  // Add more mappings as needed
};

const ProjectCard = ({ project, uniqueId, setSelectedProject }) => {
  const openModal = () => {
    console.log(`Opening modal for ${uniqueId}`);
    setSelectedProject(project); // Pass the project data directly
  };

  const imageUrl = project.image
    ? project.image.startsWith('http')
      ? project.image
      : project.image.startsWith('/')
      ? `${process.env.PUBLIC_URL}${project.image}`
      : `${process.env.PUBLIC_URL}/${project.image}`
    : '/default_image.jpg'; // Ensure this image exists in public

  return (
    <motion.div
      className="project-card"
      onClick={openModal}
      layoutId={`card-container-${uniqueId}`}
      whileHover={{ scale: 1.05 }}
    >
      <motion.img
        src={imageUrl}
        alt={project.title}
        className="project-image"
        layoutId={`card-image-${uniqueId}`}
      />
      <div className="project-overlay">
        <h3 className="project-title">{project.title}</h3>
        {project.company && <p className="project-company">{project.company}</p>}
        {project.technologies && (
          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <div key={index} className="project-tech">
                {techIcons[tech] || tech}
                <span>{tech}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
