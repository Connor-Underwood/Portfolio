import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ContactButton = ({contact, idx}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 5}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.2, delay: 1.2 + 0.2 * idx}}
            key={contact.Name}
        >
            <a href={contact.Link} target="_blank">
                <motion.div 
                    className='w-14 h-14 text-primary rounded-full color-indigo-500 border-2 border-primary inline-flex flex-shrink-0 justify-center items-center hover:shadow-md hover:shadow-indigo-500/50'
                    initial={{y: 0}}
                    whileHover={{y: -4}}
                    transition={{duration: 0.2}}
                >
                    <span><i className={contact.Icon} /></span>
                </motion.div>
            </a>
        </motion.div>
    )
}

export default ContactButton