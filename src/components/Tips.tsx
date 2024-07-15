import BookingImage from '../assets/img/booking-img.svg'
import { tipsList } from '../data/index'

export const Tips = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-16">
                <div className="w-full flex flex-wrap md:flex-nowrap">
                    <div className="w-full">
                        <div className='flex flex-col space-y-6'>
                            <p className="uppercase text-slate-500 font-semibold text-base">
                                Easy and Fast
                            </p>
                            <h2 className="text-3xl md:text-5xl leading-tight text-[#181E4B] font-semibold">
                                Book Your Next Trip <br /> In 3 Easy Steps
                            </h2>
                            <div className='space-y-4 py-4'>
                                {
                                    tipsList.map((list, key) => (
                                        <div key={key}>
                                            <TipCard tip={list} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={BookingImage} />
                    </div>
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