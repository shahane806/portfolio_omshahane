import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
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
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          Check out my latest articles on web development, design, and more.
        </motion.p>
      </motion.section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
          {[{ title: 'Web Development Trends', img: 'webdev.jpg', description: 'Exploring the latest trends in full-stack web development.' },
            { title: 'UI/UX Design Fundamentals', img: 'uxdesign.jpg', description: 'Best practices for creating impactful designs.' },
            { title: 'Node.js vs. Deno', img: 'nodejs.jpg', description: 'A comparison of two JavaScript runtime environments.' }]
            .map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <img src={`/images/${post.img}`} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl text-white font-semibold mb-4">{post.title}</h3>
                <p className="text-gray-400">{post.description}</p>
                <motion.a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 mt-4 inline-block"
                >
                  Read More
                </motion.a>
              </motion.div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
