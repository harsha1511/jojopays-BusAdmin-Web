import React, { useState } from 'react'

import { WalletNavBar } from '../components/WalletNavBar'

import CustomForm from "../../../components/Form"
import * as yup from "yup";

import {BsSearch} from "react-icons/bs"
import {TiTick} from 'react-icons/ti'
import { Link } from 'react-router-dom';


export const AddNewSchedule = () => {

  const [selectAll, setSelectAll] = useState(false)


    const searchSchema = yup.object().shape({
      search: yup.string(),
    });

    const handleSearch = (values: any) => {
    console.log(values);
    };

    const handleSendMessage = (values: any) => {
        console.log(values);
    };




  return (
    <div>
      <div className="flex w-[96vw] h-screen">
        <section className="flex flex-col items-center w-[80%]">
            <div className='z-10 flex justify-center items-center w-[600px] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
              <p className='text-3xl font-bold tracking-wider text-primaryText'>New Schedule</p>
            </div>
            <div className='mt-8'>
                <input type="text" 
                placeholder='Title'
                className='text-primaryText text-2xl pl-20 w-60 h-10 border-b-2 border-b-primaryText focus:border-b-2 focus:border-b-primaryText bg-primary' />
            </div>
            <div className='flex flex-col items-center mt-8 w-[750px] h-[400px] bg-quaternary rounded-2xl drop-shadow-xl'>
                <p className='flex justify-center pb-3 w-[85%] mt-4 text-2xl text-primaryText font-semibold border-b-2 border-greyText/25'>Send Money to?</p>
                <div className='flex items-center justify-start w-[90%]'>
                    <p>My Contacts</p>
                    <CustomForm
                          initialValues={{ search: "" }}
                          validationSchema={searchSchema}
                          onSubmit={handleSearch}
                        >
                          <div className="flex items-center border-2 border-primaryText my-6 mx-3 rounded-full px-3">
                            <input
                              type="text"
                              placeholder="Search..."
                              className="bg-transparent border-none py-1 px-4 text-white outline-none w-full focus:border-none"
                            />
                            <button className="" type="submit">
                              <BsSearch className="text-primaryText" />
                            </button>
                          </div>
                        </CustomForm>
                </div>
                <div className='w-[90%] flex items-center'>
                  <span 
                  onClick={()=>setSelectAll(!selectAll)}
                  className='flex justify-center items-center w-4 h-4 border-2 border-blueText rounded-full cursor-pointer'><TiTick className={`scale-[2.5] mb-2 text-quaternaryText ${selectAll ? "" : "hidden"}`} /></span>
                  <p className='text-blueText ml-3'>All</p>
                </div>
            </div>
            <div className='flex justify-between w-[30%] mt-4'>
              <Link to={'/schedule-send'}><button className='w-36 h-14 bg-quaternary rounded-lg rounded-tl-3xl rounded-br-3xl text-lg tracking-wide drop-shadow-xl hover:text-primaryText hover:drop-shadow-none hover:bg-secondary'>Back</button></Link>
              <Link to={'/schedule-amount'}><button className='w-36 h-14 bg-quaternary rounded-lg rounded-tl-3xl rounded-br-3xl text-lg tracking-wide drop-shadow-xl hover:text-primaryText hover:drop-shadow-none hover:bg-secondary'>Next</button></Link>
            </div>
        </section>
        <section className="w-[20%]">
            <WalletNavBar pageName='Schedule' />
        </section>
      </div>
    </div>
  )
}
