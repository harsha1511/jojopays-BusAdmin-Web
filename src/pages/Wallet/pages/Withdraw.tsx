import React,{useState} from 'react'
import BankDetails from '../../Profile/components/BankDetails'
import { WalletNavBar } from '../components/WalletNavBar'

export const Withdraw = () => {


    const StandardAmount = [100,500,1000,10000]

    const [amount, setAmount] = useState<number>()

  return (
    <div className='w-[96vw] h-screen flex'>
        <section className='w-[80%]'>
        <div className='flex flex-col items-center justify-center h-full'>
            <div className='flex flex-col items-center w-[900px] h-60 mt-10 bg-quaternary rounded-sm rounded-br-xl rounded-tl-[30px] drop-shadow-lg'> 
                <p className='mt-4'>Withdraw</p>
                <input
                placeholder='Enter Amount'
                className='w-[80%] mt-6 h-[45px] bg-primary px-4 py-1 rounded-md border-2 border-blueText focus:border-blueText focus:border-2'
                type="number" name="" id="" />
                <div className='flex mr-[300px] mt-3'>
                <p className=''>Standard Amount:</p>
                {StandardAmount.map((number) => (
                    <p
                    className='ml-4 p-[2px] px-2 rounded-md bg-secondary text-primaryText'
                    onClick={() =>setAmount(number)}
                    >
                    ${number}
                    </p>
                ))}      
                </div>
                <div className='pb-2 mt-2 px-4 bg-quaternary drop-shadow-xl rounded-sm rounded-tl-xl rounded-br-3xl'>
                <input type="text" name="" id="" placeholder='Reason...'
                className='mt-4 w-96 h-10 bg-quaternary border-2 border-blueText rounded-3xl px-4  focus:border-blueText focus:border-2 ' />
                </div>
            </div>
            <p className='-mb-6 mt-3 text-primaryText font-semibold'>
            Credit To    
            </p>
            <BankDetails />
            <input type="password" 
            className='py-4 px-8 mt-6 h-16 w-44 rounded-full bg-secondary border-2 border-blueText focus:border-2 focus:border-blueText text-3xl'/>
            <p className='mt-2 tracking-wide text-greyText'>Password</p>
            <button className='mt-2 p-4 px-6 bg-quaternary rounded-md rounded-br-3xl rounded-tl-3xl'>
                Withdraw    
            </button>
        </div>
        </section>
        <section className='w-[20%]'>
            <WalletNavBar pageName='Withdraw' />
        </section>
    </div>
  )
}
