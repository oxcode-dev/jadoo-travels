import SubscribeUp from '../assets/img/subscribe-up.svg'
import SubscribeDown from '../assets/img/subscribe-down.svg'
import SubscribeIcon from '../assets/img/subscribe-icon.svg'
import SubscribeDecore from '../assets/img/subscribe-decore.svg'
export const Subscribe = () => {
    return (
        <>
            <div className="container mx-auto py-12 relative px-4">
                <img src={SubscribeIcon} className='absolute top-4 left-28 z-10' />
                <img src={SubscribeIcon} className='absolute top-4 right-0 z-10' />
                <img src={SubscribeDecore} className='absolute bottom-0 md:-right-8' />
                <div className="w-full bg-purple-50 relative rounded-3xl rounded-tl-5xl overflow-hidden relative md:rounded-tl-[10rem]">
                    <img src={SubscribeDown} className='absolute top-0 right-0' />
                    <img src={SubscribeUp} className='absolute bottom-0 -left-24' />

                    <div className="w-full md:max-w-3xl mx-auto py-12 flex flex-col justify-center items-center">
                        <p className="text-3xl leading-tight text-slate-500 font-semibold text-center leading-relaxed py-8">
                            Subscribe to get information, latest news other interesting offers about Cobhams.
                        </p>
                        <div className="w-full py-10 relative z-2">
                            <div className="w-full mx-auto md:max-w-xl flex space-x-4">
                                <input placeholder='Your email' type="email" className="placeholder:text-slate-700 h-16 py-2 px-3 rounded-xl w-full " />
                                <button className="h-16 py-2 px-6 rounded-xl bg-[#FF946D] text-white">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}