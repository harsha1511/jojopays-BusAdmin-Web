import React, { useState } from "react";
import * as yup from "yup";

import logo from "../../assets/images/logo.svg";
import heroImage from "../../assets/images/signin-hero-image.png";
import CustomForm from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../../store/reducers/auth.reducer";

const validationSchema = yup.object().shape({
  userId: yup.string().label("user id"),
  // .required("User ID is required"),
  password: yup.string().label("Password"),
  // .required("Password is required"),
  keepMeLogin: yup.boolean().optional().default(false),
});

interface SignInProps {
  userId: string;
  password: string;
  keepMeLogin: boolean;
}

const SignIn = () => {
  const initialState: SignInProps = {
    userId: "",
    password: "",
    keepMeLogin: false,
  };
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (values: SignInProps) => {
    setIsLoading(true);
    dispatch(LOGIN_SUCCESS({ name: "demo", password: "demo" }));
    setIsLoading(false);
  };
  return (
    <div className="bg-white w-screen h-screen bg-signin-cover bg-right bg-cover bg-no-repeat flex items-center justify-center">
      <div className="w-2/3 h-[500px] shadow rounded-xl grid grid-cols-2 overflow-hidden">
        <div className="bg-white col-span-1 p-5 flex flex-col items-center">
          <img
            src={logo}
            alt="JoJoPay Logo"
            className="w-10 h-10 object-contain"
          />
          <h4 className="text-black font-bold text-xl">JoJoPay.com</h4>
          <p className="text-gray-300 text-xs">
            All your bread and butter in one place
          </p>
          <img
            src={heroImage}
            alt="JoJoPay sign in"
            className="w-60 h-60 m-10"
          />
          <h1 className="text-3xl text-black font-bold uppercase">
            bus company login
          </h1>
        </div>
        <div className="col-span-1 flex items-center justify-center flex-col p-5 bg-white bg-opacity-50">
          <h5 className="text-black capitalize mb-5">Sign in</h5>
          <CustomForm
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className="bg-white px-4 py-8 rounded-lg rounded-tr-3xl">
              <Input
                type="text"
                name="userId"
                placeholder="User Id"
                className="border-none text-black outline-none shadow-lg w-96"
                inputContainerClassName="mb-3"
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                className="border-none text-black outline-none shadow-lg w-96"
              />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <Button
                title="sign-in"
                type="submit"
                isLoading={isLoading}
                className="bg-tertiaryText text-white p-2 px-9 w-36 m-auto transform transition-all hover:scale-95"
              />
              <Button
                link="/sign-up"
                title="Join"
                className="bg-secondaryText text-white p-2 px-9 w-36 m-auto transform transition-all hover:scale-95"
              />
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  label="Keep me signed in"
                  className=""
                  labelClassName="text-black"
                  name="keepMeLogin"
                />
              </div>
              <Link to="/forgot-password" className="text-black underline">
                Forgot Password
              </Link>
            </div>
          </CustomForm>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
