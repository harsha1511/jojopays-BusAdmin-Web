import React, { useState, useEffect } from "react";
import axios from "../../API/axios"
import constants from "../../API/constants";

import { BsSearch } from "react-icons/bs";

import { nameShrinker } from "../../utils/helpers";

import { TripBar } from "./components/TripBar";
import { Link } from "react-router-dom";


interface FilterProps {
  tripStartDate: string;
  tripStartTime: string;
  tripEndDate: string;
  tripEndTime: string;
  tripArrivalFrom: string;
  tripDepatureTime: string;
  tripType: string;
}

const AssignDrivers = () => {


  const [bus, setBus] = useState<object[]>();
  const [driver, setDriver] = useState<object[]>();
  const [assignedTrip, setAssignedTrip] = useState<boolean>(true);
  const [filter, setFilter] = useState<FilterProps>({
    tripStartDate: "",
    tripStartTime: "",
    tripEndDate: "",
    tripEndTime: "",
    tripArrivalFrom: "",
    tripDepatureTime: "",
    tripType: "",
  })

  useEffect(() => {
    const getBusData = async () => {
      try {
        const response = await axios.get(constants.company.bus);
        console.log(response.data);
        setBus(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBusData();
  }, []);

  console.log("Constans", constants);
  

  useEffect(() => {
    const getDriverData = async () => {
      try {
        const response = await axios.get(constants.company.driver);
        console.log(response.data);
        setDriver(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDriverData();
  }, []);
  
  const handleChange = async (e:any) => {
    e.preventDefault();
    try {
    const {name, value} = e.target
    setFilter({...filter, [name]: value})
      // const PostFilter = await axios.post(constants.company.trip, filter)
      // .then(resp => 
      //   console.log(resp)
      //   )
    } catch(err){
      console.log(err);
    }

      
  }
console.log("FILTERSS", filter);

 
  // console.log("env file", process.env.REACT_APP_API_URL)


  return (
    <>
      <div className="flex w-[96vw]">
        <section className="w-[65%] h-screen">
          {/* filter */}
          <section className="h-48 bg-quaternary">
            <form action="">
              <div className="realtive ml-8 w-32 h-20">
                <button className="absolute z-10 mt-2 w-28 h-10 bg-primary rounded-lg">
                  All Plan
                </button>
                <div className="absolute mt-2 w-28 h-10 bg-primaryText blur-sm rounded-lg"></div>
              </div>
              <div className="w-48 -mt-2 h-[1px] ml-2 bg-greyText"></div>
              <form className="flex justify-around">
                {/* Date */}
                <div className="w-[33%] h-[105px] mt-2 bg-primary rounded-2xl">
                  <div className="pt-2 px-3 mt-1">
                    <div className="flex items-center">
                      <p className="text-primaryText">From</p>
                      <input
                        type="date"
                        className="pl-2 bg-tertiary ml-4 p-1 rounded-lg w-[65%] cursor-text focus:border-0 text-white"
                        name="tripStartDate"
                        onChange={handleChange}
                      />
                      <input
                        type="time"
                        className="pl-2 bg-tertiary ml-4 p-1 rounded-lg w-[35%] cursor-text focus:border-0"
                        name="tripStartTime"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex items-center mt-3">
                      <p className="text-primaryText w-10">To</p>
                      <input
                        type="date"
                        className="pl-2 bg-tertiary ml-4 p-1 rounded-lg w-[65%] cursor-text focus:border-0 text-white"
                        name="tripEndDate"
                        onChange={handleChange}
                      />
                      <input
                        type="time"
                        className="pl-2 bg-tertiary ml-4 p-1 rounded-lg w-[35%] cursor-text focus:border-0"
                        name="tripEndTime"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                {/* from to point */}
                <div className="mt-4 w-[30%]">
                  <div>
                    <label
                      htmlFor=""
                      className="text-primaryText font-semibold"
                    >
                      Point 1
                    </label>
                    <input
                      type="text"
                      name="tripDepatureTime"
                      onChange={handleChange}
                      className="bg-primary p-1 ml-2 w-[60%] rounded-lg drop-shadow-md focus:border-0 pl-4"
                    />
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor=""
                      className="text-primaryText font-semibold"
                      >
                      Point 2
                    </label>
                    <input
                      type="text"
                      name="pointTwo"
                      onChange={handleChange}
                      className="bg-primary p-1 ml-2 w-[60%] rounded-lg drop-shadow-md focus:border-0 pl-4"
                    />
                  </div>
                </div>
                {/* toggle button type from 4 types of trip */}
                <div className="w-[32%] mt-2 cursor-pointer">
                  <div className="flex justify-around w-full py-2 bg-primary rounded-2xl">
                    <input className={`w-[40%] bg-primary pl-8 focus:border-none cursor-pointer
                    ${filter.tripType === "Casual Trip" ? "text-white" : "text-primaryText"} `}
                    value="Casual Trip"
                    name="tripType"
                    readOnly={true}
                    onClick={handleChange} />
                    <input className={`w-[50%] border-greyText/50 border-l-2 bg-primary ml-2 pl-2 focus:border-none cursor-pointer
                    ${filter.tripType === "Pre Booked Trip" ? "text-white" : "text-primaryText"}`}
                    value="Pre Booked Trip"
                    name="tripType"
                    readOnly={true}
                    onClick={handleChange} />
                  </div>
                  <div className="flex justify-around w-full py-2 bg-primary rounded-2xl mt-3 cursor-pointer">
                    <input className={`w-[50%] -mr-4 bg-primary  pl-8 focus:border-none cursor-pointer
                    ${filter.tripType === "One Way Trip" ? "text-white" : "text-primaryText"}`}
                    value="One Way Trip"
                    name="tripType"
                    readOnly={true}
                    onClick={handleChange} />
                    <input className={`w-[45%] pl-4 bg-primary focus:border-none border-l-2 border-greyText/50 cursor-pointer
                    ${filter.tripType === "Round Trip" ? "text-white" : "text-primaryText"}`}
                    value="Round Trip"
                    name="tripType"
                    readOnly={true}
                    onClick={handleChange} /> 
                  </div>
                </div>
              </form>
            </form>
          </section>
          {/* body */}
          <section className="h-full flex">
            {/* Add New trip */}
            <div className="flex flex-col items-center w-[25%] h-full bg-secondary">
              <p className=" mt-10 text-lg font-bold tracking-wider text-primaryText">
                Add New trip Plan
              </p>
              <Link to={"/onetime-trip"}>
                <button className="mt-8 -ml-14 w-56 h-12 bg-quaternary rounded-3xl drop-shadow-lg text-lg text-primaryText font-bold hover:text-white tracking-wide">
                  One Time Trip
                </button>
              </Link>
              <Link to={"/assign-trip"}>
                <button className="mt-6 -ml-14 w-56 h-12 bg-quaternary rounded-3xl drop-shadow-lg text-lg text-primaryText font-bold hover:text-white tracking-wide">
                  Assign Trip
                </button>
              </Link>
              <div className="h-[1px] -ml-20 mt-8 w-60 bg-greyText/50"></div>
              {/* <Link to="/assigned-trip"> */}
                <button 
                onClick={() => setAssignedTrip(!assignedTrip)}
                className={`mt-6 -ml-14 w-56 h-12 bg-quaternary rounded-3xl drop-shadow-lg text-lg font-bold hover:text-white tracking-wide
                text-pinkText`}>
                  {assignedTrip ? 
                  "Assigned Trip" : "Upcoming Trips" }
                </button>
              {/* </Link> */}
            </div>
            <div className="flex flex-col items-center mt-2 w-[75%] h-full">
              <p className="text-greyText mb-4">
              { assignedTrip ? 
              "Upcoming Trips" : "Assigned Trips"}</p>
              <TripBar pageName={assignedTrip} />
            </div>
          </section>
        </section>
        <section className="flex w-[35%] h-screen">
          {/* Bus list */}
          <div className="w-[50%] flex flex-col h-full bg-secondary drop-shadow-xl">
            <div className="realtive flex justify-between items-center h-16 mt-8 -ml-2 rounded-l-3xl bg-gradient-to-b from-tertiaryText to-redText">
              <div className="flex justify-center items-center h-[50px] w-[90%] ml-4 bg-primary rounded-l-3xl rounded-r-lg text-lg font-bold">
                All Bus
              </div>
              <div className="w-[5%] my-4 bg-primary h-[50px] ml-2 rounded-l-"></div>
            </div>
            <div className="pt-8">
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
            </div>
            <div className="mt-6">
              {bus?.map((b: any) => (
                <div className="flex items-center mt-6 ml-4 h-10 w-[80%]">
                  <img
                    className="w-10 h-10 rounded-lg"
                    src={b?.busPhoto}
                    alt=""
                  />
                  <p className="ml-4 text-md text-greyText font-bold">
                    {nameShrinker(b?.busName, 12)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Driver list */}
          <div className="w-[50%] flex flex-col h-full bg-secondary drop-shadow-xl">
            <div className="realtive flex justify-between items-center h-16 mt-8 -ml-2 rounded-l-3xl bg-gradient-to-b from-tertiaryText to-violetText">
              <div className="flex justify-center items-center h-[50px] w-[90%] ml-4 bg-primary rounded-l-3xl rounded-r-lg text-lg font-bold">
                All Drivers
              </div>
              <div className="w-[5%] my-4 bg-primary h-[50px] ml-2 rounded-l-"></div>
            </div>
            <div className="pt-8">
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
            </div>
            {driver?.map((d: any) => (
              <div className="flex items-center mt-6 ml-4 h-10 w-[80%]">
                <img
                  className="w-10 h-10 rounded-full"
                  src={d?.addPhoto}
                  alt=""
                />
                <p className="ml-4 text-md text-greyText font-bold">
                  {d?.driverName}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AssignDrivers;
