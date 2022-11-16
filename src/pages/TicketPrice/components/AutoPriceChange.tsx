import React,{useState} from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import { ToggleButton } from '../../../components/ToggleButton'

export const AutoPriceChange = () => {

    const [showPrice, setShowPrice] = useState<number>(0)
    const [input, setInput] = useState()

    const handleForm = (e:any) => {
        setInput(e.target.value)
        
    }
    console.log(input, "INPUTTTTTT");


  return (
    <div className='flex flex-col items-center w-full h-full overflow-x-hidden overflow-y-auto'>
        {[...Array(showPrice)].map((s, index) => (
            <div className='flex justify-between w-[95%] mt-4 h-24 bg-quaternary rounded-2xl'>
                <div className='flex items-center h-full w-[65%]'>
                    <div className='flex flex-col items-center justify-center w-36  h-[80px]  rounded-xl shadow-inner bg-primary ml-8 my-2'>
                        <input 
                        className='bg-secondary focus:border-none py-1 px-3 rounded-lg drop-shadow-lg' 
                        type="time" name="" id=""
                        onChange={handleForm}
                        />
                        <p className='text-primaryText font-semibold mt-1'>From</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-36  h-[80px]  rounded-xl shadow-inner bg-primary ml-8'>
                        <input
                        className='bg-secondary focus:border-none py-1 px-3 rounded-lg drop-shadow-lg' type="time" name="" id="" />
                        <p className='text-primaryText font-semibold mt-1'>To</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-36 h-[80px] rounded-xl shadow-inner ml-8 bg-primary'>
                        <input
                        className='bg-secondary focus:border-none w-[90%] h-8 rounded-lg drop-shadow-lg pl-4'
                        type="number" name="" id="" />
                        <p className='text-primaryText'>Price/Seat/Km</p>
                    </div>
                </div>
                <div className='flex justify-center items-center h-full w-[30%] ml-8'>
                    <button className='ml-10'><TiTick className='w-[26px] h-[26px] text-quaternaryText' /></button>
                    <button className='ml-4 mr-6'
                    onClick={() => setShowPrice(showPrice-1)}>
                        <MdDeleteForever className='w-6 h-6 text-redText' />
                    </button>
                    <ToggleButton className='' isBig={true} />
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
