import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import registerIcon from '../assets/add.png'; 
import loginIcon from '../assets/user.png'; 

function NavBar() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-30 w-full bg-white/80 py-2 backdrop-blur-lg"
      style={{ boxShadow: '0 0 2px 0 rgba(0,0,0,0.15)' }}
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - Top Left */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
              <img className="h-32 w-auto" src={logo} alt="Logo" />
              <p className="sr-only">Website Title</p>
            </Link>
          </div>

          {/* Navigation Links and Auth Buttons - Right Side */}
          <div className="flex items-center gap-3">
            {/* Navigation Links */}
            <Link
              to="/"
              className="text-sm font-medium text-gray-900 hover:text-[#8B5C5C] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/recipes"
              className="text-sm font-medium text-gray-900 hover:text-[#8B5C5C] transition-colors duration-300"
            >
              Recipes
            </Link>
            
            {/* Vertical Divider */}
            <div className="h-6 w-px bg-gray-300 mx-3"></div>

            {/* Register Button */}
            <Link
              to="/register"
              className="flex items-center gap-2 rounded-md border border-black px-3 py-2 text-sm font-semibold text-[#8B5C5C] hover:bg-gray-100 transition-colors duration-300"
              style={{ borderRadius: '5px' }}
            >
              <img src={registerIcon} alt="Register Icon" className="h-5 w-5" />
              Register
            </Link>

            {/* Login Button */}
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-md border border-black bg-[#8B5C5C] px-3 py-2 text-sm font-semibold text-white hover:bg-[#7A4F4F] transition-colors duration-300"
              style={{ borderRadius: '5px' }}
            >
              <img src={loginIcon} alt="Login Icon" className="h-5 w-5" />
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;