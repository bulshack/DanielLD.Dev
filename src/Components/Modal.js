// src/components/Modal.js

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FocusLock from 'react-focus-lock';
import './Modal.css';
import MediaGallery from './MediaGallery'; // Import the MediaGallery component
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

// Optional: Import a default image for fallback
import defaultImage from '../Data/Images/default_image.png';

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
  Rider : <SiRider />,
  Github: <SiGithub />,
  VisualStudio: <SiVisualstudio />,  
  // Add more mappings as needed
};

const Modal = ({ project, uniqueId, isModalOpen, closeModal }) => {
  const hasGallery = project?.media?.length > 0 && project.showGallery !== false;
  const showVisitButton = project?.link && project.showVisitButton !== false;

  // Directly use the imported image path or fallback
  const imageUrl = project?.image || defaultImage;

  // Handle Esc key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [closeModal]);

  if (!project) return null; // Prevent rendering if no project

  return (
    <AnimatePresence>
      {isModalOpen === uniqueId && (
        <motion.div
          className="project-modal"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={`modal-${uniqueId}`}
          aria-modal="true"
          role="dialog"
          aria-labelledby={`modal-title-${uniqueId}`}
        >
          <FocusLock>
            <motion.div
              className="project-modal-content"
              onClick={(e) => e.stopPropagation()}
              layoutId={`card-container-${uniqueId}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="project-modal-close"
                onClick={closeModal}
                aria-label="Close Modal"
              >
                &times;
              </button>
              {/* Modal Content */}
              <div className="modal-details">
                <h2 className="modal-title" id={`modal-title-${uniqueId}`}>
                  {project.title}
                </h2>
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
                {/* Integrate MediaGallery */}
                {hasGallery && (
                  <MediaGallery media={project.media} title={project.title} />
                )}
                {/* Visit Project Button */}
                {showVisitButton && (
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
          </FocusLock>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
