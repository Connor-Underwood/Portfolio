import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { socialMediaPosts, socialStats } from './socialMediaData';

const PhoneMockup = ({ post }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (post.video && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [post.video]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (post.video && videoRef.current) {
      videoRef.current.pause();
    }
  }, [post.video]);

  return (
    <div
      className='flex-shrink-0 group cursor-pointer'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className='relative w-[180px] h-[360px] sm:w-[200px] sm:h-[400px] bg-gray-950 rounded-[2rem] p-[6px] shadow-xl border-[2px] border-gray-800 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-indigo-500/20'
      >
        {/* Dynamic Island */}
        <div className='absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20' />

        {/* Screen */}
        <div className='relative w-full h-full bg-black rounded-[1.6rem] overflow-hidden'>
          {/* Thumbnail */}
          <img
            src={post.image}
            alt={`${post.platform} post`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isHovered && post.video ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Video (plays on hover) */}
          {post.video && (
            <video
              ref={videoRef}
              src={post.video}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Play icon overlay when no video, shown on hover */}
          {!post.video && isHovered && (
            <div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
              <div className='w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                <i className='fas fa-play text-white text-lg ml-1' />
              </div>
            </div>
          )}

          {/* Platform Badge */}
          <div className='absolute top-6 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1.5 z-10'>
            <i className={`${post.icon} text-xs`} style={{ color: post.platformColor }} />
            <span className='text-white text-[10px] font-semibold capitalize'>
              {post.platform}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialMediaHero = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 220;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='w-full max-w-5xl mx-auto'>
      {/* Stats */}
      <div className='text-center mb-8'>
        <p className='text-4xl md:text-5xl font-bold text-indigo-400'>
          {socialStats.totalFollowers}
        </p>
        <p className='text-gray-400 text-sm mt-1'>Social Media Followers</p>
        <div className='flex gap-4 mt-2 justify-center'>
          {socialStats.platforms.map((platform, idx) => (
            <div key={idx} className='flex items-center gap-2 text-sm'>
              <i className={platform.icon} style={{ color: platform.color }} />
              <span className='text-gray-300 font-medium'>{platform.followers}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className='relative'>
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 backdrop-blur-sm flex items-center justify-center transition-colors shadow-lg'
          aria-label='Scroll left'
        >
          <i className='fas fa-chevron-left text-white text-sm' />
        </button>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className='flex gap-4 sm:gap-6 overflow-x-auto px-8 py-4 scrollbar-hide'
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {socialMediaPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
            >
              <PhoneMockup post={post} />
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 backdrop-blur-sm flex items-center justify-center transition-colors shadow-lg'
          aria-label='Scroll right'
        >
          <i className='fas fa-chevron-right text-white text-sm' />
        </button>

        {/* Edge fades */}
        <div className='absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-gray-800 to-transparent pointer-events-none z-[5]' />
        <div className='absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-gray-800 to-transparent pointer-events-none z-[5]' />
      </div>

      {/* CTA */}
      <div className='text-center mt-6'>
        <a
          href='https://linktr.ee/underconnorwood'
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors'
        >
          View All Content
          <i className='fas fa-external-link-alt text-xs' />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaHero;
