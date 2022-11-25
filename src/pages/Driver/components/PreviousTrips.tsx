import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import{FaBusAlt} from "react-icons/fa"
import{SiCircleci} from "react-icons/si"
import{FaArrowAltCircleUp} from "react-icons/fa"

function PreviousTrips() {

  const members = [
    {icon: 1, name : "Trip 1"},
    {icon: 1, name : "Trip 2"},
    {icon: 1, name : "Trip 3"},
    {icon: 1, name : "Trip 4"},
    {id: <FaArrowAltCircleUp/>, name : "Trip 5"},
   
]




  return (
    <div className="h-[100%]  w-screen  p-0">
              <div className=" relative flex-col   ml-[80px] w-[85%] h-[65px] bg-secondary mt-10 rounded-[40px]  shadow-xl">
                <p className=" text-center p-2 font-bold text-[20px] -ml-[50px] text-quaternaryText tracking-[7px] text-[30px] ">Previours Trips
                    <div className="flex justify-end text-white -mt-[35px] mr-4 ">
                      <BackButton/>
                    </div>
                </p>
              </div>
              <div className="  flex  flex-col items-center justify-center  p-4 w-[23%] h-[40px]  mt-[30px] ml-[35%] rounded-[20px] bg-quaternary shadow-xl ">
                  <p className="font-bold text-primaryText text-[25px] ">1 August 2021 (Sunday)</p>
                </div>
                <div>
                {members.map(({name}) => (
                   <Link to="/Driver-Tripdetails">
                <div className=" relative flex-col hover:border-2 cursor-pointer border-textblue ml-[150px] w-[30%] h-[60px] bg-secondary mt-10 rounded-[40px]  shadow-xl">
                <p className=" text-start  font-bold text-[20px] ml-4 p-4 text-primaryText tracking-[1px] text-[20px] ">{name}
                    <div className="flex justify-end text-white  -mt-[20px] mr-4 ">
                      <FaBusAlt className="text-pinkText"/>
                      <SiCircleci className="ml-4 text-primaryText"/>
                    </div>
                </p>
              </div>
              </Link>
              ))}
              </div>
              </div>
  );
}

export default PreviousTrips;
