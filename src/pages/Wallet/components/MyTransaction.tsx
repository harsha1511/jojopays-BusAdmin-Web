import React, { useState } from "react";


import {IoFilterSharp} from 'react-icons/io5'
import {TiArrowUnsorted} from 'react-icons/ti'
import {BsFillFileEarmarkWordFill} from 'react-icons/bs'
import { AiOutlineFilePdf } from "react-icons/ai";
import { RiFileExcel2Fill } from "react-icons/ri";
import {TiArrowSortedDown} from "react-icons/ti"
import {IoIosPeople} from 'react-icons/io'
import { BsSearch } from "react-icons/bs";

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
  const [sort, setSort] =useState<number>(1)
  const [transferType, setTransferType] = useState<string>("all")
  const [dateFilter, setDateFilter] = useState()

  console.log("REC", received)

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
              <label className="font-semibold text-lg text-redText">All Transaction:
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
                  <input type="date"  className="pl-2 bg-primary ml-4 p-1 rounded-lg w-[150px] cursor-pointer"
                   />
                </label>
                <div className="w-[80%] h-[1px] my-3 ml-6 bg-greyText/50"></div>
                <label className="relative font-semibold text-lg text-greyText pl-4">To:
                  <input type="date"  className="pl-2 bg-primary ml-4 p-1 rounded-lg w-[150px] cursor-pointer"
                  onChange={(e:any) => setDateFilter(e.target.value)} />
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
          <div className=" flex mt-4 ml-12 z-10">
            <TransferList type={transferType}/>
          </div>
          <div className="flex flex-col items-center w-[400px] bg-quaternary h-[600px] -ml-4 -mt-8">
            <p className="mt-10 text-greyText tracking-wider">Transaction Between</p>
            <div className="flex items-center w-[90%] ml-10">
                <div className="flex justify-center items-center w-14 h-14 rounded-full bg-white">
                  <IoIosPeople className="text-pinkText/50 w-12 h-12" />
                </div>
                <p className="text-primaryText font-semibold text-lg tracking-wide ml-4">All Transactions</p>
            </div>
              <div className="flex items-center border-2 border-primaryText my-4 mx-3 rounded-full px-3 w-[80%]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none py-2 px-4 text-white outline-none w-full focus:border-none"
                />
                <button className="" type="submit">
                  <BsSearch className="text-primaryText" />
                </button>
              </div>
              <div className="flex items-center w-[83%]">
                <img
                className="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80" alt=""
                />
                <p className="font-semibold tracking-wide ml-4">Name</p>
              </div>
          </div>
        </div>
    </div>
  )
}
