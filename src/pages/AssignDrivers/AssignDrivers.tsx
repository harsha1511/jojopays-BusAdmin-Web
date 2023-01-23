import React, { useState, useEffect, useRef } from "react";
import axios from "../../API/axios"
import constants from "../../API/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


import { BsSearch } from "react-icons/bs";

import { nameShrinker } from "../../utils/helpers";

import { TripBar } from "./components/TripBar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AssignedTripBar } from "./components/assignedTripBar";
import { GET_BUSES, GET_DRIVERS } from "../../store/reducers/busCompany";


interface FilterProps {
  tripStartDate: string;
  tripStartTime: string;
  tripEndDate: string;
  tripEndTime: string;
  tripArrivalFrom: string;
  tripDepatureTo: string;
  tripType: string;
}

const AssignDrivers = () => {

  const busCompany = useSelector((state: RootState) => state.busCompany);
// 

console.log("bus company data,", busCompany);

  const initialValue = {
    tripStartDate: "",
    tripStartTime: "",
    tripEndDate: "",
    tripEndTime: "",
    tripArrivalFrom: "",
    tripDepatureTo: "",
    tripType: "",    
  }

  const dispatch = useDispatch();

  const [assignedTrip, setAssignedTrip] = useState<boolean>(true);
  const [filter, setFilter] = useState<FilterProps>(initialValue);
  
  const [driver, setDriver] = useState<any>();
  
  useEffect(() => {
    const getBusData = async () => {
      try {
        const response = await axios.get(constants.company.bus);
        console.log(response.data, "bus data");
        dispatch(GET_BUSES(response.data))
      } catch (err) {
        console.log(err);
      }
    };
    getBusData();
  }, []);

  
  // const token = localStorage.getItem("token")
  // console.log("TOKEN", token);
  

  useEffect(() => {
    const getDriverData = async () => {
      try {
        const response = await axios.get(constants.company.driver);
        console.log(response.data);
        dispatch(GET_DRIVERS(response.data))
      } catch (err) {
        console.log(err);
      }
    };
    getDriverData();
  }, []);
 

    
  const handleChange = async (e:any) => {
    try {
      const {name, value} = e.target
      setFilter({...filter, [name]: value})
    } catch(err){
      console.log(err);
    }   
  }



  
  

  return (
    <>
      <div className="flex w-[96vw]">
        <section className="w-[65%] h-screen">
          {/* filter */}
          <section className="flex items-center h-40 bg-quaternary">
              {/* <div className="realtive ml-8 w-32 h-20">
                <button className="absolute z-10 mt-2 w-28 h-10 bg-primary rounded-lg">
                  All Plan
                </button>
                <div className="absolute mt-2 w-28 h-10 bg-primaryText blur-sm rounded-lg"></div>
              </div> */}
              <form className="flex w-full justify-around">
                {/* Date */}
                <div className="w-[30%] h-[105px] mt-2 bg-primary rounded-2xl">
                  <div className="pt-2 px-3 mt-1">
                    <div className="flex items-center">
                      <p className="text-primaryText">From</p>
                      <input
                        type="date"
                        className="pl-2 bg-tertiary ml-4 p-1 rounded-lg w-[65%] cursor-text focus:border-0 text-white"
                        name="tripStartDate"
                        value={filter.tripStartDate}
                        onChange={handleChange}
                      />
                      {/* <input
                        type="time"
                        className="pl-2 bg-tertiary ml-4 p-1 rounded-lg w-[35%] cursor-text focus:border-0"
                        name="tripStartTime"
                        value={filter.tripStartTime}
                        onChange={handleChange}
                      /> */}
                    </div>
                    <div className="flex items-center mt-3">
                      <p className="text-primaryText w-10">To</p>
                      <input
                        type="date"
                        className="pl-2 bg-tertiary ml-4 p-1 rounded-lg w-[65%] cursor-text focus:border-0 text-white"
                        name="tripEndDate"
                        value={filter.tripEndDate}
                        onChange={handleChange}
                      />
                      {/* <input
                        type="time"
                        className="pl-2 bg-tertiary ml-4 p-1 rounded-lg w-[35%] cursor-text focus:border-0"
                        name="tripEndTime"
                        value={filter.tripEndTime}
                        onChange={handleChange}
                      /> */}
                    </div>
                  </div>
                </div>
                {/* from to point */}
                <div className="mt-4 w-[30%]">
                  <div className="flex">
                    <p
                      className="text-primaryText font-semibold w-24"
                    >
                      Arrival
                    </p>
                    <input
                      type="text"
                      name="tripArrivalFrom"
                      value={filter.tripArrivalFrom}
                      onChange={handleChange}
                      // onChange={(e:any) => setFilter(e.target.value)}
                      className="bg-primary p-1 ml-2 w-[60%] rounded-lg drop-shadow-md focus:border-0 pl-4"
                    />
                  </div>
                  <div className="mt-4 flex">
                    <p
                      className="text-primaryText font-semibold w-24"
                      >
                      Destination
                    </p>
                    <input
                      type="text"
                      name="tripDepatureTo"
                      value={filter.tripDepatureTo}
                      onChange={handleChange}
                      className="bg-primary p-1 ml-2 w-[60%] rounded-lg drop-shadow-md pl-4 focus:bg-primary"
                    />
                  </div>
                </div>
                {/* toggle button type from 4 types of trip */}
                <div className="flex w-[32%] items-center">
                    <select name="" id=""
                    onChange={handleChange}
                    className='w-52 h-12 bg-primary pl-3 rounded-lg focus:outline-none drop-shadow-2xl'>
                      <option className="text-white" value="Casual Trip">Casual Trip</option>
                      <option className="text-white" value="Pre Booked Trip">Pre Booked Trip</option>
                      <option className="text-white" value="One Way Trip">One Way trip</option>
                      <option className="text-white" value="Round Trip">Round Trip</option>
                    </select>
                </div>
              </form>
          </section>
          <section className="h-full flex">
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
                <button 
                onClick={() => setAssignedTrip(!assignedTrip)}
                className={`mt-6 -ml-14 w-56 h-12 bg-quaternary rounded-3xl drop-shadow-lg text-lg font-bold hover:text-white tracking-wide
                text-pinkText`}>
                  {assignedTrip ? 
                  "Assigned Trip" : "Upcoming Trips" }
                </button>
              {/* </Link> */}
            </div>
            <div className="flex flex-col items-center mt-2 w-[75%] h-[70%] overflow-y-auto overflow-x-hidden">
              <p className="text-greyText mb-4">
              { assignedTrip ? 
              "Upcoming Trips" : "Assigned Trips"}</p>
              {assignedTrip ? 
              <TripBar pageName={assignedTrip} />
              :
              <AssignedTripBar /> 
              }
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
            <div className="h-[60%] overflow-x-hidden overflow-y-auto">
              {busCompany.allBuses?.map((b: any) => (
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
                  // value={search}
                  placeholder="Search..."
                  className="bg-transparent border-none py-2 px-4 text-white outline-none w-full"
                />
                <button className="" type="submit">
                  <BsSearch className="text-primaryText" />
                </button>
              </div>
            </div>
            <div className="h-[60%] overflow-x-hidden overflow-y-auto">
            {busCompany.allDriver?.map((d: any) => (
              <div className="flex items-center mt-6 ml-4 h-10 w-[80%]">
                <img
                  className="w-10 h-10 rounded-full"
                  src={d?.displayPicture}
                  alt="DriverPic"
                />
                <p className="ml-4 text-md text-greyText font-bold">
                  {d?.driverName}
                </p>
              </div>
            ))}
          </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AssignDrivers;
