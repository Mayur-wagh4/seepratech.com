import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CloudIcon, RocketIcon, ChartLineIcon, ShieldIcon, 
  ArrowRightIcon, CodeIcon, DatabaseIcon 
} from "lucide-react";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const services = [
    { 
      icon: <CloudIcon className="text-blue-400" />, 
      title: "Cloud Native",
      description: "Scalable infrastructure beyond boundaries."
    },
    { 
      icon: <RocketIcon className="text-purple-400" />, 
      title: "AI Acceleration",
      description: "Intelligent solutions, transformative outcomes."
    },
    { 
      icon: <CodeIcon className="text-green-400" />, 
      title: "Custom Development",
      description: "Bespoke tech tailored to your vision."
    },
    { 
      icon: <DatabaseIcon className="text-red-400" />, 
      title: "Data Intelligence",
      description: "Insights that drive strategic decisions."
    }
  ];

  return (
    <motion.div 
      style={{ scale, opacity, y }}
      className="relative pt-[150px] pb-[50px] min-h-screen flex items-center 
      bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F] 
      text-white overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0
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
              opacity: [0, 0.5, 0],
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent 
              bg-gradient-to-r from-blue-300 via-purple-500 to-pink-400 leading-tight"
            >
              Innovate. Transform. Elevate.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Empowering businesses through revolutionary{" "}
              <span className="text-blue-300 font-semibold">Technology</span>, 
              intelligent{" "}
              <span className="text-purple-300 font-semibold">Solutions</span>, 
              and{" "}
              <span className="text-pink-300 font-semibold">Innovation</span>.
            </motion.p>

            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="flex items-center space-x-4 
                bg-white/5 p-4 rounded-xl backdrop-blur-sm 
                border border-white/10 hover:bg-white/10 
                transition-all group"
              >
                <div className="text-4xl group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 
                  bg-gradient-to-r from-blue-600 to-purple-600 
                  rounded-full text-white font-bold 
                  hover:from-blue-700 hover:to-purple-700 
                  transition-all shadow-lg shadow-blue-500/30"
                >
                  Start Your Journey <ArrowRightIcon size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated SVG */}
          <motion.div 
            variants={itemVariants}
            className="hidden md:flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="w-full max-w-md"
            >
              <img 
                src="/solution.svg" 
                alt="Technology Solutions" 
                className="w-full h-auto drop-shadow-[0_0_50px_rgba(99,102,241,0.3)]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [20, 0, 20]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 
        text-white/50 text-sm flex flex-col items-center"
      >
        <span>Scroll</span>
        <ArrowRightIcon className="rotate-90" size={20} />
      </motion.div>
    </motion.div>
  );
};

export default Hero;