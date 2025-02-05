import { motion } from 'framer-motion';
import { ArrowRight, Badge, Code, Command, Cpu, Globe, Layout, Rocket, Shield, Smartphone, Star, Zap } from 'lucide-react';
import React from 'react';
import Button from '../components/common/Button.jsx';

const MobileAppDevelopment = () => {
  const heroContent = {
    title: "Custom Mobile App Development",
    subtitle: "Native & Cross-Platform Mobile Solutions",
    description: "Create powerful, intuitive mobile applications that engage users and drive business growth across iOS and Android platforms.",
    stats: [
      { value: "200+", label: "Apps Launched" },
      { value: "15M+", label: "App Downloads" },
      { value: "4.8", label: "Average App Rating" },
      { value: "98%", label: "Client Satisfaction" }
    ]
  };

  const services = [
    {
      icon: <Smartphone className="text-blue-400" size={32} />,
      title: "Native App Development",
      description: "Platform-specific apps for iOS and Android.",
      features: [
        "iOS Development (Swift/SwiftUI)",
        "Android Development (Kotlin)",
        "Hardware Integration",
        "Platform-Specific Features"
      ]
    },
    {
      icon: <Globe className="text-green-400" size={32} />,
      title: "Cross-Platform Development",
      description: "Unified apps for multiple platforms.",
      features: [
        "React Native",
        "Flutter Development",
        "Code Reusability",
        "Consistent Experience"
      ]
    },
    {
      icon: <Cpu className="text-purple-400" size={32} />,
      title: "App Architecture",
      description: "Robust and scalable app architecture.",
      features: [
        "Clean Architecture",
        "State Management",
        "API Integration",
        "Data Persistence"
      ]
    }
  ];

  const processSteps = [
    {
      icon: <Layout className="text-blue-400" size={32} />,
      title: "Discovery & Design",
      description: "Understanding requirements and creating the app design.",
      subSteps: [
        "Requirement Analysis",
        "User Research",
        "UI/UX Design",
        "Wireframing",
        "Prototype Development"
      ]
    },
    {
      icon: <Code className="text-purple-400" size={32} />,
      title: "Development",
      description: "Building the core functionality and features.",
      subSteps: [
        "Architecture Setup",
        "Core Development",
        "Feature Implementation",
        "API Integration",
        "Local Testing"
      ]
    },
    {
      icon: <Shield className="text-green-400" size={32} />,
      title: "Testing & QA",
      description: "Ensuring app quality and performance.",
      subSteps: [
        "Unit Testing",
        "Integration Testing",
        "UI Testing",
        "Performance Testing",
        "Security Testing"
      ]
    },
    {
      icon: <Rocket className="text-yellow-400" size={32} />,
      title: "Deployment & Support",
      description: "Launching and maintaining the app.",
      subSteps: [
        "App Store Submission",
        "Play Store Publishing",
        "Analytics Integration",
        "Performance Monitoring",
        "Regular Updates"
      ]
    }
  ];

  const technologies = [
    {
      category: "iOS Development",
      tools: [
        { name: "Swift", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "SwiftUI", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Objective-C", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "Xcode", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "CocoaPods", icon: "/api/placeholder/40/40", level: "Advanced" }
      ]
    },
    {
      category: "Android Development",
      tools: [
        { name: "Kotlin", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Java", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Android Studio", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Jetpack Compose", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "Gradle", icon: "/api/placeholder/40/40", level: "Advanced" }
      ]
    },
    {
      category: "Cross-Platform",
      tools: [
        { name: "React Native", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Flutter", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Ionic", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "Firebase", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "GraphQL", icon: "/api/placeholder/40/40", level: "Advanced" }
      ]
    }
  ];

  const features = [
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: "High Performance",
      description: "Optimized for smooth performance and quick load times.",
      points: [
        "Native Code Optimization",
        "Efficient Resource Usage",
        "Smooth Animations",
        "Fast Load Times"
      ]
    },
    {
      icon: <Shield className="text-green-400" size={32} />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and stable performance.",
      points: [
        "Data Encryption",
        "Secure Authentication",
        "Regular Updates",
        "Crash Analytics"
      ]
    },
    {
      icon: <Command className="text-purple-400" size={32} />,
      title: "Rich Features",
      description: "Advanced features and seamless integrations.",
      points: [
        "Offline Support",
        "Push Notifications",
        "Social Integration",
        "Analytics tracking"
      ]
    }
  ];

  const portfolio = [
    {
      title: "Health & Fitness Tracker",
      category: "Healthcare",
      image: "/api/placeholder/600/400",
      description: "A comprehensive fitness tracking app with social features.",
      metrics: {
        downloads: "2M+",
        rating: "4.8",
        activeUsers: "500K",
        retention: "78%"
      },
      technologies: ["Swift", "HealthKit", "Firebase", "ML Kit"]
    },
    {
      title: "E-commerce Platform",
      category: "Retail",
      image: "/api/placeholder/600/400",
      description: "Feature-rich shopping app with AR product viewing.",
      metrics: {
        transactions: "1M+",
        conversion: "15%",
        userGrowth: "200%",
        satisfaction: "92%"
      },
      technologies: ["React Native", "Node.js", "AR Kit", "Stripe"]
    }
  ];

  const testimonials = [
    {
      name: "David Wilson",
      role: "Product Manager, HealthTech Inc",
      image: "/api/placeholder/80/80",
      content: "The mobile app exceeded our expectations in terms of performance and user engagement.",
      rating: 5,
      company: {
        name: "HealthTech Inc",
        logo: "/api/placeholder/120/40"
      }
    },
    {
      name: "Emily Chen",
      role: "CEO, RetailConnect",
      image: "/api/placeholder/80/80",
      content: "Their expertise in mobile development helped us achieve our digital transformation goals.",
      rating: 5,
      company: {
        name: "RetailConnect",
        logo: "/api/placeholder/120/40"
      }
    }
  ];

  const renderHero = () => (
    <section className="py-20 px-6">
      <div className="container mt-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl font-bold text-white mb-6">{heroContent.title}</h1>
          <p className="text-2xl text-gray-300 mb-12">{heroContent.subtitle}</p>
          <p className="text-xl text-gray-400 mb-12">{heroContent.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {heroContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );

  const renderServices = () => (
    <section className="py-20 px-6 bg-white/5">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Our Mobile Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <ArrowRight size={16} className="text-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderProcessTimeline = () => (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Development Process
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex gap-8 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className="w-1/2 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full">
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.subSteps.map((subStep, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        {subStep}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-1/2 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderTechnologies = () => (
    <section className="py-20 px-6 bg-white/5">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Technologies We Use
        </motion.h2>
  
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {technologies.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.tools.map((tool, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
                    <div>
                      <p className="text-white font-medium">{tool.name}</p>
                      <Badge variant="secondary">{tool.level}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderFeatures = () => (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          App Features & Capabilities
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <ArrowRight size={16} className="text-blue-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderPortfolio = () => (
    <section className="py-20 px-6 bg-white/5">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Featured Apps
        </motion.h2>
  
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolio.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <Badge className="mb-3">{project.category}</Badge>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(project.metrics).map(([key, value], i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-3">
                      <p className="text-blue-400 font-bold text-lg">{value}</p>
                      <p className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    </div>
                  ))}
                </div>
  
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderTestimonials = () => (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Client Testimonials
        </motion.h2>
  
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={16} />
                  ))}
                </div>
                <img src={testimonial.company.logo} alt={testimonial.company.name} className="h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderCTA = () => (
    <section className="py-20 px-6 bg-white/5">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create an exceptional mobile experience that your users will love.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {renderHero()}
      {renderServices()}
      {renderProcessTimeline()}
      {renderTechnologies()}
      {renderFeatures()}
      {renderPortfolio()}
      {renderTestimonials()}
      {renderCTA()}
    </div>
  );
};

export default MobileAppDevelopment;