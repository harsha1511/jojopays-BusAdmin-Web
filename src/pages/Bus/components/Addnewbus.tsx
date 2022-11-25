import React from "react";
import { Link } from "react-router-dom";
import{FaPlus} from "react-icons/fa"

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
            <div className="w-40 h-40 bg-white rounded-[35px] realtive">
           
          </div>
          </Link>
            <div className="flex justify-center text-primaryText mt-2 font-bold">Generate QR</div>
            </section>





           
           {/* <section className="flex flex-col bg-redText  w-full h-[40%]">

          
           <div className=" flex justify-center w-[100%] bg-black h-[70%]">
            <Link to="/Bus-newbuscreate"> 

            <div className="flex items-center justify-center text-black  w-[100%] mt-4 h-[70%] rounded-2xl bg-white">
              <p>haiii</p>

            </div>
            </Link> */}
           {/* <div className="flex justify-center items-center h-[50%] rounded-[30px] bg-white w-[45%] items-center">hiiii</div> */}

           {/* </div> */}
           
            {/* // <div className="w-[100%] bg-white h-[30%]"> */}
            {/* <div className="flex justify-center text-primaryText mt-2 font-bold">Generate QR</div> */}
            {/* </div> */}
           
          {/* //  </section> */}
          
        </div>

    );
}
export default Addnewbus;  