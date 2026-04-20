import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialMediaPosts, socialStats } from './socialMediaData';

const PhoneScreen = ({ post, videoRef, showVideo }) => {
  const hasVideo = !!post.video;
  return (
    <div className='relative w-full h-full bg-gray-950 rounded-[2rem] p-[6px] shadow-xl border-[2px] border-gray-800'>
      {/* Dynamic Island */}
      <div className='absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20' />
      {/* Screen */}
      <div className='relative w-full h-full bg-black rounded-[1.4rem] overflow-hidden'>
        <img
          src={post.image}
          alt={`${post.platform} post`}
          className='absolute inset-0 w-full h-full object-cover'
        />
        {hasVideo && (
          <video
            ref={videoRef}
            src={post.video}
            muted
            loop
            playsInline
            className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500'
            style={{ opacity: showVideo ? 1 : 0 }}
          />
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
  );
};

const PhoneMockup = ({ post, onHover, onLeave }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (post.video && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      onHover(post, rect);
    }
  }, [post, onHover]);

  const handleMouseLeave = useCallback(() => {
    onLeave();
  }, [onLeave]);

  return (
    <div
      ref={cardRef}
      className='flex-shrink-0 cursor-pointer'
      style={{ width: '180px', height: '360px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='w-[180px] h-[360px] sm:w-[200px] sm:h-[400px]'>
        <PhoneScreen post={post} />
      </div>
    </div>
  );
};

const SocialMediaHero = () => {
  const scrollRef = useRef(null);
  const videoRef = useRef(null);
  const hoverTimer = useRef(null);
  const [hoveredPost, setHoveredPost] = useState(null);
  const [cardRect, setCardRect] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  // Play/pause video reactively when showVideo changes
  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else if (!showVideo && videoRef.current) {
      videoRef.current.pause();
    }
  }, [showVideo]);

  // Ref callback so we know immediately when the video element mounts
  const setVideoRef = useCallback((el) => {
    videoRef.current = el;
    if (el && showVideo) {
      el.currentTime = 0;
      el.play().catch(() => {});
    }
  }, [showVideo]);

  const handleHover = useCallback((post, rect) => {
    clearTimeout(hoverTimer.current);
    setHoveredPost(post);
    setCardRect(rect);
    setShowVideo(false);
    hoverTimer.current = setTimeout(() => {
      setShowVideo(true);
    }, 500);
  }, []);

  const handleLeave = useCallback(() => {
    clearTimeout(hoverTimer.current);
    setHoveredPost(null);
    setCardRect(null);
    setShowVideo(false);
  }, []);

  useEffect(() => {
    return () => clearTimeout(hoverTimer.current);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 220;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Calculate the expanded overlay position (centered on original card, scaled up)
  const scale = 1.4;
  let overlayStyle = {};
  if (cardRect) {
    const expandedW = cardRect.width * scale;
    const expandedH = cardRect.height * scale;
    overlayStyle = {
      position: 'fixed',
      top: cardRect.top + cardRect.height / 2 - expandedH / 2,
      left: cardRect.left + cardRect.width / 2 - expandedW / 2,
      width: expandedW,
      height: expandedH,
      zIndex: 9999,
      pointerEvents: 'none',
    };
  }

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
          className='flex gap-4 sm:gap-6 overflow-x-auto px-8 py-12 scrollbar-hide'
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
              <PhoneMockup
                post={post}
                onHover={handleHover}
                onLeave={handleLeave}
              />
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

      {/* Fixed overlay — the expanded card rendered outside the scroll container */}
      <AnimatePresence>
        {hoveredPost && cardRect && (
          <motion.div
            key={hoveredPost.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={overlayStyle}
          >
            <PhoneScreen
              post={hoveredPost}
              videoRef={setVideoRef}
              showVideo={showVideo}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
