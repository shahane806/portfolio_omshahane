import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  // Scroll to the experience section
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    experienceSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white font-sans scroll-smooth">
      {/* Hero Section */}
      <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-6 relative pt-0"
>
  <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.1 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="z-10 mb-6 mt-4"
  >
    <img
      src="https://avatars.githubusercontent.com/u/71377782?v=4"
      alt="Om Shahane"
      className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
    />
  </motion.div>
  <motion.h1
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
    whileInView={{ y: 0, opacity: 1 }}
    className="text-5xl md:text-7xl font-extrabold z-10"
  >
    Hi, I'm Om Shahane
  </motion.h1>
  <motion.h2
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.4 }}
    whileInView={{ y: 0, opacity: 1 }}
    className="text-2xl md:text-4xl z-10 mb-6"
  >
    Full-Stack MERN Developer
  </motion.h2>
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.6 }}
    whileInView={{ opacity: 1 }}
    className="text-lg z-10 mb-8 max-w-3xl mx-auto"
  >
    I create beautiful, performant web applications that are intuitive and accessible.
    Let's build something amazing together.
  </motion.p>
  <motion.a
    href="#experience"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, delay: 0.8 }}
    whileInView={{ scale: 1, opacity: 1 }}
    className="z-10 mt-8 inline-block px-10 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-500 hover:scale-105 transition-transform duration-300"
  >
    View My Work
  </motion.a>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
    whileInView={{ opacity: 1 }}
    className="absolute bottom-5 md:bottom-5 md:left-1/2 md:-translate-x-1/2 right-5 md:right-auto cursor-pointer z-10" // Mobile: bottom-right, Desktop: bottom-center
    onClick={scrollToExperience}
  >
    <div className="w-14 h-14 flex items-center justify-center rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-white transform rotate-270"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  </motion.div>
</motion.section>

      {/* Updated Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-visible">
  <div className="max-w-7xl mx-auto px-6 overflow-visible">
    <motion.h2
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold mb-16 text-center tracking-tight"
    >
      Professional Experience
    </motion.h2>

    {/* Timeline */}
    <div className="relative space-y-12 overflow-visible">
      {/* Vertical Line */}
      <div className="absolute left-1/2 w-1 bg-indigo-400 h-full transform -translate-x-1/2 hidden md:block"></div>

      {/* Experience 1 */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row items-center md:justify-between relative overflow-visible"
      >
        <div className="md:w-5/12 order-2 md:order-1">
          <div className="bg-gray-800 rounded-xl p-8 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-indigo-300">Frontend Developer</h3>
            <p className="text-lg text-gray-400">Company ABC | 2020 - 2022</p>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Spearheaded the development of responsive, high-performance web applications using React.js, Tailwind CSS, and JavaScript. Collaborated with UX designers and backend developers to deliver seamless, user-centric experiences.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-600 text-sm rounded-full">React.js</span>
              <span className="px-3 py-1 bg-indigo-600 text-sm rounded-full">Tailwind CSS</span>
              <span className="px-3 py-1 bg-indigo-600 text-sm rounded-full">JavaScript</span>
            </div>
          </div>
        </div>
        <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center border-4 border-white shadow-lg mb-6 md:mb-0 order-1 md:order-2 z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
          <span className="text-xl font-semibold text-white">1</span>
        </div>
        <div className="md:w-5/12 order-3 hidden md:block"></div>
      </motion.div>

      {/* Experience 2 (Even Card, Modified) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }} // Further reduced to x: 20 to prevent overflow
        animate={{ opacity: 1, x: 0 }} // Changed to animate for immediate animation on mount
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }} // Trigger animation earlier
        className="flex flex-col md:flex-row items-center md:justify-between relative overflow-visible will-change-transform" // Added will-change-transform
      >
        <div className="md:w-5/12 order-2 hidden md:block"></div>
        <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center border-4 border-white shadow-lg mb-6 md:mb-0 order-1 z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
          <span className="text-xl font-semibold text-white">2</span>
        </div>
        <div className="md:w-5/12 order-2 md:ml-auto w-full md:w-5/12">
          <div className="bg-gray-800 rounded-xl p-8 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-indigo-300">Full-Stack Developer</h3>
            <p className="text-lg text-gray-400">Company XYZ | 2022 - Present</p>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Led end-to-end development of scalable web applications using the MERN stack. Optimized performance and implemented secure APIs while collaborating with cross-functional teams to deliver innovative features.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-600 text-sm rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-indigo-600 text-sm rounded-full">Express</span>
              <span className="px-3 py-1 bg-indigo-600 text-sm rounded-full">MongoDB</span>
              <span className="px-3 py-1 bg-indigo-600 text-sm rounded-full">React</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Experience 3 */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row items-center md:justify-between relative overflow-visible"
      >
        <div className="md:w-5/12 order-2 md:order-1">
          <div className="bg-gray-800 rounded-xl p-8 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-indigo-300">Backend Developer</h3>
            <p className="text-lg text-gray-400">Company LMN | 2018 - 2020</p>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Worked on the server-side development of applications using Node.js, Express, and MongoDB. Implemented RESTful APIs, integrated third-party services, and optimized databases for performance.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-600 text-sm rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-indigo-600 text-sm rounded-full">MongoDB</span>
              <span className="px-3 py-1 bg-indigo-600 text-sm rounded-full">Express</span>
            </div>
          </div>
        </div>
        <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center border-4 border-white shadow-lg mb-6 md:mb-0 order-1 md:order-2 z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
          <span className="text-xl font-semibold text-white">3</span>
        </div>
        <div className="md:w-5/12 order-3 hidden md:block"></div>
      </motion.div>
    </div>
  </div>
</section>
    </main>
  );
};

export default Home;
