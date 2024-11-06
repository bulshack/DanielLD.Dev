import React from 'react';
import Category from './Category';
import './Portfolio.css';

const categories = [
  {
    title: 'Your Next Watch',
    projects: Array.from({ length: 20 }, (_, i) => ({
      title: `Project ${i + 1}`,
      description: `Description for project ${i + 1}`,
      image: `path_to_image_${i + 1}`,
    })),
  },
  {
    title: 'New on Netflix',
    projects: Array.from({ length: 20 }, (_, i) => ({
      title: `Project ${i + 21}`,
      description: `Description for project ${i + 21}`,
      image: `path_to_image_${i + 21}`,
    })),
  },
  // Add more categories as needed
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </div>
  );
};

export default Portfolio;
