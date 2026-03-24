import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { credentials, programDetails } from './mentorshipData';

const MentorshipHero = () => {
  const gradients = [
    'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500',
    'bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500',
    'bg-gradient-to-br from-orange-500 via-yellow-500 to-amber-500'
  ];

  return (
    <div className='space-y-4'>
      {/* Title Section */}
      <motion.div
        className='text-center space-y-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text'>
          {credentials.title}
        </h2>
        <p className='text-sm sm:text-base text-gray-400 max-w-2xl mx-auto'>
          {credentials.subtitle}
        </p>
      </motion.div>

      {/* Credentials Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        {credentials.achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            className='relative group'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + 0.1 * idx }}
          >
            <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-3 border border-gray-700 hover:border-indigo-500/50 transition-all shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20'>
              <div className='flex items-center justify-center mb-2'>
                <div className={`w-10 h-10 rounded-lg ${gradients[idx % 3]} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                  <i className={`${achievement.icon} text-lg text-white`} />
                </div>
              </div>
              <div className='text-center'>
                <p className='text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
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
                <p className='text-xs text-gray-400 mt-1'>
                  {achievement.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Program Details */}
      <motion.div
        className='relative bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-pink-900/40 rounded-xl p-4 sm:p-5 space-y-4 border border-indigo-500/30 shadow-2xl overflow-hidden'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {/* Animated gradient orb background */}
        <div className='absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000' />

        <div className='relative z-10 text-center space-y-1'>
          <h3 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent'>
            What You'll Get
          </h3>
          <p className='text-sm text-gray-300'>
            {programDetails.format}
          </p>
        </div>

        <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Topics Covered */}
          <div className='space-y-2 bg-gray-800/50 rounded-lg p-4 border border-gray-700/50'>
            <h4 className='text-base font-semibold text-white flex items-center gap-2'>
              <div className='w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center'>
                <i className='fas fa-book text-white text-xs' />
              </div>
              Topics Covered
            </h4>
            <ul className='space-y-1.5'>
              {programDetails.topics.map((topic, idx) => (
                <li key={idx} className='flex items-start gap-2'>
                  <i className='fas fa-check-circle text-cyan-400 mt-0.5 text-xs' />
                  <span className='text-gray-300 text-xs'>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Highlights */}
          <div className='space-y-2 bg-gray-800/50 rounded-lg p-4 border border-gray-700/50'>
            <h4 className='text-base font-semibold text-white flex items-center gap-2'>
              <div className='w-7 h-7 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center'>
                <i className='fas fa-star text-white text-xs' />
              </div>
              Program Highlights
            </h4>
            <ul className='space-y-1.5'>
              {programDetails.highlights.map((highlight, idx) => (
                <li key={idx} className='flex items-start gap-2'>
                  <i className='fas fa-check-circle text-pink-400 mt-0.5 text-xs' />
                  <span className='text-gray-300 text-xs'>{highlight}</span>
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
