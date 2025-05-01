import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar({
  logo = { src: '/vite.svg', alt: 'Logo', text: 'Brand' },
  navItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Projects', href: '/projects' },
    { label: 'Clients', href: '/clients' },
    { label: 'Resume', href: '/resume' },
  ],
  cta = { label: 'Get In Touch', href: '/contact' },
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <nav
      className={`w-full sticky top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out 
        ${isScrolled ? 'bg-gradient-to-r from-sky-600 to-indigo-700' : 'bg-gray-800'} 
        text-white overflow-x-hidden ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to={"/"}>
              <motion.span
                className="text-xl font-semibold tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {logo.text}
              </motion.span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <Link className="hover:text-gray-300 transition" to={item.href}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to={cta.href}
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
              >
                {cta.label}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden px-4 pb-4 w-full max-w-screen overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="hover:text-gray-300"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to={cta.href}
                className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition text-center"
              >
                {cta.label}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
