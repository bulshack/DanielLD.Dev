import React, { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectRow.css';

const ProjectRow = ({ projects }) => {
  const rowRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const scrollLeft = rowRef.current.scrollLeft;
    const maxScrollLeft = rowRef.current.scrollWidth - rowRef.current.clientWidth;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < maxScrollLeft);
  };

  useEffect(() => {
    const row = rowRef.current;

    const handleResize = () => {
      updateScrollButtons();
    };

    // Initial check
    updateScrollButtons();

    // Add event listeners
    row.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      row.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -rowRef.current.clientWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: rowRef.current.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className="project-row-container">
      {canScrollLeft && (
        <button className="scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>
      )}
      <div className="project-row" ref={rowRef}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {canScrollRight && (
        <button className="scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
      )}
    </div>
  );
};

export default ProjectRow;
