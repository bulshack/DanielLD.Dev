import React, { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './Category.css';
import { motion } from 'framer-motion';

const Category = ({ category }) => {
  const gridRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [supportsHover, setSupportsHover] = useState(true);

  // State variables for arrow animations
  const [leftArrowAnimation, setLeftArrowAnimation] = useState('initial');
  const [rightArrowAnimation, setRightArrowAnimation] = useState('initial');

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
    const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const grid = gridRef.current;
    updateScrollButtons();

    grid.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      grid.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  const scrollLeft = () => {
    gridRef.current.scrollBy({
      left: -gridRef.current.clientWidth * 0.9,
      behavior: 'smooth',
    });
    setLeftArrowAnimation('clicked');
  };

  const scrollRight = () => {
    gridRef.current.scrollBy({
      left: gridRef.current.clientWidth * 0.9,
      behavior: 'smooth',
    });
    setRightArrowAnimation('clicked');
  };

  const shouldShowButtons = isHovered || !supportsHover;

  // Define the animation variants for the arrow icons
  const arrowVariants = {
    initial: { x: 0 },
    clicked: {
      x: [0, -5, 5, -5, 5, -3, 3, -1, 1, 0],
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="category">
      <h2 className="category-title">{category.title}</h2>
      <div
        className="project-grid-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {canScrollLeft && (
          <motion.button
            className="scroll-button left"
            onClick={() => {
              scrollLeft();
            }}
            initial={false}
            animate={{ opacity: shouldShowButtons ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span
              className="arrow"
              variants={arrowVariants}
              animate={leftArrowAnimation}
              onAnimationComplete={() => setLeftArrowAnimation('initial')}
            >
              &#10094;
            </motion.span>
          </motion.button>
        )}
        <div className="project-grid" ref={gridRef}>
          {category.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {canScrollRight && (
          <motion.button
            className="scroll-button right"
            onClick={() => {
              scrollRight();
            }}
            initial={false}
            animate={{ opacity: shouldShowButtons ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span
              className="arrow"
              variants={arrowVariants}
              animate={rightArrowAnimation}
              onAnimationComplete={() => setRightArrowAnimation('initial')}
            >
              &#10095;
            </motion.span>
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Category;
