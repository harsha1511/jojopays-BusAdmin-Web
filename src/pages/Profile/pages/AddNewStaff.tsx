import React from 'react'
import { Link } from 'react-router-dom'

import {FaUser} from 'react-icons/fa'

import { FaIdCard } from 'react-icons/fa'

import { BsFillFileEarmarkPdfFill }from 'react-icons/bs'
import { FaIdBadge } from 'react-icons/fa'

import './AddNewStaff.css'

export const AddNewStaff=()=> {

    return (<div className="Login-box"> 
    <div className="h-[100%] flex-grid  grid-flow-row w-[100%]"> 
    <div className=" flex fixed text-primaryText font-bold z-10  text-xl ml-[28%] items-center h-[80px] w-[30%] justify-around rounded-b-[40px] bg-[#2F3142] shadow-xl"> <h1>Add New Login</h1> </div>
     <div className="p-4"> <div className="mt-8 -ml-16 bg-contain bg-center bg-no-repeat p-5  bg-add-driver-cover h-[650px] "> <div className="p-0 m-0" > 
     <form className="w-[1200px] text-right justify-center text-primaryText font-semibold grid grid-flow-row gap-4 p-6 pb-4" >
         <label> Name: <input className="ml-3 w-[80%]  p-[5px]  leading-tight  bg-transparent  focus:outline-none focus:line focus:border-border-blue-500  text-white border-none" type="text"name="name"/> {" "}
        </label> <label> Login ID: <input type="text"
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
        </label> <div className="aa" > <label className="dob" > DOB: <input type="date" className="birthday" name="birthday" ></input> </label> </div> <div className="line" >
             <div className=" grid grid-flow-col " > <label className="add-name" >Add Photo: </label> <div className="user" > <FaUser/> <div className="leading-3" ></div> </div> <input type="file" className="hidden" /> <p className='bg-green-200' >Upload</p> <label htmlFor='upload' className="add-resume" >Add Resume:</label> <div className="resume" > <BsFillFileEarmarkPdfFill/> <div className="leading-4" ></div> </div> <input className="hidden" type="file" /> <p className='bg-green-200' >Upload</p> </div> <div className=" grid grid-flow-col" >
                 <label className="add-license" >Add License:</label> <div className="cord" > <FaIdCard /> <div className="leading-2" ></div> </div> <input className="hidden" type="file" /> <p className='bg-green-200' >Upload</p> <label className="add-cord" > Add ID:</label> <div className="id-cord" > <FaIdBadge/> <div className="leading" ></div> </div> <input className="hidden" /> <p className='bg-green-200' >Upload</p> </div> </div> <div className="" > 
                 <Link to='/assign-task'>
                 <button className="-mt-16 -mr-40 bg-tertiary text-quaternaryText font-bold w-[120px] py-2 px-4 rounded-full" > Next </button>
                 </Link> </div> </form> </div> </div> </div> </div> </div>);
}

export default AddNewStaff;