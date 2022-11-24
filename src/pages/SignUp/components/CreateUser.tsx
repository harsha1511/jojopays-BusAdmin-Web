import React,{useState} from 'react'
import * as yup from "yup";


import CustomForm from "../../../components/Form";
import Input from "../../../components/Input";
import Button from "../../../components/Button";




const validateUser = yup.object().shape({
  password: yup
    .string()
    .required("Enter Password").label("password"),
  confirmPassword: yup
    .string()
    .required("Please type password once again")

})


interface CreateUSerProps {
    jojoId:string
}


interface NewUserProps {
  jojoId: string;
  password: string;
  confirmPassword: string;
}


export const CreateUser = ({jojoId}:CreateUSerProps) => {

const newUser: NewUserProps = ({
    jojoId: jojoId,
    password:"",
    confirmPassword:"",
  })
//   const defaulUserData = {
//     userId: "",
//     password: "",
//     confirmPassword:"",
//   }

//   console.log(defaulUserData);
  

  const [isLoading, setIsLoading] = useState(false);
//   const [newUser, setNewUser] = useState(defaulUserData);

//   const {
//     userId,
//     password,
//     confirmPassword,

//   } = newUser


  
  const CreateUser = async (data: NewUserProps) => {
    console.log(data.jojoId, "password");
    // if(value.password === value.confirmPassword){
    //   const Response = await axios.post("http://192.168.1.17:80/registerCreds", value)
    // }   
  }

  return (
    <div>
 <CustomForm
            initialValues={newUser}
            validationSchema={validateUser}
            onSubmit={CreateUser}
            >
              <div className="flex flex-col items-center mt-8 w-ful">
                <p className="text-greyText text-sm">Jojo pays User Id</p>
              <p className="flex justify-center py-2 text-black outline-none shadow-md w-96 mb-6 rounded-2xl font-semibold">
                {jojoId}
              </p>
              <Input
              type="text"
              readonly={true}
              value="hi"
              placeholder="jojoId"
              className="border-none text-black outline-none shadow-md w-96 mt-10"
              name="jojoId" />
              <Input
              type="text"
              name="password"
              placeholder="Password"
              className="border-none text-black outline-none shadow-md w-96 mt-10" />
              <Input
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="border-none text-black outline-none shadow-md w-96 mt-6" />
              </div>
              <div className="flex justify-center w-full">
              <Button
                type="submit"
                title="Next"
                isLoading={isLoading}
                className="flex justify-center bg-secondaryText text-white p-2 px-9 w-36 m-auto mt-6 transform transition-all hover:scale-95"
                />
                </div>
            </CustomForm>
    </div>
  )
}
