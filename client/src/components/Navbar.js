import React from 'react'
import pdf from '../assets/Pulkit gupta_20241006_173206_0000 (1).pdf'
const Navbar = () => {
  return (
    <>
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              PG
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-pink-500 transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-pink-500 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-pink-500 transition-colors">
                Contact
              </a>
              <a href={pdf} download className="px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full hover:scale-105 transition-transform">
                Resume
              </a>
              
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div id="mobile-menu" className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-gray-300 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium transition-colors">
            Home
          </a>
          <a href="#about" className="text-gray-300 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium transition-colors">
            About
          </a>
          <a href="#projects" className="text-gray-300 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium transition-colors">
            Contact
          </a>
          <a href={pdf} download className="block px-3 py-2">
            <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full hover:scale-105 transition-transform inline-block">
              Resume
            </span>
          </a>
        </div>
      </div>
    
    </nav>
    </>
  )
}

export default Navbar
