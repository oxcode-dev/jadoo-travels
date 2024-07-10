import logo from "../assets/logo.svg"
import { navigationLists } from '../data/index.ts'

export const Header = () => {
    return (
        <>
            <div className="w-full absolute mx-auto z-50">
                <header className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between h-auto py-4 md:py-2">
                    <div>
                        <a href="/" className="flex items-center my-2">
                            <img src={logo} className="w-75" alt="Jadoo Logo" />
                        </a>
                    </div>

                    <ul className="flex flex-col md:flex-row py-16 md:py-0">
                        {
                            navigationLists.map((nav, key) => (
                                <li className="inline-flex h-auto" key={key}>
                                    <a href="#" className="px-4 md:px-10 py-4 w-full">
                                        {nav}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex space-x-2 pt-4">
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