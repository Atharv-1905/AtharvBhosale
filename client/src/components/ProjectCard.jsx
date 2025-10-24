// client/src/components/ProjectCard.jsx

import React from 'react';

// We pass 'project' in as a prop
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
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
  );
};

export default ProjectCard;