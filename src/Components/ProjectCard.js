// ProjectCard.js

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
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
          {/* Technologies Tags */}
          {project.technologies && (
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="project-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>

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
                <h2 className="modal-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                {/* Technologies Tags */}
                {project.technologies && (
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
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
