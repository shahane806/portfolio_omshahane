import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProjectMetaData } from '../Firebase/RealtimeDatabase/functions';

const Projects = () => {
  const projects = [
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
  ];
  const [projectMetaData, setProjectMetaData] = useState([]);
  useEffect(() => {
    getProjectMetaData().then((res) => {
      if (res == undefined) {
        setProjectMetaData([]);
      } else {
        setProjectMetaData(res);
      }
    })
  }, [])
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
      {
        projectMetaData.length != 0 &&  <section className="py-20 bg-gray-800">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6 ">
    {projectMetaData.map(([id, data], index) => (
      <motion.div
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: index * 0.3 }}
        className="flex flex-col justify-center items-center bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
      >
        {data.metaFeaturedImage && (
         <img
          src={data.metaFeaturedImage}
          alt={data.title}
          className="w-50 h-50 object-cover rounded-lg mb-4"
        />
        )}
        <h3 className="text-2xl text-white font-semibold mb-4">
          {data.metaTitle}
        </h3>
        <p className="text-gray-400">{data.metaDescription}</p>

        {Array.isArray(data.metaKeywords) && data.metaKeywords.length > 0 && (
          <div className="mt-4 leading-relaxed flex flex-wrap gap-2">
            {data.metaKeywords.map((keyword, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-indigo-600 text-sm rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex space-x-4">
            <motion.a
              href={`${data.metaGitHubLink}`}
              target="_blank"
              className=" cursor-pointer bg-gradient-to-r from-sky-400 to-indigo-500 p-3 rounded-full text-white inline-flex items-center justify-center space-x-2 hover:bg-indigo-400 transition-all"
            >
              <span>GitHub</span>
            </motion.a>
            <motion.a
              
              href={`${data.metaDemoLink}`}
              target="_blank"
              className=" cursor-pointer bg-gradient-to-r from-sky-400 to-indigo-500 p-3 rounded-full text-white inline-flex items-center justify-center space-x-2 hover:bg-indigo-400 transition-all"
            >
              <span>Demo</span>
            </motion.a>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      }{
        projectMetaData.length == 0 &&  <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
          <p>
            Projects Not Available
          </p>
        </div>
      </section>
      }
    </main>
  );
};

export default Projects;
