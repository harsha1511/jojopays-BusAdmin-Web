import React from 'react'
import {AiFillStar} from 'react-icons/ai'


type RatingProps = {
  star: number 
  yellow?: string
  red?: string
}


export const Rating = ({star, yellow = "#EFFF50" , red = "#1e1e2c"}:RatingProps) => {
  return (
      <div className='flex h-full justify-center items-center flex-col mr-2 text-quinaryText cursor-pointer'>
        <p className="text-lg sm:text-2xl font-bold">Rating</p> 
        <div className='flex'>
        {[...Array(5)].map((_,i) => {
          const ratingValue = i;
          return (
            <div>
                <AiFillStar  className='sm:text-3xl'  color={ratingValue+1 <= star ? yellow : red }/>
          </div>
          )})}
          </div>
            <p className="text-2xl sm:text-3xl font-bold">{star}</p>
      </div>
  )
}