import React from 'react'
import { Link } from 'react-router-dom'

import { WalletNavBar } from '../components/WalletNavBar'

import {TiTick} from 'react-icons/ti'



export const ScheduleConfirm = () => {

const FinalConfirm = [
    {name: "Ping me to pay During the Selected time"},
    {name: "Ping me After the Journey starts"},
    {name: "Ping me After the Journey Ends"},
] 
  return (
    <div>
        <div className="flex w-[96vw] h-screen">
        <section className="flex flex-col items-center w-[80%]">
            <div className='z-10 flex justify-center items-center w-[600px] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
              <p className='text-3xl font-bold tracking-wider text-primaryText'>New Schedule</p>
            </div>
            <div className='flex flex-col items-center w-[900px] h-[600px] mt-4 overflow-y-auto overflow-x-hidden'>
                <p className='text-lg text-primaryText my-3'>
                    Payment Schedule
                </p>
                <div className='flex w-[900px] h-[300px] bg-secondary rounded-3xl'>
                    <div className='mt-12 ml-8'>
                        <p className='w-40 text-primaryText font-semibold'>Manual Approval</p>
                        {FinalConfirm.map(({name}) => (
                        <div className='flex items-center ml-5 mb-3 mt-4'>
                        <span 
                        className='flex justify-center items-center w-4 h-4 border-2 border-blueText rounded-full cursor-pointer mr-3'><TiTick className='hidden'/></span>
                        <p className='w-[600px]'>{name}</p>
                        </div>
                        ))}
                    </div>
                    <div className='w-full flex justify-end'>
                        <span className='w-6 h-6 bg-primaryText border-[6px] border-primary rounded-full mr-4 mt-4'></span>
                    </div>
                </div>
                <div className='flex justify-between w-[40%] mt-4'>
                  <Link to={'/schedule-date'}><button className='w-36 h-14 bg-quaternary rounded-lg rounded-tl-3xl rounded-br-3xl text-lg tracking-wide drop-shadow-xl hover:text-primaryText hover:drop-shadow-none hover:bg-secondary'>Back</button></Link>
                  <Link to={'/schedule-confirm'}><button className='w-36 h-14 bg-quaternary rounded-lg rounded-tl-3xl rounded-br-3xl text-lg tracking-wide drop-shadow-xl hover:text-primaryText hover:drop-shadow-none hover:bg-secondary'>Done</button></Link>
                </div>
            </div>
        </section>
        <section className="w-[20%]">
            <WalletNavBar pageName='Schedule' />
        </section>
      </div>
    </div>
  )
}
