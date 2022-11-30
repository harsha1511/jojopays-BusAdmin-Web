import React,{useState} from 'react'
import CustomForm from '../../../components/Form'
import * as yup from "yup"
import Input from "../../../components/Input";
import { ErrorMessage } from 'formik';




import { MdDeleteForever } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'


interface InitialProps {
    busName: string;
    price: string
}
export const CustomPrice = () => {

    const validationSchema = yup.object().shape({
        busName: yup.string().required("Please enter a Bus Name").label("busName"),
        price: yup.string().required("Please enter a Amount").label("price"),
    })


    const initialState: InitialProps = {
        busName: "",
        price: "",
    }
    const [showPrice, setShowPrice] = useState<number>(0)
    const [customPrice, setCustomPrice] = useState<object>()

    const onSubmit = (values:InitialProps) => {
        setCustomPrice(values);
    }
    console.log("TIME", customPrice);

    const renderError = (msg:any) => <div className='flex justify-center my-2 w-full'>
      <p className='text-pinkText font-semibold py-3 px-5 bg-quaternary backdrop-blur rounded-xl'>{msg}</p>
      </div>
    

  return (
    <div className='flex flex-col items-center w-full h-full overflow-x-hidden overflow-y-auto'>
        {[...Array(showPrice)].map((s, index) => (
            <CustomForm 
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <div className='flex justify-between w-[900px] mt-4 h-24 bg-quaternary rounded-2xl'>
                <div className='flex items-center justify-around h-full w-[80%]'>
                    <div className='flex items-center h-14 w-52 bg-secondary rounded-xl mr-8'>
                        <p className='ml-3 text-primaryText'>Bus</p>
                        <Input className='w-36 h-8 pl-4 focus:border-none bg-primary ml-2 rounded-xl' type="text" name="busName" />
                    </div>
                    <p className='w-40 text-sm text-primaryText font-semibold'>You changed the Price at: 2.47am today</p>
                    <div className='flex flex-col justify-center items-center w-36 h-[80px] rounded-xl shadow-inner ml-8 bg-primary'>
                        <Input
                        className='w-28 bg-secondary rounded-[10px] mx-6 focus:border-none shadow-lg'
                        type="number" name="price"/>
                        <p className='text-primaryText'>Price/Seat/Km</p>
                    </div>
                </div>
                <div className='flex justify-center items-center h-full w-[20%] ml-8'>
                    <button className='ml-10'><TiTick className='w-[26px] h-[26px] text-quaternaryText' /></button>
                    <button className='ml-4 mr-6'
                    onClick={() => setShowPrice(showPrice-1)}>
                        <MdDeleteForever className='w-6 h-6 text-redText' />
                    </button>
                </div>
            </div>
            <div>
                <ErrorMessage name="busName" render={renderError} />
                <ErrorMessage name="price" render={renderError} />
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
