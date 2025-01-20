import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import { CONTACT_INFO } from '../constants/content';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <ContactForm />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2"><strong>Email:</strong> {CONTACT_INFO.email}</p>
          <p className="mb-2"><strong>Phone:</strong> {CONTACT_INFO.phone}</p>
          <p className="mb-2"><strong>Address:</strong> {CONTACT_INFO.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
