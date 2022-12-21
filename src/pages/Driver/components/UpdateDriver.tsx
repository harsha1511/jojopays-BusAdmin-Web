import React from "react";
import { Link } from "react-router-dom";
import BackButton from '../../../components/BackButton'


import {FaUser} from 'react-icons/fa'

import { FaIdCard } from 'react-icons/fa'

import { BsFillFileEarmarkPdfFill }from 'react-icons/bs'
import { FaIdBadge } from 'react-icons/fa'

import CustomForm from '../../../components/Form';
import Input from '../../../components/Input';
import * as yup from "yup";



const validateUpdateDriver = yup.object().shape({
    UpdateDriverName: yup
        .string()
        .label("UpdateDriverName"),
    UpdateDriverId: yup
        .string()
        .label("UpdateDriverId"),
    UpdateDriverNumber: yup 
        .string()
        .label("UpdateDriverNumber"),
    UpdateDriverMain: yup  
        .string()
        .label("UpdateDriverMain"),
    UpdateDriverLicence: yup
        .string()
        .label("UpdateDriverLicence"),
    UpdateDriverResume: yup  
        .string()
        .label("UpdateDriverResume"),
    UpdateDriverPhoto: yup  
        .string()
        .label("UpdateDriverPhoto "),
    UpdateDriverAddid: yup  
        .string()
        .label("UpdateDriverAddid"),
    UpdateDriverAddress:yup
        .string()
        .label("UpdateDriverAddress") ,
    UpdateDriverDob: yup
        .string()
        .label("UpdateLoginDob"),
    UpdateDriverMail: yup
        .string()
        .label("UpdateDriverMail"),    
  
                         
    })
    
    interface updatedriverDetailsProps{
        UpdateDriverName: string;
        UpdateDriverId: string;
        UpdateDriverMail: string;
        UpdateDriverMain: string;
        UpdateDriverNumber: string;
        UpdateDriverDob: string;
        UpdateDriverAddress: string;
        UpdateDriverLicense: string;
        UpdateDriverResume: string;
        UpdateDriverAddid: string;
        UpdateDriverPhoto: string;
  
    }

// import "./UpdateDriver.css"

