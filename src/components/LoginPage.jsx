import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoginValidation from './validation/LoginValidation';
import api from './Api';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoginError('');
      
      // Check if user exists with given email
      const response = await api.get(`/users?email=${values.email}`);
      
      if (response.data.length === 0) {
        setLoginError('No account found with this email address');
        setSubmitting(false);
        return;
      }
      
      const user = response.data[0];
      
      // Simple password check
      // In a real app, you would use bcrypt or another secure method
      if (user.password !== values.password) {
        setLoginError('Invalid password');
        setSubmitting(false);
        return;
      }
      
      // Login successful
      // Remove password from stored user data for security
      const { password, ...safeUserData } = user;
      
      // Store user info in localStorage (or you could use a state management solution like Redux)
      localStorage.setItem('currentUser', JSON.stringify(safeUserData));
      
      // If remember me is checked, could implement persistent login here
      
      // Redirect to home page
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An error occurred during login. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12" style={{ backgroundColor: '#F8EEDF' }}>
      {/* Login Card */}
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-8 text-center" style={{ backgroundColor: '#585454' }}>
            <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
            <p className="mt-2 text-sm text-white">Please sign in to your account</p>
          </div>

          {/* Form */}
          <div className="p-6">
            {loginError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {loginError}
              </div>
            )}
            
            <Formik
              initialValues={initialValues}
              validationSchema={LoginValidation}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, touched, errors }) => (
                <Form>
                  {/* Email Field */}
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email address
                    </label>
                    <div className="relative">
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full px-4 py-2 border ${
                          touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500`}
                        placeholder="Enter your email"
                      />
                      <span className="absolute right-3 top-2.5 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </span>
                    </div>
                    <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
                  </div>

                  {/* Password Field */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <Link to="/forgot-password" className="text-xs text-[#B95A5A] hover:text-[#9b4040]">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className={`w-full px-4 py-2 border ${
                          touched.password && errors.password ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500`}
                        placeholder="Enter your password"
                      />
                      <span className="absolute right-3 top-2.5 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                    <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-600" />
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center mb-6">
                    <Field
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      className="h-4 w-4 text-[#8B5C5C] focus:ring-[#8B5C5C] border-[#8B5C5C] rounded"
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-[#8B5C5C]">
                      Remember me
                    </label>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70"
                    style={{ backgroundColor: '#8B5C5C' }}
                  >
                    {isSubmitting ? 'Signing in...' : 'Sign in'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* Register Option */}
          <div className="px-6 py-4 text-center" style={{ backgroundColor: '#585454' }}>
            <p className="text-sm text-white">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-[#B95A5A] hover:text-[#9b4040] transition-colors duration-200">
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;