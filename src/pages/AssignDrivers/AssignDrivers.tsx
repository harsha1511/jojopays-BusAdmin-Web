import React from "react";
import * as yup from "yup";

import { BsSearch } from "react-icons/bs";


import CustomForm from "../../components/Form";
import { TripBar } from "./components/TripBar";
import { Link } from "react-router-dom";


const AssignDrivers = () => {


  
  const searchSchema = yup.object().shape({
    search: yup.string(),  
  });
  const handleSearch = (values: any) => {
    console.log(values);
  };


  return <div>
    <div className="flex w-[96vw]">
      <section className="w-[65%] h-screen">
        {/* filter */}
        <section className="h-48 bg-quaternary">
          <form action="">
            <div className="realtive ml-8 w-32 h-20">
              <button className="absolute z-10 mt-2 w-28 h-10 bg-primary rounded-lg">All Plan</button>
              <div className="absolute mt-2 w-28 h-10 bg-primaryText blur-sm rounded-lg"></div>
            </div>
            <div className="w-48 -mt-2 h-[1px] ml-2 bg-greyText"></div>
            <div className="flex justify-around">
            {/* Date */}
              <div className="w-80 h-[105px] mt-2 bg-primary rounded-2xl">
                <div className="pt-2 px-3 mt-1">
                  <div className="flex items-center">
                    <p className="text-primaryText w-10">From</p>
                    <input type="date" className="pl-2 bg-tertiary ml-4 p-1 rounded-lg w-[150px] cursor-text focus:border-0 text-white" name="" id="" />
                    <input type="time" className="pl-2 bg-tertiary ml-4 p-1 rounded-lg w-[120px] cursor-text focus:border-0" name="" id="" />
                  </div>
                  <div className="flex items-center mt-3">
                    <p className="text-primaryText w-10">To</p>
                    <input type="date" className="pl-2 bg-tertiary ml-4 p-1 rounded-lg w-[150px] cursor-text focus:border-0 text-white" name="" id="" />
                    <input type="time" className="pl-2 bg-tertiary ml-4 p-1 rounded-lg w-[120px] cursor-text focus:border-0" name="" id="" />
                  </div>
                </div>
              </div>
              {/* from to point */}
              <div className="mt-4">
                <div><label htmlFor="" className="text-primaryText font-semibold">Point 1</label>
                <input type="text" className="bg-primary p-1 ml-2 w-40 rounded-lg drop-shadow-md focus:border-0 pl-4" /></div>
                <div className="mt-4"><label htmlFor="" className="text-primaryText font-semibold">Point 2</label>
                <input type="text" className="bg-primary p-1 ml-2 w-40 rounded-lg drop-shadow-md focus:border-0 pl-4" /></div>
              </div>
              {/* toggle button type from 4 types of trip */}
              <div className="w-72 mt-2 text-primaryText cursor-pointer">
                <div className="flex justify-around w-68 py-2 bg-primary rounded-2xl">
                  <p className="flex justify-center w-[50%] border-r-2 border-greyText/50">Casual Trip</p>
                  <p className="flex justify-center w-[50%]">Pre-booked Trip</p>
                </div>
                 <div className="flex justify-around w-68 py-2 bg-primary rounded-2xl mt-3 cursor-pointer">
                  <p className="flex justify-center w-[50%] border-r-2 border-greyText/50">One way Trip</p>
                  <p className="flex justify-center w-[50%]">Round Trip</p>
                </div>
              </div>
            </div>
          </form>
        </section>
        {/* body */}
        <section className="h-full flex">
        {/* Add New trip */}
        <div className="flex flex-col items-center w-[25%] h-full bg-secondary">
          <p className=" mt-10 text-lg font-bold tracking-wider text-primaryText">Add New trip Plan</p>
          <Link to={'/onetime-trip'}>
          <button className="mt-8 -ml-14 w-56 h-12 bg-quaternary rounded-3xl drop-shadow-lg text-lg text-primaryText font-bold hover:text-white tracking-wide">One Time Trip</button>
          </Link>
          <Link to={"/assign-trip"}>
            <button className="mt-6 -ml-14 w-56 h-12 bg-quaternary rounded-3xl drop-shadow-lg text-lg text-primaryText font-bold hover:text-white tracking-wide">Assign Trip</button>
          </Link>
          <div className="h-[1px] -ml-20 mt-8 w-60 bg-greyText/50"></div>
          <Link to="/assigned-trip">
          <button className="mt-6 -ml-14 w-56 h-12 bg-quaternary rounded-3xl drop-shadow-lg text-lg text-pinkText font-bold hover:text-white tracking-wide">Assigned Trip</button>
          </Link>
        </div>
        <div className="flex flex-col items-center mt-2 w-[75%] h-full">
          <p className="text-greyText mb-4">Upcoming Trips</p>
          <TripBar pageName="AssignDriver" />
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
    </div>;
};

export default AssignDrivers;
