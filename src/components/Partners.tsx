import { partnersList } from '../data/index'
import {motion} from 'framer-motion'

export const leftVariants = {
    initial: {
        x: -100,
        // y: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        },
    },
};

export const Partners = () => {
    return (
        <>
            <div className="container mx-auto py-16 px-4">
                <motion.div variants={leftVariants} initial='initial' whileInView='animate' className="w-full py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
                    {
                        partnersList.map((list, key) => (
                            <motion.div variants={leftVariants} key={key} title={list.name} className='bg-white rounded-2xl hover:shadow-lg flex items-center justify-center grayscale hover:grayscale-0 h-24 py-10'>
                                <motion.img variants={leftVariants} src={list.image} alt={list.name} />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </>
    )
}



