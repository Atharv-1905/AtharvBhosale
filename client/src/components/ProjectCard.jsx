// client/src/components/ProjectCard.jsx

import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {/* HERE'S THE NEW PART:
        We check if project.imageUrl exists. If it does,
        we create an img tag.
      */}
      {project.imageUrl && (
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="project-image" 
        />
      )}

      {/* The rest of the card stays the same */}
      <div className="project-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
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