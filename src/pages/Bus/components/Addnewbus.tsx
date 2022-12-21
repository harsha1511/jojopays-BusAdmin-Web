import React from "react";
import { Link } from "react-router-dom";
import{FaPlus} from "react-icons/fa"
import {ImQrcode} from "react-icons/im"

function Addnewbus(){
    return(
        <div className="flex flex-col justify-center items-center w-[30%] h-full">
          <section className="flex flex-col items-center mt-[130px] justify-center  w-full h-[40%]">
            <Link to="/Bus-newbuscreate">
            <div className="w-32 h-48 bg-white rounded-[35px] realtive">
            <div className="absolute flex items-center justify-center w-32 h-32 bg-primaryText rounded-[35px]">
              <p className="text-white text-[55px]"><FaPlus/></p>
            </div>
          </div>
          </Link>
            <div className="flex justify-center text-primaryText mt-2 font-bold">Add New Bus</div>
            </section>


            <section className="flex flex-col items-center  justify-center  w-full h-[40%]">
            <Link to="/bus-generateqr">
            <div className="flex items-center justify-center w-40 h-40 bg-[#242636] rounded-[35px] realtive">
            <ImQrcode className="text-[#3973FF] text-[110px]"/>
           
          </div>
          </Link>
            <div className="flex justify-center text-primaryText mt-2 font-bold">Generate QR</div>
            </section>
        </div>

    );
}
export default Addnewbus; 