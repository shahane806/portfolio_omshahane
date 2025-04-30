import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <main className="bg-gray-900 text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-indigo-600 to-blue-700 py-20"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          Contact Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          Reach out for any inquiries, collaborations, or just to say hello.
        </motion.p>
      </motion.section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <motion.textarea
              placeholder="Your Message"
              className="col-span-2 p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <motion.button
              type="submit"
              className="col-span-2 mt-4 py-4 px-10 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
