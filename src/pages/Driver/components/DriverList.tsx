import React from "react";
import { FiPower } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

import Profile from "../../../assets/images/profile.png";

const DriverList = () => {
  return (
    <section className="grid grid-cols-12 gap-4 rounded-tl-[20px]">
      <div className="col-span-1  grid grid-flow-col place-items-center rounded-tl-[20px]">
        <FiPower />
      </div>
      <div className=" col-span-11 grid grid-flow-col h-[65px rounded-tl-[20px]  rounded-br-[20px]">
        <div className=" col-span-11 grid grid-flow-col h-[65px] bg-[black]/[0.3]  rounded-tl-[20px]  place-items-center ml-0">
          <div className="float-left m-0 p-0">
            <img className="h-[40px]" src={Profile} alt="" />
          </div>
          <div>
            <p>Driver name</p>
          </div>
          <div className="grid grid-flow-col gap-4">
            <FaCircle />
            <Link to="/driver-info">
              <BsFillEyeFill />
            </Link>
            <Link to="/update-driver">
              <FiEdit2 />
            </Link>
            <MdDeleteForever />
          </div>
        </div>
        <div className="bg-[#3973FF]/[0.3] w-[80px] rounded-br-[40px]"></div>
      </div>
    </section>
  );
};

export default DriverList;
