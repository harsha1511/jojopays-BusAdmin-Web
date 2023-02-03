import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import BackButton from '../../../components/BackButton';
import {FaBus} from 'react-icons/fa'
import CustomForm from '../../../components/Form';
import Input from '../../../components/Input';
import * as yup from "yup";

import { FaIdCard } from 'react-icons/fa'

import { useDispatch, useSelector } from 'react-redux';
import { ADD_BUS } from '../../../store/reducers/assignTrip';
import { ErrorMessage } from 'formik';
import Button from '../../../components/Button';
import { RootState } from '../../../store';
import { PROFILE_DETAILS } from '../../../store/reducers/addDeskStaff';

const validateStaff = yup.object().shape({
  staffName: yup
      .string()
      .required("fill every field to continue")
      .label("staffName"),
  staffId: yup
      .string()
      .required("fill every field to continue")
      .label("staffId"),
  staffNumber: yup 
      .string()
      .required("fill every field to continue")
      .label("staffNumber"),
  staffMain: yup  
      .string()
      .required("fill every field to continue")
      .label("staffMain"),
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
  staffAddress:yup
      .string()
      .required("fill every field to continue")
      .label("staffAddress") ,
  staffDob: yup
      .string()
      .required("fill every field to continue")
      .label("staffDob"),
  staffMail: yup
      .string()
      .required("fill every field to continue")
      .label("staffMail"),    
  })
  
  interface staffDetailsProps{
      staffName: string;
      staffId: string;
      staffMail: string;
      staffMain: string;
      staffNumber: string;
      staffDob: string;
      staffAddress: string;
      // staffLicense: any;
      // staffResume: any;
      // staffAddid: any;
      // staffPhoto: any;
  }


  


export const AddNewStaff=()=> {

  const auth = useSelector((state: RootState) => state.deskStaff);
  console.log(auth, "autheddd");
  




  const initialState: staffDetailsProps = {
    staffName: "",
    staffId: "",
    staffMail: "",
    staffMain: "",
    staffNumber: "",
    staffDob: "",
    staffAddress: "",
    // staffLicense: "",
    // staffResume: "",
    // staffAddid: "",
    // staffPhoto: "",
}

const staffInput = [
  {name: "staffName", title: "Name", placeholder: "Name"},
  {name: "staffId", title: "Login Id", placeholder: "Login Id"},
  {name: "staffMail", title: "Email Id", placeholder: "Email id"},
  {name: "staffMain", title: "Main Ph, No", placeholder: "Phone No"},
  {name: "staffNumber", title: "Ph, No.2", placeholder: "Phone No"},
  {name: "staffDob", title: "Address", placeholder: "Address"},
  {name: "staffAddress", title: "DOB", placeholder: "DOB"},
]
const staffFormInput = [
  {name: "staffLicense", title: "Add License"},
  {name: "staffResume", title: "Add Resume"},
  {name: "staffAddid", title: "Add Id"},
  {name: "staffPhoto", title: "Add Photo"},
]

const navigate = useNavigate()
const dispatch = useDispatch()


const handleSubmit = (values: staffDetailsProps) => {
  console.log(values, "SEE WHATS COMING");
  dispatch(PROFILE_DETAILS(values))
  if(values){
    navigate("/assign-task")
  } 
}
 const renderError = (msg:string) => 
      <div className='text-sm my-2 w-full'>
        <p className='text-pinkText'>{msg}</p>
      </div>


  return ( 
    <>
    <div className='flex flex-col items-center w-[96vw] h-screen'>
        <div className='z-10 flex justify-center items-center w-[35rem] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
          <p className='font-bold tracking-wider text-2xl text-primaryText'>Add New login</p>
        </div>
        <div className='flex flex-col items-center pt-14 w-[80%] -mt-10 h-[90%] rounded-3xl ml-4  bg-add-driver-cover bg-cover bg-center bg-no-repeat'>
          <div className='w-[90%] flex justify-end'>
            <BackButton />
          </div>
          <div className='w-[90%] ml-20'>
          <CustomForm
            initialValues={initialState}
            validationSchema={validateStaff}
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
                   type="file"
                   name={data.name}
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



