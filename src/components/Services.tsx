import TopLeftDecore from '../assets/img/top-left-decore.svg'
import { servicesLists } from '../data'
export const Services = () => {
    return (
        <>
            <div className="container mx-auto py-10 pt-28 relative">
                <img className='right-0 absolute' src={TopLeftDecore} />
                <div className="text-center py-10 pb-6">
                    <p className="uppercase text-gray-500 font-semibold text-lg mb-4">Category</p>
                    <h2 className='text-5xl leading-tight text-[#181E4B] font-semibold'>We Offer Best Services</h2>
                </div>
                <div className='py-10 grid md:grid-cols-4 gap-8'>
                    {
                        servicesLists.map((list, key) => (
                            <div key={key} className='flex flex-col justify-center items-center p-10 text-center border-gray-50 hover:border hover:shadow-lg rounded-3xl space-y-4'>
                                <img src={list.icon} alt={list.title} className='object-cover h-16' />
                                <p className='text-[#181E4B] text-xl font-medium'>
                                    {list.title}
                                </p>
                                <p className="text-[#5E6282] text-base">
                                    {list.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div> 
        </>
    )
}