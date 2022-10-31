import React,{useState} from 'react'

import {MdPowerSettingsNew, MdDeleteForever} from "react-icons/md"
import { DeleteButton } from './DeleteButton'
import EditButton from './EditButton'


interface PowerButtonProps {
    className?: string

}
export const PowerButton = ({className}:PowerButtonProps) => {

    const [powerOn, setPowerOn] =useState(true)

  return (
    <div className={`flex absolute bottom-0 cursor-pointer`} >
        <div onClick={() => setPowerOn(!powerOn)}
        className={`relative flex justify-center items-center w-28 h-28 bg-tertiary rounded-tr-full`}>
            <MdPowerSettingsNew className={`absolute w-12 h-12 mr-6 mt-4 blur-sm ${powerOn ? "text-quaternaryText" : "text-redText"}`}/>
            <MdPowerSettingsNew className='absolute w-12 h-12 mr-6 mt-4'/>
        </div>
        {/* <div>
        <EditButton isEdit={true} className=""/>
        <div className='ml-6 mt-4'>
          <DeleteButton />
        </div>
        </div> */}
    </div>
  )
}
