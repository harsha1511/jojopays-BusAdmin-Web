import React,{useState} from 'react'
import * as yup from "yup";
import axios from 'axios';


import CustomForm from "../../../components/Form";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../../../store/reducers/auth.reducer";






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
    password: "",
    confirmPassword:"",
  }

  console.log("jojo", jojoUserId);
  
  

  const [isLoading, setIsLoading] = useState(false);
  const [newUser, setNewUser] = useState<any>(defaultUserData);

  const {
    jojoId,
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
    e.preventDefault();
    try{
      if(newUser.password !== "" && newUser.password === newUser.confirmPassword){
        console.log("newUSERRR", newUser)
        const SendLogin = await axios.post("http://192.168.1.17:80/registerCreds", newUser)
        console.log(SendLogin);
      }
    }
    catch(err){
      console.log(err)
      setIsLoading(false);
      
    }
};

console.log(jojoUserId);


  return (
    <div>
    <form action="submit" onClick={onSubmit}>
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
      type="text"
      value={jojoUserId?.data.jojoId}
      className="hidden"
      id="jojoId" />
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
        // isLoading={isLoading}
        className="flex justify-center bg-secondaryText text-white p-2 px-9 w-36 m-auto mt-8 transform transition-all hover:scale-95 shadow rounded rounded-bl-3xl rounded-tr-3xl"
        >Submit</button>
        </div>
        </form>
    </div>
  )
}
