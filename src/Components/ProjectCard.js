// ProjectCard.js

import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open and close modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="project-card" onClick={openModal}>
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description.substring(0, 100)}...</p>
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
      </div>

      {/* Modal for detailed view */}
      {isModalOpen && (
        <div className="project-modal" onClick={closeModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="project-modal-close" onClick={closeModal}>
              &times;
            </span>
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} className="modal-image" />
            <p>{project.description}</p>
            {/* Technologies */}
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
        </div>
      )}
    </>
  );
};

export default ProjectCard;