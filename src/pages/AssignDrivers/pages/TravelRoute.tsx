import React,{useState} from 'react'

import BackButton from '../../../components/BackButton'

import {MdLocationPin} from "react-icons/md"
import {MdDeleteForever} from 'react-icons/md'

import { Link } from 'react-router-dom'

export const TravelRoute = () => {

  const [point, setPoint] = useState<number>(0)

  const AddPoint = () => {
    setPoint(point + 1)
    console.log( point , "pointttt");
  }

  const RemovePoint = () => {
    setPoint(point - 1)
  }

  return (
        <div>
          <div className='flex flex-col justify-start items-center w-[96vw] h-screen'>
            <div className='z-10 flex justify-center items-center w-[600px] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
                <p className='text-xl font-bold tracking-wider text-primaryText'>Assign Trip</p>
            </div>
            <div className='flex flex-col justify-start items-center w-[1300px] h-[530px] bg-secondary -mt-8 rounded-3xl drop-shadow-xl'>
                <div className='flex justify-end m-4 pr-8 w-full'><BackButton /></div>
                <div className='flex w-[100%] justify-between'>
                    <section className='ml-6 w-[50%]'>
                      {/* time and kilometer */}
                        <div className='flex justify-between items-center'>
                          <div className='flex items-center'>
                            <p className='flex justify-center items-center w-32 h-12 bg-primary rounded-2xl'>52 KM</p>
                            <p className='ml-3 text-lg text-primaryText'>Km</p>
                          </div>
                          <div className='flex items-center'>
                            <p className='flex justify-center items-center w-32 h-12 bg-primary rounded-2xl'>52 KM</p>
                            <p className='ml-3 text-lg text-primaryText'>ETA</p>
                          </div> 
                          <div >
                            <div className='flex items-center'>
                              <p className='flex justify-center items-center w-28 h-8 bg-primary rounded-2xl'>09:30 pm</p>
                              <p className='ml-3 text-primaryText'>Start Time</p>
                            </div>
                            <div className='flex items-center mt-2'>
                              <p className='flex justify-center items-center w-28 h-8 bg-primary rounded-2xl'>09:30 pm</p>
                              <p className='ml-3  text-primaryText'>ETA End Time</p>
                            </div>
                          </div>                         
                        </div>
                        {/* Routes and pins */}
                        <form action="" className='w-[100%]'>
                        <div className='h-[330px] mt-10 overflow-y-auto overflow-x-hidden' id='noScrollBar'>
                          <div className='flex justify-between items-center w-full h-12 ml-1 bg-quaternary rounded-2xl drop-shadow-md'>
                            <div className='w-[60%] flex items-center'>
                              <MdLocationPin className='scale-150 ml-4 text-redText' />
                              <input
                              className='w-[90%] h-8 ml-3 rounded-xl pl-3 bg-primary focus:border-none' 
                              type="text" name="" id="" />
                            </div>
                            <p className='mr-4 text-primaryText'>Start Point</p>
                          </div>
                          <div>
                          {[...Array(point)].map((i, index) => (
                            <div className='flex justify-between items-center w-full h-12 ml-1 mt-6 bg-quaternary rounded-2xl drop-shadow-md'>
                            <div className='w-[60%] flex items-center'>
                              <MdLocationPin className='scale-150 ml-4 text-redText' />
                              <input
                              className='w-[90%] h-8 ml-3 rounded-xl pl-3 bg-primary focus:border-none' 
                              type="text" name="" id="" />
                            </div>
                            <p className='mr-6 scale-150 text-redText' onClick={RemovePoint}><MdDeleteForever /></p>
                          </div>
                          ))}
                            {/* NEw Intermediate Point */}
                          </div>
                          <div 
                          onClick={AddPoint}
                          className='flex justify-center items-center mt-6 w-full h-12 font-bold tracking-wider cursor-pointer bg-primaryText rounded-2xl'>
                            <p>+ Add New intermediate Point</p>
                          </div>
                          <div className='flex justify-between items-center w-full h-12 ml-1 mt-6 bg-quaternary rounded-2xl drop-shadow-md'>
                            <div className='w-[60%] flex items-center'>
                              <MdLocationPin className='scale-150 ml-4 text-redText' />
                              <input
                              className='w-[90%] h-8 ml-3 rounded-xl pl-3 bg-primary focus:border-none' 
                              type="text" name="" id="" />
                            </div>
                            <p className='mr-4 text-primaryText'>End Point</p>
                          </div>
                        </div>
                        <Link to={"/assign-time"}>
                        <button className='mt-[44px] ml-64 px-12 py-3 text-2xl font-semibold tracking-wider bg-secondary rounded-tl-3xl rounded-md rounded-br-3xl'>Next</button>
                        </Link>

                      </form>
                    </section>
                    <section>
                       <div className='w-[550px] h-[490px] bg-quaternary mr-6 rounded-3xl'>
                       </div>
                    </section>
                </div>
            </div>
          </div>
        </div>
  )
}
