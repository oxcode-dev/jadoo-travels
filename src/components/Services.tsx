import TopLeftDecore from '../assets/img/top-left-decore.svg'
import { servicesLists } from '../data'
import { motion } from 'framer-motion'

export const titleVariants = {
    hidden: { y: -50, opacity: 0, },
    show: { 
        y: 0,
        opacity: 1,
        transition: {
            // type: "spring",
            duration: 1.25,
            // delay: 1,
            staggerChildren: 0.3,
        }
    },
}
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
            staggerChildren: 0.2,
        },
    },
};
export const Services = () => {
    return (
        <>
            <div className="container mx-auto py-10 pt-28 px-4 relative">
                <img className='right-0 absolute w-24 md:w-auto' src={TopLeftDecore} />
                <motion.div variants={titleVariants} initial='hidden' whileInView='show' className="text-center py-10 pb-6 relative z-10">
                    <motion.p variants={titleVariants} className="uppercase text-gray-500 font-semibold md:text-lg mb-4">Category</motion.p>
                    <motion.h2 variants={titleVariants} className='text-3xl md:text-5xl leading-tight text-[#181E4B] font-semibold'>We Offer Best Services</motion.h2>
                </motion.div>
                <motion.div variants={leftVariants} initial="initial" whileInView='animate' className='py-10 grid md:grid-cols-4 gap-8'>
                    {
                        servicesLists.map((list, key) => (
                            <motion.div variants={leftVariants} key={key} className='flex flex-col justify-center items-center p-10 text-center border-gray-50 hover:border hover:shadow-lg rounded-3xl space-y-4'>
                                <motion.img variants={leftVariants} src={list.icon} alt={list.title} className='object-cover h-16' />
                                <motion.p variants={leftVariants} className='text-[#181E4B] text-xl font-medium'>
                                    {list.title}
                                </motion.p>
                                <motion.p variants={leftVariants} className="text-[#5E6282] text-base">
                                    {list.description}
                                </motion.p>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div> 
        </>
    )
}