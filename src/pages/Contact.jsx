import { motion } from 'framer-motion';
import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import { CONTACT_INFO } from '../constants/content';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-purple-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-5xl font-bold mb-12 text-center text-gray-800"
        variants={itemVariants}
      >
        Get in Touch
      </motion.h1>
      
      <div className="flex flex-wrap -mx-4">
        <motion.div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0" variants={itemVariants}>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-700">Send us a Message</h2>
            <ContactForm />
          </div>
        </motion.div>
        
        <motion.div className="w-full lg:w-1/2 px-4" variants={itemVariants}>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-700">Contact Information</h2>
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <div className="flex items-center">

                <img src="/email.svg" alt="Contact Illustration" className='h-24 w-24'/>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-center">
                {/* <PhoneSVG className="w-8 h-8 text-green-500 mr-4" /> */}
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-center">
                {/* <LocationSVG className="w-8 h-8 text-red-500 mr-4" /> */}
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 bg-white rounded-lg shadow-xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Find Us</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631531978!3d-37.817209979751735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1612419490850!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{border:0}} 
                allowFullScreen="" 
                aria-hidden="false" 
                tabIndex="0"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
