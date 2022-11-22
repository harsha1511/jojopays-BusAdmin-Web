import React from 'react'
import BackButton from '../../../components/BackButton'
import { Link } from 'react-router-dom'

import {FaUser} from 'react-icons/fa'

import { FaIdCard } from 'react-icons/fa'

import { BsFillFileEarmarkPdfFill }from 'react-icons/bs'
import { FaIdBadge } from 'react-icons/fa'

import "./AddNewStaff.css"

export const AddNewStaff=()=> {

    return ( 
    <div className="h-[100%] flex-grid  grid-flow-row w-[100%] p-0">
      <div className=" flex fixed text-primaryText font-bold z-10  text-4xl ml-[34%] items-center h-[80px] w-[30%] justify-around rounded-b-[40px] bg-[#2F3142] shadow-xl">
            <h1>Add New Login</h1>
        </div>
        <div className='flex justify-center items-center w-[96vw] h-screen'>
        <div className='flex flex-col items-center w-[1300px] h-[600px] rounded-3xl bg-secondary bg-add-driver-cover bg-cover bg-center bg-no-repeat'>
            <div className="flex justify-end items-center mt-4 pr-8 w-[100%] h-20">
                <BackButton />
            </div>
     <form className="flex mr-60 items-end -mt-6" >
        <div className='w-[730px] text-right justify-start ml-40 text-primaryText font-semibold grid grid-flow-row gap-4 pb-4'>
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
             <div className=" grid grid-flow-col " > 
             <label className="add-name" >Add Photo: 
             </label> <div className="user" >
                 <FaUser className='text-secondary'/> <div className="leading-3" >
                    </div> </div> 
                    <label>
                    <input type="file" className="hidden" /> 
                    <p className='bg-green-200 text-redText drop-shadow-lg' >Upload</p> 
                    </label>
                    <label htmlFor='upload' className="add-resume" >Add Resume:</label>
                     <div className="resume" > 
                    <BsFillFileEarmarkPdfFill className='text-secondary'/> 
                    <div className="leading-4" ></div> </div> 
                    <label>
                    <input className="hidden" type="file" />
                     <p className='bg-green-200 text-redText drop-shadow-lg ' >Upload</p> 
                     </label>
                     </div> <div className=" grid grid-flow-col" >
                 <label className="add-license" >Add License:</label> <div className="cord" >
                     <FaIdCard className='text-secondary'/> <div className="leading-2" ></div> 
                     </div> 
                     <label>
                     <input className="hidden" type="file" /> 
                     <p className='bg-green-200 text-redText drop-shadow-lg' >Upload</p> 
                     </label>
                     <label className="add-cord" >
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
            <Link to='/assign-task'>
                <button className="-mr-44 bg-tertiary text-quaternaryText font-bold w-[120px]  py-2 px-4 rounded-full" > Next </button>
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

export default AddNewStaff;