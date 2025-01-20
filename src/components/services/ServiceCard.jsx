import React from 'react';
import Card from '../common/Card';

const ServiceCard = ({ title, description }) => {
  return (
    <Card className="text-center">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default ServiceCard;
