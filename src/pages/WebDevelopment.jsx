import { motion } from "framer-motion";
import {
  ArrowRight,
  Badge,
  CheckCircle,
  Chrome,
  Clock,
  Code,
  Database,
  DollarSign,
  Globe,
  HelpCircle,
  LayoutGrid,
  MessageCircle,
  Palette,
  Search,
  Shield,
  Smartphone,
  Star,
  Users
} from "lucide-react";
import React, { useState } from "react";
import Button from "../components/common/Button.jsx";

const WebDevelopment = () => {
  const [activeProcess, setActiveProcess] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  const heroContent = {
    title: "Transform Your Digital Presence",
    subtitle: "Award-winning Web Development & Design Studio",
    description: "We craft exceptional digital experiences that drive growth, engage users, and deliver measurable results for businesses worldwide.",
    stats: [
      { value: "500+", label: "Projects Completed" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "250+", label: "Happy Clients" },
      { value: "15+", label: "Industry Awards" }
    ]
  };

  const processSteps = [
    {
      icon: <Users className="text-blue-400" size={32} />,
      title: "Discovery & Strategy",
      description: "Deep dive into your business goals, target audience, and market positioning to create a comprehensive digital strategy.",
      subSteps: [
        "Stakeholder Interviews",
        "Market Research",
        "Competitor Analysis",
        "User Persona Development",
        "Project Scope Definition"
      ]
    },
    {
      icon: <Palette className="text-purple-400" size={32} />,
      title: "Design & Prototyping",
      description: "Creating intuitive, visually stunning interfaces that align with your brand and engage your users.",
      subSteps: [
        "Wireframing",
        "UI/UX Design",
        "Interactive Prototypes",
        "Brand Integration",
        "Usability Testing"
      ]
    },
    {
      icon: <Code className="text-green-400" size={32} />,
      title: "Development",
      description: "Building robust, scalable solutions using cutting-edge technologies and best practices.",
      subSteps: [
        "Frontend Development",
        "Backend Architecture",
        "Database Design",
        "API Integration",
        "Security Implementation"
      ]
    },
    {
      icon: <Star className="text-yellow-400" size={32} />,
      title: "Testing & Optimization",
      description: "Rigorous testing and optimization to ensure peak performance and user satisfaction.",
      subSteps: [
        "Performance Testing",
        "Cross-browser Testing",
        "Security Audits",
        "SEO Optimization",
        "Load Testing"
      ]
    },
    {
      icon: <Globe className="text-red-400" size={32} />,
      title: "Launch & Support",
      description: "Smooth deployment and ongoing support to ensure your digital success.",
      subSteps: [
        "Deployment Strategy",
        "Performance Monitoring",
        "24/7 Support",
        "Regular Updates",
        "Analytics Setup"
      ]
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      tools: [
        { name: "React", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Vue.js", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Angular", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "Next.js", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "TypeScript", icon: "/api/placeholder/40/40", level: "Expert" }
      ]
    },
    {
      category: "Backend",
      tools: [
        { name: "Node.js", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Python", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Java", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "Go", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "PHP", icon: "/api/placeholder/40/40", level: "Expert" }
      ]
    },
    {
      category: "Database",
      tools: [
        { name: "MongoDB", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "PostgreSQL", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "MySQL", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Redis", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "Elasticsearch", icon: "/api/placeholder/40/40", level: "Advanced" }
      ]
    }
  ];

  const expertise = [
    {
      icon: <LayoutGrid className="text-blue-400" size={32} />,
      title: "UI/UX Excellence",
      description: "Creating intuitive interfaces that delight users and drive engagement through research-backed design decisions.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Usability Testing",
        "Interface Design",
        "User Journey Mapping",
        "Accessibility Standards"
      ]
    },
    {
      icon: <Chrome className="text-green-400" size={32} />,
      title: "Web Applications",
      description: "Building powerful, scalable web applications that solve complex business challenges.",
      features: [
        "Custom Web Apps",
        "Enterprise Solutions",
        "API Development",
        "Cloud Integration",
        "Real-time Features",
        "Payment Systems"
      ]
    },
    {
      icon: <Smartphone className="text-purple-400" size={32} />,
      title: "Mobile Solutions",
      description: "Developing responsive and progressive web apps that provide seamless mobile experiences.",
      features: [
        "Progressive Web Apps",
        "Mobile-First Design",
        "Cross-platform Solutions",
        "Native App Integration",
        "Offline Capabilities",
        "Push Notifications"
      ]
    },
    {
      icon: <Database className="text-yellow-400" size={32} />,
      title: "Backend Systems",
      description: "Architecting robust backend systems that power your digital infrastructure.",
      features: [
        "API Development",
        "Database Design",
        "Cloud Architecture",
        "Security Implementation",
        "Performance Optimization",
        "Scalability Planning"
      ]
    },
    {
      icon: <Search className="text-red-400" size={32} />,
      title: "Digital Marketing",
      description: "Optimizing your digital presence for maximum visibility and engagement.",
      features: [
        "SEO Optimization",
        "Performance Marketing",
        "Analytics Integration",
        "Conversion Optimization",
        "Content Strategy",
        "Social Media Integration"
      ]
    },
    {
      icon: <Shield className="text-indigo-400" size={32} />,
      title: "Security & Compliance",
      description: "Ensuring your digital assets are protected and compliant with industry standards.",
      features: [
        "Security Audits",
        "GDPR Compliance",
        "Data Protection",
        "SSL Implementation",
        "Access Control",
        "Regular Updates"
      ]
    }
  ];

  const portfolio = [
    {
      title: "E-commerce Platform",
      category: "Web App",
      image: "/api/placeholder/600/400",
      description: "A full-scale e-commerce platform with advanced features and seamless user experience.",
      metrics: {
        conversionIncrease: "150%",
        userSatisfaction: "92%",
        bounceRateReduction: "45%",
        revenueGrowth: "200%"
      },
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "Banking Dashboard",
      category: "FinTech",
      image: "/api/placeholder/600/400",
      description: "Modern banking interface with real-time data processing and advanced security features.",
      metrics: {
        userEfficiency: "200%",
        errorReduction: "75%",
        customerSatisfaction: "95%",
        processAutomation: "85%"
      },
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      title: "Healthcare Platform",
      category: "Healthcare",
      image: "/api/placeholder/600/400",
      description: "HIPAA-compliant healthcare platform connecting patients with providers.",
      metrics: {
        patientEngagement: "180%",
        appointmentEfficiency: "250%",
        providerSatisfaction: "90%",
        operationalCosts: "-40%"
      },
      technologies: ["Angular", "Java", "Oracle", "Azure"]
    },
    {
      title: "Real Estate Portal",
      category: "Real Estate",
      image: "/api/placeholder/600/400",
      description: "Advanced property search platform with virtual tours and AI-powered recommendations.",
      metrics: {
        leadGeneration: "300%",
        userRetention: "85%",
        searchEfficiency: "200%",
        conversionRate: "125%"
      },
      technologies: ["Next.js", "GraphQL", "Elasticsearch", "GCP"]
    },
    {
      title: "Learning Management System",
      category: "Education",
      image: "/api/placeholder/600/400",
      description: "Comprehensive e-learning platform with interactive content and progress tracking.",
      metrics: {
        studentEngagement: "220%",
        completionRate: "95%",
        teacherEfficiency: "180%",
        costReduction: "60%"
      },
      technologies: ["React", "Python", "MongoDB", "Firebase"]
    },
    {
      title: "Supply Chain Management",
      category: "Enterprise",
      image: "/api/placeholder/600/400",
      description: "End-to-end supply chain management system with real-time tracking and analytics.",
      metrics: {
        inventoryAccuracy: "99%",
        processEfficiency: "300%",
        costSavings: "45%",
        deliveryStar: "200%"
      },
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Kubernetes"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "/api/placeholder/80/80",
      content: "The team's attention to detail and user-centric approach transformed our product. Our user engagement increased by 200% after the redesign.",
      rating: 5,
      company: {
        name: "TechStart",
        logo: "/api/placeholder/120/40"
      }
    },
    {
      name: "Michael Chen",
      role: "Product Manager, HealthTech",
      image: "/api/placeholder/80/80",
      content: "Their design system implementation has revolutionized our development process. We now launch features 3x faster with consistent quality.",
      rating: 5,
      company: {
        name: "HealthTech",
        logo: "/api/placeholder/120/40"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, E-commerce Giant",
      image: "/api/placeholder/80/80",
      content: "The UI/UX improvements led to a significant increase in our conversion rates. Their data-driven approach to design really pays off.",
      rating: 5,
      company: {
        name: "E-commerce Giant",
        logo: "/api/placeholder/120/40"
      }
    }
  ];

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
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Our Development Philosophy</h2>
          <p className="text-xl text-gray-300">
            We believe in creating sustainable, scalable solutions that drive real business value through innovation and technical excellence.
          </p>
        </motion.div>
  
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Code className="text-blue-400" size={32} />,
              title: "Clean Code",
              description: "We write maintainable, well-documented code that stands the test of time."
            },
            {
              icon: <Star className="text-green-400" size={32} />,
              title: "Performance First",
              description: "Optimization is not an afterthought - it's built into everything we create."
            },
            {
              icon: <Users className="text-purple-400" size={32} />,
              title: "User Centered",
              description: "Every decision we make is focused on delivering the best possible user experience."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
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
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
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
  
  const renderExpertise = () => (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Our Expertise
        </motion.h2>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-blue-400" />
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
  const renderContact = () => (
    <section className="py-20 px-6 bg-white/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-8">Start Your Project</h2>
          <p className="text-gray-300 text-center mb-12">Ready to transform your digital presence? Let's discuss your project and create something extraordinary together.</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MessageCircle size={20} />
                  <span>contact@webdev.studio</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock size={20} />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe size={20} />
                  <span>Worldwide Service</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock size={20} />
                  <span>Average Response Time: 4 Hours</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <DollarSign size={20} />
                  <span>Custom Quotes Based on Requirements</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={20} />
                  <span>Free Initial Consultation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300">
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const renderFAQ = () => (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              question: "What is your development process?",
              answer: "Our development process follows an agile methodology with 5 key phases: Discovery & Strategy, Design & Prototyping, Development, Testing & Optimization, and Launch & Support. Each phase involves close collaboration with our clients."
            },
            {
              question: "How long does a typical project take?",
              answer: "Project timelines vary based on complexity and requirements. A typical web application takes 8-12 weeks from concept to launch. We provide detailed timelines during our initial consultation."
            },
            {
              question: "Do you provide ongoing support?",
              answer: "Yes, we offer comprehensive support and maintenance packages to ensure your application runs smoothly post-launch. This includes regular updates, security patches, and performance monitoring."
            },
            {
              question: "What technologies do you use?",
              answer: "We use modern, proven technologies like React, Node.js, Python, and cloud services from AWS/Google Cloud. Our stack is chosen based on project requirements and scalability needs."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-3 flex items-start gap-3">
                <HelpCircle size={24} className="text-blue-400 flex-shrink-0" />
                {item.question}
              </h3>
              <p className="text-gray-300 pl-9">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Add a timeline of process steps that animates as you scroll
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#1a1c2e] to-gray-900">
      {renderHero()}
      {renderProcessTimeline()}
      {renderTechnologies()}
      {renderPhilosophy()}
      {renderPortfolio()}
      {renderTestimonials()}
      {renderExpertise()}
      {renderFAQ()}
      {renderContact()}
    </div>
  );
};

export default WebDevelopment;