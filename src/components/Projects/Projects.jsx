import React, { useState } from 'react'

import { motion } from 'framer-motion'

import {websites} from "./websites"
import {mlprojects} from "./mlprojects"

import WebsiteCard from './WebsiteCard'
import MLCard from './MLCard'

const tabs = [
    {title: 'Websites', icon: 'fas fa-code'},
    {title: 'Machine Learning', icon: 'fas fa-brain'}
]



const Projects = () => {

    const [selected, setSelected] = useState("Websites")

    return (
        <div>
            <div className='flex items-center my-6 drop-shadow-lg dark:drop-shadow-none bg-white dark:bg-gray-700 rounded-full p-2 w-fit'>
                {tabs.map((tab) => (
                    <button 
                        key={tab.title}
                        className={`${selected === tab.title ? "text-primary transition duration-200 ease-in" : ""} flex gap-2 font-semibold text-center px-4 py-2 bg-transparent hover:text-primary transition duration-200 ease-in`}
                        onClick={() => setSelected(tab.title)}
                    >
                        {tab.title}
                        <span>
                            <i className={tab.icon} />
                        </span>
                    </button>
                ))}
                
            </div>
            {selected === 'Websites' ?
                <motion.div 
                    className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 p-6'
                >
                    {websites.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{opacity: 0, scale: 0.5, y: 10}}
                            animate={{opacity: 1, scale: 1, y: 0}}
                            transition={{duration: 0.4, delay: 0.2 + 0.2 * idx}}
                        >
                            <WebsiteCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>
                :
                <motion.div 
                    className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 p-6'
                >
                    {mlprojects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{opacity: 0, scale: 0.5, y: 10}}
                            animate={{opacity: 1, scale: 1, y: 0}}
                            transition={{duration: 0.4, delay: 0.2 + 0.2 * idx}}
                        >
                            <MLCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>

            }
            
        </div>
    )
}

export default Projects