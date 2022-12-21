import React from "react";
import BackButton from "../../../components/BackButton";
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { Link } from "react-router-dom";

import { RiFileExcel2Line } from 'react-icons/ri';
import { IoMdDocument } from 'react-icons/io';







function Busqr(){
    return(
        <div className="flex flex-col w-[96vw] h-screen">
        {/* top div */}
<div className="flex flex-row w-full h-[12%]">
<div className="flex justify-center items-center w-full h-full ">
<p className='z-10 flex justify-center items-center ml-[110px] font-bold bg-secondary rounded-b-3xl drop-shadow-2xl tracking-[5px]
 w-[35%] h-20  text-2xl text-primaryText'>Generate QR</p>  
</div>
<div className="flex justify-end items-center  pr-14  w-[6%] h-full">
<BackButton />
</div>
</div>  
                            {/* top div-bg */}
<div className=" relative flex justify-center  items-center w-[96vw] h-screen">
          {/* start-QR, RFID CODE */}

 <div className="flex justify-end w-[96vw] h-screen">
<div className="z-10 flex flex-col justify-end items-end mt-[120px] pr-8  w-[18%] h-[45%]">
    <div className="flex flex-row  rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-3xl w-[70%] mt-2 h-[18%] bg-[#2F3142]">
        <div className="flex justify-start w-full h-full items-center"><IoMdDocument className="text-3xl ml-2"/>

        </div>
        <div className="flex justify-end text-primaryText text-2xl font-semibold  mr-2 w-full h-full items-center">QR

        </div>
    </div>
    <div className="flex  rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-3xl w-[70%] mt-4 h-[18%] bg-[#2F3142]">
    <div className="flex justify-start w-full ml-2 h-full items-center"><RiFileExcel2Line className=" text-white text-3xl"/>

</div>
<div className="flex justify-end w-full text-2xl text-primaryText font-semibold mr-2 h-full items-center">RFID

</div>
    </div>
    <div className="flex  rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-3xl w-[70%] mt-4 h-[18%] bg-[#2F3142]">
    <div className="flex justify-starttext-2xl ml-2 w-full h-full items-center"><RiFileExcel2Line className=" text-white text-3xl"/>

</div>
<div className="flex justify-end w-full h-full text-2xl text-primaryText font-semibold mr-2 items-center">CODE

</div>
    </div>
    </div></div>


   {/* end- QR, RFID CODE */}



   <div className="absolute justify-end flex w-[1300px] -mt-16 h-[600px] rounded-3xl ml-4 ">
                        <div className="flex flex-col  w-[15%] rounded-r-3xl bg-[#3973FF]">
                            <div className=" flex justify-end items-center  w-full h-[78%]">
                                
                            </div>
                            <div className="flex justify-center opacity-80 mt-14 w-full  h-[30%]">
                                <div className="flex justify-center items-center relative w-[80%] h-[100%] rounded-[140px] bg-[#A8A8A8]">
                                    
                                    <div className="flex justify-center items-center absolute  w-[85%] h-[85%] rounded-[140px] bg-[#2F3142]">
                                      <div className="flex justify-center items-center absolute  w-[75%] h-[75%] rounded-[140px] bg-[#A8A8A8]">
                                        <div className="flex justify-center items-center absolute  w-[60%] h-[60%] rounded-[140px]">
                                            <FaArrowAltCircleRight className="text-[78px] text-primaryText"/>
                                        </div>
                                        </div> 
                                       </div>
                                    <p>jjdjesjeejaeebj</p> 
                                </div>
                            </div>
                        </div>
                   </div>
                   {/* center div */}
            <div className="absolute flex flex-col w-[1300px]  h-[600px] rounded-3xl ml-4">
                <div className="flex flex-row w-full h-full">
                                        {/* left-bus-div */}
                    <div className="h-full w-[42%]"></div>
                                        {/* right-QR-BR div */}
                    <div className=" flex flex-col h-full w-[58%]">
                        <div className="h-[26%] w-full">
                            <div className="flex flex-col  h-full w-[70%] ">
                                <div className="flex flex-row text-sm text-primaryText font-semibold mt-6 ml-6">
                                   
                                <p className="">Compayn Code</p>
                               
                                <p className="ml-4">Bus License Number</p>
                                <p className="ml-4">Seat</p>
                                </div>
                            <div className="flex justify-center -mt-6 items-center  w-[90%] h-full">
                                <div className="flex items-center w-[95%] h-[40%] rounded-[30px] border-primaryText border-[3px]">

                                <div className="flex pb-6 flex-row text-sm text-white font-semibold mt-6 ml-4">
                                    <p className="">1234568482</p>
                                    <p className="ml-8">E87H54F54N4R7M7</p>
                                    <p className="ml-6">56</p>
                                </div>
                                </div>

                            </div>
                           
                            </div>
                           

                        </div>
                        <div className="h-full w-full">
                            <div className="w-full h-[80%]">
                                <div className="flex flex-col items-center  w-[70%] h-[100%]">
                                    <div className=" flex flex-row w-[85%] h-[60%] bg-[#2F3142] drop-shadow-xl -ml-10 rounded-3xl ">
                                        <div className="flex justify-center items-center w-[50%] h-full">
                                            <div className="flex justify-center items-center w-[75%] h-[75%] bg-primaryText rounded-[100px]">
                                            <div className="flex justify-center items-center w-[70%] h-[70%] bg-[#2F3142] rounded-[100px]">
                                               <p className="text-[60px] font-bold">QR</p>
                                            </div>

                                            </div>

                                        </div>
                                        <div className="flex justify-center items-center w-[50%] h-full ">
                                        <div className="flex justify-center items-center w-[75%] h-[75%] bg-primaryText rounded-[100px]">
                                            <div className="flex justify-center items-center w-[70%] h-[70%] bg-[#2F3142] rounded-[100px]">
                                               <p className="text-[60px] font-bold">QR</p>
                                            </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-full h-[40%]">
                                    < Link to="/bus-rfidqr"> 
                                                <button className="flex text-[22px] justify-center items-center w-[90%] rounded-br-3xl rounded-tl-3xl rounded-tr-lg font-semibold rounded-bl-lg  pt-4 pb-4 pl-14 pr-14 h-[20%] bg-primaryText">Generate</button>
                                                 
                                           
                                         </Link>


                                    </div>
                                    
                                 
                                </div>
                               

                            </div>

                        </div>

                    </div>

                </div>

                    </div>
                  



       
    </div>
    </div>
    
    );
}
export default Busqr;  