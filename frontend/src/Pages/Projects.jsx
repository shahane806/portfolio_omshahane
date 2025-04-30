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
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative bg-gradient-to-r from-sky-400 to-indigo-500"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 z-10"
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto z-10"
        >
          Explore some of my most exciting projects that showcase my development skills and creativity.
        </motion.p>
      </motion.section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
          {[ 
            {
              title: 'E-commerce Website',
              Svg: () => (
                <img
                  src="https://www.svgrepo.com/show/343883/ecommerce-online-shopping-app.svg"
                  alt="E-commerce Website"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              ),
              description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
              github: 'https://github.com',
              demo: 'https://demo.com'
            },
            {
              title: 'Portfolio Website',
              Svg: () => (
                <img
                  src="https://www.svgrepo.com/show/429905/portfolio-my-profile-browser.svg"
                  alt="Portfolio Website"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              ),
              description: 'A personal portfolio built using React and Tailwind CSS to showcase my work.',
              github: 'https://github.com',
              demo: 'https://demo.com'
            },
            {
              title: 'Real-time Chat App',
              Svg: () => (
                <img
                  src="https://www.svgrepo.com/show/343883/ecommerce-online-shopping-app.svg"
                  alt="Real-time Chat App"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              ),
              description: 'A chat application using Node.js, Express, and WebSocket for real-time messaging.',
              github: 'https://github.com',
              demo: 'https://demo.com'
            },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <project.Svg />
              <h3 className="text-2xl text-white font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                {/* GitHub Button with Gradient */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-sky-400 to-indigo-500 p-3 rounded-full text-white inline-flex items-center justify-center space-x-2 hover:bg-indigo-400 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-6 h-6"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.61.4.07.55-.17.55-.37 0-.19-.01-.69-.01-1.35-2.23.49-2.7-1.04-2.7-1.04-.36-.91-.88-1.15-.88-1.15-.72-.48.06-.47.06-.47.79-.05 1.2.73 1.2.73 1.39 1.18 3.34 1.04 4.1.79 4.53-.45.79-.69 1.05-.69 1.05-.15-.14-.43-.34-.88-.47 0-.49.25-.88.71-.88 2.51-.87 3.86-1.55 3.86-4.07 0-2.5-1.68-4.42-4.7-4.42-3.45 0-5.47 2.64-5.47 5.1 0 .51.17 1.01.45 1.42 1.14-.13 2.2-.59 2.2-1.74 0-.81-.71-1.1-.71-1.1-.09-.77-.16-.83-.34-.98-.01-.01-.01-.01-.01-.01z" />
                  </svg>
                  <span>GitHub</span>
                </motion.a>

                {/* Demo Button with Gradient */}
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-sky-400 to-indigo-500 p-3 rounded-full text-white inline-flex items-center justify-center space-x-2 hover:bg-indigo-400 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-6 h-6"
                  >
                    <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H3zm9 14H4V2h8v12z" />
                  </svg>
                  <span>Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
