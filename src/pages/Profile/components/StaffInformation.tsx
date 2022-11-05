import React from 'react'
import { Link } from "react-router-dom";

import { Attendance } from '../../../components/Attendance'
import { DeleteButton } from '../../../components/DeleteButton'
import EditButton from '../../../components/EditButton'
import  {PowerButton}  from '../../../components/PowerButton'



export const StaffInformation = () => {


  return (
    <div className='realtive w-full h-screen'>
        <section className='flex justify-between h-32 bg-secondary'>
           {/* company Documents and profile pic */}
            <div className=''> 
                <div className='ml-24 mt-6 bg-quaternary px-3 py-1 rounded-2xl drop-shadow-sm text-sm text-primaryText'>
                    <button className='pl-4 pr-2'>Govt. ID</button>
                    <button className='pl-4 pr-2 border-l-2 border-tertiary'>Company ID </button>
                    <button className='pl-4 border-l-2 border-tertiary'>Resume</button>
                </div>
                <div className='flex items-center'>
                    <img src="https://media.istockphoto.com/photos/rendered-classic-sculpture-metaverse-avatar-with-network-of-lowpoly-picture-id1401980646?b=1&k=20&m=1401980646&s=170667a&w=0&h=KxgnhtW2_Q3LUOCwJXYlj27vVlkrfcBk789d-cNZURk=" 
                    alt=""
                    className="rounded-full bg-secondary w-24 h-24 mt-3 ml-20 object-cover overflow-hidden" />
                    <p className='text-2xl font-semibold ml-6 tracking-[.3rem]'>Harsha</p>
                </div>
            </div>
            {/* login ID and Password */}
            <div className='m-4 mr-10 bg-quaternary rounded-xl drop-shadow-lg'>
                <label className='flex items-center m-4 text-primaryText'>Login ID:
                <p className='ml-2 w-40 py-1 pl-3 bg-secondary text-sm text-white font-semibold rounded-xl'>JOJOPAYS14526</p>
                </label>
                <label className='flex m-4 text-primaryText'>Password:
                <p className='ml-2 w-40 py-1 pl-3 bg-secondary text-sm text-white font-semibold rounded-xl'>********</p>
                </label>
            </div>
        </section>
            {/* informations and calendar */}
            <section className='flex mt-10'>
                <div className='w-[50%] mt-10'>
                    <form className='tracking-wider ml-10'>
                        <div className='flex items-center'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Jojopay ID:</label>
                            <p className='text-white text-sm font-light pl-4'>JOJOPAYS12458</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Email ID:</label>
                            <p className='text-white text-sm font-light pl-4'>jojopays@gmail.com</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Main ph, No.:</label>
                            <p className='text-white text-sm font-light pl-4'>254 6854 26648</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Ph, No.:</label>
                            <p className='text-white text-sm font-light pl-4'>JOJOPAYS12458</p>
                        </div>
                        <div className='flex mt-3'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Address:</label>
                            <p className='w-56 text-white text-sm font-light pl-4'>No,4 south Wall Street, Westland, Nairobi, Kenya</p>
                        </div>

                    </form>
                    <div className='flex items-center flex-col mt-8 pt-2 pb-4 mx-8 bg-secondary rounded-2xl'>
                        <p className='text-primaryText font-bold'>Notes</p>
                        <textarea name=""
                        className='w-[90%] h-24 bg-tertiary pl-4 pt-2 mt-1 outline-none rounded-xl resize-none'>
                        </textarea>
                    </div>
                    <div>
                        <PowerButton  />
                            <div className='ml-24 mt-4'>
                                <Link to="/edit-staff-profile">
                                    <EditButton isEdit={true} className=""/>
                                </Link>
                                <div className='ml-4 mt-2'>
                                    <DeleteButton />
                                </div>
                            </div>
                    </div>
                </div>
                <div className='w-[50%] z-10'>
                    <Attendance isDownload={true} />
                </div>
            </section>
    </div>
  )
}
