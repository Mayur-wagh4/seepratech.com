import React from 'react';
import Card from '../common/Card';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <Card className="overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
