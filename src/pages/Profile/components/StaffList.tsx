import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


import {IoIosPersonAdd} from "react-icons/io"
import axios from 'axios';
import constants from '../../../API/constants';



const StaffList = () => {
    const [showList, setShowList] =useState<number>(5);
    const [staffNames, setStaffNames] = useState<any>()

    const members = [
        { name : "sha"},
        { name : "Muthu"},
        { name : "Bin"},
        { name : "Adnrew"},
        { name : "Stephen"},
        { name : "Marc"},
    ]
    useEffect(()=> {
        const getStaffNames = async () => {
           try{               
               const response = await axios.get(constants.auth.profile)
               console.log(response, "ress");
               setStaffNames(response.data.staff)
            }
            catch (err) {
                console.log(err);
            }
        };
        getStaffNames()
    },[])

    return (
    
        <div className='flex items-center justify-end w-[33%] '>
            <div className='flex flex-col w-2/3 h-[420px] mb-20 mr-20 rounded-2xl shadow-lg bg-secondary'>
                <Link to="/add-new-staff" className='flex h-16 w-full justify-center items-center bg-secondary cursor-pointer drop-shadow-2xl rounded-2xl text-primaryText'>
                    <IoIosPersonAdd className='scale-125 mr-2'/><p className='font-semibold'>Add New On-Desk Staff</p>
                </Link>
                <div>
                    {staffNames?.slice(0, showList).map((i:any) => (
                            <div className='flex mt-4 mb-6 w-full items-center'>
                                <img className="w-8 h-8 rounded-full ml-4" src={i?.staffImage} alt="" />
                                <p className='text-quinary font-bold ml-4'>{i?.staffName}</p>
                            </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <Link to="/staff-profile">
                    <button className='py-[10px] px-20 text-xl text-quaternaryText bg-tertiary drop-shadow-2xl rounded-full'>More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}



export default StaffList;