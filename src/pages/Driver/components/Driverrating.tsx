 import React from 'react'
 import { Rating } from '../../Profile/components/Rating'


import BackButton from '../../../components/BackButton'

import {AiFillStar} from 'react-icons/ai'
import { number } from 'prop-types'

interface ReviewProps {
  name: string
  stars: number
  country: string
  review: string
 
  
}

const Reviews = [
  {
    "name" : "Harsha",
    "stars": 4,
    "country": "Nairobi",
    "review": "sajifbiFG IUDHSVIGUSVHGA iuhisouhab ilsuahvifuoashdioabvsjkadvauysguy isaouhdgvaioushbfgu lishdgiurhsiu8yewq iurhg8uooregv ilnhdasoiphguihg"
   
  },
  {
    "name" : "Sugan",
    "stars": 5,
    "country": "Nairobi",
    "review": "sajifbiFG IUDHSVIGUSVHGA iuhisouhab ilsuahvifuoashdioabvsjkadvauysguy isaouhdgvaioushbfgu lishdgiurhsiu8yewq iurhg8uooregv ilnhdasoiphguihg"
  },
   {
    "name" : "Sugan",
    "stars": 5,
    "country": "Nairobi",
    "review": "sajifbiFG IUDHSVIGUSV ikaicbavi abfviuaiouvfbba iuaesbfiuwbefisaw dfsbhoiadbinadjnboif apisuhgviaurgojdbn jbangijbfdbgriuyfodas vjksabhdabfuyh uhbfeuysheda uydagsu safiuheiofeqbwofu uyhbaesfoigbsfyugbwef uyEFBUYbhvbUYVUIYCDVuysviuycvUIYGUIYVDC b poasghvnibgvojbrg ibsadsioagHGA iuhisouhab ilsuahvifuoashdioabvsjkadvauysguy isaouhdgvaioushbfgu lishdgiurhsiu8yewq iurhg8uooregv ilnhdasoiphguihg"
  }

]

export const Driverrating= () => {
  return (

    
    <div className="h-[100%] flex-grid  grid-flow-row w-[100%] p-0">
          
       <div className=" flex fixed text-primaryText font-bold z-10 tracking-wider  text-4xl ml-[34%] items-center h-[80px] w-[30%] justify-around rounded-b-[40px] bg-[#2F3142] shadow-2xl">
            <h1>Daniel's Rating</h1>
        </div>
        <div className='flex justify-center items-center w-[96vw] h-screen'>
      <div className='flex w-[1300px] h-[600px] bg-secondary rounded-3xl'>
        <section className='w-[27%] h-full'>
          <div className='h-[30%] '>
          <Rating star={4.5}/>
          <p className='flex justify-center w-full text-lg font-bold -mt-4 text-yellowText'>By: 10269 Passengers</p>
          </div>
          <div className='flex justify-center items-center mt-6 w-[100%] h-[60%]'>
            <div className='flex flex-col items-center w-[80%] h-[100%] bg-primary rounded-3xl'>
            <p className='mt-2 text-2xl font-bold tracking-wider'>Filters</p>
            <div className='flex flex-col justify-center items-center bg-white bg-opacity-50 h-40 w-[100%] mt-4'>
              <p className='font-semibold'>All</p>
              <AiFillStar className='text-lg text-primaryText'/>
              <div className='flex mt-2 text-lg text-primaryText'><AiFillStar /><AiFillStar /></div>
              <div className='flex mt-2 text-lg text-primaryText'><AiFillStar /> <AiFillStar /><AiFillStar /></div>
              <div className='flex mt-2 text-lg text-primaryText'><AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /></div>
              <div className='flex mt-2 text-lg text-primaryText'><AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
            </div>
            <p className='mt-2 text-2xl font-bold tracking-wider'>Sort by</p>
            <div className='flex flex-col justify-center items-center bg-white bg-opacity-50 h-20 w-[100%] mt-4'>
              <p className='font-semibold'>From New to Old</p>
              <p className='font-semibold mt-2'>From old to New</p>
            </div> 
            <div className='h-10 w-[100%] bg-primaryText rounded-b-3xl'>
            </div>
            </div>
          </div>
        </section>
        <section className='w-[73%]'>
          <div className='flex justify-end items-center w-[100%] h-20 pr-8'>
            <BackButton />
          </div>
          <div className='flex justify-end mr-[130px] text-3xl font-bold mb-2'>Accidents :
          <p  className="bg-primary px-12 rounded-xl text-2xl ml-4" ></p>
          
          </div>
          <div className='flex flex-col justify-start items-center pt-4 w-[90%] h-[77%] bg-primary rounded-3xl overflow-y-auto'>
          
           <div className='flex flex-col items-center'>
            { Reviews.map(({name, stars, country, review, }) => (
            <div className='w-[90%] h-44 bg-secondary rounded-3xl mt-6 mb-4 overflow-y-auto' id='noScrollBar'>
              <div className='flex mt-4 ml-4 items-center'>
              
                <span className='flex'>{[...Array(stars)].map((i) => (
                  <div><AiFillStar  className='text-lg text-yellowText'/></div>
                ))}</span>
                <p className='pl-4 text-lg font-semibold tracking-wider text-quaternaryText'>{name}</p>
                <p className='pl-4 text-lg font-semibold tracking-wider text-quaternaryText'>{country}</p>
               
              </div>
              <div>
                <p className='p-4 tracking-wider'>{review}</p>
                <p className='flex text-primaryText font-bold text-[20px] mr-[20px] justify-end'>1 August 2021 (10.42am)</p>
              </div>
            </div>
            ))}
          </div>
          </div>
        </section>
      </div>
    </div>
    </div>

  )
}
