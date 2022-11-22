import React, {useState, useEffect} from 'react'
import * as yup from "yup";
import { countReducer, nameShrinker } from "../../../utils/helpers";

import { BsSearch } from "react-icons/bs";

import CustomForm from "../../../components/Form";
import { StaffInformation } from '../components/StaffInformation';
import BackButton from '../../../components/BackButton';
import axios from 'axios';
import { ToggleButton } from '../../../components/ToggleButton';


const StaffList = [
    {id: 1, name: "Harsha", isActive: true},
    {id: 2, name: "Muthu", isActive: false},
    {id: 3, name: "Joshua", isActive: true},
]
interface DataType {
  age:number
  equipmrnt: number[]
  name: string
}

export const StaffProfile = () => {

    const [showList, setShowList] =useState<number>(11);
    const [showStaff, setShowStaff] =useState<any[]>(StaffList);
    const [staffId, setStaffId] = useState<DataType>()
    console.log(staffId);
    


  const searchSchema = yup.object().shape({
    search: yup.string(),  
  });
  const handleSearch = (values: any) => {
    console.log(values);
  };

  
  const GetData = async (e:any) => {
    e.preventDefault();
    const result = await axios.get("http://192.168.1.18:80");
    setStaffId(result.data)
    console.log(staffId);
  }
  const handleClick = () => {
    console.log("hello world");
    
  }


  return (
    <div className='flex w-screen'>
        <section className='w-[20%] h-screen overflow-y-auto bg-secondary drop-shadow-2xl'>
            <CustomForm
              initialValues={{ search: "" }}
              validationSchema={searchSchema}
              onSubmit={handleSearch}
            >
              <div className="flex items-center border-2 border-primaryText mt-10 mb-6 mx-5 rounded-full px-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none py-2 px-4 text-white outline-none w-full"
                />
                <button className="" type="submit">
                  <BsSearch className="text-primaryText" />
                </button>
              </div>
            </CustomForm>
            {showStaff.slice(0, showList).map(({id, name, isActive, index}) => (
              <div className="overflow-y-auto overflow-x-hidden" onClick={GetData}>
              <div className="bg-primary h-14 mx-4 rounded-lg flex items-center p-2 justify-between mb-2 cursor-pointer">
                <div className="flex items-center gap-2">
                  <img
                    src="https://media.istockphoto.com/photos/rendered-classic-sculpture-metaverse-avatar-with-network-of-lowpoly-picture-id1401980646?b=1&k=20&m=1401980646&s=170667a&w=0&h=KxgnhtW2_Q3LUOCwJXYlj27vVlkrfcBk789d-cNZURk="
                    alt="profile"
                    className="rounded-full bg-secondary w-10 h-10 object-cover overflow-hidden"
                    />
                  <h2 key={index} className="truncate">{nameShrinker(name, 12)}</h2>
                </div>
                {isActive === true ? 
                  <div key={index} className='w-3 h-3 mr-4 rounded-full bg-quaternaryText'></div>
                  : <div key={index} className='w-3 h-3 mr-4 rounded-full bg-redText'></div> 
                }
              </div>
            </div>
            ))}
        </section>
        <section className='w-[50%]'>
            <StaffInformation />
        </section>
        <section className='w-[30%] h-screen bg-secondary drop-shadow-2xl'>
          <div className='flex justify-end w-[70%] m-8'>
            <BackButton />
          </div>
          <div className='flex flex-col items-center mr-20'>
            <p className='text-md -mt-4 text-primaryText'>Working Since</p>
            <div className='relative flex justify-center items-center w-60 h-[1px] mt-4 bg-primaryText'>
              <p className='px-6 bg-secondary font-bold'>5/06/2022</p>
            </div>
          </div>
          <label className='flex items-center justify-center mr-20 mt-8 text-sm text-primaryText pt-4'>D.O.B: 
            <span className='text-white ml-4 px-6 py-2 bg-primary rounded-xl'>28/10/2022</span>
          </label>
          <div className='flex items-center flex-col mr-20 mt-10'>
              <div className='flex items-center'>
                <p className='w-40 text-primaryText text-lg font-semibold'>Group Chat</p>
                <div className='mt-1'><ToggleButton className='' isBig={false} /></div>
              </div>
              <div className='flex items-center mt-2'>
                <p className='w-40 text-primaryText text-lg font-semibold'>Ticket Price</p>
                <div className='mt-1'><ToggleButton className='' isBig={false} /></div>
              </div>
              <div className='flex items-center mt-2'>
                <p className='w-40 text-primaryText text-lg font-semibold'>Assign Trip</p>
                <div className='mt-1'><ToggleButton className='' isBig={false} ToggleSwitch={handleClick} /></div>
              </div>
          </div>
        </section>
    </div>
  )
}
