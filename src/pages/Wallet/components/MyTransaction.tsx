import React, { useState } from "react";


import {IoFilterSharp} from 'react-icons/io5'
import {TiArrowUnsorted} from 'react-icons/ti'
import {BsFillFileEarmarkWordFill} from 'react-icons/bs'
import { AiOutlineFilePdf } from "react-icons/ai";
import { RiFileExcel2Fill } from "react-icons/ri";
import {TiArrowSortedDown} from "react-icons/ti"

import { TransferList } from "./TransferList";


export const MyTransaction = () => {

     const ReceivedFilter = [
    {label: "All", value: "All"},
    {label: "From Jojopay", value: "From Jojopay"},
    {label: "Other", value: "Other"},
  ];
  const SentFilter = [
    {label: "All", value:"All"},
    {label: "Food", value:"Food"},
    {label: "Fuel", value:"Fuel"},
    {label: "Maintenance", value:"Maintenance"},
    {label: "Other", value:"Other"},
  ]

  const [overall, setOverall] = useState<boolean>(true);
  const [received, setReceived] = useState<string>("")
  const [sent, setSent] = useState<string>("")
  const [date, setDate] =useState<number>(0)
  const [sort, setSort] =useState<number>(0)
  const [transferType, setTransferType] = useState<string>("")

  const handleOverall = () => {
    setReceived("")
    setSent("")
    if(received || sent !== ""){
      setOverall(true)
    }
    setTransferType("all")
  }
  const handleReceived = (value:string) => {
    setReceived(value);
    setOverall(false);
    setSent("")
    if(received === value){
      setReceived("");
      setOverall(true);
    }
    setTransferType("Rec")
  }
  const handleSent = (value:string) => {
    setSent(value)
    setReceived("")
    setOverall(false)
    if(sent === value){
      setSent("");
      setOverall(true);
    }
    setTransferType("Sent")
  }

  return (
    <div>
        <div className="flex w-[90%] h-48 ml-8 bg-secondary rounded-b-md rounded-tr-3xl drop-shadow-xl">
          <div className="flex flex-col items-center w-[50%] h-full border-r-2 border-greyText/5">
            <div className=" flex justify-between items-center pl-4 w-full h-[33%]">
              <label className="font-semibold text-lg text-greyText">All Transaction:
                <span className={`ml-3 font-normal  bg-primary py-1 px-3 rounded-md ${overall ? "text-primaryText" : "" }`}
                onClick={handleOverall}>
                  Overall
                </span>
              </label>
              <IoFilterSharp className="w-6 h-6 mr-4 text-primaryText" />
            </div>
            <div className="w-[80%] h-[1px] bg-greyText/50"></div>
            <div className=" flex items-center pl-4 w-full h-[33%]">
              <label className="font-semibold text-lg text-greyText">Received:
              {ReceivedFilter.map(({label, value}) => (
                <span className={`${received === value ? "text-primaryText" : ""} ml-3 font-normal text- bg-primary py-1 px-3 rounded-md`} 
                onClick={() => handleReceived(value)}>
                  {label}
                </span>
              ))}
              </label>
            </div>
            <div className="w-[80%] h-[1px] bg-greyText/50"></div>
            <div className=" flex items-center pl-4 w-full h-[33%]">
              <label className="font-semibold text-lg text-greyText">Sent:
              {SentFilter.map(({label, value}) => (
                <span className={`${sent === value ? "text-primaryText" : ""} ml-3 font-normal text- bg-primary py-1 px-3 rounded-md`}
                onClick={() => handleSent(value)}>
                  {label}
                </span>
              ))}
                </label>
            </div>
          </div>
          <div className="w-[25%] h-full border-r-2 border-greyText/5">
            <div className=" flex justify-between items-center pl-4 w-full h-[33%]">
                <label className="font-semibold text-lg text-greyText">Day: 
                  <span className={`ml-3 font-normal  bg-primary py-1 px-3 rounded-md ${date === 0 ? "text-primaryText" : "" }`}
                  onClick={() => setDate(0)}>
                    All
                  </span>
                </label>
              <IoFilterSharp className="w-6 h-6 mr-4 text-primaryText" />
            </div>     
            <div onClick={() => setDate(1)}>
                <label className="relative font-semibold text-lg text-greyText pl-4">From:
                  <input type="date"  className="datepicker-input bg-primary ml-4 px-2 py-2 text-sm rounded focus:border-none" />
                </label>
                <div className="w-[80%] h-[1px] my-3 ml-6 bg-greyText/50"></div>
                <label className="relative font-semibold text-lg text-greyText pl-4">To:
                  <input type="date"  className="datepicker-input bg-primary ml-4 px-2 py-2 text-sm rounded focus:border-none" />
                </label>
            </div>
          </div>
          <div className="w-[25%] h-full">
            <div className=" flex justify-between items-center pl-4 w-full h-[33%]">
                <label className="relative font-semibold text-lg text-greyText pl-4">
                  From:
                </label>
                <TiArrowUnsorted className="mr-4 w-6 h-6 text-primaryText"/>
            </div>
            <div className="pl-6 pt-3">
              <p className={`${sort === 1 ? "text-primaryText": "text-greyText"} flex justify-center items-center bg-primary w-36 h-10 rounded-lg`}
              onClick={() => setSort(1)}>
                Ascending
              </p>
              <p className={`${sort === 2 ? "text-primaryText": "text-greyText"} flex justify-center items-center bg-primary w-36 h-10 rounded-lg mt-4`}
              onClick={() => setSort(2)}>
                Decending
              </p>
            </div>
          </div>
        </div>
        <div className="flex  m-3">
          {/* DOwnload button */}
          <div className="flex flex-col items-center w-[100px] h-[500px]">
            <p className="text-greyText pt-4">Download As</p>
            <BsFillFileEarmarkWordFill className="mt-4 w-8 h-8 bg-quaternary p-2 scale-150 rounded-lg text-primaryText"/>
            <RiFileExcel2Fill className="mt-8 w-8 h-8 bg-quaternary p-2 scale-150 rounded-lg text-[#FFC5E2]"/>
            <AiOutlineFilePdf className="mt-8 w-8 h-8 bg-quaternary p-2 scale-150 rounded-lg text-[#FFC5E2]"/>
            <p className="mt-6 tect-greyText">Note:</p>
            <div className="flex items-center text-quaternaryText mt-2"><TiArrowSortedDown className="scale-125 rotate-180 mr-1"/><span className="text-sm font-thin">Credited</span></div>
            <div className="flex items-center text-redText mt-1"><TiArrowSortedDown className="scale-125 mr-1"/><span className="text-sm font-thin">Dedited</span></div>
            <div className="flex items-center text-primaryText mt-1"><TiArrowSortedDown className="scale-125 rotate-180 mr-1"/><span className="text-sm font-thin">Deposited</span></div>
            <div className="flex items-center text-[#FFC5E2] mt-1"><TiArrowSortedDown className="scale-125 mr-1"/><span className="text-sm font-thin">Withdrawn</span></div>
          </div>
          <div className="mt-4 ml-3">
            <TransferList type={transferType}/>
          </div>
        </div>
    </div>
  )
}
