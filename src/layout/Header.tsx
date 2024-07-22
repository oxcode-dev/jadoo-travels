import { useState } from "react"
import logo from "../assets/logo.svg"
import { navigationLists } from '../data/index.ts'
import DecoreImg from "../assets/img/Decore.svg"

export const Header = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <div className="w-full absolute mx-auto z-50">
                <header className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between h-auto py-4 md:py-2">
                    <div className="flex w-full md:w-auto justify-between px-4">
                        <a href="/" className="flex items-center my-2">
                            <img src={logo} className="w-75" alt="Jadoo Logo" />
                        </a>
                        <button onClick={() => setIsActive(!isActive)} className="flex md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${isActive ? 'inline-flex' : 'hidden'}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${!isActive ? 'inline-flex' : 'hidden'}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                    <ul className={`md:flex flex-col md:flex-row py-16 md:py-0 bg-white md:bg-transparent ${isActive ? 'flex' : 'hidden'}`}>
                        {
                            navigationLists.map((nav, key) => (
                                <li className="inline-flex h-auto" key={key}>
                                    <a href="#" className="px-4 md:px-6 py-4 w-full group relative">
                                        <span>{nav}</span>
                                        <img src={DecoreImg} className="w-16 absolute bottom-2 hidden group-hover:flex" />
                                </a>
                                </li>
                            ))
                        }
                    </ul>

                    <div className={`md:flex space-x-2 py-4 md:pt-4 bg-white md:bg-transparent ${isActive ? 'flex' : 'hidden'}`}>
                        <div>
                            <a href="#" className="px-8">
                                Login
                            </a>
                        </div>
                        <div>
                            <a href="#" className="bg-transparent border rounded-md border-gray-800 py-2 px-6">
                                Sign up
                            </a>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}