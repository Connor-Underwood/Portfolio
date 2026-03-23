import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { credentials, programDetails } from './mentorshipData';

const MentorshipHero = () => {
  return (
    <div className='space-y-12'>
      {/* Title Section */}
      <motion.div
        className='text-center space-y-4'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white'>
          {credentials.title}
        </h2>
        <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
          {credentials.subtitle}
        </p>
      </motion.div>

      {/* Credentials Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {credentials.achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            className='text-center space-y-3'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + 0.1 * idx }}
          >
            <div className='flex items-center justify-center'>
              <div className='w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center'>
                <i className={`${achievement.icon} text-2xl ${achievement.color}`} />
              </div>
            </div>
            <div>
              <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-500 dark:text-indigo-400'>
                {achievement.stat && (
                  <CountUp
                    end={parseInt(achievement.stat.replace(/\D/g, '')) || 0}
                    duration={2}
                    delay={0.2 + 0.1 * idx}
                    suffix={achievement.stat.includes('k') ? 'k' : ''}
                  />
                )}
                {achievement.suffix}
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>
                {achievement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Program Details */}
      <motion.div
        className='bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 space-y-6 sm:space-y-8'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className='text-center space-y-2'>
          <h3 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white'>
            What You'll Get
          </h3>
          <p className='text-gray-600 dark:text-gray-400'>
            {programDetails.format} • {programDetails.duration}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          {/* Topics Covered */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2'>
              <i className='fas fa-book text-indigo-500' />
              Topics Covered
            </h4>
            <ul className='space-y-3'>
              {programDetails.topics.map((topic, idx) => (
                <li key={idx} className='flex items-start gap-3'>
                  <i className='fas fa-check text-indigo-500 mt-1' />
                  <span className='text-gray-700 dark:text-gray-300'>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Highlights */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2'>
              <i className='fas fa-star text-indigo-500' />
              Program Highlights
            </h4>
            <ul className='space-y-3'>
              {programDetails.highlights.map((highlight, idx) => (
                <li key={idx} className='flex items-start gap-3'>
                  <i className='fas fa-check text-indigo-500 mt-1' />
                  <span className='text-gray-700 dark:text-gray-300'>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MentorshipHero;
