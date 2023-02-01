import React,{useState} from 'react'
import * as yup from "yup";

import CustomForm from "../../../components/Form";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { useDispatch, useSelector } from "react-redux";
import { LOGIN_SUCCESS } from "../../../store/reducers/auth.reducer";
import constants from '../../../API/constants';
import axios from '../../../API/axios';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../store';
import { ErrorMessage } from 'formik';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';



const initialState = {
  password: "",
  confirmPassword: "",
}



const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required("Enter Password")
    .min(8, "Password must be 8 characters long")
    // .matches([0,1,2,3,4,5,6,7,8,9], "").
    .matches(/[a-z]+/, "One lowercase required")
    .matches(/[A-Z]+/, "One Uppercase required")
    .matches(/[@$!%*#?&]+/, "One special character required")
    .matches(/\d+/, "One number required")
    .label("password"),
  confirmPassword: yup
    .string()
    .required("Please type password once again")
    .oneOf([yup.ref("password"), null], "Password must match")
    .label("confirmPassword")

})




export const CreateUser = () => {


  const dispatch = useDispatch();
  const register = useSelector((state: RootState) => state.register);

  




  
   const renderError = (msg:string) => 
      <div className='text-sm my-2 w-full'>
        <p className='text-pinkText'>{msg}</p>
      </div>

  const [isLoading, setIsLoading] = useState(false);
  const [userr, setUserr] = useState<any>(register?.user);
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [viewCPassword, setViewCPassword] = useState<boolean>(false);
  



  const handleSubmit = async (value:any) => {
    const registerUser = Object.assign(value, userr);
    console.log(registerUser, "passwordssakdbjkh");
    try {
      setIsLoading(true);
      const SendLogin = await axios.post(constants.auth.createuser, registerUser)
      .then(resp =>{
        if(resp.status === 200){
          window.location.href = "/sign-in"
          setIsLoading(false)
          console.log("success");
          setIsLoading(false);
            
          }
        })
    } catch(err){
      console.log("error", err);
      
    }

  };


  const onSubmit = async () => {
    try{
        const SendLogin = await axios.post(constants.auth.createuser,)
        .then(resp =>{
          if(resp.status === 200){
            console.log(resp.data.status);
            setIsLoading(false)
            window.location.href = "/sign-in"
          }
        })
        console.log("newUSERRR")
        setIsLoading(false);   
      }
      catch(err){
        console.log(err)      
    }
};

  return (
    <div>
      <div className="flex flex-col items-center mt-8 w-ful">
        <p className="text-greyText text-sm">Jojo pays User Id</p>
      <p className="flex justify-center py-2 text-black outline-none shadow-md w-96 mb-6 rounded-2xl font-semibold">
        {userr?.jojoId}
      </p>
        <p className="text-greyText text-sm">Jojo pays Company Id</p>
        <p className="flex justify-center py-2 text-black outline-none shadow-md w-96 mb-6 rounded-2xl font-semibold">
        {userr?.companyId}
      </p>
      <CustomForm
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validationOnChange={true}
          >
            <div className='flex items-center'>
              <Input
              type={viewPassword ? "text" : "password"}
              name='password'
              placeholder='Password'
              className='border-none text-black outline-none shadow-md w-96'
              inputContainerClassName="mb-3"
              />
              {viewPassword ?
                <AiFillEyeInvisible className='text-black -ml-10 mb-3 scale-125 cursor-pointer' 
                onClick={() => setViewPassword(!viewPassword)} />
                :
                <AiFillEye className='text-black -ml-10 mb-3 scale-125 cursor-pointer' 
                onClick={() => setViewPassword(!viewPassword)} />
              }
            </div>
            <ErrorMessage name="password" render={renderError}/> 
            <div className='flex items-center'>
              <Input
              type={viewCPassword ? "text" : "password"}
              name='confirmPassword'
              placeholder='Confirm Password'
              className='border-none text-black outline-none shadow-md w-96'
              inputContainerClassName="mb-3"
              />
              {viewCPassword ?
                <AiFillEyeInvisible className='text-black -ml-10 mb-3 scale-125 cursor-pointer'
                onClick={() => setViewCPassword(!viewCPassword)} 
                />
                :
                <AiFillEye className='text-black -ml-10 mb-3 scale-125 cursor-pointer' 
                onClick={() => setViewCPassword(!viewCPassword)}
                /> 
              } 
            </div>               
            <ErrorMessage name="confirmPassword" render={renderError}/>                
            <div className="w-full flex justify-end">
              <Button
                type="submit"
                title="Sign Up"
                isLoading={isLoading}
                className="bg-secondaryText text-white p-2 px-9 w-36 m-auto mt-6 transform transition-all hover:scale-95"
              />
            </div>
          </CustomForm>
      {/* <input
      type="password"
      id="password"
      value={password}
      placeholder="Password"
      onChange={onChange}
      className="border-none text-black outline-none shadow-md w-96 mt-8 px-6 py-2 rounded-2xl" />
      <input
      type="password"
      id="confirmPassword"
      value={confirmPassword}
      placeholder="Confirm Password"
      onChange={onChange}
      className="border-none text-black outline-none shadow-md w-96 mt-8 px-6 py-2 rounded-2xl" />
      <p className='text-redText mt-2'>{error}</p>
      </div>
      <div className="flex justify-center w-full">
      <button
        onClick={onSubmit}
        type="submit"
        title="Next"
        disabled = {isLoading ? true : false}
        className="flex justify-center bg-secondaryText text-white p-2 px-9 w-36 m-auto mt-8 transform transition-all cursor-pointer hover:scale-95 shadow rounded rounded-bl-3xl rounded-tr-3xl"
        >Next</button> */}
        </div>
    </div>
  )
}
