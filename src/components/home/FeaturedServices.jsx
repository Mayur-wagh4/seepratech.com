import React from 'react';
import ServiceCard from '../services/ServiceCard';

const FeaturedServices = () => {
  const services = [
    { title: 'App Development', description: 'Custom mobile applications for iOS and Android' },
    { title: 'Web Development', description: 'Responsive and scalable web applications' },
    { title: 'Cloud Services', description: 'Comprehensive cloud solutions for your business' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
