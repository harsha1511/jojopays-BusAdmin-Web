import React, {useState, useEffect} from 'react'
import * as yup from "yup";
import axios from 'axios';


import BackButton from '../../../components/BackButton'
import CustomForm from '../../../components/Form'
import Input from "../../../components/Input"
import EditButton from '../../../components/EditButton'
import { PowerButton } from '../../../components/PowerButton'
import { EditLogin } from '../components/EditLogin'
import { DeleteButton } from '../../../components/DeleteButton'

import { FaPen } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import {HiDocument} from "react-icons/hi"
import {FaAddressCard} from "react-icons/fa"
import {BiIdCard} from "react-icons/bi"

const validateStaff = yup.object().shape({
    staffName: yup
    .string()
    .label("staffName"),
  jojoId: yup
    .string()
    .label("jojoId"),
  staffPhone: yup
    .string()
    .label("staffPhone"),
  staffAddress: yup 
    .string()
    .label("staffAddress"),
  staffAddPhone: yup  
    .string()
    .label("staffAddPhone"),
  staffMail: yup
    .string()
    .label("staffMail"),
}) 

interface StaffDetailsProps {
    staffName: string;
    jojoId: string;
    staffPhone: string;
    staffAddress: string;
    staffAddPhone: string;
    staffMail: string;
}

export const EditStaffProfile = () => {

    const initialState: StaffDetailsProps = {
        staffName: "",
        jojoId: "",
        staffPhone: "",
        staffAddress: "",
        staffAddPhone: "",
        staffMail: "",
}
    
const handleSubmit = (values: StaffDetailsProps) => {
    console.log(values);
    
}
  return (
    <div>
        {/* topbar with date of joining and DOB */}
        <section className='flex w-[96vw] h-28 bg-secondary'>
            <div className='flex justify-center items-center w-[60%] h-full'>
                <div className='flex mt-6'>
                    <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" alt="" className="w-20 h-20 mt-10 ml-8 rounded-full"/>
                    <label className=''>
                        <input type="file" className='hidden' />
                        <p className='absolute flex justify-center items-center w-7 h-7 bg-quaternaryText rounded-full mt-10 -ml-4 cursor-pointer'><FaPen /></p>
                    </label>
                </div>
            </div>
            <div className='flex justify-around w-[40%]'>
                <div className=''>
                    <label className='flex items-center justify-center mt-8 text-sm text-primaryText pt-4'>D.O.B: 
                        <span className='text-white ml-4 px-6 py-2 bg-primary rounded-xl'>28/10/2022</span>
                    </label>
                </div>
                <div className='flex flex-col items-center ml-2 mt-4'>
                    <p className='text-sm font-bold mt-4 text-primaryText'>Working Since</p>
                    <div className='relative flex justify-center items-center w-60 h-[1px] mt-4 bg-primaryText'>
                      <p className='px-6 bg-secondary font-bold'>5/06/2022</p>
                    </div>
                </div>
                <div className='mt-4 mr-2'>
                    <BackButton />
                </div>
            </div>
        </section>
        <section className='flex'>
            <div className='w-[50%] h-[600px]'>
            <CustomForm
            initialValues={initialState}
            validationSchema={validateStaff}
            onSubmit={handleSubmit}>
                <div className='flex flex-col w-[80%] mt-10 pl-6 py-6 ml-10 bg-secondary rounded-3xl'>
                    <div className='flex items-center justify-around w-[90%]'>
                        <label className='w-[20%]'>Name:</label>
                        <Input
                        type='text'
                        name='staffName'
                        placeholder='Name'
                        className='w-[400px] bg-tertiary -ml-6 pl-4 outline-none rounded-xl'
                         />
                    </div>
                    <div className='flex justify-around w-[90%] mt-4'>
                        <label className='w-[20%]'>Jojopays ID: </label>
                        <Input
                        type='text'
                        name='jojoId'
                        placeholder='Jojo Pays Id'
                        className='w-[400px] bg-tertiary -ml-6 pl-4 outline-none rounded-xl'
                         />
                    </div>
                    <div className='flex justify-around w-[90%] mt-4'>
                        <label className='w-[20%]'>Ph, No.2: </label>
                        <Input
                        type='text'
                        name='staffPhone'
                        placeholder='Phone NUmber'
                        className='w-[400px] bg-tertiary -ml-6 pl-4 outline-none rounded-xl'
                         />
                    </div>
                    <div className='flex justify-around w-[90%] mt-4'>
                        <label className='w-[20%]'>Address: </label>
                        <Input
                        type='text'
                        name='staffAddress'
                        placeholder='Address'
                        className='w-[400px] bg-tertiary -ml-6 pl-4 outline-none rounded-xl'
                         />
                    </div>
            </div>
            <div className='flex w-[80%] mt-10 pl-6 py-4 ml-10 bg-secondary rounded-3xl'>
                <div className='flex items-center w-[50%]'>
                        <label className='mr-4'><FaPhoneAlt className="scale-125" /> </label>
                        <Input
                        name="staffAddPhone"
                        type="text" 
                        className='w-[200px] h-8 bg-tertiary pl-4 outline-none rounded-xl'
                        />
                    </div>
                    <div className='flex items-center w-[50%]'>
                        <label className='mr-4'><GrMail className="scale-125" /> </label>
                        <Input
                        name="staffMail"
                        type="text" 
                        className='w-[200px] h-8 bg-tertiary pl-4 outline-none rounded-xl'
                        />
                    </div>
            </div>
            <div className='flex justify-center items-center w-[100%] mt-20'>
                <button
                type='submit'
                className='py-2 px-10 text-lg font-semibold tracking-wide text-quaternaryText bg-tertiary rounded-3xl drop-shadow-lg'>Update</button>
            </div>
            <PowerButton />
            </CustomForm>
            </div>
            <div>   
            </div>
        <div className='flex flex-col items-center w-[50%] h-[600px] overflow-y-scroll'>
            <div className="flex justify-between w-[580px] h-48 py-10 bg-secondary mt-8 rounded-3xl">
                <div className='flex justify-center items-center m-2 w-40'>
                    <div className='flex flex-col mr-2 gap-2'>
                        <EditButton isEdit={true} className=""/>
                        <DeleteButton />
                    </div>
                    <div className='flex justify-center items-center w-24 h-24 ml-2 rounded-xl bg-primary'>
                    <HiDocument className='w-12 h-12 text-primaryText' />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-40'>
                    <div className='flex -mt-8 mb-2 gap-2'>
                        <EditButton isEdit={true} className=""/>
                        <DeleteButton />
                    </div>
                    <div className='flex justify-center items-center w-24 h-24 ml-2 rounded-xl bg-primary'>
                    <BiIdCard className='w-12 h-12 text-primaryText' />
                    </div>
                </div>
                <div className='flex justify-center items-center w-40'>
                    <div className='flex justify-center items-center w-24 h-24 ml-2 rounded-xl bg-primary'>
                    <FaAddressCard className='w-12 h-12 text-primaryText' />
                    </div>
                    <div className='flex flex-col ml-2 gap-2'>
                        <EditButton isEdit={true} className=""/>
                        <DeleteButton />
                    </div>
                </div>
            </div>
            <div className='mt-2 ml-24 mb-20'>
                <EditLogin />
            </div>
        </div>
        </section>
    </div>
  )
}
