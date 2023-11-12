'use client'
import { useEffect, useState } from "react"
import Cards from "@/components/Cards"
import { burgers, drinks, starters, foods, pizzas, pastas, postres } from "@/data/menuData"
import Modal from "@/components/Moda";
import { AddCartSVG, BackSVG, ClockSVG, FavoriteSVG } from "@/components/ui/AllSVG";

function AllMenu({ params }) {


    const [menu, setMenu] = useState("");
    const [menuList, setMenuList] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [dataModal, setDataModal] = useState({});

    const openModalData = (data) => {

        setDataModal(data)
        setOpenModal(true);

    }

    const changeMenu = () => {
        switch (params.menu) {
            case 'bebidas':
                setMenu("Bebidas");
                setMenuList(drinks);
                break;
            case 'hamburguesas':
                setMenu("Hamburguesas");
                setMenuList(burgers);
                break;
            case 'entrantes':
                setMenu("Entrantes");
                setMenuList(starters);
                break;
            case 'comidas':
                setMenu("Comidas");
                setMenuList(foods);
                break;
            case 'pastas':
                setMenu("Pastas");
                setMenuList(pastas);
                break;
            case 'pizzas':
                setMenu("Pizzas");
                setMenuList(pizzas);
                break;
            case 'postres':
                setMenu("Postres");
                setMenuList(postres);
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        changeMenu()
    }, [params.menu, dataModal])


    return (
        <>
            <div className="flex w-full items-center justify-center">
                <div className="h-[370px] w-[540px] flex flex-col sm:w-[650px] justify-center md:w-[910px] lg:w-[1100px] xl:w-[1280px] bg-gray-400/50 backdrop-blur-2xl rounded-b-lg overflow-hidden">
                    <div className="pl-5">
                        {/* <div>
                            <h1 className="text-xl md:text-2xl font-bold">{menu}</h1>
                        </div> */}
                        <div className="pt-5 pb-2">
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 justify-items-center space-y-2 md:space-y-0 overflow-y-auto h-72 sm:h-64 mt-5 mr-5">
                                {
                                    menuList.map((e, index) => (
                                        <div key={index} className="hover:-translate-y-2 transition-all ease-in-out duration-150 cursor-pointer"
                                            onClick={() => openModalData(e)}>
                                            <Cards data={e} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isVisibe={openModal} onClose={() => setOpenModal(false)}>
                <div className="flex items-center justify-center">
                    <div className='relative flex flex-col sm:flex-row flex-shrink-0 sm:h-80 h-[450px] w-72 sm:w-[650px]'>
                        {/* <div className="block relative sm:hidden w-full h-full bg-gray-200 rounded-xl pb-1 items-center justify-center">
                              <BackSVG onClick={() => setOpenModal(false)}/>
                            </div> */}
                        <div className="relative w-1/2 bg-black/10 pl-10">
                            <img className="absolute -right-12 w-full h-full top-0" src={`${dataModal.img}`} alt="" />
                        </div>
                        <div className='block sm:hidden absolute h-64 ml-2 w-64 pl-5 object-cover hover:scale-110 transition-all ease-in-out duration-150'>
                            <img className="w-full h-full top-0" src={`${dataModal.img}`} alt="" />
                        </div>
                        <div className='bg-gray-200 rounded-xl mt-36 sm:pl-12 sm:mt-0 px-6 flex-1 sm:w-1/2'>
                            <div className="pt-28 sm:pt-16">
                                <div className="flex justify-between items-center">
                                    <h1 className='text-gray-900 font-bold text-base'>{dataModal.name}</h1>
                                    <div className="flex items-center justify-center space-x-1">
                                          <ClockSVG />
                                        <h1 className='text-gray-900 font-medium text-sm'>{dataModal.tiempoEST}</h1>
                                    </div>
                                </div>
                                <div className="pt-5">
                                    <h1 className='text-gray-900 font-medium text-sm'>{dataModal.descrip}</h1>
                                    <h1 className='text-gray-900 font-medium text-sm text-justify'>{dataModal.more}</h1>
                                </div>
                                <div className='flex justify-between pt-5 items-center pb-5'>
                                    <div>
                                        <h1 className='text-gray-900 font-medium text-xs'>Total price</h1>
                                        <h1 className='text-gray-900 font-semibold text-base'>{dataModal.precio}</h1>
                                    </div>
                                    <div className="flex items-center justify-center sm:gap-2 pr-20 sm:pr-0 w-32">
                                        <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center cursor-pointer">
                                            <FavoriteSVG />
                                        </div>
                                        <div className="absolute hover:-translate-y-2 transition-all ease-in-out duration-200 sm:-right-12 -right-3 shadow-xl shadow-gray-600 cursor-pointer bg-gray-900 rounded-r-xl rounded-ss-2xl">
                                            <div className="z-10 px-2 py-3 text-xs font-bold flex items-center gap-2 justify-center text-gray-200">
                                                <div>
                                                    <h1>Add to Cart</h1>
                                                </div>
                                                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-slate-100">
                                                    <AddCartSVG />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default AllMenu
