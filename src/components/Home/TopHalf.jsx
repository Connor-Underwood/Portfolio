
import {motion} from "framer-motion"

import profile from "../../assets/connor_maple_pass.png"
import Navbar from '../Navbar'

import Typewriter from 'typewriter-effect';
import ContactButton from './ContactButton';

const TopHalf = () => {

  const titles = [
    'Engineer',
    'Content Creator',
  ]

  const contactLinks = [
    {
      Name: "LinkedIn",
      Link: "https://www.linkedin.com/in/connorunderwood2004",
      color: "#0A66C2",
      svg: <svg viewBox="0 0 24 24" fill="#0A66C2" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    },
    {
      Name: "GitHub",
      Link: "https://github.com/Connor-Underwood",
      color: "#ffffff",
      svg: <svg viewBox="0 0 24 24" fill="#ffffff" className="w-6 h-6"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    },
    {
      Name: "Instagram",
      Link: "https://www.instagram.com/underconnorwood",
      color: "#E4405F",
      svg: <svg viewBox="0 0 24 24" fill="url(#ig-gradient)" className="w-6 h-6"><defs><linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FFDC80"/><stop offset="25%" stopColor="#F77737"/><stop offset="50%" stopColor="#E4405F"/><stop offset="75%" stopColor="#C13584"/><stop offset="100%" stopColor="#833AB4"/></linearGradient></defs><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg>
    },
    {
      Name: "TikTok",
      Link: "https://www.tiktok.com/@underconnorwood",
      color: "#6366f1",
      svg: <svg viewBox="0 0 24 24" className="w-6 h-6"><g transform="translate(0.7, 0.7)"><path fill="#7c3aed" d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0115.54 3h-3.09v12.4a2.592 2.592 0 01-2.592 2.592c-1.43 0-2.592-1.16-2.592-2.592s1.16-2.592 2.592-2.592c.272 0 .533.042.779.12V9.804A5.72 5.72 0 004.6 15.4 5.72 5.72 0 0010.32 21.12 5.72 5.72 0 0016.04 15.4V9.017a7.39 7.39 0 004.36 1.42V7.35s-1.966 0-3.8-1.53z"/></g><path fill="#ffffff" d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0115.54 3h-3.09v12.4a2.592 2.592 0 01-2.592 2.592c-1.43 0-2.592-1.16-2.592-2.592s1.16-2.592 2.592-2.592c.272 0 .533.042.779.12V9.804A5.72 5.72 0 004.6 15.4 5.72 5.72 0 0010.32 21.12 5.72 5.72 0 0016.04 15.4V9.017a7.39 7.39 0 004.36 1.42V7.35s-1.966 0-3.8-1.53z"/></svg>
    }
  ]

  const circleVariants = {
    hidden: { pathLength: 0, opacity: 0, stroke: "white" },
    visible: {
        pathLength: 1,
        opacity: 1,
        stroke: "#6366f1",
        transition: {
          pathLength: { type: "spring", duration: 2.4, bounce: 0 },
          opacity: { duration: 0.01 },
          duration: 0.4,
          delay: 0.8
        }
    }
  }


  return (
    <div className='relative bg-black text-white h-screen flex flex-col overflow-hidden'>

      {/* Grid background */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial fade so the grid fades out toward edges */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, black 90%)',
        }}
      />

      {/* Subtle indigo glow at center */}
      <div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-full opacity-20 blur-[120px] pointer-events-none'
        style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
      />

      <Navbar />      
      
      <div className='z-10 flex-grow flex items-start lg:items-center lg:overflow-hidden overflow-y-auto'>
        <div className='max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8 py-2 md:py-4 z-10'>
          <div className='text-left text-white flex flex-col justify-center'>
          <motion.div
            className='w-56 sm:w-64 md:w-72 mx-auto ml-4 z-0 aspect-square relative grid place-items-center rounded-full shadow-lg shadow-indigo-500/50'
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: 0.4}}
          >
            <motion.svg
              className="z-10 rotate-[270deg]"
              viewBox="-0.5 -0.5 65 65" // Adjust the viewbox values to fit your div size
              initial="hidden"
              animate="visible"
            >
              <motion.circle 
                cx="32"
                cy="32"
                r={32}
                variants={circleVariants}
                strokeLinecap="round"
                fill="transparent"
              />
            </motion.svg>
            <div className='absolute bg-black rounded-full w-full aspect-square z-0 overflow-hidden'>
              <motion.img 
                src={profile} 
                className='rounded-full w-full h-full object-cover scale-150' 
                style={{ objectPosition: 'center 95%' }} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                alt="profile-pic"
              />
            </div>
          </motion.div>
          
          
          <div className='text-2xl sm:text-3xl md:text-4xl font-bold my-3 flex font-mono'>
            <span className={`mr-1 text-primary`}>$</span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                .typeString(`<span>./connorunderwood/</span>`)
                .typeString(`<span class="text-primary">info</span>`)
                .start();
              }}
            />
          </div>

          <div className='flex gap-4 my-2 flex-wrap'>
            {titles.map((title, idx) => (
              <motion.p
                key={title}
                initial={{opacity: 0, y: 5}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: 0.6 + 0.2 * idx}}
                className='text-base sm:text-lg md:text-xl font-semibold'
              >
                <span className='text-primary'><i className='fas fa-chevron-right' />&nbsp;</span>
                {title}
              </motion.p>
            ))}
          </div>

          <div className='flex items-center my-3 gap-4'>
              {contactLinks.map((contact, idx) => (
                <ContactButton contact={contact} idx={idx} />
              ))}
          </div>
          
          <motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: 2.0}}
            className='max-w-lg mt-4 text-base md:text-lg'
          >
            <p className='font-semibold text-2xl'>About Me</p>
            <p className='my-2'>Hi, I'm Connor! I'm an engineer at Google and make social media content.</p>
          </motion.div>

          {/* Mentorship CTA - Mobile */}
          <motion.div
            className='lg:hidden mt-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            <a
              href='#mentorship'
              className='group block w-full rounded-2xl border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm p-6 text-center hover:bg-indigo-500/20 transition-all'
            >
              <p className='text-lg font-bold text-white mb-1'>1-on-1 Mentorship</p>
              <p className='text-sm text-gray-400 mb-3'>Get personalized coaching to land your dream tech role</p>
              <span className='inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm group-hover:gap-3 transition-all'>
                View Programs <i className='fas fa-arrow-down text-xs' />
              </span>
            </a>
          </motion.div>
          </div>

          {/* Right side - Mentorship CTA - Desktop */}
          <div className='hidden lg:flex items-center justify-center'>
            <motion.a
              href='#mentorship'
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className='group block w-full max-w-md rounded-2xl border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm p-10 text-center hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all'
            >
              <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-500/20 flex items-center justify-center'>
                <i className='fas fa-rocket text-2xl text-indigo-400' />
              </div>
              <p className='text-2xl font-bold text-white mb-2'>1-on-1 Mentorship</p>
              <p className='text-gray-400 mb-6'>Get personalized coaching to break into tech and land your dream role</p>
              <span className='inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors'>
                View Programs <i className='fas fa-arrow-down text-sm' />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHalf;
