// client/src/components/ProjectList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard'; // Import the new card component

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
     axios.get(`${API_URL}/api/projects`)
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading projects...</h2>;
  }

  return (
    <div className="project-list">
      
      {/* Now we map over the projects and render a ProjectCard
        component for each one, passing the project data as a prop.
      */}
      {projects.map(project => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;