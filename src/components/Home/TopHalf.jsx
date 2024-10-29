import React, { useState, useEffect, useRef } from 'react'

import {motion} from "framer-motion"

import profile from "../../assets/IMG_3695.png"
import Navbar from '../Navbar'

import Typewriter from 'typewriter-effect';
import BIRDS from 'vanta/dist/vanta.birds.min'
import ContactButton from './ContactButton';
const TopHalf = () => {

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 420.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: "#40E0D0", // Adjust to your desired color
          backgroundColor: "#111127", // Adjust to your desired background color
          quantity: 3,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup on component unmount
    };
  }, [vantaEffect]);

  const titles = [
    'Student',
    'Developer',
    'Researcher'
  ]

  const contactLinks = [
    {Name: "Mail", Icon: 'far fa-envelope fa-lg', Link: ""},
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
    <div ref={myRef} className='bg-gray-900 text-white h-screen flex flex-col'>
        
      <Navbar />      
      
      <div className='z-10 flex-grow grid place-items-center'>
        <div className='max-w-7xl mx-auto justify-center text-center text-white p-4 z-10'>
          <motion.div 
            className='w-64 z-0 aspect-square relative grid place-items-center rounded-full mx-auto shadow-lg shadow-indigo-500/50'
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
            <div className='absolute bg-gray-900 rounded-full w-full aspect-square z-0'>
              <motion.img 
                src={profile} 
                className='rounded-full w-full h-full object-cover' // Add 'object-cover' here
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                alt="profile-pic"
              />
            </div>
          </motion.div>
          
          
          <div className='text-3xl md:text-4xl font-bold text-center my-4 flex justify-center font-mono'>
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

          <div className='flex gap-4 my-4 justify-center'>
            {titles.map((title, idx) => (
              <motion.p
                key={title}
                initial={{opacity: 0, y: 5}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: 0.6 + 0.2 * idx}}
                className='text-lg md:text-xl font-semibold'
              >
                <span className='text-primary'><i className='fas fa-chevron-right' />&nbsp;</span>
                {title}
              </motion.p>
            ))}
          </div>

          <div className='flex mx-auto text-center justify-center items-center my-4 gap-4'>
              {contactLinks.map((contact, idx) => (
                <ContactButton contact={contact} idx={idx} />
              ))}
          </div>
          
          <motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: 2.0}} 
            className='max-w-2xl text-center mx-auto my-6 md:text-lg'
          >
            <p className='font-semibold text-2xl'>About Me</p>
            <p className='my-2'>Hi, I'm Connor! I'm a junior at Purdue University studying a double major in Computer Science & Data Science.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TopHalf;
