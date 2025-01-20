import React from 'react';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Seepratech</h1>
        <p className="text-xl mb-8">Innovative App, Web, and Cloud Solutions for Your Business</p>
        <Button onClick={() => console.log('Get Started clicked')}>Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
