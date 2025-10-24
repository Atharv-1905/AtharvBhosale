// client/src/components/ProjectCard.jsx

import React from 'react';
import { motion } from 'framer-motion'; // Import motion

const ProjectCard = ({ project }) => {
  
  // Animation settings for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start invisible and 50px down
    visible: { opacity: 1, y: 0 },  // Animate to visible and in-place
  };

  return (
    // Wrap your card in a motion.div
    <motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible" // Animates when it scrolls into view
      viewport={{ once: true, amount: 0.3 }} // Animate once, when 30% is visible
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="project-image"
        />
      )}

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
    </motion.div>
  );
};

export default ProjectCard;