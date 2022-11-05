import React, { useState } from 'react'
import BackButton from '../../../components/BackButton'

import { Card } from '../../../components/Card';



const Month = [
    "jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]


export const AssignTime = () => {
        
    const [selectMonth, setSelectMonth] = useState<any>({
            Month,
            activeLink: null
        }
        )
    
    const handleMonth = (index:number) => {
        setSelectMonth({activeLink: index})
        if(selectMonth.activeLink === index){
            setSelectMonth({activeLink: null})
        }
    }    


    // const handleOverlay = async () => {
    //     dispatch(OVERLAY_SUCCESS(<Card title="Resume" isUpdate={false} ifResume={false} image=""/>))
    // }
    
        console.log(selectMonth.activeLink)
        

  return (
    <div>
        <div className='flex flex-col justify-start items-center w-[96vw] h-screen'>
            <div className='z-10 flex justify-center items-center w-[600px] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
                <p className='text-xl font-bold tracking-wider text-primaryText'>Assign Trip</p>
            </div>
            <div className='w-full flex justify-end mr-40 '><BackButton /></div>
            {/* Custome Days in a week */}
            <div className='flex justify-between items-center w-[55%] h-[65px] bg-secondary rounded-3xl mt-2 drop-shadow-lg'>
                <p className='text-primaryText ml-6'>Daily/Random days in a week</p>
                <div className='flex justify-around items-center h-10 w-[55%] bg-primary mr-14 rounded-2xl text-sm'>
                    <p className='text-redText'>Sun</p>
                    <p>Mon</p>
                    <p>Tue</p>
                    <p>Wed</p>
                    <p>Thu</p>
                    <p>Fri</p>
                    <p>Sat</p>
                </div>
                <div className='w-5 h-5 bg-primary border-2 border-primaryText rounded-full mr-5'>
                </div>
            </div>
            <div className='h-[1px] w-[68%] mt-6 bg-greyText/50'></div>
            {/* Custom Days in a month and selected months  */}
                <div className='w-[55%] h-36 bg-secondary mt-6 rounded-2xl'>
                    <div className='flex w-[100%] items-center justify-between mt-4 h-4 '>
                        <p className='text-primaryText m-4'>Custom Days</p>
                        <div className={`${selectMonth.activeLink === null ?  " bg-primary" : "bg-primaryText border-4 border-primary" } w-5 h-5 border-2 border-primaryText rounded-full mr-5 mt-2`}></div>
                    </div>
                    <div className='mt-4 ml-8 grid grid-cols-6 gap-4'>
                        {Month.map((month , index) => (
                            <div>
                                <p
                                onClick={() =>handleMonth(index)}
                                style={(index === selectMonth.activeLink ? {color: "#3973FF"} : {color: "white"})}
                                className={`bg-primary p-1 ml-3 w-14 flex justify-center items-center rounded-xl drop-shadow-md`}>
                                    {month}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className='mt-10 w-[480px] h-64 bg-secondary rounded-2xl'>
                        <div className='m-4 w-4 h-4 bg-primary rounded-full'></div><span className='inline ml-2' >Everyday</span>

                    </div>
                </div>
        </div>
    </div>
  )
}
