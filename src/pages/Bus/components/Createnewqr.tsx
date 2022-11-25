import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import { BsSearch } from "react-icons/bs";
import { MdDirectionsBusFilled } from 'react-icons/md'
import { FaArrowAltCircleRight } from 'react-icons/fa'


const members = [
    {icon: 1, name : "aaaaa", details : "111111111111111111"},
    {icon: 2, name : "bbbbb"},
    {icon: 3, name : "ccccc"},
    {icon: 4, name : "ddddd"},
    {icon: 5, name : "eeeee"},
    {icon: 6, name : "fffff"},
   
]

function Createnewqr(){
    return(
    <div className="flex flex-col w-[96vw] h-screen">
                                {/* top div */}
                <div className="flex flex-row w-full h-[12%]">
                    <div className="flex justify-center items-center w-full h-full ">
                        <p className='z-10 flex justify-center items-center ml-[110px] font-bold bg-[#2F3142] drop-shadow-2xl tracking-[5px]
                         rounded-b-[30px] w-[33%] h-full bg-white text-[37px] text-primaryText'>Generate QR</p>  
                    </div>
                    <div className="flex justify-end items-center  pr-14  w-[6%] h-full">
                        <BackButton />
                    </div>
                </div>
                                            {/* center div */}
         <div className=" relative flex justify-center items-center w-[96vw] h-screen">
                    <div className="absolute flex bg-bus-qr-cover w-[1300px] bg-cover bg-[length:40vw_80vh] bg-top 
                      opacity-50 bg-center bg-no-repeat -mt-16 h-[600px] rounded-3xl ml-4 bg-[#242636]">
                    </div>
                    <div className="absolute justify-end flex w-[1300px] -mt-16 h-[600px] rounded-3xl ml-4 ">
                        <div className="flex flex-col  w-[15%] rounded-r-3xl bg-[#3973FF]">
                            <div className="w-full h-[60%]"></div>
                            <div className="flex justify-center opacity-80 mt-10 w-full h-[40%]">
                                <div className="flex justify-center items-center relative w-[95%] h-[80%] rounded-[140px] bg-[#A8A8A8]">
                                    <div className="flex justify-center items-center absolute  w-[85%] h-[85%] rounded-[140px] bg-[#2F3142]">
                                      <div className="flex justify-center items-center absolute  w-[75%] h-[75%] rounded-[140px] bg-[#A8A8A8]">
                                        <div className="flex justify-center items-center absolute  w-[60%] h-[60%] rounded-[140px]">
                                            <FaArrowAltCircleRight className="text-[78px] text-primaryText"/>

                                        </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
            <div className="absolute flex flex-col w-[1300px] -mt-16 h-[600px] rounded-3xl ml-4">
                
                                                {/* Top-search  */}
                <div className="w-[85%] h-[30%]">
                   <div className="flex ml-14 items-center border-2 w-[350px] border-primaryText h-[40px] my-6 mx-3 rounded-full px-3">
                        <input type="text" placeholder="Search Drivers..." className="bg-transparent border-none py-2 px-2 text-white 
                        outline-none w-full"/>{" "}
                        <BsSearch className=" text-primaryText text-[25px]"/>
                    </div>
                </div>
                <div className=" flex flex-col w-[85%] h-full">
                <div className="">
                {members.map(({name}) => (
                  
                 
                <div className="flex-col cursor-pointer  ml-[93px] w-[45%] h-[74px] bg-[#2F3142] mt-8 
                    rounded-l-[40px] rounded-tr-[20px] rounded-br-[40px] shadow-xl "> 
                     <Link to="/bus-detailsqr">
                   <div className=" flex flex-row items-center  mt-4 ml-6 text-primaryText absolute text-[45px]"><MdDirectionsBusFilled/>
                   <div className="flex flex-col text-white text-[15px] ml-4">
                    <p>{ name }</p>
                    <p>nknijiklknlknjnjnjjnj</p>
                   </div>
                   
                   </div> 
                    <div className="flex justify-end ">
                        <div className="flex justify-end items-end cursor-pointer   w-[20%] h-[74px] bg-primaryText 
                        rounded-tr-[20px] rounded-br-[40px] shadow-xl"> </div>
                    </div>
                    </Link>
                </div>
               
                
                
              
              ))}
              </div>
                    </div>
               
                
              </div>
        </div>
            
    </div>
    
    );
}
export default Createnewqr;  