import React,{useState} from 'react'
import { Link } from 'react-router-dom';

import { WalletNavBar } from '../components/WalletNavBar'

import {TiTick} from 'react-icons/ti'



export const ScheduleAmount = () => {

    const sendToPeople = [
        {name:"harsha"},
        {name:"harsha"},
        {name:"harsha"},
        {name:"harsha"},
    ]
    const [allAmount, setAllAmount] = useState(false)
    const [selectAll, setSelectAll] = useState(true)

  const handleChange = () => {
    setSelectAll(!selectAll);
    setAllAmount(!allAmount)
  }

  return (
    <div>
      <div className="flex w-[96vw] h-screen">
        <section className="flex flex-col items-center w-[80%]">
            <div className='z-10 flex justify-center items-center w-[600px] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
              <p className='text-3xl font-bold tracking-wider text-primaryText'>New Schedule</p>
            </div>
            <div className='flex flex-col items-center mt-8 w-[750px] h-[400px] bg-quaternary rounded-2xl drop-shadow-xl'>
                <p className='flex justify-center pb-3 w-[85%] mt-4 text-2xl text-primaryText font-semibold border-b-2 border-greyText/25'>How Much?</p>
                <div className='flex items-center w-[90%] mt-4'>
                    <input 
                    readOnly={allAmount}
                    className={`w-40 h-10 rounded-full focus:border-2 border-2  bg-quaternary pl-4 ${selectAll ? " border-blueText focus:border-blueText" : "border-greyText focus:border-greyText"}`}
                    type="number" name="" id="" placeholder='Enter Amount' />
                    <p className='ml-2 text-lg'>$</p>
                    <div className='w-[90%] flex items-center ml-4'>
                        <span 
                        onClick={handleChange}
                        className='flex justify-center items-center w-4 h-4 border-2 border-blueText rounded-full cursor-pointer'><TiTick className={`scale-[2.5] mb-2 text-quaternaryText ${selectAll ? "" : "hidden"}`} /></span>
                        <p className='text-blueText ml-3'>For All Selected Contacts</p>
                    </div>
                </div>
                <p className='flex justify-center w-[90%]  mt-2 text-greyText border-b-2 pb-2 border-b-greyText/5'>OR</p>
                <div className='w-full grid grid-cols-2 gap-3'>
                {sendToPeople.map(({name}) => (
                    <div className='w-full flex ml-12 mt-4'>
                      <div className='flex flex-col items-center'>
                          <img src="https://kecbatusopang.paserkab.go.id/po-content/uploads/profil-photo.jpg"  className='w-8 h-8 rounded-full' alt="" />
                          <p className='text-sm text-greyText'>{name}</p>
                      </div>
                      <input 
                      readOnly={!allAmount}
                      className={`w-40 h-10 ml-4 rounded-full focus:border-2 border-2  bg-quaternary pl-4 ${selectAll ? " border-greyText focus:border-greyText" : "border-blueText focus:border-blueText"}`}
                      type="number" name="" id="" placeholder='Enter Amount' />
                      <p className='ml-2 text-lg mt-1'>$</p>
                    </div>
                ))}
                </div>
            </div>
            <div className='flex justify-between w-[30%] mt-4'>
              <Link to={'/add-new-schedule'}><button className='w-36 h-14 bg-quaternary rounded-lg rounded-tl-3xl rounded-br-3xl text-lg tracking-wide drop-shadow-xl hover:text-primaryText hover:drop-shadow-none hover:bg-secondary'>Back</button></Link>
              <Link to={'/schedule-date'}><button className='w-36 h-14 bg-quaternary rounded-lg rounded-tl-3xl rounded-br-3xl text-lg tracking-wide drop-shadow-xl hover:text-primaryText hover:drop-shadow-none hover:bg-secondary'>Next</button></Link>
            </div>
        </section>
        <section className="w-[20%]">
            <WalletNavBar pageName='Schedule' />
        </section>
      </div>
    </div>
  )
}
