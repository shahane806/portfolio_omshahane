import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white font-sans scroll-smooth">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>

        {/* Circular Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="z-10 mb-6"
        >
          <img
            src="/profile.jpg" // <- Replace with your image path
            alt="John Doe"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold z-10"
        >
          Hi, I'm John Doe
        </motion.h1>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl md:text-4xl z-10 mb-6"
        >
          Full-Stack MERN Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg z-10 mb-8 max-w-3xl mx-auto"
        >
          I create beautiful, performant web applications that are intuitive and accessible.
          Let's build something amazing together.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="z-10 mt-8 inline-block px-10 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-500 hover:scale-105 transition-transform duration-300"
        >
          View My Work
        </motion.a>
      </motion.section>
    </main>
  );
};

export default Home;
