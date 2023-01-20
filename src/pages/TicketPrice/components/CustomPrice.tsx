import React,{useState, useEffect} from 'react'
import axios from '../../../API/axios';
import constants from '../../../API/constants';
import { nameShrinker } from "../../../utils/helpers";




import { MdDeleteForever } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'



interface CustomProps {
    type: string;
    bus: string;
    price: any;
}

export const CustomPrice = () => {

    const [showPrice, setShowPrice] = useState<number>(0)
    const [customPrice, setCustomPrice] = useState<CustomProps>({
        type: "Custom Price",
        bus: "",
        price:"",
    })
    const [selectBus, setSelectBus] = useState<any>()

    useEffect(() => {
      const getBus = async () => {
        const response = await axios.get(constants.filters.selectbus)
        console.log("resp", response.data);
        setSelectBus(response.data)
        
      }
      getBus();
    }, [])
    

    const handleChange = (e:any) => {
        e.preventDefault();
        const {name, value} = e.target;
        setCustomPrice({...customPrice, [name]: value})
    }
    console.log("TIME", customPrice);


  return (
    <div className='flex flex-col items-center w-full h-full overflow-x-hidden overflow-y-auto'>
        {[...Array(showPrice)].map((s, index) => (
            <form>
            <div className='flex justify-between w-[98%] mt-4 h-24 bg-quaternary rounded-2xl'>
                <div className='flex items-center justify-around h-full w-[80%]'>
                    <div className='flex items-center h-14 w-60 bg-secondary rounded-xl ml-2 mr-8'>
                        <p className='ml-3 mr-4 text-primaryText'>Bus</p>
                        <select 
                        id="clicking"
                        className='w-36 h-8 pl-2 focus:outline-none bg-primary ml-8 rounded-xl ' 
                        name="bus"
                        onChange={handleChange}>
                            <option value={customPrice.bus}>Select a Bus</option>
                            {selectBus.map((data:string, index:number) => (
                                <option className='text-sm' value={customPrice.bus}>{nameShrinker( data , 10)}</option>
                            ))}
                        </select>
                    </div>
                    <p className='w-40 text-sm text-primaryText font-semibold'>You changed the Price at: 2.47am today</p>
                    <div className='flex flex-col justify-center items-center w-36 h-[80px] rounded-xl shadow-inner ml-8 bg-primary'>
                        <input
                        className='w-28 bg-secondary rounded-[10px] mx-6 focus:border-none shadow-lg'
                        type="number" value={customPrice.price} name="price" onChange={handleChange}/>
                        <p className='text-primaryText'>Price/Seat/Km</p>
                    </div>
                </div>
                <div className='flex justify-center items-center h-full w-[20%] ml-8'>
                    <button className='ml-10'><TiTick className='w-[26px] h-[26px] text-quaternaryText' /></button>
                    <button className='ml-4 mr-6'
                    onClick={() => setShowPrice(0)}>
                        <MdDeleteForever className='w-6 h-6 text-redText' />
                    </button>
                </div>
            </div>
            <div>
            </div>
            </form>
        ))
        }
        <div className='w-[95%] mt-4 h-20 bg-quaternary rounded-2xl'>
            <div 
            onClick={() => setShowPrice(1)}
            className='flex justify-center items-center w-[80%] h-16 m-2 rounded-2xl bg-primary cursor-pointer'>
                <p
                className='text-lg font-bold text-primaryText'
                >Add New +</p>
            </div>
        </div>
    </div>
  )
}