function UpdateDriver() {

    const initialState: updatedriverDetailsProps = {
        UpdateDriverName: "",
        UpdateDriverId: "",
        UpdateDriverMail: "",
        UpdateDriverMain: "",
        UpdateDriverNumber: "",
        UpdateDriverDob: "",
        UpdateDriverAddress: "",
        UpdateDriverLicense: "",
        UpdateDriverResume: "",
        UpdateDriverAddid: "",
        UpdateDriverPhoto: "",
    }
    const handleSubmit = (values: updatedriverDetailsProps) => {
      console.log(values);
      
    }




  return (

    <div className="flex flex-col justify-start items-center w-[96vw] h-screen">
    <div className='z-10 flex justify-center items-center w-[35%] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
     <p className='font-bold tracking-wider text-2xl text-primaryText'>Edit Driver Details</p>
    </div>
    <div className='flex justify-center items-center w-[96vw] h-screen'>
        <div className='flex flex-col items-start w-[1300px] -mt-16 h-[600px] rounded-3xl ml-4  bg-add-driver-cover bg-cover bg-center bg-no-repeat'>
            <div className="flex justify-end items-center mt-4 pr-8 w-[100%] h-20">
                <BackButton />
            </div>
          <div className='w-[1288px] ml-[80px] h-full'>
          <CustomForm
          initialValues={initialState}
          validationSchema={validateUpdateDriver}
          onSubmit={handleSubmit}>

            <div className="w-full h-[246px]  ">
                <div className='flex items-center -mt-2'>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Name:</label>
                    <Input 
                    type="text"
                    name="UpdateDriverName"
                    placeholder='Driver Name' 
                    className="ml-3 w-[100%] rounded-sm p-[8px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                </div>
                 <div className='flex items-center '>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Login ID:</label>
                    <Input 
                    type="text"
                    name="UpdateDriverId"
                    placeholder='Driver Id' 
                    className="ml-3 w-[100%] rounded-sm  p-[7px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                </div>
                <div className='flex items-center mt-2'>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Email ID:</label>
                    <Input 
                    type="text"
                    name="UpdateDriverMail" 
                    placeholder='Driver Mail'
                    className="ml-3 w-[100%] rounded-sm p-[7px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                </div>
                <div className='flex items-center mt-2'>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Main Ph, No:</label>
                    <Input 
                    type="text"
                    name="UpdateDriverMainNo"
                    placeholder=' Driver Main Number'
                    className="ml-2 w-[100%] rounded-sm p-[7px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none"/> {" "}
                </div>
                <div className='flex items-center mt-2'>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Ph, No.2:</label>
                    <Input 
                    type="text"
                    name="UpdateDriverNumber"
                    placeholder='Driver number' 
                    className="ml-3 w-[100%] rounded-sm  p-[7px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                </div>
                <div className='flex items-center mt-2'>
                    <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Address:</label>
                    <Input 
                    type="text"
                    name="UpdateDriverAddress"
                    placeholder='Driver address' 
                    className="ml-3 w-[100%] rounded-sm  p-[7px]  leading-tight  bg-transparent  focus:outline-none 
                    focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                </div>
              </div>
            <div className="w-full flex flex-col  h-[300px] ">
              <div className='w-full flex flex-row h-full'>
             <div className='w-[35%] h-[60%] '>
              <div className='flex flex-row mt-6 items-center'>
            <label className='flex justify-end w-40 text-primaryText -mt-6 text-sm font-bold'>DOB:</label>
            <Input 
           type="date" 
           name="UpdateDriverDob"
           placeholder='Driver DOB'

            className="birthday ml-6 rounded-sm h-[30px] -mt-2 focus:outline-none bg-[#1E1E2C] "  
              />
            </div>
            <div className='flex flex-row   mt-[35px] items-center'>
            <label className='flex justify-end w-40 text-primaryText -mt-6 text-sm font-bold'>Add Photo:</label>
            <div className="flex ml-6 w-[55px] h-[55px] shadow-2xl bg-[#2F3142] rounded-[50%] justify-center text-[#1E1E2C] text-[30px] items-center"><FaUser/></div>
            <div className="h-[1px] w-[45px] bg-redText"></div>
            <div className="flex items-center justify-center w-[110px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[35px] font-semibold  bg-[#2F3142]">
                <label>
                <Input
                type="file"
                name="UpdateDriverPhoto"
                placeholder='Driver addphoto' 
                className="hidden"/> 
                <p className=' text-redText drop-shadow-lg' >Upload</p>
                </label>
             </div>
            </div>
            <div className='flex flex-row mt-[20px] items-center'>
            <label className='flex justify-end w-40 text-primaryText -mt-6 text-sm font-bold'>Add License:</label>
            <div className="flex ml-6 w-[55px] h-[55px] shadow-2xl bg-[#2F3142] rounded-[50%] justify-center text-[#1E1E2C] text-[30px] items-center"><FaIdCard/></div>
            <div className="h-[1px] w-[45px] bg-redText"></div>
            <div className="flex items-center justify-center w-[110px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[35px] font-semibold  bg-[#2F3142]">
                <label>
                <Input
                type="file"
                name="UpdateDriverLicense"
                placeholder='Driver Addlicense'  
                className="hidden" /> 
                <p className=' text-redText drop-shadow-lg' >Upload</p>
                </label>
             </div>
            </div></div>
              <div className='w-[50%] flex-col h-[50%] '>
              <div className='flex flex-row mt-[75px] items-center'>
            <label className='flex justify-end w-30 text-primaryText -mt-6 text-sm font-bold'>Add Resume:</label>
            <div className="flex ml-6 w-[55px] h-[55px] shadow-2xl bg-[#2F3142] rounded-[50%] justify-center text-[#1E1E2C] text-[30px] items-center"><BsFillFileEarmarkPdfFill /></div>
            <div className="h-[1px] w-[45px] bg-redText"></div>
            <div className="flex items-center justify-center w-[110px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[35px] font-semibold  bg-[#2F3142]">
                <label>
                <Input
                type="file"
                name="UpdateDriverResume"
                placeholder='Driver Addresume' 
                className="hidden"/> 
                <p className=' text-redText drop-shadow-lg' >Upload</p>
                </label>
             </div>
            </div>
            <div className='flex flex-row ml-[38px] mt-[30px] items-center'>
            <label className='flex justify-end w-30 text-primaryText -mt-6 text-sm font-bold'>Add ID:</label>
            <div className="flex ml-6 w-[55px] h-[55px] shadow-2xl bg-[#2F3142] rounded-[50%] justify-center text-[#1E1E2C] text-[30px] items-center"><FaIdBadge/></div>
            <div className="h-[1px] w-[45px] bg-redText"></div>
            <div className="flex items-center justify-center w-[110px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px]
                rounded-bl-[4px] text-redText h-[35px] font-semibold  bg-[#2F3142]">
                <label>
                <Input
                type="file"
                name="UpdateDriverAddId"
                placeholder='Driver Addid' 
                className="hidden"  /> 
                <p className=' text-redText drop-shadow-lg' >Upload</p>
                </label>
             </div>
            </div></div>
          </div>
          <div className='flex justify-end w-[85%]   -mt-[80px] items-center h-[20%] '>
          <Link to='/driver-creds-confirm'>
            <button
            type='submit' 
            className='mr-[180px] w-[60%] items-center drop-shadow-3xl text-quaternaryText flex justify-center h-[70%] bg-[#2F3142] font-semibold text-[30px] rounded-3xl'>Next</button>
          </Link>
          </div>
          </div>
          </CustomForm>
        
          </div>
          </div>
        </div>
      </div>
    
               


  );
}






export default UpdateDriver;
