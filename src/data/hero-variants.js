export const titleVariants = {
    hidden: { y: -50, opacity: 0, },
    show: { 
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.25,
            delay: 1,
        }
    },
}

export const opacityVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.7,
            staggerChildren: 0.1,
        },
    },
};

export const leftVariants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },
};

export const rightVariants = {
    initial: {
        x: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

export const imgVariants = {
    initial: {
        height: '0%',
        opacity: 0,
    },
    animate: {
        height: '100%',
        opacity: 1,
        transition: {
            duration: 2,
            staggerChildren: 0.1,
        },
    },
};

export const letterVariants = {
    initial: {
        // x: 100,
        height: 0,
        opacity: 0,
    },
    animate: {
        // x: 0,
        height: 100,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};