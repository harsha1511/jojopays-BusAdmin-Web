import React, { useState } from 'react'

import {TiArrowSortedDown} from "react-icons/ti"

interface TYPPP {
    type: string
}

interface ListProps {
    name: string 
    amount:number
    transcation: string
}



export const TransferList = ({type}:TYPPP) => {
    
    const List:ListProps[] = [
        {name: "jack" , amount: 56 , transcation:"all"},
        {name: "Mervin" , amount: 52, transcation:"Rec"},
        {name: "Joel" , amount: 33, transcation:"Sent"},
        {name: "Leo" , amount: 5, transcation:"Sent"},
        {name: "Mane" , amount: 12, transcation:"Rec"},
        {name: "joa" , amount: 77, transcation:"Rec"},
        {name: "Kroos" , amount: 2, transcation:"Sent"},
        {name: "Oscar" , amount: 44, transcation:"Rec"},
    ]


    const [typee, setTypee] = useState(type)

  return (
    <div>
        <div className='w-[510px] h-[480px] bg-secondary rounded-2xl overflow-y-auto overflow-x-hidden'>
            {List.map(({name, amount, transcation}) => {
                return transcation === type ? (
                <div className='flex justify-between items-center mt-6 ml-6'>
                <div className='flex items-center'>
                    <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                    className='w-12 h-12 rounded-full' />
                    <div className='w-32'>
                    <p className='pl-3 tracking-wide font-semibold'>{name}</p>
                    <p className='pl-3 -mt-1 font-thin text-greyText'>Food</p>
                    </div>
                </div>
                <div className={`mr-10 flex ${transcation === "Rec" ? "text-quaternaryText" : "text-redText"} `}>
                    <p className='text-2xl'>{amount}$</p>
                    <TiArrowSortedDown />
                </div>
                <div className='text-greyText mr-6'>
                    <p>20.11.2022</p>
                    <p>12.55 pm</p>
                </div>
            </div> ) : ("") }
            )}
        </div>
    </div>
  )
}
