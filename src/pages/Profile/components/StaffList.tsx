import React, { useState } from 'react'
import { Link } from "react-router-dom";


import {IoIosPersonAdd} from "react-icons/io"



const StaffList = () => {
    const [showList, setShowList] =useState<number>(5);

    const members = [
        { name : "Harsha"},
        { name : "Muthu"},
        { name : "Bin"},
        { name : "Adnrew"},
        { name : "Stephen"},
        { name : "Marc"},
    ]

    return (
    
        <div className='flex items-center justify-end w-[33%] '>
            <div className='flex flex-col w-2/3 h-[420px] mb-20 mr-20 rounded-2xl shadow-lg bg-secondary'>
                <Link to="/add-new-staff" className='flex h-16 w-full justify-center items-center bg-secondary cursor-pointer drop-shadow-2xl rounded-2xl text-primaryText'>
                    <IoIosPersonAdd className='scale-125 mr-2'/><p className='font-semibold'>Add New On-Desk Staff</p>
                </Link>
                <div>
                    {members.slice(0, showList).map(({name}) => (
                            <div className='flex mt-4 mb-6 w-full items-center'>
                                <img className="w-8 h-8 rounded-full ml-4" src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" alt="" />
                                <p className='text-quinary font-bold ml-4'>{name}</p>
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