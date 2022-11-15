import React from 'react'
import { Link } from 'react-router-dom';

import { WalletNavBar } from "../components/WalletNavBar";

import { BsFillEyeFill } from "react-icons/bs";
import {MdDeleteForever} from 'react-icons/md'
import { FaPen } from "react-icons/fa"
import { ToggleButton } from '../../../components/ToggleButton';

export const ScheduleSend = () => {


  const ScheduleList = [
    {title: "salary"},{title: "Bonus"},{title: "Purchase"},{title: "Break"},{title: "Pending"}
  ]

  return<div>
    <div className="flex w-[96vw] h-screen">
      <section className="flex flex-col items-center w-[80%]">
        <div className='z-10 flex justify-center items-center w-[600px] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
          <p className='text-3xl font-bold tracking-wider text-primaryText'>Schedule Send</p>
        </div>
        <Link to={'/add-new-schedule'} className='mt-14'>
          <button className='text-lg font-semibold text-primaryText py-5 px-10 border-2 border-primaryText rounded-full drop-shadow-lg'>Add New Schedule</button>
        </Link>
          <div className='h-[1px] w-[800px] mt-12 bg-greyText/50'></div>
          <div className='mt-4 relative w-[1000px] h-[400px] overflow-y-auto overflow-x-hidden'>
            {/* <div className='absolute w-full h-[1000px] bg-gradient-to-t from-secondary'>
            </div> */}
            <div className='w-full flex flex-col items-center pt-4 bg-gradient-to-t from-secondary'>
              {/* Schedule Bars */}
              {ScheduleList.map(({title}) => (
              <div className='flex items-center justify-around w-[85%] h-[90px] bg-secondary border-2 border-primaryText rounded-full mb-8'>
                <div className='flex flex-col items-center'>
                  <p className='text-lg text-primaryText font-bold'>{title}</p>
                  <p className='text-sm'>Manual payment mode</p>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='flex justify-center items-center rounded-2xl w-40 h-8 bg-primary'>02/12/2022</div>
                  <p className='text-sm text-primaryText'>Next Payment on</p>
                </div>
                <div className='flex flex-col items-center'>
                  <div className="flex justify-between items-center px-4 py-2 rounded-lg bg-primary">
                  <label htmlFor="" className="text-[10px] text-primaryText flex flex-col items-center">Days <span className='font-bold text-sm text-white'>12 <span className='ml-1 text-primaryText'>-</span></span></label>
                  <label htmlFor="" className="text-[10px] text-primaryText flex flex-col items-center ml-2">Hours <span className='font-bold text-sm text-white'>10 <span className='ml-1 text-primaryText'>:</span></span></label>
                  <label htmlFor="" className="text-[10px] text-primaryText flex flex-col items-center ml-2">Mins <span className='font-bold text-sm text-white'>20<span className='ml-1 text-primaryText'>:</span></span></label>
                  <label htmlFor="" className="text-[10px] text-primaryText flex flex-col items-center ml-2">Secs <span className='font-bold text-sm text-white'>09</span></label>
                </div>
                <p className='text-sm text-primaryText'>Time Left</p>
                </div>
                <div className='flex'>
                  <BsFillEyeFill className='drop-shadow-2xl mr-4 text-redText scale-125'/>
                  <FaPen className='drop-shadow-2xl mr-4 text-redText scale-125'/>
                  <MdDeleteForever className='drop-shadow-2xl  text-redText scale-125'/>
                </div>
                <div>
                  <ToggleButton className='' isBig={true} />
                </div>
              </div>
              ))}
            </div>
          </div>
      </section>
      {/* SIDE BAR */}
      <section className="w-[20%]">
        <WalletNavBar pageName='Schedule' />
      </section>
    </div>
  </div>;
}
