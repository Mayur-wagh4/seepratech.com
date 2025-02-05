import { motion } from 'framer-motion';
import { ArrowRight, Badge, Code, Database, Globe, Shield, Star, Users } from 'lucide-react';
import React, { useState } from 'react';
import Button from '../components/common/Button.jsx';

const SoftwareEngineering = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  const heroContent = {
    title: "Crafting Robust Software Solutions",
    subtitle: "Expert Software Engineering for Scalable Systems",
    description: "We design and develop high-performance software systems that drive innovation and efficiency for businesses across industries.",
    stats: [
      { value: "300+", label: "Software Projects" },
      { value: "95%", label: "Client Retention" },
      { value: "10M+", label: "Users Supported" },
      { value: "20+", label: "Years of Experience" }
    ]
  };

  const processSteps = [
    {
      icon: <Users className="text-blue-400" size={32} />,
      title: "Requirement Analysis",
      description: "Understanding your business needs and defining project scope.",
      subSteps: [
        "Stakeholder Interviews",
        "Requirement Gathering",
        "Feasibility Study",
        "Technical Documentation",
        "Project Planning"
      ]
    },
    {
      icon: <Code className="text-purple-400" size={32} />,
      title: "System Design",
      description: "Architecting scalable and maintainable software systems.",
      subSteps: [
        "System Architecture",
        "Database Design",
        "API Specification",
        "Prototyping",
        "Technical Stack Selection"
      ]
    },
    {
      icon: <Database className="text-green-400" size={32} />,
      title: "Development",
      description: "Building robust and efficient software solutions.",
      subSteps: [
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "Unit Testing",
        "Code Reviews"
      ]
    },
    {
      icon: <Shield className="text-yellow-400" size={32} />,
      title: "Testing & QA",
      description: "Ensuring software quality through rigorous testing.",
      subSteps: [
        "Functional Testing",
        "Performance Testing",
        "Security Audits",
        "Bug Fixing",
        "User Acceptance Testing"
      ]
    },
    {
      icon: <Globe className="text-red-400" size={32} />,
      title: "Deployment & Support",
      description: "Smooth deployment and ongoing maintenance.",
      subSteps: [
        "CI/CD Pipeline Setup",
        "Cloud Deployment",
        "Monitoring & Logging",
        "User Training",
        "Post-Launch Support"
      ]
    }
  ];

  const technologies = [
    {
      category: "Programming Languages",
      tools: [
        { name: "JavaScript", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Python", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Java", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "C#", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "Go", icon: "/api/placeholder/40/40", level: "Intermediate" }
      ]
    },
    {
      category: "Frameworks",
      tools: [
        { name: "React", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Node.js", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Django", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "Spring Boot", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: ".NET", icon: "/api/placeholder/40/40", level: "Intermediate" }
      ]
    },
    {
      category: "Databases",
      tools: [
        { name: "MySQL", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "PostgreSQL", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "MongoDB", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "Redis", icon: "/api/placeholder/40/40", level: "Intermediate" },
        { name: "Elasticsearch", icon: "/api/placeholder/40/40", level: "Intermediate" }
      ]
    }
  ];

  const expertise = [
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: "System Architecture",
      description: "Designing scalable and maintainable software architectures.",
      features: [
        "Microservices Design",
        "API Development",
        "Cloud Integration",
        "Performance Optimization"
      ]
    },
    {
      icon: <Database className="text-green-400" size={32} />,
      title: "Database Solutions",
      description: "Building efficient and secure database systems.",
      features: [
        "SQL & NoSQL Databases",
        "Data Migration",
        "Backup & Recovery",
        "Data Security"
      ]
    },
    {
      icon: <Shield className="text-purple-400" size={32} />,
      title: "Security & Compliance",
      description: "Ensuring your software meets industry security standards.",
      features: [
        "Security Audits",
        "GDPR Compliance",
        "Encryption",
        "Access Control"
      ]
    }
  ];

  const portfolio = [
    {
      title: "Enterprise Resource Planning",
      category: "Enterprise Software",
      image: "/api/placeholder/600/400",
      description: "A comprehensive ERP system for managing business operations.",
      metrics: {
        efficiencyIncrease: "200%",
        costSavings: "30%",
        userSatisfaction: "95%",
        processAutomation: "80%"
      },
      technologies: ["Java", "Spring Boot", "MySQL", "AWS"]
    },
    {
      title: "Healthcare Management System",
      category: "Healthcare",
      image: "/api/placeholder/600/400",
      description: "A HIPAA-compliant system for managing patient records.",
      metrics: {
        patientEngagement: "180%",
        appointmentEfficiency: "250%",
        providerSatisfaction: "90%",
        operationalCosts: "-40%"
      },
      technologies: ["Python", "Django", "PostgreSQL", "Azure"]
    }
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "CTO, TechCorp",
      image: "/api/placeholder/80/80",
      content: "The team delivered a robust and scalable solution that exceeded our expectations.",
      rating: 5,
      company: {
        name: "TechCorp",
        logo: "/api/placeholder/120/40"
      }
    },
    {
      name: "Jane Smith",
      role: "Product Manager, HealthTech",
      image: "/api/placeholder/80/80",
      content: "Their expertise in system architecture transformed our product.",
      rating: 5,
      company: {
        name: "HealthTech",
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

  const renderProcessTimeline = () => (
    <section className="py-20 px-6 bg-white/5">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Our Development Process
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
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Technologies We Master
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

  const renderPhilosophy = () => (
    <section className="py-20 px-6 bg-white/5">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Our Philosophy
        </motion.h2>
  
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            At our core, we believe in delivering software solutions that are not only functional but also scalable, maintainable, and secure. Our approach is rooted in agile methodologies, continuous integration, and a commitment to quality.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300"
          >
            We strive to create software that empowers businesses, enhances user experiences, and drives innovation.
          </motion.p>
        </div>
      </div>
    </section>
  );

  const renderPortfolio = () => (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Featured Projects
        </motion.h2>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Software?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you build robust, scalable software solutions that drive your business forward.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {renderHero()}
      {renderProcessTimeline()}
      {renderTechnologies()}
      {renderPhilosophy()}
      {renderPortfolio()}
      {renderTestimonials()}
      {renderCTA()}
    </div>
  );
};

export default SoftwareEngineering;