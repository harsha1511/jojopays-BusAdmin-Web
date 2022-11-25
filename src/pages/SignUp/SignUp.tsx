import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

import logo from "../../assets/images/logo.svg";
import heroImage from "../../assets/images/signup-hero-image.png";
import Button from "../../components/Button";
import CustomForm from "../../components/Form";
import Input from "../../components/Input";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../../store/reducers/auth.reducer";

import {BiUpload} from 'react-icons/bi'
import { CreateUser } from "./components/CreateUser";

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
    .string()
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
    .string()
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

// const validateUser = yup.object().shape({
//   password: yup
//     .string()
//     .required("Enter Password").label("password"),
//   confirmPassword: yup
//     .string()
//     .required("Please type password once again")

// })

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

// interface NewUserProps {
//   jojoId: string;
//   password: string;
//   confirmPassword: string;
// }

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
  const [userId, setUserId] = useState<string>("nam")
  
  // const newUser: NewUserProps = ({
  //   jojoId: userId,
  //   password:"",
  //   confirmPassword:"",
  // })
  
  const handleSubmit = async (values: SignUpProps) => {
    setIsLoading(true);
    console.log(values);
    // const Response = await axios.post("http://192.168.1.17:80/register", values)
    // .then( resp => {
    //   console.log(resp);
    //   setUserId(resp.data); 
    //   if(resp.status === 200){
        setLogin(true)
        // setUserId("hello")  
    //   }
    // });
    setIsLoading(false);
  };
  
  
  // const CreateUser = async (data: NewUserProps) => {
  //   console.log(data.password, "password");
  //    if(value.password === value.confirmPassword){
  //      const Response = await axios.post("http://192.168.1.17:80/registerCreds", value)
  //    }


    
  // }

  return (

    <div className="bg-white w-screen h-screen bg-signup-cover bg-cover bg-no-repeat flex items-center justify-center">
      <div className="flex justify-center w-[90%] h-[500px] shadow rounded-xl overflow-hidden  bg-opacity-50 backdrop-blur">
        <div className="w-full col-span-1 flex items-center justify-center flex-col p-5">
          <h5 className="text-black capitalize mb-5">
            Welcome To JoJoPay Family
          </h5>
          {!login ?
          <div className="w-[980px] h-[85%] bg-white px-4 py-8 rounded-lg rounded-tr-3xl shadow-md">
          <CustomForm
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-1 ml-14">
              <Input
                type="text"
                name="ownerName"
                placeholder="Owner Name"
                className="border-none text-black outline-none shadow-md w-96"
                inputContainerClassName="mb-3"
              />
              <Input
                type="text"
                name="ownerAddress"
                placeholder="Owner Address"
                className="border-none text-black outline-none shadow-md w-96"
                inputContainerClassName="mb-3"
              />
              <Input
                type="email"
                name="ownerMail"
                placeholder="Owner Mail Id"
                className="border-none text-black outline-none shadow-md w-96"
                inputContainerClassName="mb-3"
              />
              <Input
                type="string"
                name="ownerPhone"
                placeholder="Owner Phone Number"
                className="border-none text-black outline-none shadow-md w-96"
                inputContainerClassName="mb-3"
              />
              <Input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="border-none text-black outline-none shadow-md w-96"
                inputContainerClassName="mb-3"
              />
              <Input
                type="text"
                name="companyAddress"
                placeholder="Company Address"
                className="border-none text-black outline-none shadow-md w-96"
                inputContainerClassName="mb-3"
              />
              <Input
                type="email"
                name="companyMail"
                placeholder="Company Mail Id"
                className="border-none text-black outline-none shadow-md w-96"
                inputContainerClassName="mb-3"
              />
              <Input
                type="text"
                name="companyPhone"
                placeholder="Company Phone Number"
                className="border-none text-black outline-none shadow-md w-96"
                inputContainerClassName="mb-3"
              />
              <Input
                type="text"
                name="companyBio"
                placeholder="Company Bio"
                className="border-none text-black outline-none shadow-md w-96"
              />
              <div className="flex items-center">
                <label className="cursor-pointer">
                  <Input 
                  className="hidden ml-20" 
                  type="file"
                  accept="image/*"
                  name="companyDocument" /> 
                  <p className='flex flex-col items-center bg-tertiary shadow-md text-white py-2 px-4 rounded-2xl w-44'>company document<span><BiUpload /></span></p> 
                </label>
                <label className="cursor-pointer">
                  <Input 
                  className="hidden" 
                  type="file"
                  accept="image/*"
                  name="ownerIdProof" /> 
                  <p className='flex flex-col items-center bg-tertiary shadow-md text-white py-2 px-4 ml-6 rounded-2xl w-48'>Owner ID <span><BiUpload /></span></p> 
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
            </div>
          :
          <div className="w-[500px] h-[500px] bg-white rounded-lg shadow-md">
            <CreateUser jojoId={userId} />
          </div>  
          }
        </div>
      </div>
    </div>
  );
};

export default SignUp;
