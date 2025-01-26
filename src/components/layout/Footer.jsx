import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-orange-600/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/logo.png"
              alt="Seepratech Logo"
              className="h-24 mb-4 w-32 object-contain"
            />
            <p className="text-white/80">
              Innovative App, Web, and Cloud Solutions
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-orange-600">
              Contact Us
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-orange-400" />
                <p>mayurwagh2001@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-orange-400" />
                <p>+91 7385360404</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-orange-600">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
            </div>
              <img src="/2025.svg" className="w-20 mt-5 h-16"/>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center border-t border-orange-600/20 pt-6">
          <p className="text-orange-600">
            &copy; 2025 Seepratech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
