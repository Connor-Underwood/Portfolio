import React from 'react';
import { motion } from 'framer-motion';

const PricingCard = ({ tier, index, onSelect }) => {
  const handleClick = () => {
    // Scroll to application form
    const formElement = document.getElementById('mentorship-application');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Trigger tier selection if callback provided
    if (onSelect) {
      onSelect(tier.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 + 0.2 * index }}
      className='group relative flex flex-col hover:cursor-pointer h-full'
      onClick={handleClick}
    >
      {/* Hover background effect */}
      <div className={`absolute -inset-y-6 -inset-x-4 z-0 scale-95 opacity-0 transition
        group-hover:scale-100 group-hover:opacity-100 bg-gray-100 dark:bg-gray-700/50
        sm:-inset-x-6 rounded-2xl ${tier.hoverShadow}`} />

      {/* Card content */}
      <div className='z-10 relative flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 shadow-lg transition-shadow duration-200'>

        {/* Popular Badge */}
        {tier.popular && (
          <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
            <div className='bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg'>
              Most Popular
            </div>
          </div>
        )}

        {/* Header with gradient */}
        <div className='space-y-4 mb-6'>
          <div className={`rounded-full w-16 h-16 p-[3px] ${tier.color} mx-auto`}>
            <div className='rounded-full bg-white dark:bg-gray-800 w-full h-full flex items-center justify-center'>
              <i className='fas fa-graduation-cap text-2xl text-indigo-500' />
            </div>
          </div>

          <div className='text-center'>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
              {tier.name}
            </h3>
            <div className='flex items-baseline justify-center gap-2'>
              <span className='text-4xl font-bold text-indigo-500 dark:text-indigo-400'>
                {tier.price}
              </span>
              <span className='text-gray-600 dark:text-gray-400'>
                / {tier.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className='text-center text-gray-600 dark:text-gray-400 mb-6'>
          {tier.description}
        </p>

        {/* Features list */}
        <div className='flex-grow mb-6'>
          <ul className='space-y-3'>
            {tier.features.map((feature, idx) => (
              <li key={idx} className='flex items-start gap-3'>
                <div className='flex-shrink-0 mt-1'>
                  <i className='fas fa-check-circle text-indigo-500' />
                </div>
                <span className='text-gray-700 dark:text-gray-300 text-sm'>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <button
          className={`w-full ${tier.color} text-white rounded-full px-6 py-3 font-semibold
            hover:shadow-xl ${tier.hoverShadow} active:shadow-none transition-all duration-200 ease-in
            transform group-hover:scale-105`}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
