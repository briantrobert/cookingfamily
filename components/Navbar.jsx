'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { CookingFamilySVG, MenuResponsiveSVG } from "./ui/AllSVG"
import useWindowSize from "./hooks/useWindowsSize";

const menuListItems = [
    {
        item: "Home",
        href: "/"
    }, {
        item: "Menu",
        href: "/menu"
    }, {
        item: "About",
        href: "/about"
    },
]

function Navbar() {

    const [movileMenu, setMovileMenu] = useState(false);
    const [height, width] = useWindowSize();

    const openMovileMenu = () => {
        setMovileMenu(!movileMenu)
    }

    useEffect(() => {
        if (width >= 770) {
            setMovileMenu(false);
        }
    }, [width])

    const [active, setActive] = useState()

    return (
        <div className="relative flex w-full z-20 items-start justify-center pt-5">
            <div className="h-12 w-[540px] text-lg font-semibold text-gray-600 flex flex-row-reverse md:flex-row items-center justify-between sm:w-[650px] md:w-[910px] lg:w-[1100px] xl:w-[1280px] bg-gray-400/50 backdrop-blur-2xl rounded-t-lg pl-5 pr-8">
                <div className="pl-5">
                    <h1 className="font-bold text-gray-800 text-xl">F4G</h1>
                </div>
                <div className="font-semibold hidden md:block">
                    <ul className="flex justify-center items-center space-x-16">
                        {menuListItems.map((e, i) => (
                            <li key={i} className={`${active == i ? 'text-white bg-gray-900 rounded-2xl' : 'hover:bg-gray-600 hover:rounded-2xl dark:hover:text-gray-200 text-gray-800'} rounded-lg p-1 transition-all ease-in-out duration-200`}>
                                <Link href={e.href} onClick={() => setActive(i)}>
                                    {e.item}
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                <div className="font-bold hidden md:block">
                    <ul className="flex justify-center items-center space-x-10">
                        <li>
                            <button className="py-1 px-2 bg-gray-800 text-gray-200 rounded-lg hover:-translate-y-1 hover:rounded-xl transition-all ease-in-out duration-200">
                                Log in
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="font-semibold block md:hidden">
                    <button className="p-1 bg-gray-800 rounded-lg backdrop-blur-lg hover:scale-110 transition-all ease-in-out duration-150" onClick={openMovileMenu}><MenuResponsiveSVG /></button>
                </div>

                {movileMenu && <div className="absolute block md:hidden left-8 text-gray-800 top-10 z-10 w-44 h-52 bg-gray-200 p-2 rounded-xl">
                    <ul className="space-y-1">
                        <li className="hover:bg-gray-300 rounded-lg p-1" ><Link href="/">
                            Home
                        </Link>
                        </li>
                        <li className="hover:bg-gray-300 rounded-lg p-1"><Link href="/menu">
                            Menu
                        </Link>
                        </li>
                        <li className="hover:bg-gray-300 rounded-lg p-1"><Link href="/about">
                            About
                        </Link>
                        </li>
                        <li>
                            <hr className="border-gray-800 border" />
                        </li>
                        <li>
                            <button className="py-1 px-2 bg-gray-800 text-gray-200 rounded-lg">
                                Log in
                            </button>
                        </li>
                    </ul>
                </div>}
              
            </div>
        </div>
    )
}

export default Navbar
