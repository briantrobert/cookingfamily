import { FavoriteSVG } from "./ui/AllSVG"

function Cards({ data }) {
  return (
    <>
      <div className='ml-2'>
        <div className='relative flex flex-col h-full sm:w-48 w-56'>
          <div className='absolute z-10 sm:left-2 sm:h-36 h-52 w-56 sm:ml-2 sm:w-40 pb-1 object-cover mt-3'>
            <img className="w-full h-full" src={`${data.img}`} alt="" />
          </div>
          <div className='bg-white/40 h-44 pt-20 rounded-xl sm:mt-20 mt-32 backdrop-blur-sm'>
            <div className='pl-3 pr-3'>
              <h1 className='text-black font-semibold text-lg'>{data.name}</h1>
              <h1 className='text-gray-600 font-medium text-sm'>{data.descrip}</h1>
              <div className='flex justify-between pt-1'>
                <h1 className='text-black font-semibold text-base'>{data.precio}</h1>
                <div className="h-7 w-7 rounded-full bg-gray-400 flex items-center justify-center cursor-pointer">
                  <FavoriteSVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Cards
