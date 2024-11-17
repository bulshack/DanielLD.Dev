// Modal.js

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCard.css'; // Reuse the same CSS for consistency
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

const Modal = ({ project, closeModal }) => {
  const imageUrl = project.image
    ? project.image.startsWith('http')
      ? project.image
      : project.image.startsWith('/')
      ? `${process.env.PUBLIC_URL}${project.image}`
      : `${process.env.PUBLIC_URL}/${project.image}`
    : '/default_image.jpg'; // Ensure this image exists in public

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={`modal-${project.id}`}
        >
          <motion.div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
            layoutId={`card-container-${project.id}`}
          >
            <span className="project-modal-close" onClick={closeModal}>
              &times;
            </span>
            {/* Modal Content */}
            <div className="modal-details">
              <motion.img
                src={imageUrl}
                alt={project.title}
                className="modal-image"
                layoutId={`card-image-${project.id}`}
              />
              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-description">{project.description}</p>
              {project.role && (
                <p className="modal-role">
                  <strong>Role:</strong> {project.role}
                </p>
              )}
              {project.contributions && (
                <p className="modal-contributions">
                  <strong>Contributions:</strong> {project.contributions}
                </p>
              )}
              {project.achievements && (
                <p className="modal-achievements">
                  <strong>Achievements:</strong> {project.achievements}
                </p>
              )}
              {project.technologies && (
                <div className="modal-technologies">
                  <h3>Technologies:</h3>
                  <div className="technologies-list">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="project-tech">
                        {techIcons[tech] || tech}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {project.tags && (
                <div className="modal-tags">
                  <h3>Tags:</h3>
                  <div className="tags-list">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project-button"
                >
                  Visit Project
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
