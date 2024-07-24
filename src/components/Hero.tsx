import HeroBanner from "../assets/img/hero-bg.svg"
import HeroImg from "../assets/img/hero.svg"
import DecoreImg from "../assets/img/Decore.svg"

export const Hero = () => {
    return (
        <>
            <div className="relative w-full bg-no-repeat bg-contain h-full md:min-h-screen"> 
                <img src={HeroBanner} className="w-full" />
                <div className="-mt-40 sm:-mt-64 md:mt-0  mx-auto w-full md:absolute md:top-0">
                    <div className="w-full md:w-1/2 px-4 md:px-20 flex flex-col mt-40 space-y-4">
                        <p className="uppercase text-red-600 font-semibold text-md md:text-lg">
                            Best Destinations around the world
                        </p>
                        <h2 className="text-3xl md:text-7xl leading-tight text-[#181E4B] font-semibold">
                            Travel, 
                            <span style={{ backgroundImage: `url('${DecoreImg}')`, backgroundPositionX: '20px' }} className="bg-no-repeat bg-bottom bg-[left_20px] bg-contain"> enjoy </span> 
                            and live a new and full life
                        </h2>
                        <p className="text-[#5E6282] md:text-lg md:font-medium">
                            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                        </p>
                        <div className="inline-flex items-center py-4">
                            <button type="button" className="bg-yellow-500 text-white p-4 px-6 rounded-lg">
                                Find out more
                            </button>
                            <button type="button" className="p-4 px-6 inline-flex items-center space-x-4 text-gray-500 text-lg font-medium">
                                <span className="bg-red-500 p-2.5 rounded-full text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>
                                </span>
                                <span>Play Demo</span>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:flex absolute right-20 z-40 top-24">
                        <img src={HeroImg} className="" />
                    </div>
                </div>
            </div>
        </>
    )
}