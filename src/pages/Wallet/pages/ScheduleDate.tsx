import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import { WalletNavBar } from '../components/WalletNavBar'

import {TiTick} from 'react-icons/ti'


export const ScheduleDate = () => {

const  Filter = [
    {title:"Last day of the month", value: "last day"},
    {title:"Last working day of the month", value: "last working day"},
    {title:"First day of the month", value: "First day"},
    {title:"First working day of the month", value: "First working day"},
    {title: "Pick Day(s)", vlaue: "Pick Days"}
]
const Days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

const [selectAll, setSelectAll] = useState(false)


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
                <div className='flex justify-between items-center w-[85%] h-[65px] py-4 bg-secondary rounded-3xl mt-2 drop-shadow-lg'>
                <p className='text-primaryText ml-6'>One Time Payment</p>
                <div className='flex mr-48 w-[40%] rounded-full h-10 bg-primary'>
                <input type="date" name="" 
                className='bg-primary ml-4 w-32 focus:border-none' id='busStartDate'/>
                <input type="time"
                className='bg-primary ml-6 w-20 focus:border-none' />
                </div>
                <div className='w-5 h-5 bg-primary border-2 border-primaryText rounded-full mr-5'>
                </div>
            </div>
            <div className='flex justify-between items-center w-[85%] h-[65px] bg-secondary rounded-3xl mt-6 drop-shadow-lg py-4'>
                <p className='text-primaryText ml-6'>Daily/Random days in a week</p>
                <div className='flex justify-around items-center h-10 w-[55%] bg-primary mr-14 rounded-2xl text-sm'>
                    <p className='text-redText'>Sun</p>
                    <p>Mon</p>
                    <p>Tue</p>
                    <p>Wed</p>
                    <p>Thu</p>
                    <p>Fri</p>
                    <p>Sat</p>
                </div>
                <div className='w-5 h-5 bg-primary border-2 border-primaryText rounded-full mr-5'>
                </div>
            </div>
            <div className=' mt-4 w-[85%] bg-secondary rounded-2xl'>
                <div className='flex justify-between items-center ml-4 mt-4 mr-1'>
                    <p className='text-primaryText'>Custom Days</p>
                    <div className='w-5 h-5 bg-primary border-2 border-primaryText rounded-full mr-5'></div>
                </div>
                {Filter.map(({title, value}) => (
                    <div className='flex items-center ml-5 mb-3 mt-4'>
                        <span 
                        className='flex justify-center items-center w-4 h-4 border-2 border-blueText rounded-full cursor-pointer mr-3'><TiTick className={`scale-[2.5] mb-2 text-quaternaryText ${selectAll ? "" : "hidden"}`} /></span>
                        <p>{title}</p>
                    </div>
                ))}
                <div className='flex'>
                    <div className='ml-8 mt-4 w-[50%] mb-8 grid grid-cols-7 gap-4'>
                        {Days.map((day, index) => (
                            <p>{day}</p>
                            ))}
                    </div>
                   <div className='flex flex-col justify-center items-start w-[40%] ml-4 text-greyText'>
                    <p>Note:</p>
                    <p>if the selected date is not present
in the month (eg: 31) the payment
will be processed on the next day</p>
                    </div>         
                </div>
            </div>
                <div className='flex justify-between w-[40%] mt-4'>
                  <Link to={'/schedule-amount'}><button className='w-36 h-14 bg-quaternary rounded-lg rounded-tl-3xl rounded-br-3xl text-lg tracking-wide drop-shadow-xl hover:text-primaryText hover:drop-shadow-none hover:bg-secondary'>Back</button></Link>
                  <Link to={'/schedule-confirm'}><button className='w-36 h-14 bg-quaternary rounded-lg rounded-tl-3xl rounded-br-3xl text-lg tracking-wide drop-shadow-xl hover:text-primaryText hover:drop-shadow-none hover:bg-secondary'>Next</button></Link>
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
