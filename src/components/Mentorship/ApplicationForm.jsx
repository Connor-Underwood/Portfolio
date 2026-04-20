import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { validateForm } from './formValidation';

const ApplicationForm = ({ selectedTier, onTierChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    role: '',
    programInterest: selectedTier || '',
    message: ''
  }); 

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, submitting, success, error

  // Update formData when selectedTier changes
  useEffect(() => {
    if (selectedTier) {
      setFormData(prev => ({ ...prev, programInterest: selectedTier }));
    }
  }, [selectedTier]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setSubmitStatus('submitting');

    try {
      // TODO: Replace with your Formspree form ID
      // For now, this is a placeholder - you'll need to set up Formspree
      const FORMSPREE_ID = 'xdawrkgg'; // Replace this with actual Formspree ID

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Clear form
        setFormData({
          name: '',
          email: '',
          linkedin: '',
          role: '',
          programInterest: '',
          message: ''
        });
        setErrors({});

        // Scroll to success message
        setTimeout(() => {
          const successElement = document.getElementById('form-success');
          if (successElement) {
            successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <motion.div
      id="mentorship-application"
      className='max-w-4xl mx-auto'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12'>
        {/* Form Header */}
        <div className='text-center mb-8'>
          <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3'>
            Apply for Tutoring
          </h3>
          <p className='text-gray-600 dark:text-gray-400'>
            Fill out the form below and I'll get back to you within 24-48 hours
          </p>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div id="form-success" className='mb-6 p-4 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-500 dark:border-green-700'>
            <div className='flex items-start gap-3'>
              <i className='fas fa-check-circle text-green-600 dark:text-green-400 text-xl mt-0.5' />
              <div>
                <p className='font-semibold text-green-800 dark:text-green-200'>
                  Application Submitted Successfully!
                </p>
                <p className='text-sm text-green-700 dark:text-green-300 mt-1'>
                  Thank you for your interest! I'll review your application and get back to you soon.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className='mb-6 p-4 rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-500 dark:border-red-700'>
            <div className='flex items-start gap-3'>
              <i className='fas fa-exclamation-circle text-red-600 dark:text-red-400 text-xl mt-0.5' />
              <div>
                <p className='font-semibold text-red-800 dark:text-red-200'>
                  Submission Failed
                </p>
                <p className='text-sm text-red-700 dark:text-red-300 mt-1'>
                  There was an error submitting your application. Please try again or contact me directly.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form
              onSubmit={handleSubmit} 
              className='space-y-6'>
          {/* Name and Email Row */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Name Field */}
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Full Name <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                } dark:bg-gray-700 dark:text-white shadow-sm focus:ring focus:ring-opacity-50 transition`}
                placeholder='John Doe'
              />
              {errors.name && (
                <p className='text-sm text-red-500 dark:text-red-400 mt-1 flex items-center gap-1'>
                  <i className='fas fa-exclamation-circle' />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Email Address <span className='text-red-500'>*</span>
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                } dark:bg-gray-700 dark:text-white shadow-sm focus:ring focus:ring-opacity-50 transition`}
                placeholder='john@example.com'
              />
              {errors.email && (
                <p className='text-sm text-red-500 dark:text-red-400 mt-1 flex items-center gap-1'>
                  <i className='fas fa-exclamation-circle' />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* LinkedIn Field */}
          <div>
            <label htmlFor='linkedin' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              LinkedIn Profile URL (Optional)
            </label>
            <input
              type='text'
              id='linkedin'
              name='linkedin'
              value={formData.linkedin}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.linkedin
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
              } dark:bg-gray-700 dark:text-white shadow-sm focus:ring focus:ring-opacity-50 transition`}
              placeholder='https://linkedin.com/in/yourprofile'
            />
            {errors.linkedin && (
              <p className='text-sm text-red-500 dark:text-red-400 mt-1 flex items-center gap-1'>
                <i className='fas fa-exclamation-circle' />
                {errors.linkedin}
              </p>
            )}
          </div>

          {/* Role and Program Interest Row */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Role Field */}
            <div>
              <label htmlFor='role' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Current Role <span className='text-red-500'>*</span>
              </label>
              <select
                id='role'
                name='role'
                value={formData.role}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.role
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                } dark:bg-gray-700 dark:text-white shadow-sm focus:ring focus:ring-opacity-50 transition`}
              >
                <option value=''>Select your role</option>
                <option value='student'>Student</option>
                <option value='early-career'>Early Career (0-2 years)</option>
              </select>
              {errors.role && (
                <p className='text-sm text-red-500 dark:text-red-400 mt-1 flex items-center gap-1'>
                  <i className='fas fa-exclamation-circle' />
                  {errors.role}
                </p>
              )}
            </div>

            {/* Program Interest Field */}
            <div>
              <label htmlFor='programInterest' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Program Interest <span className='text-red-500'>*</span>
              </label>
              <select
                id='programInterest'
                name='programInterest'
                value={formData.programInterest}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.programInterest
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                } dark:bg-gray-700 dark:text-white shadow-sm focus:ring focus:ring-opacity-50 transition`}
              >
                <option value=''>Select a program</option>
                <option value='starter'>Starter Session ($25)</option>
                <option value='professional'>Professional Package ($125)</option>
                <option value='elite'>Elite Tutoring ($250)</option>
              </select>
              {errors.programInterest && (
                <p className='text-sm text-red-500 dark:text-red-400 mt-1 flex items-center gap-1'>
                  <i className='fas fa-exclamation-circle' />
                  {errors.programInterest}
                </p>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Tell me about your goals <span className='text-red-500'>*</span>
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows='6'
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.message
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
              } dark:bg-gray-700 dark:text-white shadow-sm focus:ring focus:ring-opacity-50 transition resize-none`}
              placeholder='What are you hoping to achieve through tutoring? What specific areas would you like help with?'
            />
            <div className='flex justify-between items-center mt-1'>
              {errors.message ? (
                <p className='text-sm text-red-500 dark:text-red-400 flex items-center gap-1'>
                  <i className='fas fa-exclamation-circle' />
                  {errors.message}
                </p>
              ) : (
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Minimum 20 characters
                </p>
              )}
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                {formData.message.length}/1000
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={submitStatus === 'submitting'}
            className='w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-4 font-semibold text-lg
              hover:shadow-xl hover:shadow-indigo-500/20 active:shadow-none transition-all duration-200 ease-in
              disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]'
          >
            {submitStatus === 'submitting' ? (
              <span className='flex items-center justify-center gap-2'>
                <i className='fas fa-spinner fa-spin' />
                Submitting...
              </span>
            ) : (
              <span className='flex items-center justify-center gap-2'>
                Submit Application
                <i className='fas fa-paper-plane' />
              </span>
            )}
          </button>

          {/* Privacy Note */}
          <p className='text-xs text-center text-gray-500 dark:text-gray-400'>
            Your information will only be used to contact you about tutoring opportunities
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default ApplicationForm;
