// Portfolio.js

import React from 'react';
import { projects } from '../Data/ProjectsData.js';
import Category from './Category';
import './Portfolio.css';

const Portfolio = () => {
  // Function to group projects by tags
  const groupProjectsByTags = (projects) => {
    const tagGroups = {};

    projects.forEach((project) => {
      if (project.tags && Array.isArray(project.tags)) {
        project.tags.forEach((tag) => {
          if (!tagGroups[tag]) {
            tagGroups[tag] = [];
          }
          // Avoid duplicates
          tagGroups[tag].push(project);
        });
      }
    });

    return tagGroups;
  };

  const projectsByTag = groupProjectsByTags(projects);

  // Define the order of tags (categories)
  const tagOrder = [
    'Game Projects',
     'Mixed Reality Projects',
      '302 Interactive', 
      'Education'];

  return (
    <div className="portfolio">
      {/* Display categories in the order specified by tagOrder */}
      {tagOrder.map((tag) =>
        projectsByTag[tag] ? (
          <Category key={tag} category={{ title: tag, projects: projectsByTag[tag] }} />
        ) : null
      )}
      {/* Display any additional tags not in tagOrder */}
      {Object.keys(projectsByTag)
        .filter((tag) => !tagOrder.includes(tag))
        .map((tag) => (
          <Category key={tag} category={{ title: tag, projects: projectsByTag[tag] }} />
        ))}
    </div>
  );
};

export default Portfolio;
