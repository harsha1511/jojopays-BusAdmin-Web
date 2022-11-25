import React,{useState} from "react";
import { Link } from "react-router-dom";
import Addnewbus from "./components/Addnewbus";
import { BsSearch } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiBus } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { FaBusAlt } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { HiClock } from "react-icons/hi";
import { BsCalendarCheck } from "react-icons/bs";
import { BsCalendarX } from "react-icons/bs";
import Busicon from "./components/Busicon";






const Bus = () => {


  
  const [showList, setShowList] =useState<number>(1);

    const members = [
        { name : "bus1"},
        { name : "bus2"},
        { name : "bus3"},
        { name : "bus4"},
       
       
    ]
    const[open, setOpen]=useState(false)
    console.log(open);
    




  return<div>
   
    <div className="relative">
    {open &&
    
    <div className="absolute flex justify-end items-center w-full h-full">
    <div className="z-10 absolute w-full  h-full"onClick={() => setOpen(!open)}></div>
    
     
      <div className="z-20 mr-[135px] mt-[95px]">
        <Busicon/>
      </div>
    </div>
    }
  <div className="flex w-[96vw] h-screen">
    <Addnewbus/>
    
    <div className="w-[100%] h-full">
      <div className=" w-full h-[11%] mt-6">
        <div className="flex flex-row w-full h-full">
        <div className="flex flex-row justify-center w-[85%] h-full items-center">
        <div className="flex justify-center border-2 w-[360px] mx-3 border-[#0095E2]  rounded-full px-3 h-[36px] my-6 rounded-full px-5">
              <input
                type="text"
                placeholder="Search Drivers..."
                className="bg-transparent border-none py-2 px-2 text-white outline-none w-[300px]"
              />{" "}
             
              
        </div>
        <div>
              <BsSearch className="mt-2 text-[23px] text-[#0095E2]"/>
              </div>
        </div>
        <div className="flex justify-end w-[6%] h-full items-center">
          
         
        <button className="z-30 text-[60px] text-[#0095E2]" onClick={() => setOpen(!open)}><AiFillInfoCircle/></button>
        </div>
        </div>
 
         <BsSearch className="mt-2 text-[23px] text-[#0095E2]"/> 
        </div>
 
          
      
      <div className="flex w-full mt-4 h-[85%]">
      <div className="bg-secondary w-[41%] h-full overflow-y-auto rounded-3xl">
        <section className="flex flex-col w-full h-[10%]">
          <p className="flex justify-center mt-6 text-redText font-semibold">Active Busses</p>
        </section>
        
         <div className="grid grid-cols-2  border-b-2 border-tertiary gap-2 w-[100%] h-[100%]">  
         {members.map(({name}) => (      
         <section className="flex flex-row  border-b-full border-tertiary w-[70%] h-[100%]">
              <Link to="/bus-viewdetails">
              <div className="w-[100%] h-full">
            
                <div className="flex flex-start justify-center w-[85%] h-[60%]  ml-[60px]  rounded-[40px] bg-white">
                
                  <div className="flex justify-center w-[100%]  h-[70%] rounded-[40px] bg-pinkText">
                
                    <div className="flex justify-center mt-8 w-[56%] h-[50%] bg-white rounded-[100px]"></div>
                  
                  </div>
                
                </div>
               
                    <p className=" flex start ml-[100px] text-pinkText font-bold">{name}</p>
              </div>
              </Link>
            </section>
            ))}
            </div>
            

       
        
      </div>
      <div className="w-[10%] h-full justify-center flex ">
        <div className="flex flex-col items-center w-[40%] rounded-2xl h-[35%] bg-[#2F3142]">
          <div className="flex w-[100%] text-redText text-[60px] justify-center items-center h-[30%] bg-[#3973FF] rounded-2xl">
            <BsFilter className="text-white"/>
          </div>
          <div className="text-[38px] text-[#3973FF]">
          <FaBusAlt className="p-2 "/>
          <FaBus className="p-2"/>
          <HiClock  className="p-2"/>
          <HiClock  className="p-2"/>
          </div>
        
        </div>
       
      
      </div>
      <div className="bg-secondary w-[41%] h-full overflow-y-auto rounded-3xl">
        <section className="flex flex-col w-full h-[10%]">
          <div className="flex flex-row mt-4 w-full h-[10%]">
            <div className="flex justify-center ml-[60px] h-full w-[80%]">
          <p className="flex justify-center text-redText font-semibold">Available Busses</p>
          </div>
          <div className="flex justify-end w-[5%]">
          <div className="mr-6 text-[26px] font-semibold text-[#0095E2]"><BsCalendarCheck/></div>
          <div className="mr-6 text-[26px] text-white font-semibold"><BsCalendarX/></div>
          </div>
          
          </div>
          <p className="flex justify-center mt-6 text-redText font-semibold">Available Busses</p>
        </section>

        <div className="grid grid-cols-2 gap-2 w-[100%] h-[100%]">  
         {members.map(({name}) => (      
         <section className="flex flex-row  border-b-full border-tertiary w-[70%] h-[100%]">
              <div className="w-[100%]">
                <p className="flex flex-start justify-center w-[75%] h-[60%]  ml-[60px]  rounded-[40px]  bg-white">
                  <p className="flex justify-center w-[100%]  h-[70%] rounded-[40px] bg-redText">
                    <p className="flex justify-center mt-8 w-[56%] h-[50%] bg-white rounded-[100px] "></p>
                  </p>
                </p>
                    <p className=" flex start ml-[100px] text-redText font-bold">{name}</p>
              </div>

            </section>
            ))}
            </div>
       
      </div>
      
    </div>
    </div>
      
  </div>
  
  </div>
  </div>

  
};

export default Bus;
