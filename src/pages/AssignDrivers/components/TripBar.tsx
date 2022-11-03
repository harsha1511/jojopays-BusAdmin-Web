import React from 'react'
import {BiTimeFive} from "react-icons/bi"
import { ToggleButton } from '../../../components/ToggleButton'

export const TripBar = () => {


    const DriverName =[
        {
            "pilot" : "harsha",
            "coPilot" : "sugan"
        },
        {
            "pilot" : "jones",
            "coPilot" : "garwin"
        },
        {
            "pilot" : "jones",
            "coPilot" : "garwin"
        },
    ]
  return (
    <div className='relative flex flex-col items-center w-full'>
        {DriverName.map(({pilot, coPilot}) => (
        <div className='relative flex flex-col items-center w-full'>
        <div className='z-10 flex justify-between items-center px-3 w-[93%] h-16 bg-quaternary rounded-2xl text-sm mb-10'>
            <div><BiTimeFive className='w-8 h-8 text-primaryText ml-2' /></div>
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
                <p className='text-pinkText'>From: <span className='text-greyText font-semibold'>Westlands</span></p>
                <p className='text-pinkText'>To: <span className='text-greyText font-semibold'>Parklands</span></p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-bold'>Bus No.: <span className=' text-sm text-pinkText'>PL8456</span></p>
                <p className='text-[11px] text-primaryText'>Casual trip / One Way trip</p>
            </div>
            <div className='text-[12px] p-2 bg-primary -mr-3 rounded-l-lg'>
                <p>Pilot: <span className='text-primaryText'>{pilot}</span></p>
                <p>Co Pilot: <span className='text-primaryText'>{coPilot}</span></p>
            </div>
        </div>
        <div className='-z-10 absolute top-0 flex justify-end items-end w-[93%] h-24 bg-pinkText/30 rounded-2xl'>
            <div className='pr-4'>hi</div>
            <div className='pr-4'>hi</div>
            <div className='pr-4'>hi
            </div> 
        </div>
        </div>
        ))}
    </div>
  )
}
