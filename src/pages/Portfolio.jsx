import React from 'react';
import ProjectGrid from '../components/portfolio/ProjectGrid';
import { PORTFOLIO_PROJECTS } from '../constants/content';

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>
      <ProjectGrid projects={PORTFOLIO_PROJECTS} />
    </div>
  );
};

export default Portfolio;
