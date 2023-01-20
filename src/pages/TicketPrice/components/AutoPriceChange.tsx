import React,{useState} from 'react'
import CustomForm from '../../../components/Form'
import * as yup from "yup"
import Input from "../../../components/Input";
import { ErrorMessage } from 'formik';

import { MdDeleteForever } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import { ToggleButton } from '../../../components/ToggleButton'
import axios from '../../../API/axios';
import constants from '../../../API/constants';



interface InitialProps {
    type: string;
    fromTime: any;
    toTime: any;
    price: string;
}
export const AutoPriceChange = () => {


    const validationSchema = yup.object().shape({
        fromTime: yup
            .string()
            .required("Please enter a Time")
            .label("fromTime"),
        toTime: yup
            .string()
            .required("Please enter a Time")
            .label("toTime"),
        price: yup
            .string()
            .required("Please enter a Amount")
            .label("price")
    })

    const initialState:InitialProps = {
        type: "Auto Price Change",
        fromTime: "",
        toTime: "",
        price: "",
    }

    const [showPrice, setShowPrice] = useState<number>(0)
    const [priceChange, setPriceChange] = useState<object>()

    const renderError = (msg:string) => <div className='flex justify-center my-2 w-full'>
        <p className='text-pinkText font-semibold py-3 px-5 bg-quaternary backdrop-blur rounded-xl'>{msg}</p>
        </div>
    const errorName = [
        "price",
        "fromTime",
        "toTime"
    ]

    console.log("nalla paarunga", priceChange);
    const onSubmit = async (values:InitialProps) => {
        console.log(values, "seekabcdjhashgdv");
        
        setPriceChange(values) 
        const response = await axios.post(constants.ticketPrice.autoPrice, priceChange).
        then(resp => console.log("sent", resp));
    }
    console.log(priceChange, "INPUTTTTTT");

  return (
    <div className='flex flex-col items-center w-full h-full overflow-x-hidden overflow-y-auto'>
        {[...Array(showPrice)].map((s, index) => (
            <CustomForm
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
            <div className='flex justify-center w-[95%] mt-4 h-24 bg-quaternary rounded-2xl'>
                <div className='flex items-center h-full w-[65%]'>
                    <div className='flex flex-col items-center justify-center w-44  h-[80px]  rounded-xl shadow-inner bg-primary ml-8 my-2'>
                        <Input 
                        className='bg-secondary focus:border-none mt-1 mx-3 rounded-lg drop-shadow-lg' 
                        type="time" name="fromTime"
                        />
                        {/* <Input className='hidden' type='text' name='type' /> */}
                        <p className='text-primaryText font-semibold'>From</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-36  h-[80px]  rounded-xl shadow-inner bg-primary ml-8'>
                        <Input
                        className='bg-secondary focus:border-none mt-1 mx-3 rounded-lg drop-shadow-lg' type="time" name="toTime" />
                        <p className='text-primaryText font-semibold'>To</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[200px] h-[80px] rounded-xl shadow-inner ml-8 bg-primary'>
                            <Input
                            type='number'
                            name='price'
                            className='w-28 bg-secondary rounded-[10px] mx-6 focus:border-none shadow-lg ' />
                        <p className='text-primaryText'>Price/Seat/Km</p>
                    </div>
                </div>
                <div className='flex justify-center items-center h-full w-[30%] ml-8'>
                    <button type='submit' className='ml-10'><TiTick className='w-[26px] h-[26px] text-quaternaryText' /></button>
                    <button className='ml-4 mr-6'
                    onClick={() => setShowPrice(showPrice-1)}>
                        <MdDeleteForever className='w-6 h-6 text-redText' />
                    </button>
                    <ToggleButton className='' isBig={true} />
                </div>
            </div>
            <div className='flex'>
                <ErrorMessage name='price' render={renderError}/>
                <ErrorMessage name='toTime' render={renderError}/>
                <ErrorMessage name='fomrTime' render={renderError}/>
            </div>
            </CustomForm>
        ))
        }
        <div className='w-[95%] -ml-8 mt-4 h-20 bg-quaternary rounded-2xl'>
            <div 
            onClick={() => setShowPrice(showPrice+1)}
            className='flex justify-center items-center w-[80%] h-16 m-2 rounded-2xl bg-primary cursor-pointer'>
                <p
                className='text-lg font-bold text-primaryText'
                >Add New +</p>
            </div>
        </div>
    </div>
  )
}
