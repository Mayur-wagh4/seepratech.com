import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { Icon: FaTwitter, href: "#" },
    { Icon: FaLinkedin, href: "#" },
    { Icon: FaFacebook, href: "#" }
  ];

  return (
    <footer 
      className="relative bg-[#0A192F] text-white py-16 
      border-t border-white/10 overflow-hidden"
    >
      {/* Animated Background Particles */}
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
            className="absolute w-1 h-1 bg-white/100 rounded-full"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <img
              src="/logo.png"
              alt="Seepratech Logo"
              className="h-24 mb-4 w-32 object-contain"
            />
            <p className="text-white/80 bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-400 to-purple-600">
              Innovative App, Web, and Cloud Solutions
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-4 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-400 to-purple-600">
              Contact Us
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 
              hover:text-blue-400 transition-colors">
                <FaEnvelope className="text-blue-400" />
                <p>mayurwagh2001@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2 
              hover:text-blue-400 transition-colors">
                <FaPhone className="text-blue-400" />
                <p>+91 7385360404</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-4 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-400 to-purple-600">
              Follow Us
            </h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
            <img 
              src="/2025.svg" 
              alt="2025 Logo" 
              className="w-20 mt-2 h-16 
              hover:scale-105 transition-transform"
            />
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center border-t border-white/10 pt-6"
        >
          <p className="bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-400 to-purple-600">
            &copy; 2025 Seepratech. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;