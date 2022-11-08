import React from 'react'
import * as yup from "yup";
import { Link } from "react-router-dom";
import CustomForm from '../../../components/Form';


import { BsSearch } from "react-icons/bs";

import { TripBar } from "../components/TripBar";
import BackButton from '../../../components/BackButton';


export const AssignedTrips = () => {

  const searchSchema = yup.object().shape({
    search: yup.string(),  
  });
  const handleSearch = (values: any) => {
    console.log(values);
  };


  return (
    <div>
    <div className="flex w-[96vw]">
      <section className="w-[65%] h-screen">
        {/* filter */}
        <section className="h-48 bg-quaternary">
        <div className='absolute flex w-[62%] justify-end mt-3'>
            <BackButton />
        </div>
          <form action="">
            <div className="realtive ml-8 w-32 h-20">
              <button className="absolute z-10 mt-2 w-28 h-10 bg-primary rounded-lg">All Plan</button>
              <div className="absolute mt-2 w-28 h-10 bg-primaryText blur-sm rounded-lg"></div>
            </div>
            <div className="w-48 -mt-2 h-[1px] ml-2 bg-greyText"></div>
            <div className="flex justify-around">
            {/* Date */}
              <div className="w-72 h-[105px] mt-2 bg-primary rounded-2xl">
                <div className="h-6 flex justify-between items-center px-3 pt-1">
                  <label htmlFor="" className="text-sm text-primaryText">Day</label>
                  <label htmlFor="" className="text-sm text-primaryText">Month</label>
                  <label htmlFor="" className="text-sm text-primaryText">Year</label>
                  <label htmlFor="" className="text-sm text-primaryText">hours</label>
                  <label htmlFor="" className="text-sm text-primaryText">Min</label>
                </div>
                <div className="pt-2 px-3">
                <input type="date" className="bg-primary text-white w-40 tracking-wider" id="assignDriver"/>
                <input type="time" className="bg-primary ml-6 w-[80px] " id="assignDriver" />
                <input type="date" className="bg-primary text-white w-40" id="assignDriver"/>
                <input type="time" className="bg-primary ml-6 w-[80px]" id="assignDriver"/>
                </div>
              </div>
              {/* from to point */}
              <div className="mt-4">
                <div><label htmlFor="" className="text-primaryText font-semibold">Point 1</label>
                <input type="text" className="bg-primary p-1 ml-2 w-40 rounded-lg drop-shadow-md focus:border-0 pl-2" /></div>
                <div className="mt-4"><label htmlFor="" className="text-primaryText font-semibold">Point 2</label>
                <input type="text" className="bg-primary p-1 ml-2 w-40 rounded-lg drop-shadow-md focus:border-0 pl-2" /></div>
              </div>
              {/* toggle button type from 4 types of trip */}
              <div className="mt-2 text-primaryText">
                <div>
                  <button className="bg-primary w-36 py-[6px] rounded-l-2xl">Casual Trip</button>
                  <button className="bg-primary w-36 py-[6px] border-l-2 border-greyText/[.5] rounded-r-2xl">Pre-booked Trip</button>
                </div>
                <div className="mt-3">
                  <button className="bg-primary w-36 py-[6px] rounded-l-2xl">One Way Trip</button>
                  <button className="bg-primary w-36 py-[6px] border-l-2 border-greyText/[0.5] rounded-r-2xl">Round Trip</button>
                </div>
              </div>
            </div>
          </form>
        </section>
        {/* body */}
        <section className="flex justify-center items-start pt-4 h-[500px] overflow-x-hidden overflow-y-auto">
            <div className='flex flex-col items-center w-[75%]'>
                <p className="text-greyText mb-4">Assigned Trips</p>
                <TripBar />
            </div>
        </section>
      </section>
      <section className="flex w-[35%] h-screen">
        {/* Bus list */}
        <div className="w-[50%] flex flex-col h-full bg-secondary drop-shadow-xl">
          <div className="realtive flex justify-between items-center h-16 mt-8 -ml-2 rounded-l-3xl bg-gradient-to-b from-tertiaryText to-redText">
            <div className="flex justify-center items-center h-[50px] w-[90%] ml-4 bg-primary rounded-l-3xl rounded-r-lg text-lg font-bold">All Bus</div>
            <div className="w-[5%] bg-primary h-[50px] ml-2 rounded-l-"></div>
          </div>
          <div className="pt-8">
            <CustomForm
              initialValues={{ search: "" }}
              validationSchema={searchSchema}
              onSubmit={handleSearch}
              >
              <div className="flex items-center border-2 border-redText mb-6 mx-4 rounded-full px-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none py-2 px-4 text-white outline-none w-full"
                  />
                <button className="" type="submit">
                  <BsSearch className="text-redText" />
                </button>
              </div>
            </CustomForm>
          </div>
          <div>
          <div className="flex items-center mt-6 ml-4 h-10 w-[80%]">
            <img className="w-10 h-10 rounded-lg"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" alt="" />
            <p className="ml-4 text-md text-greyText font-bold">Mark</p>
          </div>
            </div>
        </div>
        {/* Driver list */}
        <div className="w-[50%] flex flex-col h-full bg-secondary drop-shadow-xl">
          <div className="realtive flex justify-between items-center h-16 mt-8 -ml-2 rounded-l-3xl bg-gradient-to-b from-tertiaryText to-violetText">
            <div className="flex justify-center items-center h-[50px] w-[90%] ml-4 bg-primary rounded-l-3xl rounded-r-lg text-lg font-bold">All Drivers</div>
            <div className="w-[5%] bg-primary h-[50px] ml-2 rounded-l-"></div>
          </div>
          <div className="pt-8">
            <CustomForm
              initialValues={{ search: "" }}
              validationSchema={searchSchema}
              onSubmit={handleSearch}
              >
              <div className="flex items-center border-2 border-primaryText mb-6 mx-4 rounded-full px-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none py-2 px-4 text-white outline-none w-full"
                  />
                <button className="" type="submit">
                  <BsSearch className="text-primaryText" />
                </button>
              </div>
            </CustomForm>
          </div>
          <div className="flex items-center mt-6 ml-4 h-10 w-[80%]">
            <img className="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" alt="" />
            <p className="ml-4 text-md text-greyText font-bold">Mark</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}
