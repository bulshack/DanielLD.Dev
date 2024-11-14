// ProjectCard.js

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCard.css';

// Import icons from react-icons
import { FaReact, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiUnity, SiCsharp } from 'react-icons/si';

// Map technology names to icons
const techIcons = {
  React: <FaReact />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJsSquare />,
  Unity: <SiUnity />,
  'C#': <SiCsharp />,
  // Add more mappings as needed
};

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Project Card */}
      <motion.div
        className="project-card"
        onClick={openModal}
        layoutId={`card-container-${project.id}`}
        whileHover={{ scale: 1.05 }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="project-image"
          layoutId={`card-image-${project.id}`}
        />
        <div className="project-overlay">
          <h3 className="project-title">{project.title}</h3>
          {/* Technologies with Icons */}
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

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="project-modal"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="project-modal-content"
              onClick={(e) => e.stopPropagation()}
              layoutId={`card-container-${project.id}`}
            >
              <span className="project-modal-close" onClick={closeModal}>
                &times;
              </span>
              <motion.img
                src={project.image}
                alt={project.title}
                className="modal-image"
                layoutId={`card-image-${project.id}`}
              />
              <div className="modal-content-wrapper">
                {/* Project Title */}
                <h2 className="modal-title">{project.title}</h2>

                {/* Brief Description */}
                <p className="project-description">{project.description}</p>

                {/* Your Role */}
                {project.role && (
                  <p className="project-role">
                    <strong>Role:</strong> {project.role}
                  </p>
                )}

                {/* Your Contributions */}
                {project.contributions && (
                  <p className="project-contributions">
                    <strong>Contributions:</strong> {project.contributions}
                  </p>
                )}

                {/* Technologies Used */}
                {project.technologies && (
                  <div className="project-technologies">
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

                {/* Achievements */}
                {project.achievements && (
                  <p className="project-achievements">
                    <strong>Achievements:</strong> {project.achievements}
                  </p>
                )}

                {/* View Project Button */}
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
    </>
  );
};

export default ProjectCard;