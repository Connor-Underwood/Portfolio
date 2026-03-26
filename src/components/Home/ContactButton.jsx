import { motion } from 'framer-motion'

const ContactButton = ({contact, idx}) => {

    return (
        <motion.div
            initial={{opacity: 0, y: 5}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.2, delay: 1.2 + 0.2 * idx}}
            key={contact.Name}
        >
            <a href={contact.Link} target="_blank" rel="noreferrer">
                <motion.div
                    className='w-14 h-14 rounded-full border-2 inline-flex flex-shrink-0 justify-center items-center active:scale-95 transition-all'
                    style={{ borderColor: contact.color, boxShadow: `0 0 0 0 ${contact.color}` }}
                    initial={{y: 0}}
                    whileHover={{y: -4, boxShadow: `0 4px 12px ${contact.color}40`}}
                    whileTap={{scale: 0.95}}
                    transition={{duration: 0.01}}
                >
                    {contact.svg}
                </motion.div>
            </a>
        </motion.div>
    )
}

export default ContactButton