import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import Word from '../assets/Footerword.png';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer 
      className="bg-[#D9D9D9] w-full"
      style={{ boxShadow: '0 -4px 4px 0 rgba(0,0,0,0.25)' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 py-4 flex justify-between items-start flex-wrap ">
        {/* Left - Top Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img className="h-12 w-auto" src={logo} alt="Main Logo" />
          </Link>
        </div>

        {/* Center - Links & Copyright */}
        <div className="flex flex-col items-center justify-center text-center mx-auto">
          <div className="flex gap-6 mb-2">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-[#8B5C5C] font-medium transition"
            >
              Home
            </Link>
            <Link 
              to="/recipes" 
              className="text-gray-800 hover:text-[#8B5C5C] font-medium transition"
            >
              Recipes
            </Link>
          </div>
          <p className="text-gray-700 text-sm">© 2025 Cooks. All rights reserved.</p>
        </div>

        {/* Right - Social Icons + HR + Footer Image */}
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#8B5C5C]"
            >
              <FaFacebook size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#8B5C5C]"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#8B5C5C]"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Vertical HR */}
          <hr className="h-8 w-px bg-gray-400 mx-2" />
          
          {/* Clickable Footer Image (now larger) */}
          <Link to="/">
            <img className="h-20 w-auto" src={Word} alt="Footer Word Logo" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
