import React from "react";
import { useState, useEffect } from 'react'

import { FiPower } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "../../../API/axios";


import Profile from "../../../assets/images/profile.png";
import constants  from "../../../API/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const DriverList = () => {
  
  const [color, setcolor] = useState(true)

    const busCompany = useSelector((state: RootState) => state.busCompany);

  console.log(color,"greennnnnnnnnn");


  const [showList, setShowList] =useState<number>(7);


  const [driver, setDriver] = useState<object[]>()

  
//   useEffect(() => {
//   const getDriverData = async () => {
//     try {
//       const response = await axios.get(constants.company.driver);
//       console.log(response.data);
//       setDriver(response.data) 
//     }
//     catch(err) {
//       console.log(err);
      
//     }
//   }
//   getDriverData(); 
// }, []);

  return (
   
     <div>
     
      {busCompany.allDriver?.map((d:any) => (
         <section className="grid p-4 grid-cols-12 gap-4 rounded-tl-[20px] ">
      
      {/* profile details  */}
      
      <div className="col-span-1  grid grid-flow-col place-items-center  rounded-tl-[20px]">
        <FiPower  className={` text-3xl ${color ? "text-quaternaryText": "text-redText" }`} onClick={() => setcolor(!color)} />
      </div>
      
        <div className=" col-span-11 grid grid-flow-col h-[65px rounded-tl-[20px]   rounded-br-[20px]">
        <div className=" col-span-11 grid grid-flow-col h-[65px] bg-primary rounded-tl-[20px]  rounded-bl-[20px]  place-items-center ml-0">
          
          <div className="float-left m-0 p-0">
            <img className="h-[40px]" src={Profile} alt="" />
          </div>
          <div> 
          
            <p>{d.driverName}</p>
          </div>
          
          <div className="grid grid-flow-col gap-4">
            
          
          {/* <FaCircle  className='  text-quaternaryText  cursor-pointer'/> */}
          <FaCircle  className={` ${color ? "text-quaternaryText": "text-redText" }`} onClick={() => setcolor(!color)} />

                   
              <Link to="/driver-info"> 
              <BsFillEyeFill className=" text-redText cursor-pointer " />
             </Link>  
            <Link to="/update-driver  ">
              <FiEdit2  className="text-redText cursor-pointer"/>
            </Link>
            <MdDeleteForever  className="text-redText cursor-pointer"/>




            
           

            
          </div>
        </div>
        <div className="bg-[#3973FF]/[0.3] w-[80px] rounded-tr-[12px] rounded-br-[50px]"></div>
      </div>
      

      </section>
))}

      
</div>
    
  );
};

export default DriverList;
