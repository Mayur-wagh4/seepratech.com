import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  FileCode,
  GitBranch,
  Globe,
  Laptop,
  LayoutGrid,
  Lock,
  Server,
  Settings,
  Share2Icon,
  ShieldIcon,
  Smartphone,
  Star
} from "lucide-react";
import React from "react";
import Button from "../components/common/Button";

const CustomApplications = () => {
  const heroContent = {
    title: "Custom Application Development",
    subtitle: "Transforming Ideas into Powerful Software Solutions",
    description:
      "We create tailored software applications that drive innovation, enhance efficiency, and deliver measurable business value.",
    stats: [
      { value: "200+", label: "Apps Delivered" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "50+", label: "Industries Served" },
      { value: "10+", label: "Years Experience" },
    ],
  };

  const expertise = [
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: "Custom Software Development",
      description:
        "Building scalable applications tailored to your unique requirements.",
      features: [
        "Requirements Analysis",
        "Architecture Design",
        "Custom UI/UX",
        "API Integration",
      ],
    },
    {
      icon: <Database className="text-green-400" size={32} />,
      title: "Enterprise Solutions",
      description: "Robust applications designed for large-scale operations.",
      features: [
        "ERP Systems",
        "CRM Integration",
        "Workflow Automation",
        "Data Analytics",
      ],
    },
    {
      icon: <LayoutGrid className="text-purple-400" size={32} />,
      title: "Industry Solutions",
      description: "Specialized applications for specific industry needs.",
      features: [
        "Healthcare Systems",
        "Financial Software",
        "E-commerce Platforms",
        "Educational Tools",
      ],
    },
  ];

  const solutions = [
    {
      category: "Application Types",
      items: [
        {
          title: "Web Applications",
          icon: <Globe className="text-blue-400" size={24} />,
          features: [
            "Responsive Design",
            "Progressive Web Apps",
            "Cross-platform Compatibility",
          ],
        },
        {
          title: "Mobile Solutions",
          icon: <Smartphone className="text-green-400" size={24} />,
          features: [
            "Native Apps",
            "Cross-platform Apps",
            "Mobile-first Design",
          ],
        },
        {
          title: "Enterprise Software",
          icon: <Server className="text-purple-400" size={24} />,
          features: [
            "Scalable Architecture",
            "Integration APIs",
            "Advanced Security",
          ],
        },
      ],
    },
    {
      category: "Technical Capabilities",
      items: [
        {
          title: "Frontend Development",
          icon: <Laptop className="text-blue-400" size={24} />,
          features: [
            "Modern Frameworks",
            "Responsive Design",
            "UI/UX Excellence",
          ],
        },
        {
          title: "Backend Development",
          icon: <Database className="text-green-400" size={24} />,
          features: ["API Development", "Database Design", "Cloud Integration"],
        },
        {
          title: "DevOps",
          icon: <Settings className="text-purple-400" size={24} />,
          features: ["CI/CD Pipeline", "Cloud Deployment", "Monitoring"],
        },
      ],
    },
  ];

  const processSteps = [
    {
      icon: <FileCode className="text-blue-400" size={32} />,
      title: "Discovery & Planning",
      description: "Understanding your needs and creating a roadmap",
      steps: [
        "Requirements Gathering",
        "Technical Analysis",
        "Architecture Planning",
        "Project Roadmap",
      ],
    },
    {
      icon: <Code className="text-green-400" size={32} />,
      title: "Development",
      description: "Building your custom application",
      steps: [
        "UI/UX Development",
        "Core Features",
        "Integration Services",
        "Quality Assurance",
      ],
    },
    {
      icon: <GitBranch className="text-purple-400" size={32} />,
      title: "Deployment",
      description: "Launching your application securely",
      steps: [
        "Environment Setup",
        "Data Migration",
        "Security Testing",
        "Performance Testing",
      ],
    },
    {
      icon: <Share2Icon className="text-yellow-400" size={32} />,
      title: "Support & Evolution",
      description: "Ensuring long-term success",
      steps: [
        "24/7 Support",
        "Performance Monitoring",
        "Regular Updates",
        "Feature Enhancement",
      ],
    },
  ];

  const technologies = [
    {
      category: "Frontend Technologies",
      tools: [
        { name: "React", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Angular", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Vue.js", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: "Next.js", icon: "/api/placeholder/40/40", level: "Expert" },
      ],
    },
    {
      category: "Backend Technologies",
      tools: [
        { name: "Node.js", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Python", icon: "/api/placeholder/40/40", level: "Advanced" },
        { name: ".NET Core", icon: "/api/placeholder/40/40", level: "Expert" },
        {
          name: "Java Spring",
          icon: "/api/placeholder/40/40",
          level: "Advanced",
        },
      ],
    },
    {
      category: "Database & Cloud",
      tools: [
        { name: "MongoDB", icon: "/api/placeholder/40/40", level: "Expert" },
        {
          name: "PostgreSQL",
          icon: "/api/placeholder/40/40",
          level: "Advanced",
        },
        { name: "AWS", icon: "/api/placeholder/40/40", level: "Expert" },
        { name: "Azure", icon: "/api/placeholder/40/40", level: "Advanced" },
      ],
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      industry: "Retail",
      image: "/api/placeholder/600/400",
      description:
        "Built a scalable e-commerce platform with advanced features and integrations.",
      results: {
        salesIncrease: "+120%",
        userEngagement: "+85%",
        orderProcessing: "-40%",
        customerSatisfaction: "+60%",
      },
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      title: "Healthcare Management System",
      industry: "Healthcare",
      image: "/api/placeholder/600/400",
      description:
        "Developed comprehensive healthcare management solution for multi-facility organization.",
      results: {
        operationalEfficiency: "+75%",
        patientSatisfaction: "+65%",
        dataAccuracy: "+90%",
        costReduction: "45%",
      },
      technologies: [".NET Core", "Angular", "SQL Server", "Azure"],
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "CTO, Global Retail Solutions",
      image: "/api/placeholder/80/80",
      content:
        "Their custom application development expertise transformed our business operations completely.",
      rating: 5,
      company: {
        name: "Global Retail Solutions",
        logo: "/api/placeholder/120/40",
      },
    },
    {
      name: "Emily Johnson",
      role: "Director of Technology, HealthCare Plus",
      image: "/api/placeholder/80/80",
      content:
        "The healthcare management system they developed exceeded all our expectations.",
      rating: 5,
      company: {
        name: "HealthCare Plus",
        logo: "/api/placeholder/120/40",
      },
    },
  ];

  // Render functions remain the same as in your AI Automation component
  const renderHero = () => (
    <section className="py-20  px-6">
      <div className="container mt-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            {heroContent.title}
          </h1>
          <p className="text-2xl text-gray-300 mb-12">{heroContent.subtitle}</p>
          <p className="text-xl text-gray-400 mb-12">
            {heroContent.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {heroContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="text-4xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
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

        <div className="grid md:grid-cols-3 gap-8">
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
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
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

  const renderSolutions = () => (
    <section className="py-20 px-6 bg-white/5">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          AI Solutions Portfolio
        </motion.h2>

        {solutions.map((category, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              {category.category}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {category.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {item.icon}
                    <h4 className="text-xl font-semibold text-white">
                      {item.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {item.features.map((feature, fi) => (
                      <li
                        key={fi}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <ArrowRight size={16} className="text-blue-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderProcess = () => (
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                {step.icon}
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {step.steps.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
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
          Our Technology Stack
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
              <h3 className="text-xl font-semibold text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.tools.map((tool, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-10 h-10 rounded"
                    />
                    <div>
                      <p className="text-white font-medium">{tool.name}</p>
                      <span className="text-sm text-gray-400">
                        {tool.level}
                      </span>
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

  const renderCaseStudies = () => (
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
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm mb-4">
                  {study.industry}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-300 mb-6">{study.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(study.results).map(([key, value], i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-3">
                      <p className="text-blue-400 font-bold text-lg">{value}</p>
                      <p className="text-gray-400 text-sm">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
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
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
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
                <img
                  src={testimonial.company.logo}
                  alt={testimonial.company.name}
                  className="h-8"
                />
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

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
          >
            <Lock className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-3">
              Data Protection
            </h3>
            <p className="text-gray-300">
              Enterprise-grade encryption and security protocols for all AI
              operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
          >
            <ShieldIcon className="text-green-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-3">
              Compliance
            </h3>
            <p className="text-gray-300">
              Full compliance with industry regulations and data protection
              standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
          >
            <Database className="text-purple-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-3">
              Data Privacy
            </h3>
            <p className="text-gray-300">
              Advanced privacy measures ensuring secure AI model training and
              deployment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );

  const renderCTA = () => (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and automation solutions can drive
            efficiency and innovation in your organization.
          </p>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Schedule a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#1a1c2e] to-gray-900">
      {renderHero()}
      {renderExpertise()}
      {renderSolutions()}
      {renderProcess()}
      {renderTechnologies()}
      {renderCaseStudies()}
      {renderTestimonials()}
      {renderSecurity()}
      {renderCTA()}
    </div>
  );
};

export default CustomApplications;
