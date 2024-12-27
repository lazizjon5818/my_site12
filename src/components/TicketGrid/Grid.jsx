import React from 'react'
import image from '../../assets/logos/images/image.png'
import svg from '../../assets/logos/images/image2.png'

function Grid() {
  return (
    <div className='w-[580px] h-[340px] bg-[#1D1D1D] rounded-xl flex-col'>
        <div className='h-[272px] p-2 flex items-center gap-6'>
            <div>
                <img src={image} alt="image" />
            </div>
            <div className='flex gap-4 flex-col'>
                <div className='flex flex-col h-[200px] gap-3 mt-4 '>
                    <h3 className='text-[24px]'>
                        kung fu panda 4
                    </h3>
                    <p className='text-[#A1A1A1]'>
                        2024 . RU . 6+ . 1h 34m/94 min
                    </p>
                    <span>
                        magic cinema
                    </span>
                    <span>
                        zal N1
                    </span>
                    <span>
                        28 march, 19:00
                    </span>
                </div>

                <button className='w-[121px] h-[40px] flex justify-center items-center gap-3 bg-[#2D2D2D] rounded-xl mb-4 flex-grow '>
                    <img className='items-center' src={svg} alt="svg" />

                    <span className='text-red-400'>
                        paid
                    </span>
                </button>

            </div>
        </div>
            <div className='flex justify-around items-center gap-5 '>
                <p className='text-[18px]'> 
                    your ticket is ready
                </p>

                <button className='w-[278px] h-[52px] bg-red-600 rounded-lg'>
                    <span className='text-[18px] text-white '>
                        getting a ticket
                    </span>
                </button>
            </div>

    </div>
  )
}

export default Grid