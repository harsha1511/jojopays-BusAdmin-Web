import React from "react";
import { FaBusAlt} from "react-icons/fa";
import { FaBus} from "react-icons/fa";
import { SiCircleci} from "react-icons/si";
import { FaArrowAltCircleUp} from "react-icons/fa";
import {BsCalendarCheck} from "react-icons/bs";
import {BsCalendarX} from "react-icons/bs";
import {BsCircleFill} from "react-icons/bs";


export const BusInfo = () => {
    return(
        <div className="flex justify-end w-[96vw] h-screen">
    <div className="w-[22%] h-[60%] bg-white bg-opacity-50 backdrop-blur rounded-2xl">
        <div className="flex flex-col font-semibold w-full h-full m-4">
            <div className="flex flex-row m-2">
                <div className="text-[25px]"><FaBusAlt/></div>
                <div className="ml-6 text-white">Casual Trip Bus</div>
            </div>
            <div className="flex flex-row m-2">
                <div className="text-[25px]"><FaBus/></div>
                <div className="ml-6">Pre-booking Trip Bus</div>
            </div>
            <div className="flex flex-row m-2">
                <div className="text-[25px] text-[#3973FF]"><SiCircleci/></div>
                <div className="ml-6 text-[#3973FF]">In Rounded Trip (Active)</div>
            </div>
            <div className="flex flex-row m-2">
                <div className="text-[25px] text-[#2C2B4F]"><SiCircleci/></div>
                <div className="ml-6 text-[#2C2B4F]">Round Trip (Inactive)</div>
            </div>
            <div className="flex flex-row m-2">
                <div className="text-[25px] text-[#3973FF]"><FaArrowAltCircleUp/></div>
                <div className="ml-6 text-[#3973FF]">In One Way Trip (Active)</div>
            </div>
            <div className="flex flex-row m-2">
                <div className="text-[25px] text-[#2C2B4F]"><FaArrowAltCircleUp/></div>
                <div className="ml-6 text-[#2C2B4F]">One Way Trip (Inactive)</div>
            </div>
            <div className="flex flex-row m-2">
                <div className="text-[25px] text-[#50FF84]"><BsCalendarCheck/></div>
                <div className="ml-6 text-[#50FF84]">Next Trip Assigned</div>
            </div>
            <div className="flex flex-row m-2">
                <div className="text-[25px] text-[#2C2B4F]"><BsCalendarX/></div>
                <div className="ml-6 text-[#2C2B4F]">Next Trip Not Assigned</div>
            </div>
            <div className="flex flex-row m-2">
                <div className="text-[25px] text-[#FF4188]"><BsCircleFill/></div>
                <div className="ml-6 text-[#FF4188]">Active Busses</div>
            </div>
            <div className="flex flex-row m-2">
                <div className="text-[25px] text-[#FF5050]"><BsCircleFill/></div>
                <div className="ml-6 text-[#FF5050]">Inactive Busses</div>
            </div>
        </div>
    </div>
    </div>    
         );
        }