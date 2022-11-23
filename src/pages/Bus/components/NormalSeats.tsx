import React from 'react'

export const NormalSeats = () => {
  
    const Seats ={
        A: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        B: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] 
    }
  
  const Box:number[] = [1,2,3,4,5,6,7,9,10,11,12,13,14,15]

  
  
    return (
    <div>
        {/* <div className='flex justify-end'>
        {Box.map((i, index) => (
            <div className={`w-4 h-4  mr-4 mt-4 rounded-sm bg-blueText`}>
            </div>
        ))}
        </div> */}
        {Seats.A.map((seat, index) => (
            <div className='w-4 h-4' key={index}>
            <div className='w-4 h-4 rounded-md bg-greyText'></div> 
            </div>
        ))}
    </div>
  )
}
