import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../constants/content';
import ServiceCard from '../services/ServiceCard';

const FeaturedServices = () => {
  const [services, setServices] = useState(SERVICES);

  return (
    <section className="relative py-16 bg-[#0A192F] overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              x: [
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight, 
                Math.random() * window.innerHeight
              ],
              opacity: [0, 0.3, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute w-1 h-1 bg-white/50 rounded-full"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl mt-4 md:text-6xl font-extrabold leading-tight 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-400 to-purple-600 
          text-center mb-12"
        >
          Our Services
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100
                  }
                }
              }}
            >
              <ServiceCard 
                title={service.title} 
                description={service.description} 
                icon={service.icon} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;