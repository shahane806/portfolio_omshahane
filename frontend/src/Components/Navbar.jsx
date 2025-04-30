import { useState } from 'react';

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

  return (
    <nav className={`bg-gray-800 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <a href="/"><span className="text-xl font-bold">{logo.text}</span></a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-gray-300 transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <a
              href={cta.href}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              {cta.label}
            </a>
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
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-gray-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href={cta.href}
              className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition text-center"
            >
              {cta.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
