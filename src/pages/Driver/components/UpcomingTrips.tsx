import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import{FiClock} from "react-icons/fi"

function UpcomingTrips() {

  
  

    const members = [
        { name : "PIL01417"},
        { name : "PIL01417"},
        { name : "PIL01417"},
        { name : "PIL01417"},
       
    ]


  
  return(
            <div className="h-[100%]  w-screen flex flex flex-col items-center justify-center p-0">
              <div className=" relative flex-col w-[85%] h-[65px] bg-secondary mt-10 rounded-[40px]  shadow-2xl">
                <p className=" text-center p-2 font-bold text-[20px] -ml-[50px] text-quaternaryText tracking-[7px] text-[30px] ">Upcoming Trips</p>
                    <div className="flex justify-end items-center  -mt-[45px] mr-4 ">
                      <BackButton/>
                    </div>
                
              </div>
                <div className="  flex items-center p-4 w-[23%] h-[45px] justify-center mt-[30px] -ml-12 rounded-[20px] bg-quaternary shadow-2xl ">
                  <p className="font-bold text-primaryText text-[25px] ">13 August 2021 (Friday)</p>
                </div>
                <div className="w-[80%]">
                {members.map(({name}) => (
                <div className="  flex items-center p-4 w-[80%] h-[53px]  mt-[50px] ml-16 rounded-[15px] bg-quaternary shadow-2xl ">
              
                  
                      <FiClock className="font-bold text-primaryText text-[30px]"/>
                          <div className="w-[25%] rounded-2xl shadow-2xl h-[53px] bg-[#1E1E2C] ml-4">
                          <section className='flex font-semibold mt-2 text-primaryText text-[10px] mb-2 -ml-2 justify-between'>
                            <p className="ml-6">Day</p>
                            <p className="">month</p>
                            <p className="">year</p>
                            <p className="">Hours</p>
                            <p className="mr-6">Min</p>

                            </section>
                            <section className='flex font-semibold shadow-3xl -mt-2 text-primaryText  justify-between'>
                            <p className="ml-2 w-[35px] text-white rounded-l-xl pl-2 h-[23px] bg-[#242636]">- -</p>-
                            <p className="w-[35px] text-white pl-2 h-[23px] bg-[#242636]">- -</p><span>-</span>
                            <p className="w-[47px] text-white  pl-2 h-[23px] bg-[#242636]">- - - -</p><span>-</span>
                            <p className="w-[35px] text-white  pl-2 h-[23px] bg-[#242636]">- -</p><span>-</span>
                            <p className="mr-4 w-[35px] text-white rounded-r-xl pl-2 h-[23px] bg-[#242636]">- -</p>

                            </section>
                           
                            
                          </div>
                          <section className=" flex flex-col  text-[13px] -mt-2 ml-4">
                          <p className="text-primaryText ">From:<span className="ml-2 text-[#A8A8A8]">North Road</span></p> 
                          <p className="text-primaryText ">To:<span className="ml-2 text-[#A8A8A8]">West Road</span></p>
                          </section>
                          <div className="ml-8 ">
                          <p className="  font-bold text-[14px]">Bus No.:<span className="text-primaryText "> {name}</span></p>
                          </div>
                          
                          <div className=" flex flex-row -mr-6 shadow-2xl  ml-[48px] w-[38%] rounded-l-2xl h-[45px]  bg-[#1E1E2C]">
                          <div className=" flex flex-col  text-[12px] mt-[2px] ml-4">
                            
                            <p className="text-primaryText text-[12px]  ml-8">Pilot:<span className="ml-2 text-[#A8A8A8]">You</span></p> 
                              <p className="text-primaryText  ml-2">Co-pilot:<span className="ml-2 text-[#A8A8A8]">Sam</span></p>
                        </div>

                           <p className="text-[#A8A8A8] text-[12px]  mt-2 ml-4"> Type:<span className="text-primaryText ">casual Trip</span></p>
                           <p className="text-[#A8A8A8] text-[12px]  mt-2 ml-4"> Type:<span className="text-primaryText ">casual Trip</span></p>
                          
                          </div>

                          
                  
                </div>
               ))} 
                </div>
                
               
             
             </div>
              


    
    
        );
}

export default UpcomingTrips;
