import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-32 md:py-48 flex items-center">
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Hero Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Transforming Ideas Into Innovative Tech Solutions
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
          At <strong>Seepratech</strong>, we specialize in building seamless web and mobile solutions that fuel business growth. Empower your brand with our cloud and AI-powered technologies.
        </p>

        {/* CTA Button */}
        <div className="animate__animated animate__fadeIn animate__delay-3s">
        <Link to="/contact">
          <Button onClick={() => console.log('Get Started clicked')}>Get Started</Button>
        </Link>
        </div>
      </div>

      {/* Subtle Animated Background */}
      <div className="absolute inset-0 bg-opacity-20 bg-gradient-to-r from-gray-700 via-gray-800 to-black z-0 animate__animated animate__fadeIn animate__delay-4s"></div>
    </div>
  );
};

export default Hero;
