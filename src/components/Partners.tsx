import { partnersList } from '../data/index'
export const Partners = () => {
    return (
        <>
            <div className="container mx-auto py-16 px-4">
                <div className="w-full py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
                    {
                        partnersList.map((list, key) => (
                            <div key={key} title={list.name} className='bg-white rounded-2xl hover:shadow-lg flex items-center justify-center grayscale hover:grayscale-0 h-24 py-10'>
                                <img src={list.image} alt={list.name} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}