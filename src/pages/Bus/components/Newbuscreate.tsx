import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import BackButton from '../../../components/BackButton';
import {FaBus} from 'react-icons/fa'
import CustomForm from "../../../components/Form";
import Input from "../../../components/Input";
import * as yup from "yup";
import Button from "../../../components/Button";

const validatebus = yup.object().shape({
busName: yup
    .string()
    .label("busName"),
busId: yup
    .string()
    .label("busId"),
busNo: yup 
    .string()
    .label(" busNo"),
busRegno: yup  
    .string()
    .label("busRegno"),
busLicence: yup
    .string()
    .label("busLicence"),
busDescription: yup  
    .string()
    .label("busDescription"),
busAddPhoto: yup  
    .string()
    .label("busAddPhoto "),
busDocument: yup  
    .string()
    .label("busDocument "),
                     
}) 

interface BusDetailsProps {
    busName: string;
    busId: string;
    busNo: string;
    busRegno: string;
    busLicence: string;
    busDescription: string;
    busAddPhoto: string;
    busDocument: string;
   
}

export const Newbuscreate = () => {

    const initialState: BusDetailsProps = {
        busName: "",
        busId: "",
        busNo: "",
        busRegno: "",
        busLicence: "",
        busDescription:"",
        busAddPhoto:"",
        busDocument:"",
      
}
    
const handleSubmit = (values: BusDetailsProps) => {
    console.log(values);
    
}

const [color, setcolor] = useState(true)
console.log(color,"bluee");




    return(
    <div className="flex flex-col justify-start items-center w-[96vw]  h-screen">
   <div className='z-10 flex justify-center items-center w-[35%] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
   <p className='text-xl font-bold tracking-wider text-primaryText'>Add New Bus</p>
    </div>
        <div className='flex flex-col items-start w-[1200px] -mt-10 h-[620px] rounded-3xl ml-4  bg-add-driver-cover bg-cover bg-center bg-no-repeat'>
            <div className="flex justify-end items-center mt-4 pr-8 w-[100%] h-20">
                <BackButton />
            </div>
            <div className="w-[1190px] h-[620px] ">
            <CustomForm
            initialValues={initialState}
            validationSchema={validatebus}
            onSubmit={handleSubmit}>

                <div className="w-full  h-[200px]  -mt-10 ">
                <div className='flex items-center'>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Bus Name:</label>
                    <Input 
                    type="text"
                    name="busName"
                    placeholder='bus name'
                    className="ml-3 w-[100%] rounded-none p-[5px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none"/> {" "}
                </div>
                <div className='flex items-center mt-2'>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Bus No:</label>
                    <Input 
                    type="text"
                    name="busNo"
                    placeholder='bus number' 
                    className="ml-3 w-[100%] rounded-none  p-[5px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                </div>
                <div className='flex items-center mt-2'>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Reg No:</label>
                    <Input 
                    type="text"
                    name="BusRegno"
                    placeholder='bus reg number' 
                    className="ml-3 w-[100%] rounded-none p-[5px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                </div>
                <div className='flex items-center mt-2'>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Licence No:</label>
                    <Input 
                    type="text"
                    name=" busLicence" 
                    placeholder='bus licence number'
                    className="ml-3 w-[100%] rounded-none p-[5px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                </div>
                <div className='flex  items-center mt-2 '>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Description:</label>
                    <Input 
                    type="text"
                    name="busDescription"
                    placeholder='bus Description' 
                    className="ml-3 w-[100%]  p-[5px] rounded-none leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                </div>
            </div>
            <div className="w-[98%] mt-[20px] h-[350px] ml-4">
            <div className='flex flex-row items-center'>
            <label className='flex justify-end w-40 text-primaryText  text-sm font-bold'>Add Photo:</label>
            <div className="flex ml-6 w-[55px] h-[55px] shadow-2xl bg-[#2F3142] mt-6 rounded-[50%] justify-center text-[#1E1E2C] text-[30px] items-center"><FaBus/></div>
            <div className="h-[1px] w-[45px] bg-redText"></div>
            <div className="flex items-center justify-center w-[110px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[35px] font-semibold  bg-[#2F3142]">
                <label>
                <Input 
                type="file"
                name="busAddPhoto"
                placeholder='bus addphoto'
                className="hidden"  /> 
                <p className=' text-redText drop-shadow-lg' >Upload</p>
                </label>
             </div>
            </div>
            <div className='flex flex-row items-center mt-8'>
            <label className='flex justify-end w-40 text-primaryText -mt-6 text-sm font-bold'>Commonly Used for:</label>
            <button
            type="submit"
           
            className={`flex items-center justify-center w-[120px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[33px] bg-[#2F3142] shadow-2xl font-semibold ml-[40px] ${color ? "text-[#0095E2]": "text-redText" }`} onClick={() => setcolor(!color)}>Casual Trip </button>
                <div className="h-[1px] w-[45px] bg-redText"></div>
            <button
              type="submit"  
            className={`flex items-center justify-center w-[160px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[33px] bg-[#2F3142] shadow-2xl font-semibold  ${color ? "text-[#0095E2]": "text-redText" }`}onClick={() => setcolor(!color)}>Pre-planned Trip</button>
            </div>
            <div className='flex flex-row items-center mt-8'>
            <label className='flex justify-end w-40 text-primaryText -mt-6 text-sm font-bold'>Bus Type:</label>
            <button
             type="submit" 
            className={`flex items-center justify-center w-[56px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[33px] bg-[#2F3142] shadow-2xl font-semibold ml-[40px] ${color ? "text-[#0095E2]": "text-redText"}`}onClick={() => setcolor(!color)}>A/C </button>
                <div className="h-[1px] w-[45px] bg-redText"></div>
            <button
            type="submit"  
            className="flex items-center justify-center w-[90px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[33px] bg-[#2F3142] shadow-2xl  font-semibold">Non A/C</button>
            </div>
            <div className='flex flex-row items-center mt-8'>
                <label className='flex justify-end w-40 text-primaryText -mt-6 text-sm font-bold'>Seat Type:</label>
                    <button
                    type="submit"  
                    className="flex items-center justify-center w-[80px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                        rounded-bl-[4px] text-redText h-[33px] bg-[#2F3142] font-semibold ml-[40px]">Normal </button>
                       <div className="h-[1px] w-[45px] bg-redText"></div>
                    <button
                    type="submit"  
                    className="flex items-center justify-center w-[115px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                        rounded-bl-[4px] text-redText h-[33px] bg-[#2F3142] font-semibold">Semi Sleeper</button>
                        <div className="h-[1px] w-[45px] bg-redText"></div>
                    <button
                    type="submit"  
                    className="flex items-center justify-center w-[75px] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[4px]
                        rounded-bl-[4px] text-redText h-[33px] bg-[#2F3142] font-semibold">Sleeper</button>
            </div>
            <div className='flex flex-row w-full mt-[30px] h-[10%] items-center '>
                <div className="w-[90%] h-[100%]">
                <label className=' w-full text-primaryText  ml-[60px] text-sm font-bold'>Bus Document:</label>
                <div className="flex shadow-2xl items-center justify-center -mt-[20px] w-[110px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[35px] font-semibold bg-[#2F3142] ml-[22%]">
                <label>
                <Input
                type="file"
                name="busDocument"
                placeholder='bus document' 
                className="hidden" /> 
                <p className=' text-redText drop-shadow-lg' >Upload</p>
                </label>
             </div>
               
                
                </div>
                <div className="w-[20%] -mt-2 h-[100%]">
                <Button 
                type="submit"
                title="Next"
                className="flex shadow-2xl justify-center items-center -ml-16 w-[140px] rounded-3xl
                     text-[#50FF84] h-[50px] bg-[#2F3142] text-[30px] font-semibold " />
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
     
           

        
       




    </CustomForm>
    </div>
 
    </div>
    </div>


        
    );
}
export default Newbuscreate; 