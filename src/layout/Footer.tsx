import logo from "../assets/logo.svg"
import { footerNavigationLists } from '../data/index.ts'

export const Footer = () => {
    return (
        <>
            <div className="w-full py-8">
                <div className="container mx-auto px-4">
                    <div className="w-full flex flex-wrap md:flex-nowrap">
                        <div className="w-full md:w-1/4">
                            <a href="/" className="flex items-center my-2">
                                <img src={logo} className="w-75 grayscale" alt="Jadoo Logo" />
                            </a>
                            <p className="text-sm font-medium text-slate-500 py-6">
                                Book your trip in minute, get full <br />Control for much longer.
                            </p>
                        </div>
                        <div className="w-full md:w-2/4">
                            <div className="">
                                {
                                    footerNavigationLists.map((list, key) => (
                                        <div>
                                            <p>Company</p>
                                            <ul className="flex flex-col">
                                                {
                                                    list.links.map((nav, index) => (
                                                        <li className="inline-flex h-auto" key={index}>
                                                            <a href="#" className="py-4 w-full">
                                                                {nav}
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                        <div className="w-full md:w-1/4">Hello Socials</div>
                    </div>
                    <div className="py-8">
                        <p className="text-center text-slate-500">
                            All rights reserved @jadoo.co
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}