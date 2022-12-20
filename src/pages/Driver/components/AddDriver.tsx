import React from "react";
import { Link } from "react-router-dom";
import BackButton from '../../../components/BackButton'


import {FaUser} from 'react-icons/fa'

import { FaIdCard } from 'react-icons/fa'

import { BsFillFileEarmarkPdfFill }from 'react-icons/bs'
import { FaIdBadge } from 'react-icons/fa'

import "./AddDriver.css"

function AddDriver() {
  return (

    <div className="h-[100%] flex-grid  grid-flow-row w-[100%] p-0">
      <div className="flex fixed text-primaryText font-bold z-10 tracking-wider  text-4xl ml-[34%] items-center h-[70px] w-[33%] justify-around rounded-b-[40px] bg-[#2F3142] shadow-2xl">
            <h1>Add New Driver</h1>
        </div>
        <div className='flex justify-center items-center w-[96vw] h-screen'>
        <div className='flex flex-col items-center w-[1300px] h-[640px] rounded-3xl ml-4 bg-secondary bg-add-driver-cover bg-cover bg-center bg-no-repeat'>
            <div className="flex justify-end items-center mt-4 pr-8 w-[100%] h-20">
                <BackButton />
            </div>
     <form className="flex mr-60 items-end -mt-6" >
        <div className='w-[730px] text-right justify-start text-base ml-40 text-primaryText font-bold grid grid-flow-row gap-4 pb-2'>
         <label> Name: <input className="ml-3 w-[80%]  p-[4px]  leading-tight  bg-transparent  focus:outline-none focus:line focus:border-border-blue-500  text-white border-none" type="text"name="name"/> {" "}
        </label><label>Jopay ID:<input type="text"
        className="ml-3 w-[80%]  p-[5px]  leading-tight  bg-transparent  focus:outline-none focus:line focus:border-border-blue-500  text-white border-none"
        name="Login"
        /> {" "}
        </label> <label> Email ID: <input type="text"
        name="emailid"
        className="ml-3 w-[80%] p-[5px]  appearance-none bg-transparent leading-tight focus:outline-none focus:line focus:border-border-blue-500  text-white border-none"
        /> {" "}
        </label> <label> Main Ph, No: <input type="text"
        name="emailid"
        className="ml-3 w-[80%] p-[5px] appearance-none bg-transparent leading-tight focus:outline-none focus:line focus:border-border-blue-500  text-white border-none"
        /> {" "}
        </label> <label> Ph, No 2: <input type="text"
        name="emailid"
        className="ml-3 w-[80%] p-[5px] appearance-none bg-transparent leading-tight focus:outline-none focus:line focus:border-border-blue-500  text-white border-none"/>
        {" "}
        </label> <label> Address: <input type="text"
        name="emailid"
        className="ml-3 w-[80%] p-[5px] appearance-none bg-transparent leading-tight focus:outline-none focus:line focus:border-border-blue-500  text-white border-none"/> 
        {" "}




        </label> <label> Blood Group: <input type="text"
        name="emailid"
        className="ml-3 w-[80%] p-[5px] appearance-none bg-transparent leading-tight focus:outline-none focus:line focus:border-border-blue-500  text-white border-none"/> 
        {" "}

        
        </label> <div className="aa" >
             <label className="Driver-dob" >DOB: 
             <input type="date" className="Driver-birthday" name="birthday" >
                </input>
                 </label> 
                 </div>
                  <div className="line" >
                    <div className=" grid grid-flow-col " > 
                        <label className="driver-photo" >Add Photo: 
                            </label>
                             <div className="user" >
                                <FaUser className='text-secondary'/>
                                    <div className="leading-3" >
                            </div> 
                                    </div> 
                        <label>
                    <input type="file" className="hidden" /> 
                    <p className='bg-green-200 text-redText drop-shadow-lg' >Upload</p> 
                    </label>
                    <label htmlFor='upload' className="Driver-resume" >Add Resume:</label>
                     <div className="resume" > 
                    <BsFillFileEarmarkPdfFill className='text-secondary'/> 
                    <div className="leading-4" ></div> </div> 
                    <label>
                    <input className="hidden" type="file" />
                   
                     <p className='bg-green-200 text-redText drop-shadow-lg ' >Upload</p> 
                     </label>
                     </div> <div className=" grid grid-flow-col" >
                 <label className="driver-upload" >
                    Add License:</label> <div className="cord" >
                     <FaIdCard className='text-secondary'/> <div className="leading-2" ></div> 
                     </div> 
                     <label>
                     <input className="hidden" type="file" /> 
                     <p className='bg-green-200 text-redText drop-shadow-lg' >Upload</p> 
                     </label>
                     <label className="upload-cord" >
                         Add ID:</label> <div className="id-cord" >
                             <FaIdBadge className='text-secondary'/>
                              <div className="leading" >
                                </div> 
                                </div>
                                <label>
                                <input className="hidden" type="file" /> 
                     <p className='bg-green-200 text-redText drop-shadow-lg'>Upload</p> 
                                </label>
                                </div> </div>
        </div>

        <div className="ml-40 mb-8 " > 
            <Link to='/Driver-login'>
                <button className="-mr-44 bg-tertiary text-quaternaryText font-bold w-[130px] text-xl  py-2 px-4 rounded-full" > Next </button>
            </Link>
        </div> 
        </form> 
                 <div>
            </div>
        </div>
    </div>  
    </div>
                 


    );
}

export default AddDriver;
