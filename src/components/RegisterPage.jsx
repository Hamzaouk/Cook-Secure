import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RegisterValidation from './validation/RegisterValidation';

const RegisterPage = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    terms: false,
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form values:', values);
    // Handle registration logic here
    setSubmitting(false);
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
          <div className="p-6">
            <Formik
              initialValues={initialValues}
              validationSchema={RegisterValidation}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, touched, errors }) => (
                <Form>
                  {/* Username */}
                  <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                      Username
                    </label>
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      className={`w-full px-4 py-2 border ${
                        touched.username && errors.username ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500`}
                      placeholder="Choose a username"
                    />
                    <ErrorMessage name="username" component="div" className="mt-1 text-sm text-red-600" />
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email address
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-4 py-2 border ${
                        touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500`}
                      placeholder="Enter your email"
                    />
                    <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
                  </div>

                  {/* Password */}
                  <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-zinc-600 mb-1">
                      Password
                    </label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className={`w-full px-4 py-2 border ${
                        touched.password && errors.password ? 'border-red-500' : 'border-zinc-600'
                      } rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500`}
                      placeholder="Create a password"
                    />
                    <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-600" />
                  </div>

                  {/* Terms */}
                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <Field
                        type="checkbox"
                        id="terms"
                        name="terms"
                        className="h-4 w-4 text-[#8B5C5C] focus:ring-[#8B5C5C] border-[#8B5C5C] rounded"
                      />
                    </div>
                    <div className="ml-2 text-sm">
                      <label htmlFor="terms" className="text-[#8B5C5C]">
                        I agree to the <span className="text-[#8B5C5C]">Terms of Service</span> and <span className="text-[#8B5C5C]">Privacy Policy</span>
                      </label>
                      <ErrorMessage name="terms" component="div" className="mt-1 text-sm text-red-600" />
                    </div>
                  </div>

                  {/* Register Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70"
                    style={{ backgroundColor: '#8B5C5C' }}
                  >
                    {isSubmitting ? 'Creating account...' : 'Create account'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>

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