// src/components/ServiceList.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { ROUTES } from '../../constants/routes'; // Import ROUTES
import ServiceCard from './ServiceCard'; // Import ServiceCard

const ServiceList = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#0A192F] px-6 py-16 min-h-screen">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service.id}
            to={ROUTES[service.title.toUpperCase().replace(/\s+/g, '_')]} // Map the title to a route
            className="group"
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
