import React, { useState } from 'react'
import BackButton from '../../../components/BackButton'

import jojopay from "../../../assets/images/jojopay.png"
import { Link } from 'react-router-dom'


export const OneTimeTrip = () => {

    
    const [busName, setBusName] = useState()

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
                <p className='text-xl font-bold tracking-wider text-primaryText'>One Time Trip</p>
            </div>
            <div className='flex flex-col justify-start items-center w-[1300px] h-[530px] bg-secondary -mt-8 rounded-3xl drop-shadow-xl'>
                <div className='flex justify-end m-4 pr-8 w-full'><BackButton /></div>
                <div className='flex w-full justify-between'>
                    <section className='ml-6'>
                        <form action="" className='ml-4 flex flex-col'>
                            <div className='flex items-center'>
                            <input type="date" name="" id='busStartDate' className='bg-primary rounded-lg p-1 w-32 focus:border-none ' />
                            <div className='w-20 h-[1px]  bg-primaryText'></div>
                            <select name="Driver" id="clicking" 
                            onChange={handleChange}
                            required={true}
                            className='w-52 h-12 bg-quaternary pl-3 rounded-lg rounded-tr-[59px] focus:outline-none drop-shadow-2xl'>
                                <option >Select a Bus..</option>
                                {BusName.map(({name}) => (
                                    <option className='pb-2' key={name} value={name}>{name}</option>
                                    ))}
                            </select>
                            <div className='w-16 h-[1px] -ml-4 bg-primaryText'></div>
                            <button className='py-2 px-3 bg-primaryText rounded-lg drop-shadow-lg font-bold'>Check</button>
                            </div>
                            <div className='flex items-center mt-6'>
                                <select
                                 onChange={handleChange}
                                 name="Driver" id="clicking" 
                                 className='w-44 h-12 bg-quaternary pl-3 rounded-lg rounded-tr-[59px] focus:outline-none drop-shadow-2xl'>
                                    <option >Select a Pilot..</option>
                                    {BusName.map(({name, pilot, copilot}) => (
                                        <option className='pb-2' value={pilot}>{pilot}</option>
                                    ))}
                                </select>
                            <div className='w-20 h-[1px] -ml-4 bg-primaryText'></div>
                            <select name="Driver" id="clicking" className='w-44 h-12 bg-quaternary pl-3 rounded-lg rounded-tr-[59px] focus:outline-none drop-shadow-2xl'>
                                <option >Select a CoPilot..</option>
                                {BusName.map(({name,pilot, copilot}) => (
                                    <option className='pb-2' value={copilot}>{copilot}</option>
                                ))}
                            </select>
                            <div className='w-16 h-[1px] -ml-4 bg-primaryText'></div>
                            <button className='py-2 px-3 bg-primaryText rounded-lg drop-shadow-lg font-bold'>Check</button>
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
                       
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}
