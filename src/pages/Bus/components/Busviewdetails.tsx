import React from "react";
import BackButton from '../../../components/BackButton';
import { BiBus } from "react-icons/bi";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import EditButton from "../../../components/EditButton";
import { DeleteButton } from "../../../components/DeleteButton";


function Busviewdetails(){
    return(<div className="flex flex-col justify-start items-center w-[96vw] h-screen">
    <div className='z-10 flex justify-center items-center w-[35%] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
      <p className='font-bold tracking-wider text-2xl text-primaryText'>View Bus Details</p>
    </div>
    <div className='flex justify-center items-center w-[96vw] h-screen'>
        <div className='flex flex-col items-center w-[1300px] -mt-16 h-[650px] rounded-3xl ml-4  bg-add-driver-cover bg-cover bg-center bg-no-repeat'>
        <div className="flex justify-start items-center  pr-8 w-[100%] h-20">
        <div className="flex justify-start items-center  pr-8 w-[100%] h-20">
                <p className="flex w-[60px] ml-[70px] h-[60px] rounded-[60px] items-center justify-center bg-[#2F3142]"><BiBus className=" text-[#1E1E2C] text-[30px]"/>

                </p>
            </div>
            <div className="flex justify-end items-center  pr-8 w-[100%] h-20">
                <div className="mr-4">
                <EditButton isEdit={true} className=" "/>

                </div>
                <div className="mr-4">
                    <DeleteButton/>
                </div>
                <div>
                <BackButton />
                </div>
            </div>
            </div>
            <section className="flex flex-row  border-b-full border-tertiary w-[100%] h-[100%]">
                
            <div className="flex flex-col-reverse w-[50%] h-full rounded-3xl">
                <div className=" w-full h-[35%] rounded-b-3xl">
                        <div className='flex items-center ml-[70px] mt-3'>
                            <label className='flex justify-end w-32 text-pinkText text-sm font-bold'>Next Trip:</label>
                            <p className='text-[#50FF84] text-sm font-semibold pl-4'>Assigned</p>
                            <RiCheckboxCircleFill className=" ml-2 rounded-full text-[#50FF84] "/>
                        </div>
                        
                
                <div className="  flex items-center p-4 w-[90%] h-[53px] mt-6 ml-[40px] rounded-[15px] bg-quaternary shadow-2xl ">
              
                  
                      <FiClock className="font-bold text-primaryText text-[30px]"/>
                          <div className="w-[30%] rounded-2xl shadow-2xl h-[53px] bg-[#1E1E2C] ml-4">
                          <section className='flex font-semibold mt-2 text-primaryText text-[8px] mb-2 -ml-2 justify-between'>
                            <p className="ml-6">Day</p>
                            <p className="">month</p>
                            <p className="">year</p>
                            <p className="">Hours</p>
                            <p className="mr-6">Min</p>

                            </section>
                            <section className='flex font-semibold shadow-3xl -mt-2 text-primaryText  justify-between'>
                            <p className="ml-2 w-[33px] text-white rounded-l-xl pl-2 h-[23px] bg-[#242636]">-</p>-
                            <p className="w-[33px] text-white pl-2 h-[23px] bg-[#242636]">-</p><span>-</span>
                            <p className="w-[45px] text-white  pl-2 h-[23px] bg-[#242636]"> - -</p><span>-</span>
                            <p className="w-[33px] text-white  pl-2 h-[23px] bg-[#242636]">-</p><span>-</span>
                            <p className="mr-4 w-[33px] text-white rounded-r-xl pl-2 h-[23px] bg-[#242636]">-</p>

                            </section>
                        </div>
                          <section className=" flex flex-col  text-[10px] -mt-2 ml-4">
                          <p className="text-primaryText ">From:<span className="ml-2 text-[#A8A8A8]">North Road</span></p> 
                          <p className="text-primaryText ">To:<span className="ml-2 text-[#A8A8A8]">West Road</span></p>
                          </section>
                          
                          
                          <div className=" flex flex-row -mr-6 shadow-2xl  ml-[45px] w-[38%] rounded-l-2xl rounded-r-xl h-[45px]  bg-[#1E1E2C]">
                          <div className=" flex flex-col  text-[12px] mt-[2px] ml-4">
                            
                            <p className="text-primaryText text-[12px]  ml-8">Pilot:<span className="ml-2 text-[#A8A8A8]">Sam</span></p> 
                              <p className="text-primaryText  ml-2">Co-pilot:<span className="ml-2 text-[#A8A8A8]">Sam</span></p>
                        </div>

                           <p className="text-[#A8A8A8] text-[12px]  mt-2 ml-4"> Type:<span className="text-primaryText ">casual Trip</span></p>
                          
                          </div>
                          </div>
                        <Link to="/previous-trips">
                <button className="text-[#50FF84]  ml-[50px] mt-4 w-[150px] h-[40px] rounded-tr-[25px]  rounded-tl-[5px] rounded-br-[5px] rounded-bl-[25px] bg-[#2F3142]"> Previous Trips</button>
                
                      </Link> 
                </div>
               
                <div className=" w-full h-[30%] ml-10 ">
                        <div className='flex items-center '>
                            <label className='flex justify-end w-40 text-pinkText text-sm font-bold'>Commonly Used for:</label>
                            <p className='text-primaryText text-sm font-semibold pl-4'>casual trips</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-40 text-pinkText text-sm font-bold'>Bus Type:</label>
                            <p className='text-primaryText text-sm font-semibold pl-4'>Non A/C</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-40 text-pinkText text-sm font-bold'>Seat Type:</label>
                            <p className='text-primaryText text-sm font-semibold pl-4'>Normal</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-40 text-pinkText text-sm font-bold'>No.of Seats:</label>
                            <p className='text-primaryText text-sm font-semibold pl-4'>56</p>
                        </div>

                </div>
                <div className="flex flex-col  w-full h-[40%]">
                        <div className='flex items-center'>
                            <label className='flex justify-end w-32 text-pinkText text-sm font-bold'>Bus Name:</label>
                            <p className='text-primaryText text-sm font-semibold pl-4'>snddsk5565</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-32 text-pinkText text-sm font-bold'>Bus No:</label>
                            <p className='text-primaryText text-sm font-semibold pl-4'>15548484</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-32 text-pinkText text-sm font-bold'>Reg No.:</label>
                            <p className='text-primaryText text-sm font-semibold pl-4'>61612661</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-32 text-pinkText text-sm font-bold'>Licence No:</label>
                            <p className='text-primaryText text-sm font-semibold pl-4'>61612661</p>
                        </div>
                        <div className='flex mt-3'>
                            <label className='flex justify-end w-32 text-pinkText text-sm font-bold'>Address:</label>
                            <p className='w-56 text-primaryText text-sm font-semibold pl-4'>njddsjk kfnkldsnfak  kdfnknie kdfmdnfuni dfnnjr  newnfiewi</p>
                        </div>
                </div>
            </div>
            <div className="flex flex-col  w-[50%] h-full rounded-3xl">
                            {/* bus  */}
                <div className=" w-full h-[35%] ">
                    {/* <div>hii</div>
                    <div>hii</div>
                    <div>hii</div> */}
                </div>
                <div className="flex flex-col w-[85%] h-[65%] ml-14 bg-[#2F3142] rounded-[30px]">
                    <div className=" w-[100%] h-[30%] border-b-2  border-tertiary  text-[14px]">   
                         <p className=" flex justify-center text-[13px] ml-[100px] mt-2 font-semibold">Status :<span className="ml-2 text-quaternaryText"> On Trip</span></p>
                            <div className=" flex  mr-[50px] items-center text-[13px] border-b-2  border-tertiary font-bold ml-[100px] -mt-4 justify-between">
                                <p className="p-2 text-pinkText">North road</p>
                                <p className="p-2 mt-2  text-[13px] text-textblue">Round Trip</p>
                                <p className="p-2 mr-[50px] text-pinkText">North road</p>
                            </div>
                            <div className=" flex items-center text-[13px] ml-[100px] -mt-[6px] font-semibold justify-between">
                                <p className="p-2 mt-2 ml-4 text-white font-semibold">8.00 am</p>
                                <p className="p-2  text-textblue  mr-[10px] text-xs font-semibold">ETA : 32 min</p>
                                <p className="p-2 text-white  mr-[100px] font-semibold">End Time</p>
                            </div>
                                <p className=" flex justify-center -mt-2 bg-[#222333] w-[100px] h-[23px] p-2 ml-[230px] text-center items-center rounded-lg text-textblue  font-semibold">00:31:54</p>

                    
                    </div>
                    <div  className=" w-full h-[20%] border-b-2  border-tertiary">
                    <div className="z-10 flex justify-center items-center w-full ">
              <section className='flex  font-semibold justify-between'>
              <p className="m-[5px]">Pilot name: <span className="text-textblue">Drake</span></p>
                <p className="m-[5px]">ID: <span className="text-textblue">PIL01236</span></p>
                <p className="m-[5px] w-[70px] h-[25px]  text-center bg-[#222333] text-white rounded-lg">DM</p>
                <p className="m-[5px]">Ph: <span className="text-textblue">+916595125521</span></p>
               
              </section>
            </div>
            <div className="z-10 flex justify-center items-center w-full ">
              <section className='flex font-semibold justify-between'>
              <p className="m-[5px]">Pilot name: <span className="text-textblue">Drake</span></p>
                <p className="m-[5px]">ID: <span className="text-textblue">PIL01236</span></p>
                <p className="m-[5px] w-[70px] h-[25px]  text-center bg-[#222333] text-white rounded-lg">DM</p>
                <p className="m-[5px]">Ph: <span className="text-textblue">+916595125521</span></p>
               
              </section>
            </div>
            



                    </div>
                    <div  className=" flex flex-row w-full h-[50%] ">
                        <div className="w-[45%] h-full">
                        <div className="flex flex-row">
                        <p className="m-[5px] ml-6 text-[#FF5050] font-semibold">Earning(s)  </p>
                        <p className="flex items-center mt-2 justify-center text-textblue text-[12px] ml-4 rounded-lg w-[60px] h-[25px] bg-[#1E1E2C]">1000$</p>
                       
                        </div>
                        <div className="flex  flex-row">
                        <p className="m-[5px] ml-8 text-[#FF5050] font-semibold">Expenses</p>
                        <p className="flex items-center mt-2 justify-center text-textblue text-[12px] ml-4 rounded-lg w-[60px] h-[25px] bg-[#1E1E2C]">100$</p>
                       
                        </div>
                        <div className="flex flex-row">
                        <p className="m-[5px] ml-2 text-[#FF5050] font-semibold">Passenger(s)</p>
                       
                        </div>
                        <div className="flex flex-row">
                        <p className="m-[5px] ml-8 text-white font-semibold">Expenses</p>
                        <p className="flex items-center mt-2 justify-center text-textblue text-[12px] ml-4 rounded-lg w-[60px] h-[25px] bg-[#1E1E2C]">150</p>
                       
                        </div>
                        <div className="flex flex-row">
                        <p className="m-[5px] ml-8 text-white font-semibold">Expenses</p>
                        <p className="flex items-center mt-2 justify-center text-textblue text-[12px] ml-4 rounded-lg w-[60px] h-[25px] bg-[#1E1E2C]">50</p>
                       
                        </div>
                        
                        
                        
                        
                        </div>
                        <div className="flex justify-center items-center w-[15%] h-full ">
                        < Link to="/Driver-detail"> 
                            <div className="flex justify-center flex-col text-quaternaryText font-bold text-[17px] rounded-[4px] items-center bg-[#222333] w-[45px] h-[110px]">M
                            <p>O</p><p>R</p><p>E</p></div>
                            </Link>
                        </div>
                        <div className="w-[60%] h-full  flex items-center justify-center">
                            <div className=" w-[58%] h-[93%] bg-white mt-2 mb-2 rounded-[20px]"></div>
                        </div>
                    </div>
                    
                    <div>

                    </div>
                </div>



            </div>
           </section>

            </div>
            

            </div>
            </div>
        
    );
}
export default Busviewdetails; 