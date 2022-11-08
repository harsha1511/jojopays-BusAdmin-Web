import React from 'react'

import {TiArrowSortedDown} from "react-icons/ti"


export const TransferList = () => {
  return (
    <div>
        <div className='w-[510px] h-[480px] bg-secondary rounded-2xl overflow-y-auto overflow-x-hidden'>
            <div className='flex justify-between items-center mt-6 ml-6'>
                <div className='flex items-center'>
                    <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                    className='w-12 h-12 rounded-full' />
                    <div>
                    <p className='pl-3 tracking-wide font-semibold'>Mathhew</p>
                    <p className='pl-3 -mt-1 font-thin text-greyText'>Food</p>
                    </div>
                </div>
                <div className='flex text-redText'>
                    <p className='text-2xl'>35$</p>
                    <TiArrowSortedDown />
                </div>
                <div className='text-greyText mr-6'>
                    <p>20.11.2022</p>
                    <p>12.55 pm</p>
                </div>
            </div>
        </div>
    </div>
  )
}
