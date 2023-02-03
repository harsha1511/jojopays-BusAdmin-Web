import React, { ChangeEvent, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import BackButton from '../../../components/BackButton';
import CustomForm from '../../../components/Form';
import Input from '../../../components/Input';
import * as yup from "yup";

import { FaIdCard } from 'react-icons/fa'

import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage } from 'formik';
import Button from '../../../components/Button';
import { RootState } from '../../../store';
import constants from '../../../API/constants';
import axios from '../../../API/axios';

const validateDriver = yup.object().shape({
  driverName: yup
      .string()
      .required("fill every field to continue")
      .label("driverName"),
  driverMail: yup
      .string()
      .required("fill every field to continue")
      .label("driverMail"),
  driverAddress: yup 
      .string()
      .required("fill every field to continue")
      .label("driverAddress"),
  driverPhone: yup  
      .string()
      .required("fill every field to continue")
      .label("driverPhone"),
  // staffLicense: yup
  //     .string()
  //     .required("fill every field to continue")
  //     .label("staffLicense"),
  // staffResume: yup  
  //     .string()
  //     .required("fill every field to continue")
  //     .label("staffResume"),
  // staffPhoto: yup  
  //     .string()
  //     .required("fill every field to continue")
  //     .label("staffPhoto "),
  // staffAddid: yup  
  //     .string()
  //     .required("fill every field to continue")
  //     .label("staffAddid"),
  driverBloodGroup:yup
      .string()
      .required("fill every field to continue")
      .label("driverBloodGroup") ,
  driverDob: yup
      .string()
      .required("fill every field to continue")
      .label("driverDob"),
  driverMainPhone: yup
      .string()
      .required("fill every field to continue")
      .label("driverMainPhone"),    
  })
  
  interface driverProps{
      driverName: string;
      driverMail: string;
      driverMainPhone: string;
      driverPhone: string;
      driverAddress: string;
      driverDob: string;
      driverBloodGroup: string;
      // staffLicense: any;
      // staffResume: any;
      // staffAddid: any;
      // staffPhoto: any;
  }


  


export const AddNewStaff=()=> {

  const auth = useSelector((state: RootState) => state.deskStaff);
  console.log(auth, "autheddd");
  




  const initialState: driverProps = {
    driverName: "",
    driverMail: "",
    driverMainPhone: "",
    driverPhone: "",
    driverAddress: "",
    driverDob: "",
    driverBloodGroup: "",
    // staffLicense: "",
    // staffResume: "",
    // staffAddid: "",
    // staffPhoto: "",
}

const staffInput = [
  {name: "driverName", title: "Name", placeholder: "Name"},
  {name: "driverMail", title: "Mail ID", placeholder: "Mail Id"},
  {name: "driverMainPhone", title: "Main Ph, No", placeholder: "Phone No"},
  {name: "driverPhone", title: "Ph, No.2", placeholder: "Phone No"},
  {name: "driverAddress", title: "Address", placeholder: "Address"},
  {name: "driverBloodGroup", title: "Blood Group", placeholder: "Blood Group"},
  {name: "driverDob", title: "DOB", placeholder: "DOB"},
]


const navigate = useNavigate()
const dispatch = useDispatch()


const handleSubmit = async (values: driverProps) => {
  console.log(values, "SEE WHATS COMING");
  try{
    const driverData = {...values, "staffLicense": file1?.name, "staffResume": file2?.name, "staffAddid": file3?.name, "staffPhoto": file4?.name}
    console.log("driverrr", driverData);
    const response = await axios.post(constants.company.createDriver, values)
    .then(resp => console.log(resp, "responded"))
  } catch (err) {
    console.log(err, "error");
  }
    // navigate("/-task")
}
 const renderError = (msg:string) => 
      <div className='text-sm my-2 w-full'>
        <p className='text-pinkText'>{msg}</p>
      </div>

  const [file1, setFile] = useState<File>();
  const [file2, setFile2] = useState<File>();
  const [file3, setFile3] = useState<File>();
  const [file4, setFile4] = useState<File>();

  const inputRef = useRef<HTMLInputElement | null>(null);
  console.log(file3, "filesss");
  

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
  };
  const handleFileChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile2(e.target.files[0]);
  };
  const handleFileChange3 = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile3(e.target.files[0]);
  };
  const handleFileChange4 = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile4(e.target.files[0]);
  };

  const staffFormInput = [
  {name: "staffLicense", title: "Add License", function: handleFileChange},
  {name: "staffResume", title: "Add Resume", function: handleFileChange2},
  {name: "staffAddid", title: "Add Id", function: handleFileChange3},
  {name: "staffPhoto", title: "Add Photo", function: handleFileChange4},
]

  return ( 
    <>
    <div className='flex flex-col items-center w-[96vw] h-screen'>
        <div className='z-10 flex justify-center items-center w-[35rem] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
          <p className='font-bold tracking-wider text-2xl text-primaryText'>Add New Driver</p>
        </div>
        <div className='flex flex-col items-center pt-14 w-[80%] -mt-10 h-[90%] rounded-3xl ml-4  bg-add-driver-cover bg-cover bg-center bg-no-repeat'>
          <div className='w-[90%] flex justify-end'>
            <BackButton />
          </div>
          <div className='w-[90%] ml-20'>
          <CustomForm
            initialValues={initialState}
            validationSchema={validateDriver}
            onSubmit={handleSubmit}>
              {staffInput.map((data:any) => (
              <div className='flex items-center mb-3'>
              <p className="w-24 text-primaryText text-sm font-bold">{data?.title}</p>
              <Input 
                type="text"
                name={data.name} 
                placeholder={data.placeholder}
                className="ml-3 w-[30rem] rounded-sm p-[7px]  leading-tight  bg-transparent  focus:outline-none 
                focus:line focus:border-border-blue-500  text-white border-none" />
              <ErrorMessage name={data.name} render={renderError} />    
              </div>
              ))}
              <div className='w-[60rem] flex flex-wrap gap-4'>
              {staffFormInput.map((data:any)=> (
              <div className='flex justify-start items-center'>
              <label className='flex w-24 text-primaryText -mt-6 text-sm font-bold'>{data.title}</label>
               <div className="flex ml-6 w-[55px] h-[55px] shadow-2xl bg-[#2F3142] rounded-[50%] justify-center text-[#1E1E2C] text-[30px] items-center"><FaIdCard/></div>
               <div className="h-[1px] w-[45px] bg-redText"></div>
               <div className="flex items-center justify-center w-[110px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px]
                   rounded-bl-[4px] text-redText h-[35px] font-semibold  bg-[#2F3142]">
                   <label>
                   <input
                  //  name={data?.name}
                   type="file"
                   onChange={data?.function}
                   ref={inputRef}
                   className="hidden" /> 
                   <p className=' text-redText drop-shadow-lg cursor-pointer' >Upload</p>
                </label>
                </div>
                </div>
              ))}
              </div>
              <div className='w-[90%] flex justify-end'>
              <Button
              type='submit'
              title='Next'
              className='bg-primaryText px-8 py-[7px]'
              />
              </div>
          </CustomForm>
          </div>

        </div>
    </div>
    </>             
    );
}

export default AddNewStaff;



function useCustomFetchHook(file: any) {
  throw new Error('Function not implemented.');
}

