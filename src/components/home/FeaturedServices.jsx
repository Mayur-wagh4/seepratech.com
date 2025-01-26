import React, { useState } from 'react';
import { SERVICES } from '../../constants/content';
import ServiceCard from '../services/ServiceCard';
const FeaturedServices = () => {
  const [services, setServices] = useState(SERVICES);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className=" text-4xl mt-4 md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text text-white text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
