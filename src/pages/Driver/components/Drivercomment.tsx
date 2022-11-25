import React from "react";
import { icons } from "react-icons/lib";
import { Link } from "react-router-dom";
import{AiFillStar} from "react-icons/ai"
import{FaUserCircle} from "react-icons/fa"
import { Rating } from "../../Profile/components/Rating";



function Drivercomment() {
    return (
        <div className="flex-col w-[100%] h-[100%] drop-shadow-lg ml-[10%] mt-[20px] ">
            <div className="flex flex-col font-bold mt-[60px] text-[15px]  ">
                <p className=""> Casual Trip</p>
                <p className="text-primaryText"> Thu, 10 Jun 2021 (08.00am)</p>
            </div>
            <div className="flex flex-col  mt-2 ml-12 font-bold">
               
                <div className='flex mt-[15px] -ml-8 text-[20px] text-yellowText'> <Rating  star={3} /></div>
               
            </div>
            <p className="">150 peaple Rating this Trip</p>
            <div className="bg-quaternary w-[20%] mt-[10px] -ml-8 rounded-3xl h-[45%] overflow-y-auto" id='noScrollBar'>
                <div className="ml-2 p-4 flex flex-row text-primaryText text-3xl">
                    <FaUserCircle/>
                    <p className="ml-2 text-2xl font-bold text-primaryText ]">sugannnn</p>
                </div>
                <p className="ml-2 text-bold ">haijknddnffoiewneriomte knckmodmdodfrgthy gioetnioni</p>
                <div className="ml-2 p-4 text-primaryText flex flex-row text-3xl">
                    <FaUserCircle/>
                    <p className="ml-2 text-2xl text-primaryText font-bold">sugan</p>
                </div>
                
                <p className="ml-2  text-bold ">haijknddnffoiewneriomte knckmodmdodfrgthy gioetnioni</p>
                <div className="ml-2 p-4 text-primaryText flex flex-row text-3xl">
                    <FaUserCircle/>
                    <p className="ml-2 text-2xl text-primaryText font-bold">sugan</p>
                </div>
                
                <p className="ml-2  text-bold ">haijknddnffoiewneriomte knckmodmdodfrgthy gioetnioni</p>
                <div className="ml-2 p-4 text-redText flex flex-row text-3xl">
                    <FaUserCircle/>
                    <p className="ml-2 text-2xl text-primaryText font-bold">sugan</p>
                </div>
                
                <p className="ml-2  text-bold ">haijknddnffoiewneriomte knckmodmdodfrgthy gioetnioni</p>

            </div>
       
     </div>

  



  
              
  );
}

export default Drivercomment;
