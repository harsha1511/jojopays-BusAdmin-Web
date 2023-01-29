import React,{useState} from 'react'
import * as yup from "yup";

import CustomForm from "../../../components/Form";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../../../store/reducers/auth.reducer";
import constants from '../../../API/constants';
import axios from '../../../API/axios';
import { useNavigate } from 'react-router-dom';






const validateUser = yup.object().shape({
  password: yup
    .string()
    .required("Enter Password").label("password"),
  confirmPassword: yup
    .string()
    .required("Please type password once again")

})


interface CreateUSerProps {
  jojoUserId:any;
}



export const CreateUser = ({jojoUserId}:CreateUSerProps) => {


  const dispatch = useDispatch();

  const defaultUserData = {
    jojoId: jojoUserId.data.jojoId,
    companyId: jojoUserId.data.companyId,
    password: "",
    confirmPassword:"",
  }

  
  

  const [isLoading, setIsLoading] = useState(false);
  const [newUser, setNewUser] = useState<any>(defaultUserData);
  const [error, setError] = useState<string>()

  const {
    jojoId,
    companyId,
    password,
    confirmPassword,
  } = newUser


const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewUser((prevState:any) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async () => {
    if(newUser.password !== "" && newUser.confirmPassword !== "" && newUser.password === newUser.confirmPassword){
    try{
      setIsLoading(true)
        console.log("newUSERRR", newUser)
        const SendLogin = await axios.post(constants.auth.createuser, newUser)
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
    }else{
      setError("Wrong Password")
      // console.log("please enter a password");
      
    }
};

  return (
    <div>
    {/* <form action="submit" > */}
      <div className="flex flex-col items-center mt-8 w-ful">
        <p className="text-greyText text-sm">Jojo pays User Id</p>
      <p className="flex justify-center py-2 text-black outline-none shadow-md w-96 mb-6 rounded-2xl font-semibold">
        {jojoUserId?.data.jojoId}
      </p>
        <p className="text-greyText text-sm">Jojo pays Company Id</p>
        <p className="flex justify-center py-2 text-black outline-none shadow-md w-96 mb-6 rounded-2xl font-semibold">
        {jojoUserId?.data.companyId}
      </p>
      <input
      type="password"
      value={jojoUserId?.data.jojoId}
      onChange={onChange}
      className="hidden"
      id="jojoId" />
      <input
      type="password"
      value={jojoUserId?.data.companyId}
      onChange={onChange}
      className="hidden"
      id="companyId" />
      <input
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
        // type="submit"
        title="Next"
        disabled = {isLoading ? true : false}
        className="flex justify-center bg-secondaryText text-white p-2 px-9 w-36 m-auto mt-8 transform transition-all cursor-pointer hover:scale-95 shadow rounded rounded-bl-3xl rounded-tr-3xl"
        >Next</button>
        </div>
        {/* </form> */}
    </div>
  )
}
