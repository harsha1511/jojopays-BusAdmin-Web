import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import constants from "../../API/constants";

import logo from "../../assets/images/logo.svg";
import heroImage from "../../assets/images/signup-hero-image.png";
import Button from "../../components/Button";
import CustomForm from "../../components/Form";
import Input from "../../components/Input";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../../store/reducers/auth.reducer";

import {BiUpload} from 'react-icons/bi'
import { CreateUser } from "./components/CreateUser";
import axios from "../../API/axios";
import { ErrorMessage } from "formik";

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required("Owner name is required")
    .label("Company Name"),
  ownerAddress: yup
    .string()
    .required("Owner Address is required")
    .label("Owner Address"),
  ownerPhone: yup 
    .string()
    .required("Owner Phone Number is required")
    .label("Owner Phone"),
  ownerMail: yup
    .string().email("Enter a Valid email Id")
    .required("Owner Mail Id is required")
    .label("Owner Mail"),
  companyName: yup  
    .string()
    .required("Company Name is required")
    .label("Company Name"),
  companyAddress: yup
    .string()
    .required("Company Address is required")
    .label("Company Address"),
  companyPhone: yup 
    .string()
    .required("Company Phone Number is required")
    .label("Company Phone"),
  companyMail: yup
    .string().email("Enter a Valid email Id")
    .required("Company Mail Id is required")
    .label("Company Mail"),
  companyBio: yup
    .string()
    .required("Company Bio is required")
    .label("Company Bio"),
  companyDocument: yup
    .string()
    .required("Company Documeent is required")
    .label("Company Document"),
  ownerIdProof: yup
    .string()
    .required("Owner Id Proof is required")
    .label("Owner Id Proof")
});


interface SignUpProps {
  ownerName: string;
  ownerAddress:string;
  ownerPhone: string;
  ownerMail: string;
  companyName: string;
  companyAddress: string;
  companyPhone:string;
  companyMail:string;
  companyBio:string;
  companyDocument?:any;
  ownerIdProof?:any;
}


const initialState: SignUpProps = ({
  ownerName: "",
  ownerAddress:"",
  ownerMail: "",
  ownerPhone: "",
  companyName: "",
  companyAddress: "",
  companyMail:"",
  companyPhone:"",
  companyBio:"",
  companyDocument: "",
  ownerIdProof: "",
});



const SignUp = () => {

  const dispatch = useDispatch();


  
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState<any>()
  const [storeValue, setStoreValue] = useState<any>()
  const [error, setError] = useState<string>("error")
  

  // useEffect(() => {
  //   const checkUpload = async (values: SignUpProps) => {
  //     setStoreValue(values)
  //     }
  //     // checkUpload();
  //     }, [])
      
  const handleSubmit = async (values: SignUpProps) => {
      setIsLoading(true);
      console.log(values);
      try{
        // const Response = await axios.post(constants.auth.register, values)
        const respose = await axios.post(constants.auth.register, values)
        .then( resp => {
          if(resp?.status === 200 && resp?.data?.error){
            setError(resp?.data?.error)
            console.log(error, "not worked")
          }
          else {
            setLogin(true);
            setUserId(resp); 
            setError("error");
            console.log("worked");    
          }
        });
        setIsLoading(false);
    }catch(err){
      // console.log(err,"hiii");
      setIsLoading(false)
    }

  };
console.log("USERIID", userId?.data);

const SignupData = [
  {name: "ownerName", placeholder:"Owner Name"},
  {name: "ownerAddress", placeholder:"Owner Address"},
  {name: "ownerMail", placeholder:"Owner Mail Id"},
  {name: "ownerPhone", placeholder:"Owner Phone"},
  {name: "companyName", placeholder:"Company Name"},
  {name: "companyAddress", placeholder:"Company Address"},
  {name: "companyMail", placeholder:"Company Mail Id"},
  {name: "companyPhone", placeholder:"Company Phone"},
  {name: "companyBio", placeholder:"Company Bio"},
]

 const renderError = (msg:string) => 
      <div className='text-sm my-2 w-full'>
        <p className='text-pinkText'>{msg}</p>
      </div>

  
  return (

    <div className="bg-white w-screen h-screen bg-signup-cover bg-cover bg-no-repeat flex items-center justify-center">
      <div className="flex justify-center w-[90%] h-[500px] shadow rounded-xl overflow-hidden  bg-opacity-50 backdrop-blur">
        <div className="w-full col-span-1 flex items-center justify-center flex-col p-5">
          <h5 className="text-black capitalize mb-5">
            Welcome To JoJoPay Family
          </h5>
          {!login ?
          <div className="w-[980px] h-[85%] bg-white px-4 py-8 rounded-lg rounded-tr-3xl shadow-md  overflow-y-auto">
          <CustomForm
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-1 ml-14">
                {SignupData.map((data) => (
                  <div>
                    <Input
                    type="text"
                    name={data.name}
                    placeholder={data.placeholder}
                    className="border-none text-black outline-none shadow-md w-96"
                    inputContainerClassName="mb-3"
                    />
                    <ErrorMessage name={data.name} render={renderError}/>
                </div>
                  ))}
              <div className="flex items-center">
                <label className="cursor-pointer">
                  <Input 
                  className="hidden ml-20" 
                  type="file"
                  accept="image/*"
                  name="companyDocument"
                  /> 
                  <p className={`flex flex-col items-center bg-pinkText shadow-md text-white py-2 px-4 rounded-2xl w-44`}>company document<span><BiUpload /></span></p>
                    <ErrorMessage name="companyDocument" render={renderError}/>

                </label>
                <label className="cursor-pointer">
                  <Input 
                  className="hidden" 
                  type="file"
                  accept="image/*"
                  value= "ownerIdProof"
                  name="ownerIdProof" /> 
                  <p className='flex flex-col items-center bg-tertiary shadow-md text-white py-2 px-4 ml-6 rounded-2xl w-48'>{storeValue?.ownerIdProof === null ? "upload here" : "uploaded"} <span><BiUpload /></span></p> 
                    <ErrorMessage name="ownerIdProof" render={renderError}/>
                </label>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Button
                type="submit"
                title="Next"
                isLoading={isLoading}
                className="bg-secondaryText text-white p-2 px-9 w-36 m-auto mt-6 transform transition-all hover:scale-95"
              />
            </div>
          </CustomForm>
          {error === "error" ?  
          null
          : 
          <p className="text-redText w-full text-center mt-2">{`${error} already exist`}</p>
        }
            </div>
          :
          <div className="w-[500px] h-[500px] bg-white rounded-lg shadow-md">
            <CreateUser jojoUserId={userId} />
          </div>  
          }
        </div>
      </div>
    </div>
  );
};

export default SignUp;
