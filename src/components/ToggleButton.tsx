import React, { useState } from 'react'
import "../App.css"

interface ToggleButtonProps {
    className: string
    isBig?: boolean
    ToggleSwitch?: () => void
}
export const ToggleButton = ({className,
  ToggleSwitch = () => {},
  isBig,
  }:ToggleButtonProps) => {
  
  const style =  className
  const [toggle, setToggle] =useState<boolean>(true)
  
    return (
      <div className={style} onClick={ToggleSwitch}>
        <div className={`flex justify-start items-center cursor-pointer w-14 h-[28px] rounded-full border-2  bg-primary 
        ${toggle ? "border-tertiary" : "border-primaryText"}`}
        onClick={() => setToggle(!toggle)}>
          <div className={`h-[20px] w-[20px] rounded-full bg-gradient-to-b  ml-[2px]
          ${toggle ? "from-[#FF5050] to-[#FF0783] duration-300" : "from-[#6C50FF] to-[#0095E2] translate-x-[28px] duration-300"}`}
          >
          </div>
        </div>
      </div>
  )
}

// bg-gradient-to-r from-cyan-500 to-blue-500