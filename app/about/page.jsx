import { FacebookSVG, InstagramSVG, TelegramSVG, WhatsUpSVG } from "@/components/ui/AllSVG"

function About() {

    return (
        <div className="flex w-full items-center justify-center">
            <div className="relative h-[570px] w-[540px] sm:w-[650px] md:w-[910px] lg:w-[1100px] xl:w-[1280px] bg-gray-400/50 backdrop-blur-2xl rounded-b-lg overflow-hidden">
                <div className="flex w-full items-center justify-center pt-10">
                    <h1 className="text-2xl sm:text-3xl font-bold sm:font-semibold text-gray-800">Everything about us.....here</h1>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 pl-8 pr-8 lg:pl-0 lg:pr-0">
                    <div className="hidden lg:block">
                       <img className="w-full h-full" src="/about/burger.png" alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center pt-8">
                        <h1 className="text-lg md:text-xl font-semibold sm:font-medium text-gray-800 text-justify">We are dedicated to pleasing the clients who visit 
                        us with the greatest respect and with the greatest satisfaction. For us, you are the motivation to improve and grow our services. 
                        I hope you are treated properly. Thanks for your visit. We look forward to seeing you again.</h1>
                        <h1 className="text-lg md:text-xl font-semibold sm:font-medium text-gray-800 text-left pt-5">Contact us:</h1>
                    </div>
                    <div className="hidden lg:block">
                        <img className="w-full h-full" src="/about/foodh.png" alt="" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 pl-8 pr-8 lg:pl-0 lg:pr-0 pt-3">
                    <div className="hidden lg:block"></div>
                    <div className="grid grid-cols-2">
                        <div className="hover:bg-slate-400 rounded-xl hover:-translate-y-2 transition-all ease-in-out">
                            <div className="flex items-center justify-center space-x-1 p-2">
                              <InstagramSVG />
                              <h1 className="hidden sm:block">cookingfamily.oficial</h1>
                            </div>
                        </div>
                        <div className="hover:bg-slate-400 rounded-xl hover:-translate-y-2 transition-all ease-in-out">
                            <div className="flex items-center justify-center space-x-1 p-2">
                              <TelegramSVG />
                              <h1 className="hidden sm:block">@cookingfamily</h1>
                            </div>
                        </div>
                        <div className="hover:bg-slate-400 rounded-xl hover:-translate-y-2 transition-all ease-in-out">
                            <div className="flex items-center justify-center space-x-1 p-2">
                              <FacebookSVG />
                              <h1 className="hidden sm:block">CookingFamilyEver</h1>
                            </div>
                        </div>
                        <div className="hover:bg-slate-400 rounded-xl hover:-translate-y-2 transition-all ease-in-out">
                            <div className="flex items-center justify-center space-x-1 p-2">
                              <WhatsUpSVG />
                              <h1 className="hidden sm:block">+01----------</h1>
                            </div>
                        </div>
                       
                    </div>
                    <div className="hidden lg:block"></div>
                </div>

            </div>
        </div>
    )
}

export default About
