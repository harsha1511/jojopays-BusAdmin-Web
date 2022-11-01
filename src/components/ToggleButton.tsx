import React from 'react'
import "../App.css"

interface ToggleButtonProps {
    className: string
    isBig: boolean
    ToggleSwitch?: () => void
}
export const ToggleButton = ({className, ToggleSwitch, isBig}:ToggleButtonProps) => {

    const inputStyle = isBig ? "w-[60px] h-8" : "w-[48px] h-[20px]"
    const buttonStyle = isBig ? "before:h-[24px] before:w-[24px]" : "before:h-[14px] before:w-[14px] before:right-4"

  return (
        <div className='' onClick={ToggleSwitch}>
        <label className={`${inputStyle} relative inline-block w-[60px] h-8 bg-primary rounded-full cursor-pointer`}>
          <input className='opacity-0 w-0 h-0'
          type="checkbox"
          id='toggleInput'/>
          <span className={`${buttonStyle} absolute left-0 top-0 right-0 bottom-0 bg-primary border-2 border-tertiary rounded-full
          before:absolute before:rounded-full before:top-[0.1rem] before:left-[2px]
          before:duration-200`}
          id='toggleSpan'></span>
          </label>
    </div>
  )
}

// bg-gradient-to-r from-cyan-500 to-blue-500