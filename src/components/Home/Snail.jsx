import React, { useState } from 'react'
import {motion} from "framer-motion"

const Snail = () => {

    const [clicked, setClicked] = useState(false);
    
    return (
        <div className='relative w-fit ml-4'>
            {clicked ?
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.4}}
                    
                >
                    <div onClick={() => setClicked(false)} style={{cursor: "pointer"}} className='w-8 h-8 rounded-full bg-secondary-bg flex items-center justify-center'>
                        🐌
                    </div>
                    <p className='text-sm text-main-text bg-secondary-bg p-2 rounded-full rounded-tl-none mt-1 ml-4 font-semibold'>
                        Hi there!
                    </p>
                </motion.div>
                :
                <motion.div
                    className='w-8 h-8 rounded-full bg-secondary-bg'
                    initial={{scale: 0.9}}
                    animate={{scale: 1.0}}
                    transition={{duration: 0.4, repeat: Infinity, repeatType: "reverse"}}
                    onClick={() => setClicked(true)}
                    whileHover={{scale: 0.9}}
                    style={{cursor: "pointer"}}
                />
            }
      </div>
    )
}

export default Snail