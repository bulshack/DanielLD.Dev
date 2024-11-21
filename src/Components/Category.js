// src/components/Category.js

import React, { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import './Category.css';
import { motion, LayoutGroup } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import chevron icons

const Category = ({ category }) => {
  const { title, projects } = category;
  const gridRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [supportsHover, setSupportsHover] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null); // Selected project for modal

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover)');
    setSupportsHover(hoverQuery.matches);

    const handleHoverChange = (e) => {
      setSupportsHover(e.matches);
    };

    if (hoverQuery.addEventListener) {
      hoverQuery.addEventListener('change', handleHoverChange);
    } else if (hoverQuery.addListener) {
      // For Safari and older browsers
      hoverQuery.addListener(handleHoverChange);
    }

    return () => {
      if (hoverQuery.removeEventListener) {
        hoverQuery.removeEventListener('change', handleHoverChange);
      } else if (hoverQuery.removeListener) {
        hoverQuery.removeListener(handleHoverChange);
      }
    };
  }, []);

  const updateScrollButtons = () => {
    if (!gridRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    updateScrollButtons();

    grid.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      grid.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  // Custom smooth scrolling function
  const smoothScroll = (element, to, duration) => {
    const start = element.scrollLeft;
    const change = to - start;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      element.scrollLeft = start + change * easeInOutQuad(progress);
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const scrollLeftHandler = () => {
    if (!gridRef.current) return;
    const scrollAmount = -gridRef.current.clientWidth * 0.9;
    const targetPosition = gridRef.current.scrollLeft + scrollAmount;
    smoothScroll(gridRef.current, targetPosition, 500);
  };

  const scrollRightHandler = () => {
    if (!gridRef.current) return;
    const scrollAmount = gridRef.current.clientWidth * 0.9;
    const targetPosition = gridRef.current.scrollLeft + scrollAmount;
    smoothScroll(gridRef.current, targetPosition, 500);
  };

  const shouldShowButtons = isHovered || !supportsHover;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <div className="category">
      <h2 className="category-title">{title}</h2>
      <LayoutGroup>
        <div
          className={`project-grid-container ${selectedProject ? 'modal-open' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {canScrollLeft && (
            <motion.button
              className="scroll-button left"
              onClick={scrollLeftHandler}
              initial={{ opacity: 0 }}
              animate={{ opacity: shouldShowButtons ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              aria-label="Scroll Left"
            >
              <FaChevronLeft />
            </motion.button>
          )}
          <div className="project-grid" ref={gridRef}>
            {projects.map((project, index) => {
              const uniqueId = `${project.id}-${index}`;
              return (
                <ProjectCard
                  key={uniqueId}
                  project={project}
                  uniqueId={uniqueId}
                  setSelectedProject={setSelectedProject}
                />
              );
            })}
          </div>
          {canScrollRight && (
            <motion.button
              className="scroll-button right"
              onClick={scrollRightHandler}
              initial={{ opacity: 0 }}
              animate={{ opacity: shouldShowButtons ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              aria-label="Scroll Right"
            >
              <FaChevronRight />
            </motion.button>
          )}
        </div>
        {/* Render Single Modal */}
        <Modal
          project={selectedProject}
          uniqueId={
            selectedProject
              ? `${selectedProject.id}-${projects.findIndex((p) => p.id === selectedProject.id)}`
              : ''
          }
          isModalOpen={
            selectedProject
              ? `${selectedProject.id}-${projects.findIndex((p) => p.id === selectedProject.id)}`
              : ''
          }
          closeModal={() => setSelectedProject(null)}
        />
      </LayoutGroup>
    </div>
  );
};

export default Category;
