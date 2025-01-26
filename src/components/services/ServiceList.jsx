const ServiceList = ({ services }) => {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
      bg-[#0A192F] px-6 py-16 min-h-screen"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
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

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title} 
            description={service.description} 
            icon={service.icon} 
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;