import React, {useState, useRef} from 'react'
import axios from 'axios';


import { FaPen } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import {GrMail} from "react-icons/gr"



import BackButton from "../../../components/BackButton"
import { EditLogin } from '../components/EditLogin'





export const EditProfile= () => {

    const imageRef = useRef<any>()
    
    const defaultFormData = {
      companyName: "",
      ownerName: "",
      bio: "",
      companyAddress: "",
      personalAddress: "",
      phoneNumber: "",
      mail: "",
      Personalmail: "",
    };

  const [picture, setPicture] = useState<FileList | any>();

  const uploadImage = (e:React.ChangeEvent<HTMLInputElement>) => {
      const image= e.target.files?.[0]
      setPicture(image)
  }
  console.log(picture);
  
  
 const [formData, setFormData] = useState<any>(defaultFormData);
  const { companyName,
    ownerName,
    bio,
    companyAddress,
    personalAddress,
    phoneNumber,
    mail,
    Personalmail, } = formData;

//    const Data:any = {
//     refID:"hii",
//     Name:"Harsha"
//    }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevState:any) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit =async  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(defaultFormData);
    const result = await axios.post("http://192.168.1.18:80/2", formData);
    console.log(result, "respppppp");   
};



console.log("data",formData);
  return (
    <div className='realtive w-full h-[100vh]'>

   <div className="relative w-screen h-[140px] left-[-72px]">
        <img src="https://www.worldatlas.com/img/flag/ke-flag.jpg" alt="" className="absolute w-full h-full object-cover rounded-b-3xl"/>
        <div className="absolute w-[100%] h-full bg-tertiary opacity-70 rounded-b-3xl">
        </div>
            <div className='absolute flex justify-end w-full'>
            <label htmlFor='imgs'>
                <input id='imgs' onChange={uploadImage} ref={imageRef}  type="file" accept='images/*' className='absolute hidden'/>
                <p  className='flex justify-center items-center w-7 h-7 mt-6 mr-10 bg-quaternaryText rounded-full cursor-pointer'><FaPen /></p>
            </label>
            </div>
    {/* content inside cover photo */}
        <div className="left-[72px] absolute w-full h-full flex justify-between">
            <div className=''>
                <div className='relative w-40'>
                    <img src="https://www.worldatlas.com/img/flag/ke-flag.jpg" alt="" className="hidden sm:block absolute w-20 h-20 mt-10 ml-8 rounded-full"/>
                    <label className='custom-file-upload'>
                        <input type="file" className='hidden' />
                        <p className='absolute flex justify-center items-center w-7 h-7 bg-quaternaryText rounded-full mt-10 ml-24 cursor-pointer'><FaPen /></p>
                    </label>
                </div>
                <div className='relative w-40'>
                    <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" alt="" className="absolute w-16 h-16 mt-16 ml-[120px] rounded-full "/>
                    <label className='custom-file-upload'>
                        <input type="file" className='hidden' />
                        <p className='absolute flex justify-center items-center w-7 h-7 bg-quaternaryText rounded-full mt-14 ml-[165px] cursor-pointer'><FaPen /></p>
                    </label>
                </div>
                    <div className="mt-16 ml-[200px] ">
                        <p className="font-bold text-lg mb:text-2xl  tracking-wider text-primaryText">This is <span className="text-white">Jhon</span></p>
                        <p className="flex justify-end text-sm font-bold">@john_1587</p>
                    </div> 
            </div>
            <div className="flex justify-center items-center w-48 mr-[150px] h-14 bg-secondary rounded-b-3xl">
              <p className="text-2xl font-bold tracking-wider text-primaryText">John Coach</p>
            </div>
            <div className='mr-48 mt-20'>
                 <BackButton />
            </div>
        </div>

    </div>
    <div className='flex flex-row'>
    {/* Inputs for edit profile */}
        <div className="w-[60%] h-[580px] overflow-y-auto" id='noScrollBar'>
            <form onSubmit={onSubmit} className="flex flex-col items-center justify-center">
                <div className='flex flex-col w-[80%] h-24 mt-10 pl-6 pt-3 bg-secondary rounded-3xl'>
                    <label> Company Name:
                        <input
                        id="companyName" value={companyName} onChange={onChange}
                        type="text" 
                        className='w-[70%] bg-tertiary ml-4 pl-4 outline-none rounded-xl'
                        />
                    </label>
                    <label className='mt-4'>Owner Name:
                    <input
                    id="ownerName" value={ownerName} onChange={onChange}
                    type="text" className='w-[70%] bg-tertiary ml-[37px] pl-4 outline-none rounded-xl'/>                            
                    </label>
            </div>
            <div className='flex flex-col w-[80%] h-36 mt-6 pl-6 pt-3 bg-secondary rounded-3xl'>
                <label className='pl-10'>Bio:</label>
                    <textarea id='bio' value={bio} 
                    onChange={onChange}
                    className='w-[90%] h-20 bg-tertiary ml-2 pl-4 pt-2 mt-2 outline-none rounded-xl resize-none '
                     />
            </div>
            <div className='bg-secondary p-4 mt-6 rounded-3xl w-[80%]'>
                <label className="flex items-center">Company Address:
                    <textarea id='companyAddress' value={companyAddress} 
                    onChange={onChange}
                     className='w-[75%] h-16 bg-tertiary ml-2 pl-4 pt-2 mt-2 outline-none rounded-xl resize-none '/>
                </label>
                <label className="flex items-center mt-2">Personal Address:
                    <textarea id='personalAddress' value={personalAddress} 
                    onChange={onChange}
                    className='w-[75%] h-16 bg-tertiary ml-4 pl-4 pt-2 mt-2 outline-none rounded-xl resize-none '/>
                </label>
                <div className="flex items-start">
                <label className="flex items-center mt-4"><FaPhoneAlt className="scale-125" />
                  <input
                    id="phoneNumber" value={phoneNumber} onChange={onChange}
                    type="text" className='w-[70%] bg-tertiary ml-[37px] pl-4 outline-none rounded-xl'/>
                </label>
                <div className="ml-36">
                <label className="flex  items-center mt-4"><GrMail className=" scale-150" />
                  <input
                    id="mail" value={mail} onChange={onChange}
                    type="text" className='w-[60%] bg-tertiary ml-[77px] pl-4 outline-none rounded-xl'/>
                </label>
                <label className="flex mt-4 mr-8">Personal:
                <input
                    id="Personalmail" value={Personalmail} onChange={onChange}
                    type="text" className='w-[70%] bg-tertiary ml-[37px] pl-4 outline-none rounded-xl'/>
                    </label>           
                </div>
                </div>
            </div>
            <button className='mt-6 mb-20 py-4 px-10 bg-tertiary text-xl font-bold tracking-wide text-quaternaryText rounded-3xl shadow-3xl' type="submit">
                Update
            </button>
            </form>
        </div>
        {/* Change Password */}
        <div className='w-[40%]'>
            <EditLogin />
        </div>
    </div>
    </div>

  )
  
  
  
}


export default EditProfile;


