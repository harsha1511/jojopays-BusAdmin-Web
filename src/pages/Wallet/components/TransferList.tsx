import React, { useState, useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { openModal, closeModal } from '../../../store/reducers/modal.reducer'

import {TiArrowSortedDown} from "react-icons/ti"
import { TransferDetails } from './TransferDetails'
import axios from 'axios'
import  constants  from '../../../API/constants'

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

    const {isOpen} = useSelector((store:RootStateOrAny) => store.modal);
    const dispatch = useDispatch()

    const [details, setDetails] = useState<any>({
        List,
        activeList: null,
    })
    const [names, setName] = useState<any>()

    useEffect(() => {
        const getNames = async () => {
            const response = await axios.get('http://192.168.1.17:80');
            console.log(response.data, "OBJECTTTT")
            setName(response.data)
        };
        getNames()
    }, []);
    console.log(names?.map((i:any) => (i.image)),"namesss");
    

  return (
    <div>
        <div className='z-10 w-[510px] h-[468px] bg-secondary rounded-2xl overflow-y-auto overflow-x-hidden'>
                {names?.map((data:any) => (

                    <div className='flex justify-between items-center mt-6 ml-6'>
                <div className='flex items-center'>
                    <img src={data.image}
                    alt=""
                    className='w-12 h-12 rounded-full'
                    onClick={
                        () =>dispatch(isOpen(true))}
                        />
                    <div className='w-32'>
                    <p className='pl-3 tracking-wide font-semibold'>{data.Name}</p>
                    <p className='pl-3 -mt-1 font-thin text-greyText'>{data.from}</p>
                    </div>
                </div>
                <div className={`mr-10 flex ${data.status === "true" ? "text-quaternaryText" : "text-redText"} `}>
                    <p className='text-2xl'>{data.time}$</p>
                    <TiArrowSortedDown />
                </div>
                <div className='text-greyText mr-6'>
                    <p>20.11.2022</p>
                    <p>12.55 pm</p>
                </div>
                </div>
                    ))}
            {/* // </div> ) : ("") } */}
             {/* )} */}
        </div>
    </div>
  )
}
