import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <main className="bg-gradient-to-r from-sky-400 to-indigo-500 text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 z-10"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto z-10"
        >
          We are a team of developers crafting impactful digital solutions with a focus on user experience and performance.
        </motion.p>
      </motion.section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              name: 'John Doe',
              role: 'Lead Developer',
              img: 'https://images.unsplash.com/photo-1601948954532-4a0b1d7a1b8f',
              rating: 4.5,
              desc: 'Expert in MERN stack with a passion for innovative problem-solving.',
            },
            {
              name: 'Jane Smith',
              role: 'UI/UX Designer',
              img: 'https://images.unsplash.com/photo-1601948954532-4a0b1d7a1b8f',
              rating: 5.0,
              desc: 'Focused on crafting intuitive and aesthetically pleasing user interfaces.',
            },
            {
              name: 'Alex Brown',
              role: 'Backend Engineer',
              img: 'https://images.unsplash.com/photo-1601948954532-4a0b1d7a1b8f',
              rating: 4.7,
              desc: 'Building scalable and efficient backend solutions with Node.js.',
            },
          ].map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 * index }}
              className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-indigo-400">{member.name}</h3>
              <p className="text-indigo-300 mb-2">{member.role}</p>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400">{'★'.repeat(Math.floor(member.rating))}</span>
                <span className="text-gray-400 ml-2">{member.rating}</span>
              </div>
              <p className="text-gray-400">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
