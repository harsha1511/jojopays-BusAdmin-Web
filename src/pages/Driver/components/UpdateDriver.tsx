import React from "react";
import { Link } from "react-router-dom";

function UpdateDriver() {
  return (
    <div className="h-[100%] flex-grid  grid-flow-row w-[100%] p-0">
      <div className=" flex fixed text-primaryText font-bold z-10  text-xl ml-[33%] items-center h-[80px] w-[30%] justify-around rounded-b-[40px] bg-[#2F3142] shadow-xl">
        <h1>UPDATE DRIVER</h1>
      </div>
      <div className="p-2">
        <div className="   bg-contain bg-center bg-no-repeat mt-[30px] p-10 bg-adddriver-cover    h-[80%]  ">
          <div className="p-0 m-0">
            <form className=" mt-20 text-right justify-center text-primaryText grid grid-flow-row gap-4 p-2 text-m">
              <label>
                Name:
                <input
                  className=" appearance-none bg-transparent leading-tight focus:outline focus:ring focus:border-blue-500   text-white  ml-3 w-[80%]"
                  type="text"
                  name="name"
                />{" "}
              </label>

              <label>
                JopayID:
                <input
                  type="text"
                  className="ml-3 w-[80%] appearance-none bg-transparent leading-tight focus:outline-none focus:line focus:border-border-blue-500  text-white border-none"
                  name="jopayid"
                />{" "}
              </label>

              <label>
                Email ID:
                <input
                  type="text"
                  name="emailid"
                  className="ml-3 w-[80%] appearance-none bg-transparent leading-tight focus:outline-none focus:line focus:border-border-blue-500  text-white border-none"
                />{" "}
              </label>

              <label>
                Main Phone No:
                <input
                  type="text"
                  name="emailid"
                  className="ml-3 w-[80%] appearance-none bg-transparent leading-tight focus:outline-none focus:line focus:border-border-blue-500  text-white border-none"
                />{" "}
              </label>

              <label>
                Phone No 2:
                <input
                  type="text"
                  name="emailid"
                  className="ml-3 w-[80%] appearance-none bg-transparent leading-tight focus:outline-none focus:line focus:border-border-blue-500  text-white border-none"
                />{" "}
              </label>

              <label>
                Address:
                <input
                  type="text"
                  name="emailid"
                  className="ml-3 w-[80%] appearance-none bg-transparent leading-tight focus:outline-none focus:line focus:border-border-blue-500  text-white border-none"
                />{" "}
              </label>

              <label>
                Blood Group:
                <input
                  type="text"
                  name="emailid"
                  className="ml-3 w-[80%] appearance-none bg-transparent leading-tight focus:outline-none focus:line focus:border-border-blue-500  text-white border-none"
                />{" "}
              </label>

              <label>
                Address:
                <input
                  type="text"
                  name="emailid"
                  className="ml-3 w-[80%] appearance-none bg-transparent leading-tight focus:outline-none focus:line focus:border-border-blue-500  text-white border-none"
                />{" "}
              </label>

              <label>
                DoB:
                <input
                  type="text"
                  name="emailid"
                  className="ml-3 w-[80%] appearance-none bg-transparent leading-tight focus:outline-none focus:line focus:border-border-blue-500  text-white border-none"
                />{" "}
              </label>

              <div className=" grid grid-flow-col ">
                <label className="block">
                  Add Photo:
                  <input type="file" className="ml-3 " />
                </label>

                <label className="block">
                  Add Resume:
                  <input type="file" className="ml-3" />
                </label>
              </div>

              <div className=" grid grid-flow-col">
                <label className="block">
                  Add Lincense:
                  <input className="ml-3" type="file" />
                </label>

                <label className="block">
                  Add ID:
                  <input className="ml-3" type="file" />
                </label>
              </div>
              <div className="">
                <Link to="/driver-creds-confirm">
                  <button className="mt-[30px] ml-[100%] bg-black/[0.3] hover:bg-black text-primaryText font-bold w-[150px] py-2 px-4 rounded-full">
                    Next
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateDriver;
