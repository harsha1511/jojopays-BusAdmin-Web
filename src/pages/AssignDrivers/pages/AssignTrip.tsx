import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import BackButton from '../../../components/BackButton'

import jojopay from "../../../assets/images/jojopay.png"
import { ADD_BUS } from '../../../store/reducers/assignTrip';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';




export const AssignTrip = () => {



    const busCompany = useSelector((state: RootState) => state.busCompany);
    
    console.log("kasgddajhs", busCompany.allBuses);
    
    
    const [busName, setBusName] = useState<any>()
    const [tripDetails, setTripDetails] = useState<any>({
        busName: "",
        driverName: "",
        coPilotName: "",
        tripType: "",
        tripStartTime: "",
    })
    
    const BusName = [
        {name: "SRV" , pilot: "andrew" , copilot: "sugan"},
        {name: "Intrcity", pilot: "andrew" , copilot: "sugan"},
        {name: "Essar" , pilot: "andrew" , copilot: "sugan"},
    ]
    
    const handleChange = (e: any) => {
        e.preventDefault();
        const {name, value} = e.target
        setTripDetails({...tripDetails, [name]: value})
    }
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const submitForm = () => {
        console.log(tripDetails);
        dispatch(ADD_BUS(tripDetails))
        navigate("/travel-route")
    }

    console.log("BUSNAME", busName);
    

  return (
    <div>
        <div className='flex flex-col justify-start items-center w-[96vw] h-screen'>
            <div className='z-10 flex justify-center items-center w-[35%] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
                <p className='text-2xl font-bold tracking-wider text-primaryText'>
                    Assign Trip
                </p>
            </div>
            <div className='flex flex-col justify-start items-center w-[90%] h-[75%] bg-secondary -mt-8 rounded-3xl drop-shadow-xl'>
                <div className='flex justify-end m-4 pr-8 w-full'><BackButton /></div>
                <div className='flex w-full justify-between'>
                    <section className='ml-6'>
                        <form action="" className='ml-4'>
                            <select name="busName" id="clicking" 
                            onChange={handleChange}
                            required={true}
                            className='w-52 h-12 bg-quaternary pl-3 rounded-lg rounded-tr-[59px] focus:outline-none drop-shadow-2xl'>
                                <option>Select a Bus..</option>
                                {busCompany.allBuses?.map((n:any) => (
                                        <option className='pb-2 text-white' value={n?.busName}>{n?.busName}</option>
                                ))}
                            </select>
                            <div className='flex items-center mt-6'>
                                <select
                                 onChange={handleChange}
                                 name="driverName" id="clicking" 
                                 className='w-52 h-12 bg-quaternary pl-3 rounded-lg rounded-tr-[59px] focus:outline-none drop-shadow-2xl'>
                                    <option >Select a Pilot..</option>
                                    {busCompany.allDriver?.map((data:any) => (
                                        <option className='pb-2' value={data?.driverName}>{data?.driverName}</option>
                                    ))}
                                </select>
                            <div className='w-40 h-[1px] -ml-4 bg-primaryText'></div>
                            <select name="coPilotName" id="clicking" 
                            onChange={handleChange}
                            className='w-52 h-12 bg-quaternary pl-3 rounded-lg rounded-tr-[59px] focus:outline-none drop-shadow-2xl'>
                                <option >Select a CoPilot..</option>
                                {busCompany.allDriver.map((data:any) => (
                                    <option className='pt-4' value={data?.driverName}>{data?.driverName}</option>
                                ))}
                            </select>
                            </div>
                            <div className="mt-12">
                                    <input type="text" 
                                    name="tripType"
                                    onClick={handleChange}
                                    value="Casual Trip"
                                    readOnly
                                    className={`w-40 bg-primary py-2 px-8 rounded-l-2xl border-r-2 border-greyText/50 focus:border-none
                                    ${tripDetails.tripType === "Casual Trip" ? "text-white" : "text-primaryText"} `}/>
                                    <input type="text" 
                                    name="tripType"
                                    onClick={handleChange}
                                    readOnly
                                    value="Pre Booked Trip"
                                    className={`w-40 bg-primary py-2 pl-4 rounded-r-2xl focus:border-none
                                    ${tripDetails.tripType === "Pre Booked Trip" ? "text-white" : "text-primaryText"}`}/>
                            </div>
                            <div className='mt-4'>
                                <input type="text" 
                                    name="tripType"
                                    onClick={handleChange}
                                    readOnly
                                    value="One Time Trip"
                                    className={`w-40 bg-primary py-2 px-8 rounded-l-2xl border-r-2 border-greyText/50 focus:border-none
                                    ${tripDetails.tripType === "One Time Trip" ? "text-white" : "text-primaryText"}`}/>
                                <input type="text" 
                                    name="tripType"
                                    onClick={handleChange}
                                    readOnly
                                    value="Round Trip"
                                    className={`w-40 bg-primary py-2 px-8 rounded-r-2xl focus:border-none
                                    ${tripDetails.tripType === "Round Trip" ? "text-white" : "text-primaryText"}`}/>
                            </div>
                            <div className='mt-10'>
                                    <label className='text-xl text-primaryText' htmlFor="">Starting Time:</label>
                                    <input className='ml-4 bg-primary focus:border-none py-1 px-3 rounded-lg'
                                    type="time"
                                    onChange={handleChange} 
                                    id='busStartTime'
                                    name='tripStartTime' />
                            </div>
                        </form>
                    </section>
                    <section className='w-[90%] -mr-4'>
                        <div className='relative flex mr-14  h-[460px] bg-quaternary rounded-3xl bg-cover'>
                            <img className='absolute justify-center items-center scale-75' src={jojopay} alt="" />
                        {tripDetails?.busName && 
                        <div>
                            <div className='m-8 justify-start items-start flex bg-quaternary'>
                                <img 
                                className='w-24 h-32 rounded-2xl '
                                src="https://st.depositphotos.com/1019192/4338/i/950/depositphotos_43389909-stock-photo-tourist-bus-traveling-on-road.jpg" alt="BusImage" />
                                <div className='ml-5'>
                                    <p className='text-primaryText'>{tripDetails?.busName}</p>
                                    <p className='text-primaryText mt-1'>Seats:<span className='text-white font-semibold ml-2'>Semi Sleeper</span></p>
                                    <p className='text-primaryText mt-1'>No. of Seats:<span className='text-white font-semibold ml-2'>52</span></p>
                                    <p className='text-primaryText mt-1'>Bus Type:<span className='text-white font-semibold ml-2'>AC</span></p>
                                </div>
                            </div>
                                <div className='absolute top-60 ml-6 w-[95%] h-12'>
                                    <div className='flex justify-around items-center'>
                                        <div className='flex items-center'>
                                            <img
                                            className='w-10 h-10 rounded-full ml-3' 
                                            src="http://www.afghanlogisticstours.com/wp-content/uploads/2022/03/avatar-profile-picture.jpg" alt="" />
                                            <p className='text-lg font-semibold pl-6'>Pilot</p>
                                        </div>
                                        <p className='text-primaryText font-semibold'>JOJO2586</p>
                                        <p className='font-semibold'>254 8657 12358</p>
                                    </div>
                                </div>
                                <div className='absolute top-80 ml-6 w-[95%] h-12'>
                                    <div className='flex justify-around items-center'>
                                        
                                        <div className='flex items-center'>
                                            <img
                                            className='w-10 h-10 rounded-full ml-3' 
                                            src="http://www.afghanlogisticstours.com/wp-content/uploads/2022/03/avatar-profile-picture.jpg" alt="" />
                                            <p className='text-lg font-semibold pl-6'>CoPilot</p>
                                        </div>
                                        <p className='text-primaryText font-semibold'>JOJO2586</p>
                                        <p className='font-semibold'>254 8657 12358</p>
                                    </div>
                                </div>
                        </div>
                        }
                        </div>
                    </section>
                </div>
            </div>
                <div className="flex w-[45%]">
                    <button
                    onClick={submitForm}
                    className='mt-4  px-10 py-3 text-2xl font-semibold tracking-wider bg-secondary rounded-tl-3xl rounded-md rounded-br-3xl'>
                        Next
                    </button>
                </div>
        </div>
    </div>
  )
}
