import React from 'react'
import {MdDeleteForever} from 'react-icons/md'


export const DeleteButton = () => {
  return (
    <div className='flex justify-center items-center w-7 h-7 bg-redText rounded-full'>
        <MdDeleteForever className='scale-125' />
    </div>
  )
}
