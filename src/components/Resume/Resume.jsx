import { motion } from 'framer-motion'
const Resume = () => {

    return (
        <div>
            <motion.a>
                <button
                onClick={() => document.getElementById('pricing-packages').scrollIntoView({behavior: 'smooth'})}
                className='bg-indigo-500 mb-4 mt-2 ml-auto block rounded-full px-6 py-3 hover:shadow-xl hover:shadow-indigo-500/20 active:shadow-none transition duration-200 ease-in'
                    >
                <p className='font-semibold text-white flex items-center gap-2'>
                    Access Resume
                </p>
            </button>
            </motion.a>
            
            <img className="blur-sm max-w-2xl mx-auto rounded-lg" src="./Resume_Template.png" alt="resume" />
            
                      
            
        </div>
    )
}

export default Resume
