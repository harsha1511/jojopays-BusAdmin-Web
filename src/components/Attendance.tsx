import React, { CSSProperties, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import Calendar from 'react-calendar';

import {BsDownload} from 'react-icons/bs'


interface AttendanceProps {
  isDownload:  boolean
}


export const Attendance = ({isDownload}:AttendanceProps) => {

  const [state , setState ]= useState({
    date: [new Date(2022,11,24),
    new Date(2022,11,14)],
  })
  const dateChange = (date:any) => setState({date})


  return (<div>
    <div className='realtive flex flex-col items-center bg-quaternary -mt-4 mr-4 pl-2 rounded-2xl drop-shadow-2xl'>
        <div className='flex'>
            <div className='flex flex-col justify-start items-center -mt-2'>
                <p className='pt-8 pb-2 px-4 text-2xl text-primaryText font-bold tracking-wide'>Attendance</p>
                <p className='flex justify-center bg-secondary shadow-inner w-28 p-2 rounded-xl font-bold text-lg'>15.3 / 30</p>
                <p className='text-primaryText text-sm font-semibold'>Days</p>
            </div>
            <div className='relative flex justify-center items-center -mt-2 p-8'>
              <div className='absolute font-bold text-xl text-primaryText'>53%</div>
              <PieChart
              lineWidth={40}
              paddingAngle={3}
              startAngle={90}
              data={[
                { title: 'TotalDays', value: 6, color: '#3973FF' },
                { title: 'LeaveTaken', value: 4, color: '#FF4188' },
              ]}
                />
            </div>
        </div>
        <div className='w-[80%] pt-2 pb-2 mr-2'>
          <Calendar className={['c1','c2']}
          selectRange={false}
          onChange={dateChange}
          defaultValue={state.date}
          />
        </div>
    </div>
    {/* download attendance */}
    {isDownload && 
        <div className='w-[450px] h-12 m-4 bg-tertiary rounded-3xl drop-shadow-xl'>
          <form action="submit" className='flex items-center'>
            <div className='h-12 flex items-center ml-4'>
            <input className='w-20 bg-secondary border-r-2 border-tertiary rounded-l-2xl py-1 pl-2 text-sm outline-none' 
            placeholder='Month' type="text" />
            <input className='w-20 bg-secondary border-l-2 border-tertiary rounded-r-2xl py-1 pl-2 text-sm outline-none' 
            placeholder='Year' type="text" />
            </div>
            <span className='ml-2'>to</span>
            <div className='h-12 flex items-center ml-2'>
            <input className='w-20 bg-secondary border-r-2 border-tertiary rounded-l-2xl py-1 pl-2 text-sm outline-none' 
            placeholder='Month' type="text" />
            <input className='w-20 bg-secondary border-l-2 border-tertiary rounded-r-2xl py-1 pl-2 text-sm outline-none' 
            placeholder='Year' type="text" />
            </div>
            <button className='ml-6 bg-pinkText p-2 rounded-full font-bolder'><BsDownload/></button>
          </form>
        </div>
      }
</div>)
}

//   tileClassName={({ date, view }:CalendarTileProperties) => {
//   if(mark.has(x=>x===moment(date).format("DD-MM-YYYY"))){
//   return  'highlight'
// }
//   }}