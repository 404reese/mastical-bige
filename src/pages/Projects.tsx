import React from 'react';
import { Contact } from '../components/Contact';
import ProjectHero from '../components/ProjectHero';
import ProjectList from '../components/ProjectList';

const Projects = () => {
  return (
    <div className="w-full">
      <ProjectHero />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default Projects;
