import React, { useState } from 'react'
import EditButton from '../../../components/EditButton'
import {BsEyeFill, BsEyeSlashFill} from "react-icons/bs"


export const EditLogin = () => {

    const [openEdit, setOpenEdit] = useState(true)
    const [showPassword, setShowPassword] = useState(true)

    const handleEdit = () => {
        setOpenEdit(!openEdit)
    }
    const handleShowPassword = () => { setShowPassword((!showPassword))}


  return (
      <div className='relative w-[80%]'>
        {openEdit && 
        <div className='absolute  w-[580px] -right-12  h-[100%] rounded-3xl bg-primary z-10 opacity-50'>
        </div>        
        }
        <form action="" className='relative flex flex-col items-center mt-10'>
            <div className='w-[480px] rounded-3xl bg-secondary shadow-3xl p-12'>
            <div className='flex items-center justify-center '>
                <label htmlFor="" className='flex items-center'>Login:
                    <p className='bg-tertiary ml-4 p-2 w-60 rounded-full px-4'>user12837</p> 
                </label>
                <EditButton className='ml-1 z-20' isEdit={true} handleEdit={handleEdit}/>
            </div>
            <div>
                <label className="flex justify-center items-center font-semibold text-secondaryText mt-4 ">Old Password:
                </label>
                <div className='flex justify-center items-center'>
                    <input
                    type={showPassword ? "password" : "text"}
                    className='w-[80%] bg-tertiary pl-4 mt-2 text-white py-1 outline-none rounded-xl shadow-inner'/>
                    <span className='scale-125 -ml-8 mt-2' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}</span>
                </div>
                <label className="flex justify-center items-center font-semibold text-secondaryText mt-4 ">New Password:
                </label>
                <div className='flex justify-center items-center'>
                    <input
                    type={showPassword ? "password" : "text"}
                    className='w-[80%] bg-tertiary pl-4 mt-2 text-white py-1 outline-none rounded-xl shadow-inner'/>
                    <span className='scale-125 -ml-8 mt-2' onClick={handleShowPassword}>{showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}</span>
                </div>
                <label className="flex justify-center items-center font-semibold text-secondaryText mt-4 ">Retype Password:</label>   
                <div className='flex justify-center items-center'>
                    <input
                    type={showPassword ? "password" : "text"}
                    className='w-[80%] bg-tertiary pl-4 mt-2 text-white py-1 outline-none rounded-xl shadow-inner'/>
                    <span className='scale-125 -ml-8 mt-2' onClick={handleShowPassword}>{showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}</span>
                </div>
            </div>
            </div>
            {!openEdit &&
            <div className='flex flex-col justify-center items-center mt-4'>
                <p className='underline underline-offset-2 cursor-pointer tracking-wider'>Forgot Password</p>
                <button type='submit' className='mt-4 mb-10 py-4 px-10 bg-tertiary text-xl font-bold tracking-wide text-secondaryText rounded-3xl shadow-3xl'>Change</button>
            </div>
            }
        </form>
    </div>
  )
}
