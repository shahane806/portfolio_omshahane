import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-indigo-900 text-white py-10"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold">John Doe</h4>
          <p className="text-sm text-gray-300">Full-Stack MERN Developer</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-5 text-xl">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:john@example.com" className="hover:text-gray-300 transition">
            <FaEnvelope />
          </a>
          <a
  href="https://www.instagram.com/your_username"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-gray-300 transition"
>
  <FaInstagram />
</a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-sm text-gray-400">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
