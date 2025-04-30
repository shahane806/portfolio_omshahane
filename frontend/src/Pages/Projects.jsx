import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
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
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          Explore some of my most exciting projects that showcase my development skills and creativity.
        </motion.p>
      </motion.section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
          {[{ title: 'E-commerce Website', img: 'ecommerce.jpg', description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.' },
            { title: 'Portfolio Website', img: 'portfolio.jpg', description: 'A personal portfolio built using React and Tailwind CSS to showcase my work.' },
            { title: 'Real-time Chat App', img: 'chatapp.jpg', description: 'A chat application using Node.js, Express, and WebSocket for real-time messaging.' }]
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <img src={`/images/${project.img}`} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl text-white font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <motion.a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 mt-4 inline-block"
                >
                  View Project
                </motion.a>
              </motion.div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
