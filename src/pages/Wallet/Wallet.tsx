import React, {useCallback, useState } from "react";

import {FiChevronRight} from 'react-icons/fi'
import {BiWallet} from "react-icons/bi"


import { MyTransaction } from "./components/MyTransaction";
import { SendMoney } from "./components/SendMoney";
import { ScheduleSend } from "./components/ScheduleSend";
import { TopupWallet } from "./components/TopupWallet";
import { Withdraw } from "./components/Withdraw";


const Wallet = () => {

  const WalletOptions = [
    {name: "Send" , value: "Send"},
    {name: "My Transactions" , value: "My Transactions"},
    {name: "Pilot's Transactions" , value: "Pilot's Transactions"},
    {name: "Schedule Send" , value: "Schedule Send"},
  ]

  const [options, setOptions] = useState<string>("My Transactions")
  const [hover, setHover] = useState<number>(0)


  const renderWalletOptions = useCallback(
    () => {
    switch (options) {
      case "My Transactions":
        return <MyTransaction />
      case "Send":
        return <SendMoney />
      case "Pilot's Transactions":
        return <MyTransaction />
      case "Schedule Send":
        return <ScheduleSend />
      case "Topup":
        return <TopupWallet />
      case "Withdraw":
        return <Withdraw />
    }
    },
    [options],
  )
  

  return <div>
    <div className="flex w-[96vw] h-screen">
      <section className="w-[80%]">
       {renderWalletOptions()}
      </section>

      {/* SIDE BAR */}
      <section className="w-[20%] bg-secondary drop-shadow-xl">
        <div className='flex flex-col items-center'>
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
            <div className='relative mt-6 mr-40' 
            onMouseEnter={() => setHover(1)} 
            onMouseLeave={() =>setHover(0)} 
            onClick={() => setOptions("Topup")}>
                <div className={`absolute z-0 w-44 h-14 bg-primaryText rounded-2xl ${hover === 1 ? "blur-[6px]" : ""}`}></div>
                <div className='absolute z-10 flex items-center w-44 h-14 bg-quaternary rounded-xl hover:drop-shadow-3xl'>
                   <BiWallet className='scale-150 text-primaryText mr-3 ml-4'/><p>Top up Wallet</p><FiChevronRight className='scale-125 mt-[3px] ml-1' />
                </div>
            </div>
            <div className='relative mt-20 mr-32' 
            onMouseEnter={() => setHover(2)} 
            onMouseLeave={() =>setHover(0)}
            onClick={() => setOptions("Withdraw")}>
                <div className={`absolute z-0 w-36 h-14 bg-primaryText rounded-2xl ${hover === 2 ? "blur-[6px]" : ""}`}></div>
                <div className='absolute z-10 flex items-center w-36 h-14 bg-quaternary rounded-xl hover:drop-shadow-3xl'>
                   <BiWallet className='scale-150 text-primaryText mr-3 ml-4'/><p>Withdraw</p><FiChevronRight className='scale-125 mt-[3px] ml-1' />
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center pt-6 mt-20 w-[270px] h-[290px] mr-24 bg-quaternary rounded-xl'>
            {WalletOptions.map(({name, value}) => (
                <p
                onClick={() => setOptions(value)}
                className={`flex justify-center  mb-2 w-[70%] pb-2 border-b-[2px] border-greyText/25 ${options === value ? "text-primaryText" : ""}`}>
                    {name}
                </p>
            ))}
        </div>
        </div>
      </section>
    </div>
  </div>;
};

export default Wallet;
