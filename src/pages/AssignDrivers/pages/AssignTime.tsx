import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from '../../../API/axios';
import constants from '../../../API/constants';
import BackButton from '../../../components/BackButton'

import { Card } from '../../../components/Card';
import { RootState } from '../../../store';
import { ADD_TIME } from '../../../store/reducers/assignTrip';



const Month = [
   {month: "jan", id:1},
   {month: "Feb", id:2},
   {month: "Mar", id:3},
   {month: "Apr", id:4},
   {month: "May", id:5},
   {month: "Jun", id:6},
   {month: "Jul", id:7},
   {month: "Aug", id:8},
   {month: "Sep", id:9},
   {month: "Oct", id:10},
   {month: "Nov", id:11},
   {month: "Dec", id:12},
]
const DaysInWeek = [
    {name: "Sun"},
    {name: "Mon"},
    {name: "Tue"},
    {name: "Wed"},
    {name: "Thu"},
    {name: "Fri"},
    {name: "Sat"},
];
const Days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]


export const AssignTime = () => {

    const auth = useSelector((state: RootState) => state.assignTrip);
    
    
    const [months, setMonths] = useState<any>([])
    const [daysInWeek, setDaysInWeek] = useState<string[]>([])
    const [days, setDays] = useState<string[]>([]);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();


    
    const handleDaysInWeek = (name: string) => {
        if(daysInWeek.includes(name)){
            setDaysInWeek(daysInWeek.filter((n:string) => n !== name ))
        } else {
            setDaysInWeek((daysInWeek:any) => [...daysInWeek, name])
        }
    };
    const EveryDay = {
        type: "every days",
        days: daysInWeek,
        month: ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    };

    const CustomDays = {
        type: "custom days",
        days: [],
        month: months,
    }

    console.log(CustomDays, "every day in a week");
    
    const handleMonths = (name: string) => {
        if(months.includes(name)){
            setMonths(months.filter((n:string) => n!== name))
        } else {
            setMonths((months:any) => [...months, name])
        }
    }
    const submitForm = async () => {
        dispatch(ADD_TIME(daysInWeek))
        const postData = await axios.post(constants.company.assignTrip, auth)
        .then( resp => {
            console.log(resp);            
        })
        // navigate("assign-drivers")
    };

  return (
    <div className='flex'>
        <div className='flex flex-col justify-start items-center w-[96vw] h-screen'>
            <div className='z-10 flex justify-center items-center w-[35%] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
                <p className='text-2xl font-bold tracking-wider text-primaryText'>Assign Trip</p>
            </div>
            <div className='w-full flex justify-end mr-40'><BackButton /></div>
            {/* Custome Days in a week */}
            <div className='flex flex-col items-center w-[90%] h-[80%] mb-6 overflow-x-hidden overflow-y-auto' id="noScrollBar">

            <div className='flex justify-between items-center w-[55%] h-[65px] bg-secondary rounded-3xl mt-2 drop-shadow-lg'>
                <p className='text-primaryText ml-6'>Daily/Random days in a week</p>
                <div className='flex justify-around items-center h-10 w-[55%] bg-primary mr-14 rounded-2xl text-sm'>
                    {DaysInWeek.map(({name}) => (
                        <p 
                        onClick={() => handleDaysInWeek(name)}
                        className={daysInWeek.includes(name) ? "text-primaryText" : ""}>
                            {name}
                        </p>
                    ))}
                </div>
                <div className='w-5 h-5 bg-primary border-2 border-primaryText rounded-full mr-5'>
                </div>
            </div>
            <div className='h-[1px] w-[68%] mt-6 bg-greyText/50'></div>
            {/* Custom Days in a month and selected months  */}
                <div className='w-[55%] h-36 bg-secondary mt-6 rounded-2xl'>
                    <div className='flex w-[100%] items-center justify-between mt-4 h-4 '>
                        <p className='text-primaryText m-4'>Custom Days</p>
                        {/* <div className={`${selectMonth.activeLink === null ?  " bg-primary" : "bg-primaryText border-4 border-primary" } w-5 h-5 border-2 border-primaryText rounded-full mr-5 mt-2`}></div> */}
                        <div className={`w-5 h-5 border-2 border-primaryText rounded-full mr-5 mt-2`}></div>
                    </div>
                    <div className='mt-4 ml-8 grid grid-cols-6 gap-4'>
                        {Month.map(({month, id} , index) => (
                            <div>
                                <p
                                onClick={() => handleMonths(month)}
                                className={`bg-primary p-1 ml-3 w-14 flex justify-center items-center rounded-xl drop-shadow-md`}>
                                    {month}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-start'>
                        <div className='mt-10 w-[480px] h-72 bg-secondary rounded-2xl'>
                            <div className='pt-2 ml-4 flex items-center'>
                                <div className='w-4 h-4 bg-primary rounded-full border-2 border-primaryText'></div><span className='ml-2'>Everyday</span>
                            </div>
                            <div className='pt-2 ml-4 flex items-center'>
                                <div className='w-4 h-4 bg-primary rounded-full border-2 border-primaryText'></div><span  className='ml-2'>Custom Days</span>
                            </div>
                            <div className='ml-8 mt-4  grid grid-cols-7 gap-4'>
                                {Days.map((day, index) => (
                                    <p
                                    onClick={() => {
                                        // setDays([{
                                        //     setDays: day
                                        // }])
                                    }}
                                    >
                                        {day}
                                    </p>
                                    ))}
                            </div>
                        </div>
                        <div className='flex flex-col items-center ml-4 mt-10 w-80 h-72 bg-secondary rounded-2xl'>
                            <p className='mt-4 text-lg font-semibold text-primaryText'>Selected Months</p>
                            <p>{months}</p>
                            <button 
                            onClick={submitForm}
                            className='ml-[530px] mt-44 px-12 py-3 text-xl text-primaryText font-semibold tracking-wider bg-secondary rounded-tl-3xl rounded-md rounded-br-3xl'>Assign</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
