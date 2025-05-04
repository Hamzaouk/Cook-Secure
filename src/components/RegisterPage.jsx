import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form values:', formData);
    // You can add validation or submission logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12" style={{ backgroundColor: '#F8EEDF' }}>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-8 text-center" style={{ backgroundColor: '#585454' }}>
            <h1 className="text-2xl font-semibold text-white">Create an account</h1>
            <p className="mt-2 text-sm text-white">Join us today and get started</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6">
            {/* Username */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                placeholder="Choose a username"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-zinc-600 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-zinc-600 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
                placeholder="Create a password"
              />
            </div>

            {/* Terms */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="h-4 w-4 text-[#8B5C5C] focus:ring-[#8B5C5C] border-[#8B5C5C] rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-[#8B5C5C]">
                I agree to the <span className="text-[#8B5C5C]">Terms of Service</span> and <span className="text-[#8B5C5C]">Privacy Policy</span>
              </label>
            </div>


            {/* Register Button */}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundColor: '#8B5C5C' }}
            >
              Create account
            </button>
          </form>

          {/* Bottom */}
          <div className="px-6 py-4 text-center" style={{ backgroundColor: '#585454' }}>
            <p className="text-sm text-white">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-medium text-[#B95A5A] hover:text-[#9b4040] transition-colors duration-200"
              >
                Sign in
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
