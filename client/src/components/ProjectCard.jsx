// client/src/components/ProjectCard.jsx

import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {/* This is the image we just added */}
      {project.imageUrl && (
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="project-image" 
        />
      )}

      {/* This div wraps all the text content */}
      <div className="project-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        
        {/*
          HERE ARE THE LINKS:
          1. The GitHub link is always visible.
          2. The Live Demo link is conditional.
        */}
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          GitHub
        </a>
        
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;