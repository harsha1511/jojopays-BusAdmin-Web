import React from "react";
import { Link } from "react-router-dom";

function DriverCredsConfirm() {
  return (
    <div className="h-[100%] flex-grid  grid-flow-row w-[100%] p-0">
      <div className=" flex fixed text-primaryText font-bold z-10  text-xl ml-[33%] items-center h-[80px] w-[30%] justify-around rounded-b-[40px] bg-[#2F3142] shadow-xl">
        <h1>UPDATE DRIVER</h1>
      </div>
      <div className="p-2 h-[900px]">
        <div className="   bg-contain bg-center bg-no-repeat mt-[30px] p-10 bg-adddriver-cover    h-[80%]  ">
          <form className=" mt-20  justify-center text-primaryText grid grid-flow-row gap-8 p-2 text-xl">
            <img src="profile.png" alt="missing" />
            <label className="grid grid-flow-row gap-4">
              Username
              <input
                className=" border-4 appearance-none bg-transparent leading-tight focus:outline-none focus:ring focus:border-blue-500   text-white  ml-3 w-[80%]"
                type="text"
                name="username"
              />{" "}
            </label>
            <label>
              Password
              <input
                className=" border-4 appearance-none bg-transparent leading-tight focus:outline-none focus:ring focus:border-blue-500   text-white  ml-3 w-[80%]"
                type="text"
                name="Password"
              />{" "}
            </label>

            <div className="">
              <Link to="/">
                <button className="mt-[30px] ml-[100%] bg-black/[0.3] hover:bg-black text-primaryText font-bold w-[150px] py-2 px-4 rounded-full">
                  Update
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DriverCredsConfirm;
