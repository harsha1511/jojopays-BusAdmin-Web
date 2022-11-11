import React from 'react'
import BankDetails from '../../Profile/components/BankDetails'

export const TopupWallet = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center h-full'>
            <div className='flex flex-col items-center w-[900px] h-60 mt-10 bg-quaternary rounded-sm rounded-br-xl rounded-tl-[30px]'> 
                <p className='mt-4'>Top-up Wallet</p>
                <input
                placeholder='Enter Amount'
                className='w-[80%] mt-6 h-[45px] bg-primary px-4 py-1 rounded-md border-2 border-blueText'
                type="text" name="" id="" />      
            </div>
            <BankDetails />
        </div>
    </div>
  )
}
