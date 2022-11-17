import React, { useState } from 'react'
import BackButton from '../../../components/BackButton'

import jojopay from "../../../assets/images/jojopay.png"
import { Link } from 'react-router-dom'

export const AssignTrip = () => {

    const [busName, setBusName] = useState("5")

    const BusName = [
        {name: "SRV" , pilot: "andrew" , copilot: "sugan"},
        {name: "Intrcity", pilot: "andrew" , copilot: "sugan"},
        {name: "Essar" , pilot: "andrew" , copilot: "sugan"},
    ]

    const handleChange = (e: any) => {
        // if(e.target.key === "name"){
            const bus = e.target.value
            setBusName(bus)        
        // }
        // console.log(bus);
    }


  return (
    <div>
        <div className='flex flex-col justify-start items-center w-[96vw] h-screen'>
            <div className='z-10 flex justify-center items-center w-[600px] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
                <p className='text-xl font-bold tracking-wider text-primaryText'>Assign Trip</p>
            </div>
            <div className='flex flex-col justify-start items-center w-[1300px] h-[530px] bg-secondary -mt-8 rounded-3xl drop-shadow-xl'>
                <div className='flex justify-end m-4 pr-8 w-full'><BackButton /></div>
                <div className='flex w-full justify-between'>
                    <section className='ml-6'>
                        <form action="" className='ml-4'>
                            <select name="Driver" id="clicking" 
                            onChange={handleChange}
                            required={true}
                            className='w-52 h-12 bg-quaternary pl-3 rounded-lg rounded-tr-[59px] focus:outline-none drop-shadow-2xl'>
                                <option >Select a Bus..</option>
                                {BusName.map(({name}) => (
                                    <option className='pb-2' key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            <div className='flex items-center mt-6'>
                                <select
                                 onChange={handleChange}
                                 name="Driver" id="clicking" 
                                 className='w-52 h-12 bg-quaternary pl-3 rounded-lg rounded-tr-[59px] focus:outline-none drop-shadow-2xl'>
                                    <option >Select a Pilot..</option>
                                    {BusName.map(({name, pilot, copilot}) => (
                                        <option className='pb-2' value={pilot}>{pilot}</option>
                                    ))}
                                </select>
                            <div className='w-40 h-[1px] -ml-4 bg-primaryText'></div>
                            <select name="Driver" id="clicking" className='w-52 h-12 bg-quaternary pl-3 rounded-lg rounded-tr-[59px] focus:outline-none drop-shadow-2xl'>
                                <option >Select a CoPilot..</option>
                                {BusName.map(({name,pilot, copilot}) => (
                                    <option className='pb-2' value={copilot}>{copilot}</option>
                                ))}
                            </select>
                            </div>
                            <div className="mt-12 text-primaryText">
                                <div>
                                  <button className="bg-primary w-36 py-[6px] rounded-l-2xl">Casual Trip</button>
                                  <button className="bg-primary w-36 py-[6px] border-l-2 border-greyText/[.5] rounded-r-2xl">Pre-booked Trip</button>
                                </div>
                                <div className="mt-3">
                                  <button className="bg-primary w-36 py-[6px] rounded-l-2xl">One Way Trip</button>
                                  <button className="bg-primary w-36 py-[6px] border-l-2 border-greyText/[0.5] rounded-r-2xl">Round Trip</button>
                                </div>
                            </div>
                            <div className='mt-10'>
                                    <label className='text-xl text-primaryText' htmlFor="">Starting Time:</label>
                                    <input className='ml-4 bg-primary focus:border-none py-1 px-3 rounded-lg' type="time" id='busStartTime' />
                            </div>
                            <Link to={"/travel-route"}>
                            <button className='mt-40 ml-60 px-12 py-3 text-2xl font-semibold tracking-wider bg-secondary rounded-tl-3xl rounded-md rounded-br-3xl'>Next</button>
                            </Link>
                        </form>
                    </section>
                    <section>
                        <div className='relative flex mr-14 w-[600px] h-[540px] bg-quaternary rounded-3xl bg-cover'>
                            <img className='absolute justify-center items-center scale-75' src={jojopay} alt="" />
                        { busName && 
                        <div>
                            <div className='m-8 justify-start items-start flex bg-quaternary'>
                                <img 
                                className='w-24 h-32 rounded-2xl '
                                src="https://st.depositphotos.com/1019192/4338/i/950/depositphotos_43389909-stock-photo-tourist-bus-traveling-on-road.jpg" alt="BusImage" />
                                <div className='ml-5'>
                                    <p className='text-primaryText'>{busName}</p>
                                    <p className='text-primaryText mt-1'>Seats:<span className='text-white font-semibold ml-2'>Semi Sleeper</span></p>
                                    <p className='text-primaryText mt-1'>No. of Seats:<span className='text-white font-semibold ml-2'>52</span></p>
                                    <p className='text-primaryText mt-1'>Bus Type:<span className='text-white font-semibold ml-2'>AC</span></p>
                                </div>
                            </div>
                                <div className='absolute top-60 ml-6 w-[90%] h-12'>
                                    <div className='flex justify-between items-center'>
                                        
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
                                <div className='absolute top-80 ml-6 w-[90%] h-12'>
                                    <div className='flex justify-between items-center'>
                                        
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
        </div>
    </div>
  )
}
