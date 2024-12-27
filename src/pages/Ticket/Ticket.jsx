import React from 'react'
import Grid from '../../components/TicketGrid/Grid'

function Ticket() {
  return (
    <div className='container flex   h-[1400px] bg-black text-white items-center flex-col gap-[60px] '>
      <div className='w-[380px] h-[56px] bg-[#111111] mt-8  flex justify-center items-center rounded-2xl'>

        <div className='flex justify-center items-center flex-1 bg-[#1D1D1D] rounded-2xl h-[52px] ml-[3px]'>
          <button className='flex justify-center items-center  text-red-600'>
            <span>
              active
            </span>
          </button>
        </div>
        <div className='flex justify-center items-center flex-1 mr-[3px]'>
          <button>
            <span>
              library
            </span>
          </button>
        </div>
      </div>
      <Grid/>
    </div>
  )
}

export default Ticket