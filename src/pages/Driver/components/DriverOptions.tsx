import React from "react";
import AddButton from "../../../assets/images/add-button.svg";
import { Link } from "react-router-dom";

function DriverOptions() {
  return (
    <div className=" p-100px ml-10px">
      <div className="grid grid-flow-row auto-row-auto w-[250px] bg-white/[0.2] rounded-[20px] ">
        <div>
          <div className="grid grid-flow-row auto-row-max bg-[#1E1E2C] h-[50px] rounded-t-[20px] place-content-center">
            Filter
          </div>
          <div className="grid grid-flow-row gap-2 auto-row-max p-2.5  place-items-center">
            <p>All driver</p>
            <p>Active driver</p>
            <p>Available driver</p>
          </div>
        </div>
        <div>
          <div className="grid grid-flow-row auto-row-max  bg-[#1E1E2C] h-[50px] place-content-center">
            Sort
          </div>
          <div className="grid grid-flow-row gap-2 auto-row-max  p-2.5 place-items-center">
            <p>Alphabetical Order</p>
            <p>From New to Old </p>
            <p>From Old to New </p>
          </div>
        </div>
        <div className="grid grid-flow-row auto-row-max bg-[#1E1E2C] h-[20px]"></div>
        <div className=" grid place-items-center h-[140px]">
          <Link to="/add-driver">
            {" "}
            <img src={AddButton} alt="" className="h-[110px] " />{" "}
          </Link>
        </div>
        <div className="bg-[#FF5050] h-[30px] rounded-b-[20px]"></div>
      </div>
    </div>
  );
}

export default DriverOptions;
