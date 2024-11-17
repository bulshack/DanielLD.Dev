// src/components/Modal.js

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import from framer-motion
import FocusLock from 'react-focus-lock'; // For accessibility
import './Modal.css'; // Ensure this path is correct
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
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import { Navigation, Pagination, A11y } from 'swiper/modules'; // Import Swiper modules from 'swiper/modules'
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

const Modal = ({ project, uniqueId, isModalOpen, closeModal }) => {
  const hasGallery = project && project.media && project.media.length > 0;

  const imageUrl = project
    ? project.image.startsWith('http')
      ? project.image
      : `${process.env.PUBLIC_URL}/${project.image}`
    : '/default_image.jpg'; // Ensure this image exists in public

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
              {hasGallery ? (
                // Layout when gallery is present
                <div className="modal-content-wrapper">
                  {/* Left Side: Image and Gallery */}
                  <div className="modal-left">
                    {/* Main Image */}
                    <div className="modal-image-container">
                      <motion.img
                        src={imageUrl}
                        alt={project.title}
                        className="modal-image"
                        layoutId={`card-image-${uniqueId}`}
                        loading="lazy"
                      />
                    </div>

                    {/* Media Gallery */}
                    <Swiper
                      modules={[Navigation, Pagination, A11y]}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      a11y={{ enabled: true }}
                      className="modal-carousel"
                    >
                      {project.media.map((mediaItem, index) => (
                        <SwiperSlide key={index}>
                          {mediaItem.type === 'image' ? (
                            <img
                              src={
                                mediaItem.src.startsWith('http')
                                  ? mediaItem.src
                                  : `${process.env.PUBLIC_URL}/${mediaItem.src}`
                              }
                              alt={`${project.title} media ${index + 1}`}
                              className="gallery-image"
                              loading="lazy"
                            />
                          ) : mediaItem.type === 'video' ? (
                            <video
                              controls
                              src={
                                mediaItem.src.startsWith('http')
                                  ? mediaItem.src
                                  : `${process.env.PUBLIC_URL}/${mediaItem.src}`
                              }
                              className="gallery-video"
                              preload="metadata"
                            >
                              Your browser does not support the video tag.
                            </video>
                          ) : null}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Right Side: Details */}
                  <div className="modal-right">
                    {/* Project Details */}
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
              ) : (
                // Layout when no gallery is present
                <div className="modal-content-wrapper no-gallery">
                  {/* Main Image */}
                  <div className="modal-image-container">
                    <motion.img
                      src={imageUrl}
                      alt={project.title}
                      className="modal-image"
                      layoutId={`card-image-${uniqueId}`}
                      loading="lazy"
                    />
                  </div>

                  {/* Details Section */}
                  <div className="modal-details">
                    {/* Project Details */}
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
            </motion.div>
          </FocusLock>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
