import { destinationsLists } from '../data'
import Decore from '../assets/img/destination-decore.svg'
import { motion } from 'framer-motion'

export const titleVariants = {
    hidden: { y: -50, opacity: 0, },
    show: { 
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.25,
            staggerChildren: 0.3,
        }
    },
}

export const Destinations = () => {
    return (
        <>
            <div className="container mx-auto py-8 relative px-5 md:px-20">
                <img className='right-4 absolute bottom-40 object-contain z-1' src={Decore} />
                <motion.div variants={titleVariants} initial="hidden" whileInView="show" className="text-center py-6 md:py-10">
                    <motion.p variants={titleVariants} className="text-gray-500 font-semibold text-lg mb-4">Top Selling</motion.p>
                    <motion.h2 variants={titleVariants} className='text-2xl md:text-5xl leading-tight text-[#181E4B] font-semibold'>Top Destinations</motion.h2>
                </motion.div>
                
                <div className='py-10 grid md:grid-cols-3 gap-6 md:gap-10 relative z-10'>
                    {
                        destinationsLists.map((list, key) => (
                            <motion.div variants={rightVariants} initial="initial" whileInView="animate" key={key} >
                                <DestinationCard destination={list} />
                            </motion.div>
                        ))
                    }
                </div>
            </div> 
        </>
    )
}

type DestinationCardProp = {
    image: string | SVGAElement,
    name: string,
    days: string,
    cost: string
}

interface DestinationInterface {
    destination: DestinationCardProp
}

export const rightVariants = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1,
            staggerChildren: 0.3,
        },
    },
}

const DestinationCard = ( { destination } :DestinationInterface) => {
    const list = destination
    return (
        <>
            <motion.div variants={rightVariants} className='w-full flex flex-col shadow-lg rounded-b-3xl'>
                {
                    typeof(list.image) === 'string' && <img src={list.image} alt={list.name} className='object-cover object-top w-full h-80 bg-white' />
                }
                <div className='flex items-center justify-between w-full px-4 pt-4 py-2 z-10 bg-white'>
                    <p className='text-slate-700 text-lg font-medium'>
                        {list.name}
                    </p>
                    <p className='text-slate-700 text-lg font-medium'>
                        {list.cost}
                    </p>
                </div>

                <div className='px-4 pb-4 py-2'>
                    <p className="text-[#5E6282] text-sm font-normal inline-flex space-x-2 items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z" fill="#080809"/></svg>
                        <span>
                            {list.days}
                        </span>
                    </p>    
                </div>
                
            </motion.div>
        </>
    )
}

