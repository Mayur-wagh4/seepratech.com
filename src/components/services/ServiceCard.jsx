import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Card from '../common/Card';

const ServiceCard = ({ title, description, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.2
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="w-full h-full group"
    >
      <Card 
        className="text-center p-6 h-full flex flex-col items-center justify-between 
        bg-white/5 backdrop-blur-xl border border-white/10 
        rounded-2xl overflow-hidden relative 
        transition-all duration-300 
        hover:border-blue-500/30 
        hover:shadow-2xl hover:shadow-blue-500/20"
      >
        {/* Animated Background Effect */}
        <div 
          className="absolute inset-0 
          bg-gradient-to-br from-[#1E293B]/20 
          to-[#0F172A]/20 opacity-50 
          transition-all duration-300 
          group-hover:opacity-70 -z-10"
        />

        {/* Floating Icon */}
        <motion.div 
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="mb-4 w-16 h-16 rounded-full flex items-center justify-center"
        >
          <img 
            src={icon} 
            alt={title} 
            className="w-14 h-14 object-contain 
            transition-transform duration-300 
            group-hover:scale-110 
            drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]"
          />
        </motion.div>

        <div className="relative z-10">
          <h3 
            className="text-xl font-bold mb-3 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-400 to-purple-600 
            transition-all duration-300 
            group-hover:from-blue-500 group-hover:to-purple-700"
          >
            {title}
          </h3>
          <p 
            className="text-gray-300 text-sm leading-relaxed 
            transition-colors duration-300 
            group-hover:text-white"
          >
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;