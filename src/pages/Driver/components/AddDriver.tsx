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


// import "./AddDriver.css"

const validateDriver = yup.object().shape({
    DriverName: yup
        .string()
        .label("DriverName"),
    DriverId: yup
        .string()
        .label("DriverId"),
    DriverNumber: yup 
        .string()
        .label("DriverNumber"),
    DriverMain: yup  
        .string()
        .label("DriverMain"),
    DriverLicence: yup
        .string()
        .label("DriverLicence"),
    DriverResume: yup  
        .string()
        .label("DriverResume"),
    DriverPhoto: yup  
        .string()
        .label("DriverPhoto "),
    DriverAddid: yup  
        .string()
        .label("DriverAddid"),
    DriverAddress:yup
        .string()
        .label("DriverAddress") ,
    DriverDob: yup
        .string()
        .label("LoginDob"),
    DriverMail: yup
        .string()
        .label("DriverMail"),    
  
                         
    })
    
    interface driverDetailsProps{
        DriverName: string;
        DriverId: string;
        DriverMail: string;
        DriverMain: string;
        DriverNumber: string;
        DriverDob: string;
        DriverAddress: string;
        DriverLicense: string;
        DriverResume: string;
        DriverAddid: string;
        DriverPhoto: string;
  
    }

function AddDriver() {

    const initialState: driverDetailsProps = {
        DriverName: "",
        DriverId: "",
        DriverMail: "",
        DriverMain: "",
        DriverNumber: "",
        DriverDob: "",
        DriverAddress: "",
        DriverLicense: "",
        DriverResume: "",
        DriverAddid: "",
        DriverPhoto: "",
    }
    const handleSubmit = (values: driverDetailsProps) => {
      console.log(values);
      
    }
    
    
  return (

    <div className="flex flex-col justify-start items-center w-[96vw] h-screen">
       <div className='z-10 flex justify-center items-center w-[35%] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
       <p className='text-xl font-bold tracking-wider text-primaryText'>Add New Driver</p>
      </div>
      <div className='flex justify-center items-center w-[96vw] h-screen'>
          <div className='flex flex-col items-start w-[1300px] -mt-16 h-[600px] rounded-3xl ml-4  bg-add-driver-cover bg-cover bg-center bg-no-repeat'>
              <div className="flex justify-end items-center mt-4 pr-8 w-[100%] h-20">
                  <BackButton />
              </div>
            <div className='w-[1288px] ml-[80px] h-full'>
            <CustomForm
            initialValues={initialState}
            validationSchema={validateDriver}
            onSubmit={handleSubmit}>

              <div className="w-full h-[246px]  ">
                  <div className='flex items-center -mt-2'>
                      <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Name:</label>
                      <Input 
                      type="text"
                      name="DriverName"
                      placeholder='Driver Name' 
                      className="ml-3 w-[100%] rounded-sm p-[8px]  leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                   <div className='flex items-center '>
                      <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Login ID:</label>
                      <Input 
                      type="text"
                      name="DriverId"
                      placeholder='Driver Id' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px]  leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                  <div className='flex items-center mt-2'>
                      <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Email ID:</label>
                      <Input 
                      type="text"
                      name="DriverMail" 
                      placeholder='Driver Mail'
                      className="ml-3 w-[100%] rounded-sm p-[7px]  leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                  <div className='flex items-center mt-2'>
                      <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Main Ph, No:</label>
                      <Input 
                      type="text"
                      name="DriverMainNo"
                      placeholder=' Driver Main Number'
                      className="ml-2 w-[100%] rounded-sm p-[7px]  leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none"/> {" "}
                  </div>
                  <div className='flex items-center mt-2'>
                      <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Ph, No.2:</label>
                      <Input 
                      type="text"
                      name="DriverNumber"
                      placeholder='Driver number' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px]  leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                  <div className='flex items-center mt-2'>
                      <label className='flex justify-end w-40 text-primaryText text-sm font-bold'>Address:</label>
                      <Input 
                      type="text"
                      name="DriverAddress"
                      placeholder='Driver address' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px]  leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
              <div className="w-[100%] flex flex-col  h-[300px]  ">
                <div className='w-full flex flex-row h-full'>
               <div className='w-[35%] h-[60%] '>
                <div className='flex flex-row mt-6 items-center'>
              <label className='flex justify-end w-40 text-primaryText -mt-6 text-sm font-bold'>DOB:</label>
              <Input 
             type="date" 
             name="DriverDob"
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
                  name="DriverPhoto"
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
                  name="DriverLicense"
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
                  name="DriverResume"
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
                  name="DriverAddId"
                  placeholder='Driver Addid' 
                  className="hidden"  /> 
                  <p className=' text-redText drop-shadow-lg' >Upload</p>
                  </label>
               </div>
              </div></div>
            </div>
            <div className='flex justify-end w-[85%]  -mt-[70px] items-center h-[20%] '>
            <Link to='/assign-task'>
              <button
              type='submit' 
              className=' w-[70%] mr-[140px] items-center drop-shadow-3xl text-quaternaryText flex justify-center h-[70%] bg-[#2F3142] font-semibold text-[30px] rounded-3xl'>Next</button>
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

export default AddDriver;