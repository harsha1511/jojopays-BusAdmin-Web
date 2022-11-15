import React,{useState} from 'react'
import {Link} from "react-router-dom"


import {CgProfile} from 'react-icons/cg'
import { WalletNavBar } from '../components/WalletNavBar'




export const Send = () => {

  const [selectContact, setSelectContact] = useState<string>()


  const Contacts = [
    "Hari",
    "Cristiano",
    "Beckham",
    "Rooney",
    "ajkhbcajk",
    "iluagcib",
    "aihfcau",
    "aihfcau",
    "aihfcau",
    "aihfcau",
  ]

  return (
    <div>
      <div className="flex w-[96vw] h-screen">
      <section className="w-[80%]">
        <div className='flex justify-center items-center w-[100%] h-screen'>
        <div className=' flex flex-col items-center w-[85%] h-[80%] bg-quaternary rounded-2xl'>
          <p className='flex justify-center pb-3 w-[85%] mt-4 text-3xl border-b-2 border-greyText/25'>Send Money to?</p>
          <div className='flex flex-col w-[90%] mt-4'>
            <p>My Contacts</p>
            <div className='h-[400px] w-full overflow-y-auto overflow-x-hidden'>
            <div className='grid grid-cols-8 mt-3 items-start'>
            {Contacts.map((Contacts) => (
              <Link to={'/send-amount'}>
              <div
              onClick={() => setSelectContact(Contacts)}
              className='w-24 flex flex-col justify-center items-center my-3 cursor-pointer'
              >
                  <CgProfile />
                  <p className='text-greyText pt-1'>{Contacts}</p>
                </div>
                </Link>
            ))}
            </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* SIDE BAR */}
      <section className="w-[20%]">
        <WalletNavBar pageName='Send' />
      </section>
    </div>
    </div>
  )
}
