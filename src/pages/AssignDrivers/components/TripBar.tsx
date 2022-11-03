import { object } from 'prop-types'
import React, { useState } from 'react'
import {BiTimeFive} from "react-icons/bi"
import { ToggleButton } from '../../../components/ToggleButton'


interface DriverProps {
    pilot?: string
    copilot?: string
    id?: number
}
export const TripBar = ({pilot, copilot, id}:DriverProps) => {

    
    const DriverName =[
        {
            "pilot" : "harsha",
            "coPilot" : "sugan",
            "id": 1, 
        },
        {
            "pilot" : "jones",
            "coPilot" : "garwin",
            "id": 2, 
        },
        {
            "pilot" : "jones",
            "coPilot" : "garwin",
            "id": 3, 
        },
    ]
    const [list, setList] = useState({
        ActiveObject: null,
        object: DriverName
    })
    const [openEdit, setOpenEdit] =useState(false)

    const handleOpen = (index:number) => {
        // if(index === object[index]){
        //     console.log(index);
        // }
        
            // setOpenEdit(!openEdit) 
            // setList({...list, ActiveObject: list.object[index]})           
        }
        

  return (
    <div className='relative flex flex-col items-center w-full'>
        {list.object.map((item, index) => (
        <div className={`relative flex flex-col items-center w-full ${ openEdit ? "" : "mb-6"}`}>
        <div className='z-10 flex justify-between items-center px-3 w-[93%] h-16 bg-quaternary rounded-2xl text-sm'>
            <div  key={index}><BiTimeFive key={index} className='w-8 h-8 text-primaryText ml-2' onClick={() => {handleOpen(index);}} /></div>
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
                <p className='text-pinkText'>From: <span className='text-greyText font-semibold'>{index}</span></p>
                <p className='text-pinkText'>To: <span className='text-greyText font-semibold'>Parklands</span></p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-bold'>Bus No.: <span className=' text-sm text-pinkText'>PL8456</span></p>
                <p className='text-[11px] text-primaryText'>Casual trip / One Way trip</p>
            </div>
            <div className='text-[12px] p-2 bg-primary -mr-3 rounded-l-lg'>
                <p key={index}>Pilot: <span className='text-primaryText'>{item.pilot}</span></p>
                <p key={index}>Co Pilot: <span className='text-primaryText'>{item.coPilot}</span></p>
            </div>
        </div>
        {openEdit &&
            <div className='-z-10 -mt-6 flex justify-end items-end w-[93%] h-16 bg-pinkText/30 rounded-2xl mb-6'>
                <div className='pr-4'>hi</div>
                <div className='pr-4'>hi</div>
                <div className='pr-4'>hi</div> 
            </div>
        }
        </div>
        ))}
    </div>
  )
}
