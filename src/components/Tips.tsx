import BookingImage from '../assets/img/booking-img.svg'
export const Tips = () => {
    return (
        <>
            <div className="container mx-auto py-16">
                <div className="w-full flex flex-wrap">
                    <div className="w-1/2">
                        <div className='flex flex-col'>
                            <p>
                                Easy and Fast
                            </p>
                            <h2>
                                Book Your Next Trip In 3 Easy Steps
                            </h2>
                            <div className='space-y-2'>
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
            <div className='flex flex-nowrap items-center  w-full sm:max-w-md'>
                <div className='w-12 h-12 bg-red-600 rounded-lg'></div>
                <div className=''>
                    <p>
                        Choose Destination
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit.
                    </p>
                </div>
            </div>
        </>
    )
}