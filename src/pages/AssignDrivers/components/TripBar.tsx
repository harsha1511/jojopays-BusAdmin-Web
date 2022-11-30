import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from "../../../API/axios"
import constants from '../../../API/constants'

import {BiTimeFive} from "react-icons/bi"
import {MdDeleteForever} from 'react-icons/md'
import { FaPen } from "react-icons/fa"

import { ToggleButton } from '../../../components/ToggleButton'




interface DriverProps {
    pageName: boolean
}


export const TripBar = ({pageName}:DriverProps) => {

    
    
  const [trip, setTrip] = useState<any>()

  
  useEffect(() => {
  const getTripData = async () => {
    try {
      const response = await axios.get(constants.company.trip);
      console.log(response.data , "TRIPPPP");
      setTrip(response.data) 
    }
    catch(err) {
      console.log(err);
      
    }
  }
  getTripData(); 
}, []);


    const [openEdit, setOpenEdit] =useState<any>({
        trip,
        activeLink: null,
        isOpen: false,
    })

    const handleOpen = (index:number) => {
        setOpenEdit({activeLink: index})
        if(openEdit.activeLink === index){
            console.log(openEdit);
            setOpenEdit({isOpen: true})        
        }
    }

  return (
    <div className='relative flex flex-col items-center w-full'>
        {trip?.map((item: any) => (
        <div className={`relative flex flex-col items-center w-full mb-6`}>
        <div className='z-10 flex justify-between items-center px-3 w-[93%] h-16 bg-quaternary rounded-2xl text-sm cursor-pointer'
        onClick={() => {handleOpen(item.jojoId);}}>
            <Link to ={pageName?  "" : "/edit-assigned-trip"}><BiTimeFive className='w-8 h-8 text-primaryText ml-2' /></Link>
            <div className='h-[99%] w-48 bg-primary rounded-xl'>
                <div className="flex justify-between items-center px-3 pt-1">
                  <label htmlFor="" className="text-[10px] text-primaryText flex flex-col items-center">Day <span className='font-bold text-sm text-white'>12 <span className='ml-1 text-primaryText'>-</span></span></label>
                  <label htmlFor="" className="text-[10px] text-primaryText flex flex-col items-center">Month <span className='font-bold text-sm text-white'>10 <span className='ml-1 text-primaryText'>-</span></span></label>
                  <label htmlFor="" className="text-[10px] text-primaryText flex flex-col items-center">Year <span className='font-bold text-sm text-white'>2022<span className='ml-1 text-primaryText'>:</span></span></label>
                  <label htmlFor="" className="text-[10px] text-primaryText flex flex-col items-center">hours <span className='font-bold text-sm text-white'>09<span className='ml-1 text-primaryText'>:</span></span></label>
                  <label htmlFor="" className="text-[10px] text-primaryText flex flex-col items-center">Min <span className='font-bold text-sm text-white'>30</span></label>
                </div>
            </div>
            <div className=''>
                <p className='text-pinkText'>From: <span className='text-greyText font-semibold'>{item?.tripArrivalFrom}</span></p>
                <p className='text-pinkText'>To: <span className='text-greyText font-semibold'>{item?.tripArrivalFrom}</span></p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-bold'>Bus No.: <span className=' text-sm text-pinkText'>{item?.jojoId}</span></p>
                <p className='text-[11px] text-primaryText'>{trip?.tripType}</p>
            </div>
            <div className='text-[12px] p-2 bg-primary -mr-3 rounded-l-lg'>
                <p>Pilot: <span className='text-primaryText'>{item?.jojoId}</span></p>
                <p>Co Pilot: <span className='text-primaryText'>{item?.coPilot}</span></p>
            </div>
        </div>
        {openEdit.activeLink === 1 &&
            <div className='-mt-6 flex justify-end items-end w-[93%] h-16 bg-pinkText/50 rounded-2xl'>
                <div className='pr-6 mb-3'><FaPen /></div> 
                <div className='pr-4 mb-3'><MdDeleteForever className='scale-125' /></div>
                <div className='pr-4 mb-1'>
                    {/* <div className=' z-20 relative w-16 h-[50%] flex justify-start items-center bg-redText'>
                        <div className='absolute w-14 h-1 bg-primary rounded-md'></div>
                        <div className={`absolute w-8 h-4  rounded-lg border-secondary border-2 cursor-pointer
                        ${mute.isMute === true ? "bg-gradient-to-b from-[#FF0783] to-[#FF5050]" : "bg-gradient-to-b from-[#6C50FF] to-primaryText translate-x-6"}`}
                        onClick={() => {handleMute(index);}}>
                        </div>
                    </div> */}
                    <ToggleButton className='' isBig={false}/>
                </div>
            </div>
        }
        </div>
        ))}
    </div>
  )
}


// do a checkbutton with css for toggle