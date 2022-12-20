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
  const navigate = useNavigate()

  const defaultUserData = {
    jojoId: jojoUserId.data.jojoId,
    companyId: jojoUserId.data.companyId,
    password: "",
    confirmPassword:"",
  }

  
  

  const [isLoading, setIsLoading] = useState(false);
  const [newUser, setNewUser] = useState<any>(defaultUserData);

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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if(newUser.password !== "" && newUser.password === newUser.confirmPassword){
    try{
        setIsLoading(true)
        console.log("newUSERRR", newUser)
        const SendLogin = await axios.post(constants.auth.createuser, newUser)
        .then(resp =>{
          if(resp.data.status === "Successfull"){
            console.log(resp.data.status);
            setIsLoading(false)
            window.location.href = "/sign-in"
          }
        })
      }
      catch(err){
        console.log(err)
        setIsLoading(false);
        
      }
    }
};



  return (
    <div>
    <form action="submit" onClick={onSubmit}>
      <div className="flex flex-col items-center mt-8 w-ful">
        <p className="text-greyText text-sm">Jojo pays User Id</p>
      <p className="flex justify-center py-2 text-black outline-none shadow-md w-96 mb-6 rounded-2xl font-semibold">
        {jojoUserId?.data.jojoId}
      </p>
        <p className="text-greyText text-sm">Jojo pays Company Id</p>
      <input
      type="text"
      value={jojoUserId?.data.jojoId}
      className="hidden"
      id="jojoId" />
      <input
      type="text"
      value={jojoUserId?.data.companyId}
      className="hidden"
      id="companyId" />
      <input
      type="text"
      id="password"
      value={password}
      placeholder="Password"
      onChange={onChange}
      className="border-none text-black outline-none shadow-md w-96 mt-8 px-6 py-2 rounded-2xl" />
      <input
      type="text"
      id="confirmPassword"
      value={confirmPassword}
      placeholder="Confirm Password"
      onChange={onChange}
      className="border-none text-black outline-none shadow-md w-96 mt-8 px-6 py-2 rounded-2xl" />
      </div>
      <div className="flex justify-center w-full">
      <button
        type="submit"
        title="Next"
        disabled = {isLoading ? true : false}
        className="flex justify-center bg-secondaryText text-white p-2 px-9 w-36 m-auto mt-8 transform transition-all hover:scale-95 shadow rounded rounded-bl-3xl rounded-tr-3xl"
        >Next</button>
        </div>
        </form>
    </div>
  )
}
