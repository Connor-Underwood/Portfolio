export const containerVariant = {
    'hidden': {
        opacity: 0
    },
    'show': {
        opacity: 1,
        transition: {
            duration: 0.4,
            staggerChildren: 0.2,
            when: "beforeChildren"
        }
    }
}

export const textVariant = {
    'hidden': {
        opacity: 0,
        y: 10
    },
    'show': {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
}

export const cardVariant = {
    'hidden': {
        opacity: 0,
        scale: 0.8,
        y: 10,
    },
    'show': {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
}