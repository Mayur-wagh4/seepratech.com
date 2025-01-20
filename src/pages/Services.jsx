import React from 'react';
import ServiceList from '../components/services/ServiceList';
import { SERVICES } from '../constants/content';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <ServiceList services={SERVICES} />
    </div>
  );
};

export default Services;
