import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, Badge, ChartBar, Cloud, Lock, Monitor, Network, Server, Settings, Shield, Star } from 'lucide-react';
import React from 'react';
import Button from '../components/common/Button.jsx';

const CloudInfrastructure = () => {
  const heroContent = {
    title: "Enterprise Cloud Infrastructure Solutions",
    subtitle: "Scalable, Secure, and Reliable Cloud Architecture",
    description: "Transform your business with state-of-the-art cloud infrastructure designed for performance, security, and scalability.",
    stats: [
      { value: "99.99%", label: "Uptime Guaranteed" },
      { value: "500+", label: "Cloud Migrations" },
      { value: "40%", label: "Cost Reduction" },
      { value: "24/7", label: "Support Coverage" }
    ]
  };

  const services = [
    {
      icon: <Cloud className="text-blue-400" size={32} />,
      title: "Cloud Migration",
      description: "Seamless transition of your infrastructure to the cloud.",
      features: [
        "Assessment & Planning",
        "Data Migration",
        "Application Modernization",
        "Legacy System Integration"
      ]
    },
    {
      icon: <Shield className="text-green-400" size={32} />,
      title: "Security & Compliance",
      description: "Enterprise-grade security and regulatory compliance.",
      features: [
        "Identity Management",
        "Encryption Services",
        "Compliance Auditing",
        "Threat Detection"
      ]
    },
    {
      icon: <Settings className="text-purple-400" size={32} />,
      title: "Infrastructure Management",
      description: "Comprehensive infrastructure monitoring and optimization.",
      features: [
        "Resource Optimization",
        "Performance Monitoring",
        "Cost Management",
        "Capacity Planning"
      ]
    }
  ];

  const processSteps = [
    {
      icon: <Monitor className="text-blue-400" size={32} />,
      title: "Assessment",
      description: "Evaluating current infrastructure and requirements.",
      subSteps: [
        "Infrastructure Audit",
        "Workload Analysis",
        "Performance Benchmarking",
        "Cost Analysis",
        "Risk Assessment"
      ]
    },
    {
      icon: <ChartBar className="text-purple-400" size={32} />,
      title: "Planning",
      description: "Designing optimal cloud architecture solutions.",
      subSteps: [
        "Architecture Design",
        "Migration Strategy",
        "Resource Planning",
        "Security Framework",
        "Timeline Development"
      ]
    },
    {
      icon: <Network className="text-green-400" size={32} />,
      title: "Implementation",
      description: "Executing the migration and setup process.",
      subSteps: [
        "Environment Setup",
        "Data Migration",
        "Application Migration",
        "Security Implementation",
        "Performance Testing"
      ]
    },
    {
      icon: <AlertCircle className="text-yellow-400" size={32} />,
      title: "Optimization",
      description: "Fine-tuning and improving cloud performance.",
      subSteps: [
        "Performance Monitoring",
        "Cost Optimization",
        "Security Hardening",
        "Resource Scaling",
        "Process Automation"
      ]
    }
  ];

  const technologies = [
    {
      category: "Cloud Platforms",
      tools: [
        { name: "AWS", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Azure", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Google Cloud", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "OpenStack", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "VMware", icon: "/api/placeholder/40/40", level: "Expert" }
      ]
    },
    {
      category: "Infrastructure as Code",
      tools: [
        { name: "Terraform", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Ansible", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "CloudFormation", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "Puppet", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "Chef", icon: "/api/placeholder/40/40", level: "Intermediate" }
      ]
    },
    {
      category: "Monitoring & Security",
      tools: [
        { name: "Prometheus", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Grafana", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "CloudWatch", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "Vault", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "Splunk", icon: "/api/placeholder/40/40", level: "Intermediate" }
      ]
    }
  ];

  const portfolio = [
    {
      title: "Global E-commerce Platform Migration",
      category: "Cloud Migration",
      image: "/api/placeholder/600/400",
      description: "Migrated a high-traffic e-commerce platform to AWS with zero downtime.",
      metrics: {
        performanceImprovement: "300%",
        costReduction: "45%",
        uptime: "99.99%",
        loadTime: "-60%"
      },
      technologies: ["AWS", "Terraform", "Kubernetes", "CloudFront"]
    },
    {
      title: "Financial Services Infrastructure",
      category: "Security & Compliance",
      image: "/api/placeholder/600/400",
      description: "Built a secure, compliant cloud infrastructure for a major financial institution.",
      metrics: {
        securityScore: "98%",
        compliance: "100%",
        availability: "99.999%",
        costEfficiency: "35%"
      },
      technologies: ["Azure", "Vault", "Terraform", "Sentinel"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, Global Retail Corp",
      image: "/api/placeholder/80/80",
      content: "Their cloud infrastructure expertise transformed our digital operations completely.",
      rating: 5,
      company: {
        name: "Global Retail Corp",
        logo: "/api/placeholder/120/40"
      }
    },
    {
      name: "Michael Chen",
      role: "Head of IT, FinTech Solutions",
      image: "/api/placeholder/80/80",
      content: "Exceptional cloud architecture and security implementation that exceeded our expectations.",
      rating: 5,
      company: {
        name: "FinTech Solutions",
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
          Our Cloud Services
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
          Implementation Process
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
          Cloud Technologies
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

  const renderPortfolio = () => (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Success Stories
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
    <section className="py-20 px-6 bg-white/5">
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

  const renderSecurity = () => (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Enterprise-Grade Security
        </motion.h2>
  
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Our cloud infrastructure implements multiple layers of security to protect your data and applications. From encryption at rest to advanced threat detection, we ensure your cloud environment meets the highest security standards.
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <Lock className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Data Encryption</h3>
              <p className="text-gray-300">End-to-end encryption for data in transit and at rest</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <Shield className="text-green-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Threat Detection</h3>
              <p className="text-gray-300">24/7 monitoring and advanced threat prevention</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <Server className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Access Control</h3>
              <p className="text-gray-300">Granular access management and authentication</p>
            </motion.div>
          </div>
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our cloud solutions can help you achieve better performance, security, and cost efficiency.
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
      {renderServices()}
      {renderProcessTimeline()}
      {renderTechnologies()}
      {renderSecurity()}
      {renderPortfolio()}
      {renderTestimonials()}
      {renderCTA()}
    </div>
  );
};

export default CloudInfrastructure;