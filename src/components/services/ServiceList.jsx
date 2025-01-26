import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceList = ({ services }) => {
  return (
    <div className="grid grid-cols-1 bg-white md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
      ))}
    </div>
  );
};

export default ServiceList;
