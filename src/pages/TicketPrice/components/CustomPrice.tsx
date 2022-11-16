import React,{useState} from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'

export const CustomPrice = () => {

    const [showPrice, setShowPrice] = useState<number>(0)


  return (
    <div className='flex flex-col items-center w-full h-full overflow-x-hidden overflow-y-auto'>
        {[...Array(showPrice)].map((s, index) => (
            <div className='flex justify-between w-[95%] mt-4 h-24 bg-quaternary rounded-2xl'>
                <div className='flex items-center justify-around h-full w-[80%]'>
                    <div className='flex items-center h-14 w-52 bg-secondary rounded-xl mr-8'>
                        <p className='ml-3 text-primaryText'>Bus</p>
                        <input className='w-36 h-8 pl-4 focus:border-none bg-primary ml-2 rounded-xl' type="text" name="" id="" />
                    </div>
                    <p className='w-40 text-sm text-primaryText font-semibold'>You changed the Price at: 2.47am today</p>
                    <div className='flex flex-col justify-center items-center w-36 h-[80px] rounded-xl shadow-inner ml-8 bg-primary'>
                        <input
                        className='bg-secondary focus:border-none w-[90%] h-8 rounded-lg drop-shadow-lg pl-4'
                        type="number" name="" id="" />
                        <p className='text-primaryText'>Price/Seat/Km</p>
                    </div>
                </div>
                <div className='flex justify-center items-center h-full w-[20%] ml-8'>
                    <button className='ml-10'><TiTick className='w-[26px] h-[26px] text-quaternaryText' /></button>
                    <button className='ml-4 mr-6'
                    onClick={() => setShowPrice(showPrice-1)}>
                        <MdDeleteForever className='w-6 h-6 text-redText' />
                    </button>
                </div>
            </div>
        ))
        }
        <div className='w-[95%] mt-4 h-20 bg-quaternary rounded-2xl'>
            <div 
            onClick={() => setShowPrice(showPrice+1)}
            className='flex justify-center items-center w-[80%] h-16 m-2 rounded-2xl bg-primary cursor-pointer'>
                <p
                className='text-lg font-bold text-primaryText'
                >Add New +</p>
            </div>
        </div>
    </div>
  )
}
