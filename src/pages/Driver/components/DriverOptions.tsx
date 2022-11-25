import React from "react";
import AddButton from "../../../assets/images/add-button.svg";
import { Link } from "react-router-dom";

function DriverOptions() {
  return (
    <div className=" p-100px ml-10px">
      <div className="grid grid-flow-row auto-row-auto w-[250px] bg-white/[0.2] rounded-[20px] ">
        <div>
          <div className="grid grid-flow-row font-semibold tracking-widest text-3xl auto-row-max bg-primary h-[60px] rounded-t-[20px] place-content-center">
            Filter
          </div>
          <div className="grid grid-flow-row font-semibold gap-2 auto-row-max p-2.5   place-items-center">
            <p >All Drivers</p>
            <p className=" text-redText ">Active Drivers</p>
            <p className=" text-redText ">Available Drivers</p>
          </div>
        </div>
        <div>
          <div className="grid grid-flow-row auto-row-max tracking-widest text-3xl font-semibold bg-[#1E1E2C] h-[60px] place-content-center">
            Sort By
          </div>
          <div className="grid grid-flow-row gap-2 font-semibold auto-row-max  p-2.5 place-items-center">
            <p>Alphabetical Order</p>
            <p className=" text-redText ">From New to Old </p>
            <p className=" text-redText ">From Old to New </p>
          </div>
        </div>
        <div className="grid grid-flow-row auto-row-max bg-[#1E1E2C] h-[35px]"></div>
        <div className=" grid place-items-center h-[140px]">
          <Link to="/add-driver">
            {" "}
            <img src={AddButton} alt="" className="h-[110px] " />{" "}
          </Link>
        </div>
        <div className="bg-[#FF5050] h-[40px] rounded-b-[20px]"></div>
      </div>
    </div>
  );
}

export default DriverOptions;
