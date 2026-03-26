import React from 'react'

import {motion} from "framer-motion"

import profile from "../../assets/connor_maple_pass.png"
import Navbar from '../Navbar'

import Typewriter from 'typewriter-effect';
import ContactButton from './ContactButton';
import SocialMediaHero from './SocialMediaHero';
const TopHalf = () => {

  const titles = [
    'Student',
    'Developer',
    'Researcher'
  ]

  const contactLinks = [
    {Name: "Mail", Icon: 'far fa-envelope fa-lg', Link: "mailto:connorunderwood.2004@gmail.com"},
    {Name: "LinkedIn", Icon: 'fab fa-linkedin fa-lg', Link: "https://www.linkedin.com/in/connorunderwood2004"},
    {Name: "GitHub", Icon: "fab fa-github fa-lg", Link: "https://github.com/Connor-Underwood"},
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

          {/* Social Media Hero - Mobile */}
          <div className='lg:hidden mt-6'>
            <SocialMediaHero />
          </div>
          </div>

          {/* Right side - Social Media Hero - Desktop */}
          <div className='hidden lg:flex items-center justify-center'>
            <SocialMediaHero />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHalf;
