import React from "react";
import { Link } from "react-router-dom";

import {BiWifi} from 'react-icons/bi'


function Driverbus() {
    return <div className="flex-col drop-shadow-lg absolute left-0 top-0 h-16 sm:ml-[170px] s">
                <div className=' ml-[56px] mt-[240px] pt-2 pb-4 w-[10px] h-[50px] bg-primary rounded-2xl'></div>
                <div className=' ml-[56px] mt-[160px] pt-2 pb-4 w-[10px] h-[50px] bg-primary rounded-2xl'></div>
                <div className="flex absolute left-2 top-0 ml-[70px] mt-[195px]">
                    <div className='  pt-2 pb-4 w-[160px] h-[350px] bg-primary rounded-b-xl rounded-t-[60px]'></div>
                </div>
                <div className="flex-col absolute left-0 top-0 h-16 sm:ml-[170px] s">
                    <div className=' ml-[80px] mt-[240px] pt-2 pb-4 w-[10px] h-[50px] bg-primary rounded-2xl'></div>
                    <div className=' ml-[80px] mt-[160px] pt-2 pb-4 w-[10px] h-[50px] bg-primary rounded-2xl'></div>
                </div>
                <div >
                    <p className="absolute left-0 top-0 ml-[100px] mt-[540px] pt-2 pb-4  text-lg font-semibold tracking-[10px] text-primaryText w-[100px] h-[80px] ">FEDCBA</p>
                    <p className='absolute left-0 top-0 ml-[105px] mt-[580px] pt-2 pb-4 w-[100px] h-[80px] drop-shadow-lg bg-quaternary rounded-2xl'>
                    <BiWifi className=" text-redText text-[50px] ml-6"/>
                    <p className="ml-8 font-semibold text-redText">LIVE</p>
                    </p>

                </div>
            </div>
        
         
  };
export default Driverbus;