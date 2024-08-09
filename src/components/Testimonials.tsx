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
export const Testimonials = () => {
    return (
        <>
           <div className="container mx-auto py-12 px-4">
                <div className="w-full flex flex-wrap md:flex-nowrap">
                    <motion.div variants={leftVariants} initial='initial' whileInView='animate' className="w-full">
                        <motion.div variants={leftVariants} className='flex flex-col space-y-6 pb-6'>
                            <motion.p variants={leftVariants} className="uppercase text-slate-500 font-semibold text-base">
                                Testimonials
                            </motion.p>
                            <motion.h2 variants={leftVariants} className="text-3xl md:text-5xl leading-tight text-[#181E4B] font-semibold">
                                What People Say <br /> About Us.
                            </motion.h2>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={rightVariants} initial='initial' whileInView='animate' className="w-full relative">
                        <motion.div variants={rightVariants}>
                            <TestimonialCard />
                        </motion.div>
                        {/* <div>
                            <TestimonialCard />
                        </div>
                        <div>
                            <TestimonialCard />
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </>
    )
}

const TestimonialCard = () => {
    return (
        <div>
            <div className="shadow-lg p-4 py-6 rounded-lg border border-gray-100 text-slate-500 space-y-4 bg-white">
                <div className="text-sm leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi enim quod recusandae nihil reprehenderit quidem omnis laboriosam mollitia, nobis odit exercitationem dolores incidunt libero non corrupti aut. Iste, quaerat ipsa.
                </div>
                <div className="flex space-x-2">
                    <img className="w-12" src="https://avatar.iran.liara.run/public/41" />
                    <div>
                        <p className="font-medium leading-relaxed">
                            Mike Taylor
                        </p>
                        <p className="text-sm leading-relaxed">
                            Lagos, Nigeria  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}