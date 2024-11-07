// Category.js

import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import './Portfolio.css';

const Category = ({ category }) => {
  const categoryRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (categoryRef.current) {
      const scrollAmount = categoryRef.current.clientWidth;
      categoryRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (categoryRef.current) {
      const scrollAmount = categoryRef.current.clientWidth;
      categoryRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Limit the projects displayed using maxProjects
  const displayedProjects = category.projects.slice(0, category.maxProjects);

  return (
    <div className="category">
      <h2 className="category-title">{category.title}</h2>

      <div className="scroll-buttons">
        <button onClick={scrollLeft} className="scroll-button left">
          {'<'}
        </button>
        <button onClick={scrollRight} className="scroll-button right">
          {'>'}
        </button>
      </div>

      <div className="project-grid" ref={categoryRef}>
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Category;