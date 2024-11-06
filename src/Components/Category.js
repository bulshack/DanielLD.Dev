import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import './Portfolio.css';

const Category = ({ category }) => {
  const categoryRef = useRef(null);

  const scrollLeft = () => {
    if (categoryRef.current) {
      const container = categoryRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (categoryRef.current) {
      const container = categoryRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
        {category.projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Category;