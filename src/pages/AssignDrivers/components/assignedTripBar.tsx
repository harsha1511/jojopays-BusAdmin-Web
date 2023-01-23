import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from "../../../API/axios"
import constants from '../../../API/constants'

import {BiTimeFive} from "react-icons/bi"
import {MdDeleteForever} from 'react-icons/md'
import { FaPen } from "react-icons/fa"

import { ToggleButton } from '../../../components/ToggleButton'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ASSIGNED_TRIPS, GET_TRIP } from '../../../store/reducers/getTrip'
import { RootState } from '../../../store'






export const AssignedTripBar = () => {

    
    
  const [trip, setTrip] = useState<any[]>()
  const dispatch = useDispatch();

  
    
    
       
    
    useEffect(() => {
      const getTripData = async () => {
        try {
          const response = await axios.get(constants.company.assignedTrips);
          dispatch(GET_ASSIGNED_TRIPS(response.data))
          setTrip(response.data) 
    }
    catch(err) {
      console.log(err); 
    }
  }
  getTripData(); 
}, []);
    


  return (
    <div className='relative flex flex-col items-center w-full'>
        {trip?.map((item: any, index:number) => (
        <div className={`relative flex flex-col items-center w-full mb-6`}>
        <div className='z-10 flex justify-between items-center px-3 w-[93%] h-16 bg-quaternary rounded-2xl text-sm cursor-pointer'>
            <Link to ={"/edit-assigned-trip"}><BiTimeFive className='w-8 h-8 text-primaryText ml-2' /></Link>
            <div className='h-[99%] w-44 bg-primary rounded-xl'>
                <div className="flex flex-col justify-center items-center mt-1 h-full">
                  <p className='text-bold text-primaryText'>Trip Start Date :</p>
                  <p className='ml-2'>{item?.tripStartTime}</p>
                  {/* <label htmlFor="" className="text-[10px] text-primaryText flex flex-col items-center">Day <span className='font-bold text-sm text-white'>12 <span className='ml-1 text-primaryText'>-</span></span></label>
                  <label htmlFor="" className="text-[10px] text-primaryText flex flex-col items-center">Month <span className='font-bold text-sm text-white'>10 <span className='ml-1 text-primaryText'>-</span></span></label>
                  <label htmlFor="" className="text-[10px] text-primaryText flex flex-col items-center">Year <span className='font-bold text-sm text-white'>2022<span className='ml-1 text-primaryText'>:</span></span></label>
                  <label htmlFor="" className="text-[10px] text-primaryText flex flex-col items-center">hours <span className='font-bold text-sm text-white'>09<span className='ml-1 text-primaryText'>:</span></span></label>
                  <label htmlFor="" className="text-[10px] text-primaryText flex flex-col items-center">Min <span className='font-bold text-sm text-white'>30</span></label> */}
                </div>
            </div>
            <div className=''>
                <p className='text-pinkText'>From: <span className='text-greyText font-semibold'>{item?.tripArrivalFrom}</span></p>
                <p className='text-pinkText'>To: <span className='text-greyText font-semibold'>{item?.tripArrivalFrom}</span></p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-bold'>Bus No.: <span className=' text-sm text-pinkText'>{item?.companyId}</span></p>
                <p className='text-[11px] text-primaryText'>{item?.tripType}</p>
            </div>
            <div className='text-[12px] p-2 bg-primary -mr-3 rounded-l-lg'>
                <p>Pilot: <span className='text-primaryText'>{item?.tripPiolet}</span></p>
                <p>Co Pilot: <span className='text-primaryText'>{item?.tripCoPiolet}</span></p>
            </div>
        </div>
        </div>
        ))}
    </div>
  )
}


// do a checkbutton with css for toggle