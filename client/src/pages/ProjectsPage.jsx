// client/src/pages/ProjectsPage.jsx
import React from 'react';
import ProjectList from '../components/ProjectList'; // Import the component

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      {/* We can move the "My Portfolio Projects" H1 from
          ProjectList.jsx to here if we want.
          Let's do that.
      */}
      <h1 style={{ textAlign: 'center' }}>My Projects</h1>
      <ProjectList />
    </div>
  );
};

export default ProjectsPage;