import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

import logo from "../../assets/images/logo.svg";
import heroImage from "../../assets/images/signup-hero-image.png";
import Button from "../../components/Button";
import CustomForm from "../../components/Form";
import Input from "../../components/Input";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required").label("Name"),
  companyName: yup
    .string()
    .required("Company name is required")
    .label("Company Name"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .label("Phone Number"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Email address is required")
    .label("Email Address"),
});

interface SignUpProps {
  name: string;
  companyName: string;
  phoneNumber: string;
  email: string;
}

const initialState: SignUpProps = {
  name: "",
  companyName: "",
  phoneNumber: "",
  email: "",
};
const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values: SignUpProps) => {
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  };

  return (
    <div className="bg-white w-screen h-screen bg-signup-cover bg-right bg-cover bg-no-repeat flex items-center justify-center">
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
            className="w-60 h-60 m-10 object-cover"
          />
          <h1 className="text-2xl text-black font-bold">
            Join as a Partner with JoJoPay
          </h1>
        </div>
        <div className="col-span-1 flex items-center justify-center flex-col p-5 bg-opacity-50 backdrop-blur">
          <h5 className="text-black capitalize mb-5">
            Welcome To JoJoPay Family
          </h5>
          <CustomForm
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className="bg-white px-4 py-8 rounded-lg rounded-tr-3xl shadow-md">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                className="border-none text-black outline-none shadow-lg w-96"
                inputContainerClassName="mb-3"
              />
              <Input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="border-none text-black outline-none shadow-lg w-96"
                inputContainerClassName="mb-3"
              />
              <Input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="border-none text-black outline-none shadow-lg w-96"
                inputContainerClassName="mb-3"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email ID"
                className="border-none text-black outline-none shadow-lg w-96"
              />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <Button
                type="submit"
                title="Join"
                isLoading={isLoading}
                className="bg-secondaryText text-white p-2 px-9 w-36 m-auto transform transition-all hover:scale-95"
              />
            </div>
            <div className="flex items-center justify-end mt-3">
              <Link to="/sign-in" className="text-black underline">
                Already a member?{" "}
                <span className="text-secondaryText underline">Signin</span>
              </Link>
            </div>
          </CustomForm>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
