import { destinationsLists } from '../data'
export const Destinations = () => {
    return (
        <>
            <div className="container mx-auto py-8 relative">
                {/* <img className='right-0 absolute' src={TopLeftDecore} /> */}
                <div className="text-center py-10">
                    <p className="text-gray-500 font-semibold text-lg mb-4">Top Selling</p>
                    <h2 className='text-5xl leading-tight text-[#181E4B] font-semibold'>Top Destinations</h2>
                </div>
                
                <div className='py-16 grid md:grid-cols-3 gap-10'>
                    {
                        destinationsLists.map((list, key) => (
                            <DestinationCard key={key} />
                        ))
                    }
                </div>
            </div> 
        </>
    )
}

const DestinationCard = () => {
    const list = destinationsLists[0]
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center text-center shadow-lg rounded-b-3xl'>
                {
                    typeof(list.image) === 'string' && <img src={list.image} alt={list.name} className='object-cover object-top w-full h-96' />
                }
                <p className='text-[#181E4B] text-xl font-medium'>
                    {list.name}
                </p>
                <p className="text-[#5E6282] text-base">
                    {list.description}
                </p>
            </div>
        </>
    )
}
