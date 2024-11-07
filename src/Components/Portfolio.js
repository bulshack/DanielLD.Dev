import React from 'react';
import Category from './Category';
import './Portfolio.css';
import { categories } from '../Data/ProjectsData.js';

const Portfolio = () => {
  return (
    <div className="portfolio">
      {categories.map((category) => (
        <Category key={category.title} category={category} />
      ))}
    </div>
  );
};

export default Portfolio;