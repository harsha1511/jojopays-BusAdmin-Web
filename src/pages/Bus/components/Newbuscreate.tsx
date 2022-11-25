import React from "react";
import { Link } from "react-router-dom";
import BackButton from '../../../components/BackButton';
import {FaBus} from 'react-icons/fa'





function Newbuscreate(){
    return(
    <div className="flex flex-col justify-start items-center w-[96vw] h-screen">
    <div className='z-10 flex justify-center items-center w-[500px] h-[13%] bg-[#2F3142] rounded-b-3xl drop-shadow-2xl'>
      <p className='font-bold tracking-wider text-3xl text-primaryText'>Add New Bus</p>
    </div>
    <div className='flex justify-center items-center w-[96vw] h-screen'>
        <div className='flex flex-col items-start w-[1300px] -mt-16 h-[600px] rounded-3xl ml-4 bg-secondary bg-add-driver-cover bg-cover bg-center bg-no-repeat'>
            <div className="flex justify-end items-center mt-4 pr-8 w-[100%] h-20">
                <BackButton />
            </div>
            <div className="w-full h-[35%] -mt-10 ">
                <div className='flex items-center '>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Bus Name:</label>
                    <input type="text" className="ml-3 w-[35%]  p-[5px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none" name="Login"/> {" "}
                </div>
                <div className='flex items-center mt-2'>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Bus No:</label>
                    <input type="text" className="ml-3 w-[35%]  p-[5px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none" name="Login"/> {" "}
                </div>
                <div className='flex items-center mt-2'>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Reg No:</label>
                    <input type="text" className="ml-3 w-[35%]  p-[5px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none" name="Login"/> {" "}
                </div>
                <div className='flex items-center mt-2'>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Licence No:</label>
                    <input type="text" className="ml-3 w-[35%]  p-[5px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none" name="Login"/> {" "}
                </div>
                <div className='flex items-center mt-2'>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Description:</label>
                    <input type="text" className="ml-3 w-[70%]  p-[5px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none" name="Login"/> {" "}
                </div>
            </div>
            <div className="w-full h-[65%] shadow-2xl">
            <div className='flex flex-row items-center'>
            <label className='flex justify-end w-40 text-primaryText -mt-6 text-sm font-bold'>Add Photo:</label>
            <div className="flex ml-6 w-[55px] h-[55px] shadow-2xl bg-[#2F3142] rounded-[50%] justify-center text-[#1E1E2C] text-[30px] items-center"><FaBus/></div>
            <div className="h-[1px] w-[45px] bg-redText"></div>
            <div className="flex items-center justify-center w-[110px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[35px] font-semibold  bg-[#2F3142]">
                <label>
                <input className="hidden" type="file" /> 
                <p className=' text-redText drop-shadow-lg' >Upload</p>
                </label>
             </div>
            </div>
            <div className='flex flex-row items-center mt-8'>
            <label className='flex justify-end w-40 text-primaryText -mt-6 text-sm font-bold'>Commonly Used for:</label>
            <button className="flex items-center justify-center w-[120px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[33px] bg-[#2F3142] shadow-2xl font-semibold ml-[40px]">Casual Trip </button>
                <div className="h-[1px] w-[45px] bg-redText"></div>
            <button className="flex items-center justify-center w-[160px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[33px] bg-[#2F3142] shadow-2xl font-semibold">Pre-planned Trip</button>
            </div>
            <div className='flex flex-row items-center mt-8'>
            <label className='flex justify-end w-40 text-primaryText -mt-6 text-sm font-bold'>Bus Type:</label>
            <button className="flex items-center justify-center w-[56px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[33px] bg-[#2F3142] shadow-2xl font-semibold ml-[40px]">A/C </button>
                <div className="h-[1px] w-[45px] bg-redText"></div>
            <button className="flex items-center justify-center w-[90px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[33px] bg-[#2F3142] shadow-2xl  font-semibold">Non A/C</button>
            </div>
            <div className='flex flex-row items-center mt-8'>
                <label className='flex justify-end w-40 text-primaryText -mt-6 text-sm font-bold'>Seat Type:</label>
                    <button className="flex items-center justify-center w-[80px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                        rounded-bl-[4px] text-redText h-[33px] bg-[#2F3142] font-semibold ml-[40px]">Normal </button>
                       <div className="h-[1px] w-[45px] bg-redText"></div>
                    <button className="flex items-center justify-center w-[115px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                        rounded-bl-[4px] text-redText h-[33px] bg-[#2F3142] font-semibold">Semi Sleeper</button>
                        <div className="h-[1px] w-[45px] bg-redText"></div>
                    <button className="flex items-center justify-center w-[75px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                        rounded-bl-[4px] text-redText h-[33px] bg-[#2F3142] font-semibold">Sleeper</button>
            </div>
            <div className='flex flex-row shadow-xl w-full h-[40%] items-center ml-6'>
                <div className="w-[90%] h-[50%]">
                <label className=' w-full text-primaryText  ml-[35px] text-sm font-bold'>Bus Document:</label>
                <div className="flex shadow-2xl items-center justify-center -mt-[30px] w-[110px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[35px] font-semibold bg-[#2F3142] ml-[180px]">
                <label>
                <input className="hidden" type="file" /> 
                <p className=' text-redText drop-shadow-lg' >Upload</p>
                </label>
             </div>
               
                
                </div>
                <div className="w-[20%] -mt-2 h-[30%]">
                <button className="flex shadow-2xl justify-center items-center w-[180px] rounded-3xl
                     text-[#50FF84] h-[50px] bg-[#2F3142] text-[35px] font-semibold ">Next
                     </button>
                </div>
                
                {/* <div className="flex flex-row">
                <div className="flex justify-start">
                <label className=' w-full text-primaryText -mt-6 text-sm font-bold'>Bus Document:</label>
                    <button className="flex justify-start items-center w-[115px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                        rounded-bl-[4px] text-redText h-[35px] bg-[#2F3142] font-semibold ">Upload
                     </button>
                     </div>
                     <div className="flex justify-end">
                 <button className="flex justify-start items-center w-[115px] rounded-3xl
                     text-redText h-[35px] bg-[#2F3142] font-semibold ">Next
                     </button>
                </div>
                </div> */}
               
            </div>
          
            </div>
     
           

        
       




        
    </div>
    </div>
    </div>


        
    );
}
export default Newbuscreate;  