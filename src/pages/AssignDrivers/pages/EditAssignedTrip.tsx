import React,{useState} from 'react'

import BackButton from '../../../components/BackButton'
import jojopay from "../../../assets/images/jojopay.png"

import {IoIosArrowForward} from 'react-icons/io'
import {MdLocationPin} from 'react-icons/md'
import EditButton from '../../../components/EditButton'
import { DeleteButton } from '../../../components/DeleteButton'
import { Link } from 'react-router-dom'


export const EditAssignedTrip = () => {

  const CustomDays = [
    {"month":"Jan" , "days": [1,2,3,4,6,8,9,14,65]},
    {"month":"Mar" , "days": [1,2,12,4,6,8,9,14,65,5,1,8,18,19,11,99,49]},
    {"month":"Apr" , "days": [1,2,6,8,9,1,9,9,34,65]},
    {"month":"Dec" , "days": [3,4,6,8,9,14,65]},
  ]


  const [index, setIndex] = useState(0);
  const { month, days } = CustomDays[index];
  const checkNumber = (number: number) => {
    if (number > CustomDays.length - 1) {
      return 0;
    }
    if (number < 0) {
      return CustomDays.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };


  return (
    <div>
        <div className='flex flex-col justify-start items-center w-[96vw] h-screen'>
            <div className='z-10 flex justify-center items-center w-[600px] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
                <p className='text-xl font-bold tracking-wider text-primaryText'>Assign Trip</p>
            </div>
            <div className='flex flex-col justify-start items-center w-[1300px] h-[530px] bg-secondary -mt-8 rounded-3xl drop-shadow-xl'>
                <div className='flex justify-end m-4 pr-8 w-full'>
                  <div className='mr-3 mt-6'><Link to={'/assign-trip'}><EditButton isEdit={true}/></Link></div>
                  <div className='mr-6 mt-6'><DeleteButton /></div>
                  <BackButton /></div>
                <div className='flex w-full justify-between'>
                  <section>
                    <div className='w-[600px] h-full ml-4 pl-10 pt-2'>
                      <div className='flex mb-4'><label htmlFor="" className='flex justify-end w-32 mr-4 text-lg font-bold text-primaryText'>Bus:</label>
                        <p className='text-lg'>Bus Name</p>
                      </div>
                      <div className='flex mb-4'><label htmlFor="" className='flex justify-end w-32 mr-4 text-lg font-bold text-primaryText'>Driver:</label>
                        <p className='text-lg'>Driver</p>
                      </div>
                      <div className='flex mb-4'><label htmlFor="" className='flex justify-end w-32 mr-4 text-lg font-bold text-primaryText'>Co-Driver:</label>
                        <p className='text-lg'>Name</p>
                      </div>
                      <div className='flex mb-4'><label htmlFor="" className='flex justify-end w-32 mr-4 text-lg font-bold text-primaryText'>Starting Time:</label>
                        <p className='text-lg'>02.30 pm</p>
                      </div>
                      <div className='flex mb-4'><label htmlFor="" className='flex justify-end w-32 mr-4 text-lg font-bold text-primaryText'>Type:</label>
                        <p className='text-lg'>One Time</p>
                      </div>
                  {/* Time Period  */}
                      <div className='flex mb-4'><label htmlFor="" className='flex justify-end w-32 mr-4 text-lg font-bold text-primaryText'>Custom Days:</label>
                      <div className='flex'>
                        <p className='text-lg'>Jan-Dec</p>
                        <div className='ml-4'>
                          <div className='flex w-28 justify-between items-center'>
                            <IoIosArrowForward className='rotate-180 scale-150 text-quaternaryText' onClick={prevPerson} />
                            <p className='text-lg bg-primary drop-shadow-lg p-[2px] px-4 rounded-lg'>{month}</p>
                            <IoIosArrowForward  className='scale-150 text-quaternaryText' onClick={nextPerson}/>
                          </div>
                          <div className='-ml-48 mt-4 w-52 h-20 grid grid-cols-8 gap-8'>
                          {days.map((data,index) => (
                              <div className=''>
                                {data}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className='relative mr-14 w-[600px] h-[540px] bg-quaternary rounded-3xl bg-cover pt-10'>
                      <img className='absolute opacity-50 scale-75' src={jojopay} alt="" />
                      <p className='w-full flex justify-center text-2xl font-bold tracking-wider'>Route</p>
                            <div className='flex w-full h-12 items-center ml-6 mt-10'>
                              <div className='w-[66%] h-full flex items-center bg-secondary rounded-2xl'>
                                <MdLocationPin className='scale-150 ml-4 text-redText' />
                                <input
                                className='w-[75%] h-8 ml-3 rounded-xl pl-3 bg-primary focus:border-none' 
                                type="text" name="" id="" />
                              </div>
                              <p className='text-primaryText ml-4'>Start Point</p>
                            </div>
                            <div className='flex w-full h-12 items-center ml-6 mt-4'>
                              <div className='w-[66%] h-full flex items-center bg-secondary rounded-2xl'>
                                <MdLocationPin className='scale-150 ml-4 text-redText' />
                                <input
                                className='w-[75%] h-8 ml-3 rounded-xl pl-3 bg-primary focus:border-none' 
                                type="text" name="" id="" />
                              </div>
                            </div>
                            <div className='flex w-full h-12 items-center ml-6 mt-4'>
                              <div className='w-[66%] h-full flex items-center bg-secondary rounded-2xl'>
                                <MdLocationPin className='scale-150 ml-4 text-redText' />
                                <input
                                className='w-[75%] h-8 ml-3 rounded-xl pl-3 bg-primary focus:border-none' 
                                type="text" name="" id="" />
                              </div>
                              <p className='text-primaryText ml-4'>End Point</p>
                            </div>
                    </div>
                  </section>
                </div>
                </div>              
        </div>
    </div>
  )
}
