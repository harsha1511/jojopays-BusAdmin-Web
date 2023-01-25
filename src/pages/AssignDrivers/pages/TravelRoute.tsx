import React,{useState} from 'react'

import BackButton from '../../../components/BackButton'

import {MdLocationPin} from "react-icons/md"
import {MdDeleteForever} from 'react-icons/md'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { ADD_ROUTE } from '../../../store/reducers/assignTrip'

export const TravelRoute = () => {
  
  const auth = useSelector((state: RootState) => state.assignTrip);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("hdvakda", auth);
  

  

  const [point, setPoint] = useState<number>(0)
  const [travelRoute, setTravelRoute] = useState({
    tripArrivalFrom: "",
    tripDepatureTo: "",
  })

  const AddPoint = () => {
    setPoint(point + 1)
    console.log( point , "pointttt");
  }
  const RemovePoint = () => {
    setPoint(point - 1)
  }

  const handleChange = (e:any) => {  
    const {name, value} = e.target;
    setTravelRoute({...travelRoute, [name]: value})
  }

  const submitForm = () => {
    dispatch(ADD_ROUTE(travelRoute));
    if(auth.travelRoute !== null){
      navigate("/assign-time")
    }
    // navigate("/assign-time")

  }
  console.log("Routes", travelRoute);
  
  return (
        <div>
          <div className='flex flex-col justify-start items-center w-[96vw] h-screen'>
            <div className='z-10 flex justify-center items-center w-[35%] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
                <p className='text-xl font-bold tracking-wider text-primaryText'>Assign Trip</p>
            </div>
            <div className='flex flex-col justify-start items-center w-[90%] h-[75%] bg-secondary -mt-8 rounded-3xl drop-shadow-xl'>
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
                            <div className='flex flex-col items-center ml-3'>
                              <p className='flex justify-center items-center w-28 h-8 bg-primary rounded-2xl'>09:30 pm</p>
                              <p className='ml-3 text-primaryText'>Start Time</p>
                            </div>
                            <div className='flex flex-col items-center mt-2 ml-3'>
                              <p className='flex justify-center items-center w-28 h-8 bg-primary rounded-2xl'>09:30 pm</p>
                              <p className='ml-3  text-primaryText'>ETA End Time</p>
                            </div>
                          </div>                         
                        </div>
                        {/* Routes and pins */}
                        <form action="" className='w-[100%]'>
                        <div className='h-[220px] mt-10 overflow-y-auto overflow-x-hidden'>
                          <div className='flex justify-between items-center w-full h-12 ml-1 bg-quaternary rounded-2xl drop-shadow-md'>
                            <div className='w-[60%] flex items-center'>
                              <MdLocationPin className='scale-150 ml-4 text-redText' />
                              <input
                              className='w-[90%] h-8 ml-3 rounded-xl pl-3 bg-primary focus:border-none' 
                              type="text" name="tripArrivalFrom" onChange={handleChange} id="" />
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
                              type="text" name={`point${point}`} onChange={handleChange} id="" />
                            </div>
                            <p className='mr-6 scale-150 text-redText cursor-pointer' onClick={RemovePoint}><MdDeleteForever /></p>
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
                              type="text" name="tripDepatureTo" onChange={handleChange} />
                            </div>
                            <p className='mr-4 text-primaryText'>End Point</p>
                          </div>
                        </div>

                      </form>
                    </section>
                    <section className='ml-10 w-[90%] -mr-4'>
                       <div className='h-[460px] bg-quaternary rounded-3xl'>
                       </div>
                    </section>
                </div>
            </div>
                <div onClick={submitForm} className="flex w-[45%]">
                <button className='mt-4 px-12 py-3 text-2xl font-semibold tracking-wider bg-secondary rounded-tl-3xl rounded-md rounded-br-3xl'>Next</button>
                </div>
          </div>
        </div>
  )
}
