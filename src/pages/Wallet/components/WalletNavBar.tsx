import React, { useState } from "react";
import { Link } from "react-router-dom";

import {FiChevronRight} from 'react-icons/fi'
import {BiWallet} from "react-icons/bi"


interface Navprops {
  pageName: string
}

export const WalletNavBar = (
  {pageName}:Navprops
) => {

  const [hover, setHover] = useState<number>(0)

  return (
    <div>
        <div className='flex flex-col items-center bg-secondary drop-shadow-xl'>
        <div className="flex items-center justify-center flex-col mt-10">
          <p className="mb-2 text-greyText font-semibold tracking-wide">Admin</p>
          <img
            src="https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166dfdf8c4/_orig/photo-1507679799987-c73779587ccf-1024x683.jpeg"
            alt="profile"
            className="w-28 h-28 rounded-full border-2 border-primaryText border-dashed p-2"
          />
        </div>
        <div className='flex flex-col items-center'>
            <p className='mt-8 text-greyText font-semibold tracking-wide'>My Wallet Balance</p>
            <p className='text-3xl tracking-wider mt-2'>12,566$</p>
            <Link to={'/topup-wallet'} className='relative mt-6 mr-40' 
            onMouseEnter={() => setHover(1)} 
            onMouseLeave={() =>setHover(0)}>
              {pageName === "Topup" ? 
              <div className={`absolute z-0 w-44 h-14 bg-primaryText rounded-2xl blur-[6px]`}></div>
              :
              <div className={`absolute z-0 w-44 h-14 bg-primaryText rounded-2xl ${hover === 1 ? "blur-[6px]" : ""}`}></div>
              }
                <div className='absolute z-10 flex items-center w-44 h-14 bg-quaternary rounded-xl hover:drop-shadow-3xl'>
                   <BiWallet className='scale-150 text-primaryText mr-3 ml-4'/><p>Top up Wallet</p><FiChevronRight className='scale-125 mt-[3px] ml-1' />
                </div>
            </Link>
            <Link to={'/withdraw'} className='relative mt-20 mr-32' 
            onMouseEnter={() => setHover(2)} 
            onMouseLeave={() =>setHover(0)}>
            {pageName === "Withdraw" ?
            <div className="absolute z-0 w-36 h-14 bg-primaryText rounded-2xl blur-[6px]"></div>
            :
            <div className={`absolute z-0 w-36 h-14 bg-primaryText rounded-2xl ${hover === 2 ? "blur-[6px]" : ""}`}></div>
              }
                <div className='absolute z-10 flex items-center w-36 h-14 bg-quaternary rounded-xl hover:drop-shadow-3xl'>
                   <BiWallet className='scale-150 text-primaryText mr-3 ml-4'/><p>Withdraw</p><FiChevronRight className='scale-125 mt-[3px] ml-1' />
                </div>
            </Link>
        </div>
        <div className='flex flex-col items-center pt-6 mt-20 w-[270px] h-[290px] mr-24 bg-quaternary rounded-xl'>
                <Link to={'/send'} className={`flex justify-center  mb-2 w-[70%] pb-2 border-b-[2px] border-greyText/25 ${pageName === "Send" ? "text-primaryText" : ""}`}>Send</Link>
                <Link to={'/wallet'} className={`flex justify-center  mb-2 w-[70%] pb-2 border-b-[2px] border-greyText/25 ${pageName === "Wallet" ? "text-primaryText" : ""} `}>My Transacctions</Link>
                <Link to={'/pilots-transactions'} className={`flex justify-center  mb-2 w-[70%] pb-2 border-b-[2px] border-greyText/25 ${pageName === "Pilots" ? "text-primaryText" : ""}`}>Pilot's Transactions</Link>
                <Link to={'/schedule-send'} className={`flex justify-center  mb-2 w-[70%] pb-2 border-b-[2px] border-greyText/25 ${pageName === "Schedule" ? "text-primaryText" : ""}`}>Schedule Send</Link>
        </div>
        </div>
    </div>
  )
}
