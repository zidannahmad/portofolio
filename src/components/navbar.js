import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 sm:py-6 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        <a href="#" className="text-lg sm:text-xl font-light tracking-wider text-gray-900">
          ZIDAN<span className="font-semibold">.DEV</span>
        </a>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <a 
              href="#projects" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden 
        fixed 
        inset-0 
        z-50 
        bg-white/95 
        backdrop-blur-sm
        transform 
        transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a 
            href="#projects" 
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl text-gray-900 hover:text-gray-600 transition-colors duration-300"
          >
            Projects
          </a>
          <a 
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl text-gray-900 hover:text-gray-600 transition-colors duration-300"
          >
            About
          </a>
          <a 
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl text-gray-900 hover:text-gray-600 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
