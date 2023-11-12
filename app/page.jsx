import { StarRatinSVG } from "@/components/ui/AllSVG";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative h-[570px] w-[540px] sm:w-[650px] md:w-[910px] lg:w-[1100px] xl:w-[1280px] bg-gray-400/50 backdrop-blur-2xl rounded-b-lg overflow-hidden">
        <div className="flex w-full justify-center">
          <div className="absolute">
            <div>
              <img className="w-full h-full" src="/background.png" alt="" />
            </div>
          </div>
        </div>
        <div className="block lg:hidden absolute h-[570px] w-[540px] sm:w-[650px] md:w-[910px] lg:w-[1100px] xl:w-[1280px] bg-gray-400/50 backdrop-blur-md">

        </div>
        <div className="absolute w-full flex">
          <div className="pt-5 w-full md:w-1/2 flex flex-col md:items-start items-center justify-center md:pl-10">
           
            <h1 className="text-6xl sm:text-8xl font-semibold text-gray-800">Food 4</h1>
      
            <div className="md:pl-32">
              <h1 className="text-6xl sm:text-8xl font-semibold text-gray-800">Good</h1>
            </div>

            <div className="pt-16 md:pt-10">
              <h1 className="text-xl md:text-2xl md:font-medium font-semibold md:text-gray-700">"Where The Flavor</h1>
              <div className="pl-12">
                <h1 className="text-xl md:text-2xl md:font-medium font-semibold md:text-gray-700">It Will Look Familiar To You"</h1>
              </div>

            </div>
            <div className="text-lg md:text-xl font-semibold text-gray-200 pt-24 md:pt-30 sm:pt-10 sm:pl-10">
              <Link href='/menu'>
                <button className="py-2 px-2 bg-gray-900 rounded-lg border-2 border-gray-800 hover:-translate-y-2 hover:scale-105 transition-all ease-in-out duration-200">Dive into the Menu</button>
              </Link>
            </div>


            <div className="md:relative flex pt-10 md:ml-5">
              <div className="absolute z-50 left-28 w-9 h-9 object-cover rounded-full">
                <img
                  className="w-9 h-9 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1632957801446-d0a26e1b1302?auto=format&fit=facearea&facepad=2.25&q=60&w=144&h=144&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaG90byUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="profile 3" />
              </div>
              <div className="absolute z-40 left-[90px] w-9 h-9 object-cover rounded-full">
                <img
                  className="w-9 h-9 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2.25&q=60&w=144&h=144&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaG90byUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="profile 3" />
              </div>
              <div className=" absolute z-30 left-[70px] w-9 h-9 object-cover rounded-full">
                <img
                  className="w-9 h-9 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2.25&q=60&w=144&h=144&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaG90byUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="profile 3" />
              </div>
              <div className="absolute z-20 left-[50px] w-9 h-9 object-cover rounded-full">
                <img
                  className="w-9 h-9 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2.25&q=60&w=144&h=144&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaG90byUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="profile 3" />
              </div>
              <div className="absolute z-10 left-[30px] w-9 h-9 object-cover rounded-full">
                <img
                  className="w-9 h-9 object-cover rounded-full"
                  src="https://plus.unsplash.com/premium_photo-1661868397660-8c52f33c5934?auto=format&fit=facearea&facepad=2.25&q=60&w=144&h=144&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile 3" />
              </div>
            </div>
            <div className="w-full h-full pt-10 md:pl-12 pl-8 flex items-center space-x-2">
              <StarRatinSVG />
              <h1 className="text-gray-900 font-bold">4.5 </h1>
              <h1 className="text-sm text-gray-700"> (review rating)</h1>
            </div>
          </div>
          <div className="hidden md:block w-1/2 md:pr-10 pt-10">
            <div className="flex flex-col justify-between w-full items-end h-full text-sm text-gray-900 font-bold">
              <div className="relative py-2 px-2 border-gray-700 bg-gray-200 rounded-lg">
                <div className="absolute -left-5 -top-6 w-9 h-9 object-cover rounded-full">
                  <img
                    className="w-9 h-9 object-cover rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2.25&q=60&w=144&h=144&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBob3RvJTIwbWVufGVufDB8fDB8fHww"
                    alt="profile 3" />
                </div>
                <p>The best service online for sure</p>
                <p>i'm glad to find it right away</p>
              </div>

              <div className="relative py-2 px-2 border-gray-700 bg-gray-400 rounded-lg">
                <div className="absolute -left-5 -top-6 w-9 h-9 object-cover rounded-full">
                  <img
                    className="w-9 h-9 object-cover rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&&facepad=2&q=60&w=200&h=200&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvJTIwbWVufGVufDB8fDB8fHww"
                    alt="profile 3" />
                </div>
                <p>You can choose wherever you want</p>
                <p>beleive me you can enjoy it</p>
                <p>thanks for been here</p>
              </div>

              <div className="relative py-2 px-2 border-gray-700 bg-gray-200 rounded-lg">
                <div className="absolute -left-6 -top-5 w-9 h-9 object-cover rounded-full">
                  <img
                    className="w-9 h-9 object-cover rounded-full"
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=facearea&facepad=2.25&q=60&w=144&h=144&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBob3RvJTIwbWVufGVufDB8fDB8fHww"
                    alt="profile 3" />
                </div>
                <p>I should said that was a great experience</p>
                <p>i can wait for come and visit again</p>
                <p>was an amazing journey</p>
              </div>
            </div>
          </div>
          {/* Menu movil */}
          

        </div>
      </div>
    </div>
  )
}
