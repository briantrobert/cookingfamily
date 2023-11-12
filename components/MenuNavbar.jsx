'use client'
import { DrinksSVG, FoodPlateSVG, FoodSVG, HamburgerSVG, PastasSVG, PizzasSVG, RefreshmentFoodsSVG, StartersSVG } from "@/components/ui/AllSVG"
import Link from "next/link"
import { useState } from "react"

const menuInstances = [
    {
        href: "/menu/pastas",
        icon: <PastasSVG />
    },
    {
        href: "/menu/pizzas",
        icon: <PizzasSVG />
    },
    {
        href: "/menu/bebidas",
        icon: <DrinksSVG />
    },
    {
        href: "/menu/entrantes",
        icon: <StartersSVG />
    },
    {
        href: "/menu/hamburguesas",
        icon: <HamburgerSVG />
    },
    {
        href: "/menu/comidas",
        icon: <FoodPlateSVG />
    },
    {
        href: "/menu/postres",
        icon: <RefreshmentFoodsSVG />
    }
]

function MenuNavbar() {

    const [active, setActive] = useState()

    return (
        <div className="flex w-full items-center justify-center">
            <div className="h-[200px] w-[540px] sm:w-[650px] md:w-[910px] lg:w-[1100px] xl:w-[1280px] bg-gray-400/50 backdrop-blur-2xl overflow-hidden">
                <div className="pt-5 w-full flex flex-col items-start justify-center pl-10">
                    <h1 className="text-xl md:text-4xl font-bold">Delicious Food Menu</h1>
                    <h1 className="text-xs font-semibold md:text-base md:font-medium text-gray-800">We made fresh and delicious food</h1>
                </div>
                <div className="flex pt-10 ml-10 mr-10 justify-between space-x-8 overflow-x-auto py-2">
                    {
                        menuInstances.map((e, i) => (
                            <div key={i} className={`text-gray-800 bg-gray-200 ${active == i ? 'text-white bg-gray-900 -translate-y-3 rounded-2xl':'hover:-translate-y-2 hover:rounded-1xl hover:text-gray-900 dark:hover:text-black'} rounded-lg p-1 md:p-2 transition-all ease-in-out duration-200`}>
                                 <Link href={e.href} onClick={() => setActive(i)}>
                                     {e.icon}    
                                 </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuNavbar
