import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialMediaPosts, socialStats } from './socialMediaData';

const SocialMediaHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate posts every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % socialMediaPosts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentPost = socialMediaPosts[currentIndex];

  return (
    <div className='flex flex-col items-center gap-2'>
      {/* Follower Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='text-center'
      >
        <p className='text-2xl font-bold text-indigo-400 mb-1'>
          {socialStats.totalFollowers}
        </p>
        <p className='text-gray-400 text-xs'>Social Media Followers</p>

        <div className='flex gap-3 mt-1 justify-center'>
          {socialStats.platforms.map((platform, idx) => (
            <div key={idx} className='flex items-center gap-2 text-sm'>
              <i className={platform.icon} style={{ color: platform.color }} />
              <span className='text-gray-300'>{platform.followers}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className='relative'
      >
        {/* Phone Frame */}
        <div className='relative w-[240px] h-[480px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl shadow-indigo-500/20 border-[3px] border-gray-800'>
          {/* Notch */}
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-xl z-20' />

          {/* Screen */}
          <div className='relative w-full h-full bg-black rounded-[2rem] overflow-hidden'>
            {/* Post Image with Fade Transition */}
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='absolute inset-0'
              >
                <img
                  src={currentPost.image}
                  alt={`${currentPost.platform} post`}
                  className='w-full h-full object-cover'
                />

                {/* Platform Badge */}
                <div className='absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2'>
                  <i className={`${currentPost.icon} text-sm`} style={{ color: currentPost.platformColor }} />
                  <span className='text-white text-xs font-semibold capitalize'>
                    {currentPost.platform}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className='flex gap-1.5 justify-center mt-2'>
          {socialMediaPosts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-indigo-500'
                  : 'w-1.5 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to post ${idx + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + socialMediaPosts.length) % socialMediaPosts.length)}
          className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors'
          aria-label='Previous post'
        >
          <i className='fas fa-chevron-left text-white text-xs' />
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % socialMediaPosts.length)}
          className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors'
          aria-label='Next post'
        >
          <i className='fas fa-chevron-right text-white text-xs' />
        </button>
      </motion.div>

      {/* View More CTA */}
      <motion.a
        href='https://linktr.ee/underconnorwood' // Replace with your actual TikTok/Instagram
        target='_blank'
        rel='noreferrer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='text-indigo-400 hover:text-indigo-300 text-sm font-semibold flex items-center gap-2 transition-colors'
      >
        View My Content
        <i className='fas fa-external-link-alt text-xs' />
      </motion.a>
    </div>
  );
};

export default SocialMediaHero;
