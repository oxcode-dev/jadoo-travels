
export const Subscribe = () => {
    return (
        <>
            <div className="container mx-auto py-16">
                <div className="w-full bg-purple-50 relative rounded-3xl rounded-tl-5xl">
                    <div className="w-full md:max-w-3xl mx-auto py-12 flex flex-col justify-center items-center">
                        <p className="text-3xl leading-tight text-slate-500 font-semibold text-center leading-relaxed py-8">
                            Subscribe to get information, latest news other interesting offers about Cobhams.
                        </p>
                        <div className="w-full py-10">
                            <div className="w-full mx-auto md:max-w-xl flex space-x-4">
                                <input type="email" className="h-16 py-2 px-3 rounded-xl w-full " />
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