import BookingImage from '../assets/img/booking-img.svg'
import PaymentIcon from '../assets/img/cab-icon.svg'

export const Tips = () => {
    return (
        <>
            <div className="container mx-auto py-16">
                <div className="w-full flex flex-wrap">
                    <div className="w-1/2">
                        <div className='flex flex-col space-y-6'>
                            <p className="uppercase text-slate-500 font-semibold text-base">
                                Easy and Fast
                            </p>
                            <h2 className="text-5xl leading-tight text-[#181E4B] font-semibold">
                                Book Your Next Trip <br /> In 3 Easy Steps
                            </h2>
                            <div className='space-y-4 py-4'>
                                <TipCard />
                                <TipCard />
                                <TipCard />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src={BookingImage} />
                    </div>
                </div>
            </div>
        </>
    )
}

const TipCard = () => {
    return (
        <>
            <div className='flex flex-nowrap items-center space-x-3 w-full sm:max-w-sm'>
                <div className='w-12 h-12 bg-red-600 rounded-lg'>
                    <img src={PaymentIcon} className='object-cover w-full h-full' />
                </div>
                <div className=''>
                    <p className='text-base font-semibold text-slate-600'>
                        Choose Destination
                    </p>
                    <p className='text-sm font-normal text-slate-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit.
                    </p>
                </div>
            </div>
        </>
    )
}