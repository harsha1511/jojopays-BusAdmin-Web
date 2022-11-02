import React,{useState} from 'react'
import {MdClose} from 'react-icons/md'

interface CardProps {
    title: string
    isUpdate: boolean
    ifResume: boolean
    className?: string
    image: string
}

export const Card = ({
    title = "",
    isUpdate,
    ifResume,
    className,
    image = "",
}:CardProps) => {

    const [close, setClose] = useState<boolean>(false)


    const styleResume = ifResume ? `h-[480px]` : `h-96`
    const styleClose = close ? `block` : `hidden`

    const closeCard = () => {
        setClose(!close)
        // console.log("close card clicked");
        
    }

    return (
    <div className={`${styleClose} fixed z-30 flex flex-col w-[95vw] h-screen items-center mt-24`} onClick={closeCard}>
        <div className={`${styleResume} relative w-[67%] bg-quaternary rounded-t-2xl`}>
            <div className='absolute flex items-center w-full h-12 bg-primaryText rounded-t-2xl'>
                <p className='w-full flex justify-center text-xl text-primary font-bold'>{title}</p>
                < MdClose className='w-8 h-10 mr-4 skew-y-12 text-primary' onClick={closeCard}/>
            </div>
            {/* Image container */}
            { ifResume ? 
            <div className='flex justify-center overflow-y-auto h-full pt-20 pb-10'>
                <img src={image} alt="" className='h-[600px] w-[800px]'/>
            </div> 
            :
            <div className='flex justify-around items-center h-full mt-6'>
                <div className='flex flex-col items-center'>
                    <img src="https://grid.gograph.com/driver-license-vector-stock_gg71830627.jpg" alt=""  className='w-80 h-52 rounded-2xl'/>
                    <p className='text-md text-primaryText mt-2 font-semibold'>Front Side</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://grid.gograph.com/driver-license-vector-stock_gg71830627.jpg" alt=""  className='w-80 h-52 rounded-2xl'/>
                    <p className='text-md text-primaryText mt-2 font-semibold'>Back Side</p>
                </div>
            </div>
            }
        </div>
        <div className='relative flex justify-center items-center w-[67%] h-12'>
            <div className='bg-white opacity-50 w-full h-full rounded-b-2xl'>
            </div>
            { isUpdate ?
            <button className='absolute text-redText tet-semibold opacity-100 py-2 px-8 bg-quaternary rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg'>
                Update   
            </button>  : <div></div> 
            }
        </div>
    </div>
  )
}
