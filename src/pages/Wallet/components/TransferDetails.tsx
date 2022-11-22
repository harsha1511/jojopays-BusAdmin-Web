import React from 'react'


interface DetailProps {
    name:string
}
export const TransferDetails = ({name}:DetailProps) => {
  return (
    <div className='w-40 h-40 bg-pinkText/10'>
      <input type="text" name="" id="" value={name} />
      hi
      </div>
  )
}
