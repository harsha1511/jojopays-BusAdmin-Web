import React,{useState} from 'react'
import CustomForm from '../../../components/Form'
import * as yup from "yup"
import Input from "../../../components/Input";
import { ErrorMessage } from 'formik';


import { MdDeleteForever } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import { ToggleButton } from '../../../components/ToggleButton'


interface InitialProps {
    type: string;
    fromTime: any;
    toTime: any;
    price: any;
    fromPoint: string;
    toPoint:string
}

export const AutoPriceRoutes = () => {

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
            .label("price"),
        fromPoint:yup
            .string()
            .required("Please enter a Starting point")
            .label("fromPoint"),
        toPoint:yup.string().required("Please enter a Ending point").label("toPoint")
        
    })

    const initialState:InitialProps = {
        type: "Auto Price Routes",
        fromTime: "",
        toTime: "",
        price: "",
        fromPoint: "",
        toPoint: "",
    }

    const [showPrice, setShowPrice] = useState<number>(0)
    const [priceRoutes, setPriceRoutes] = useState<object>()

    const onSubmit = (value: InitialProps) => {
        setPriceRoutes(value)  
    }

    const renderError = (msg:any) => <div className='flex justify-center my-2 w-full'>
        <p className='text-pinkText font-semibold py-3 px-5 bg-quaternary backdrop-blur rounded-xl'>{msg}</p>
        </div>
    console.log(priceRoutes, "INPUTTTTTT");


  return (
    <div className='flex flex-col items-center  w-full h-full overflow-x-hidden overflow-y-auto'>
        <div className='flex justify-between w-[800px] mt-4 h-24 bg-quaternary rounded-2xl'>
                <div className='flex justify-around items-center h-full w-[65%]'>
                    <div className='flex flex-col items-center justify-center w-32  h-[80px]  rounded-xl shadow-inner bg-primary ml-40'>
                        <p className='flex justify-center w-28 py-2 bg-secondary rounded-[10px] mx-4 shadow-lg '>
                                hiii
                        </p>
                        <p className='text-primaryText font-semibold mt-1'>From</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-36  h-[80px]  rounded-xl shadow-inner bg-primary ml-8'>
                        <p className='flex justify-center w-28 py-2 bg-secondary rounded-[10px] mx-4 shadow-lg '>
                                hiii
                        </p>
                        <p className='text-primaryText font-semibold mt-1'>To</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-36 h-[80px] rounded-xl shadow-inner ml-4 bg-primary'>
                        <p className='flex justify-center w-28 py-2 bg-secondary rounded-[10px] mx-4 shadow-lg '>
                            hiii
                        </p>
                        <p className='text-primaryText mx-4'>Price/Seat/Km</p>
                    </div>
                    <div className='flex flex-col ml-8'>
                        <div className='flex bg-secondary p-2 rounded-lg'>
                            <p className='w-10 text-primaryText'>From</p>
                            <p className='flex justify-center w-28 py-[2px] bg-primary rounded-[10px] mx-4 shadow-lg '>
                                hiii
                            </p>
                        </div>
                        <div className='flex mt-1 bg-secondary p-2 rounded-lg'>
                            <p className='w-10 text-primaryText'>To</p>
                            <p className='flex justify-center w-28 py-[2px] bg-primary rounded-[10px] mx-4 shadow-lg '>
                                hiii
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center h-full w-[20%] ml-2'>
                    <ToggleButton className='' isBig={true} />
                </div>
            </div>
        {[...Array(showPrice)].map((s, index) => (
        <CustomForm
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={onSubmit} >
            <div className='flex justify-between w-[800px] mt-4 h-24 bg-quaternary rounded-2xl'>
                <div className='flex justify-around items-center h-full w-[65%]'>
                    <div className='flex flex-col items-center justify-center w-36  h-[80px]  rounded-xl shadow-inner bg-primary ml-36'>
                        <Input 
                        className='bg-secondary focus:border-none py-1 px-3 w-24 rounded-lg drop-shadow-lg mx-2' 
                        type="time" name="fromTime"
                        />
                        <p className='text-primaryText font-semibold mt-1'>From</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-36  h-[80px]  rounded-xl shadow-inner bg-primary ml-8'>
                        <Input
                        className='bg-secondary focus:border-none py-1 px-3 w-28 mx-2 rounded-lg drop-shadow-lg'
                         type="time" name="toTime" />
                        <p className='text-primaryText font-semibold mt-1'>To</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-36 h-[80px] rounded-xl shadow-inner ml-4 bg-primary'>
                        <Input
                        className='w-28 bg-secondary rounded-[10px] mx-6 focus:border-none shadow-lg'
                        type="number" name='price'/>
                        <p className='text-primaryText mx-4'>Price/Seat/Km</p>
                    </div>
                    <div className='flex flex-col ml-8'>
                        <div className='flex bg-secondary p-2 rounded-lg'>
                            <p className='w-10 text-primaryText'>From</p>
                            <Input className='w-36 h-6 bg-primary rounded-xl ml-2 pl-4 focus:border-none' type="text" name="fromPoint" />
                        </div>
                        <div className='flex mt-1 bg-secondary p-2 rounded-lg'>
                            <p className='w-10 text-primaryText'>To</p>
                            <Input className='w-36 h-6 bg-primary rounded-xl ml-2 pl-4 focus:border-none' type="text" name="toPoint" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center h-full w-[20%] ml-2'>
                    <button type="submit" className='ml-6'><TiTick className='w-[26px] h-[26px] text-quaternaryText' /></button>
                    <button className='mr-6'
                    onClick={() => setShowPrice(showPrice-1)}>
                        <MdDeleteForever className='w-6 h-6 text-redText' />
                    </button>
                    <ToggleButton className='' isBig={true} />
                </div>
            </div>
            <div className='flex flex-wrap'>
                <ErrorMessage name='price' render={renderError} />
                <ErrorMessage name='fromPoint' render={renderError} />
                <ErrorMessage name='toTime' render={renderError} />
                <ErrorMessage name='toPoint' render={renderError} />
                <ErrorMessage name='fromTime' render={renderError} />
            </div>
        </CustomForm>
        ))
        }
        <div className='w-[95%] mt-4 h-20 bg-quaternary rounded-2xl'>
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
