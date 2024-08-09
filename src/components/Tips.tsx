import { motion } from 'framer-motion';
import BookingImage from '../assets/img/booking-img.svg'
import { tipsList } from '../data/index'

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

export const rightVariants = {
    initial: {
        x: 100,
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
export const Tips = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-16">
                <div className="w-full flex flex-wrap md:flex-nowrap">
                    <motion.div variants={leftVariants} initial="initial" whileInView="animate" className="w-full">
                        <motion.div variants={leftVariants} className='flex flex-col space-y-6'>
                            <motion.p variants={leftVariants} className="uppercase text-slate-500 font-semibold text-base">
                                Easy and Fast
                            </motion.p>
                            <motion.h2 variants={leftVariants} className="text-3xl md:text-5xl leading-tight text-[#181E4B] font-semibold">
                                Book Your Next Trip <br /> In 3 Easy Steps
                            </motion.h2>
                            <motion.div variants={leftVariants} className='space-y-4 py-4'>
                                {
                                    tipsList.map((list, key) => (
                                        <div key={key}>
                                            <TipCard tip={list} />
                                        </div>
                                    ))
                                }
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={rightVariants} initial="initial" whileInView="animate" className="w-full">
                        <motion.img variants={rightVariants} src={BookingImage} />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

type TipCardProp = {
    image: string,
    heading: string,
    description: string,
}

interface TipInterface {
    tip: TipCardProp
}

const TipCard = ({ tip } :TipInterface) => {
    return (
        <>
            <div className='flex flex-nowrap items-center space-x-3 w-full sm:max-w-sm'>
                <div className='bg-transparent rounded-lg'>
                    <img src={tip.image} className='object-contain w-16 h-16' />
                </div>
                <div className=''>
                    <p className='text-base font-semibold text-slate-600'>
                        {tip.heading}
                    </p>
                    <p className='text-sm font-normal text-slate-500'>
                        {tip.description}
                    </p>
                </div>
            </div>
        </>
    )
}