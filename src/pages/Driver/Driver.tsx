import React,{useEffect, useState} from "react";
import DriverList from "./components/DriverList";
import DriverOptions from "./components/DriverOptions";
import Chart from "./components/Chats";
import axios from "axios";

import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


const Driver = () => {

    

  return (
    <div className="h-[100vh]  bg-driver-cover  bg-[length:60vw_100vh] bg-top  bg-no-repeat flex items-center justify-center ">
      <div className="w-[80vw] h-[90vh] ml-[130px] shadow rounded-[5vh] overflow-hidden bg-[#242636]/[0.3] ">
        <div className="bg-auto bg-no-repeat bg-center grid grid-flow-col col-span-3 ">
          <div className="col-span-3">
            <div className="flex items-center border-2 w-[390px] border-primaryText h-[40px] my-6 mx-3 rounded-full px-3">
              <input
                type="text"
                placeholder="Search Drivers..."
                className="bg-transparent border-none py-2 px-2 text-white outline-none w-full"
              />{" "}
              <BsSearch className=""/>
            </div>
           
            <div className="w-[90%] h-[510px] overflow-y-auto" id='noScrollBar'>
            <div className="bg-auto bg-no-repeat bg-center m-3 p-3">
              <DriverList />
              {/* <Driverrating/> */}
            </div>           
            </div>
          </div>
          <div className="bg-auto bg-no-repeat bg-center grid grid-flow-col  gap-4">
            <div className="bg-auto bg-no-repeat bg-center ">
              <div className="bg-auto bg-no-repeat bg-center m-3 p-3">
                <DriverOptions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driver;