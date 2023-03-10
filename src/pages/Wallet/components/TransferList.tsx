import React, { useState, useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

import {TiArrowSortedDown} from "react-icons/ti"
import { TransferDetails } from './TransferDetails'
import  constants  from '../../../API/constants'
import axios from '../../../API/axios'

interface TYPPP {
    type: string
}



export const TransferList = ({type}:TYPPP) => {

    const {isOpen} = useSelector((store:RootStateOrAny) => store.modal);
    const dispatch = useDispatch()

    const [names, setName] = useState<any>()

    

    useEffect(() => {
        const getNames = async () => {
            const response = await axios.get(constants.transaction.list);
            console.log(response, "OBJECTTTT")
            setName(response.data)
        };
        getNames()
    }, []);

    // console.log(names?.map((i:any) => (i.image)),"namesss");
    
  let jojo:string = "jojoId1014";


  return (
    <div>
        <div className='z-10 w-[510px] h-[468px] bg-secondary rounded-2xl overflow-y-auto overflow-x-hidden'>
            {/* {names ? */}
            <div>
                {names?.map((data:any) => (
                    <div className='flex justify-between items-center mt-6 ml-6'>
                <div className='flex items-center'>
                    <img 
                    src={data?.image}
                    // src={"https://robohash.org/" + Math.floor(Math.random() * 90 + 10)}
                    alt="jkashbh"
                    className={`w-12 h-12 rounded-full1 ${data?.image ? "" : "animate-pulse"}`}
                    onClick={
                        () =>dispatch(isOpen(true))}
                        />
                    <div className='w-32'>
                    <p className='pl-3 tracking-wide font-semibold'>{data?.senderName}</p>
                    <p className='pl-3 -mt-1 font-thin text-greyText'>{data?.purposeForTransaction}</p>
                    </div>
                </div>
                <div className={`mr-10 flex ${jojo === data?.SenderJojoId ? "text-quaternaryText" : "text-redText"} `}>
                    <p className='text-2xl'>{data?.typeOfTransaction}$</p>
                    <TiArrowSortedDown className={`${jojo === data?.SenderJojoId ? "rotate-180" : "rotate-0"}"`} />
                </div>
                <div className='text-greyText mr-6'>
                    <p>{data?.transactionDate}</p>
                    <p>{data?.transactionTime}</p>
                </div>
                </div>
                    ))}
            </div>
                {/* : 
                <div>
                    <p className='m-3'>
                     Loading...
                    </p>
                </div>
                } */}
        </div>
    </div>
  )
}
