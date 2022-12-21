import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import { FaArrowAltCircleRight } from 'react-icons/fa';
import EditButton from "../../../components/EditButton";
import { DeleteButton } from "../../../components/DeleteButton";
import { RiFileExcel2Line } from 'react-icons/ri';
import { IoMdDocument } from 'react-icons/io';
import {ImQrcode} from "react-icons/im"



const members = [
    { name : "A1"},
    { name : "b1"},
    { name : "c1"},
    
]

function Rfid(){
    return(
        <div className="flex flex-col w-[96vw] h-screen">
            {/* top div */}
            <div className="flex flex-row w-full h-[12%]">
<div className="flex justify-center items-center w-full h-full ">
<p className='z-10 flex justify-center items-center ml-[110px] font-bold bg-secondary rounded-b-3xl drop-shadow-2xl tracking-[5px]
 w-[35%] h-20  text-2xl text-primaryText'>Generate  QR</p>  
</div>
<div className="flex flex-col justify-end  items-center mt-10 pr-8  w-[6%] h-full">
    <div className="">
<BackButton />
</div>
<div className="mt-2">
<EditButton isEdit={true} className=" "/>
</div>
<div className="mt-2">
<DeleteButton/>
</div>



</div>

</div>

                                    {/* top-div-bg */}
<div className=" relative flex justify-center  items-center w-[96vw] h-screen">
                                        {/* start-QR, RFID CODE */}
    <div className="flex justify-end -mt-16 w-[96vw] h-screen">
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

<div className="absolute flex  w-[1300px] -mt-16 h-[600px] rounded-3xl ml-4 bg-[#242636]">
                    </div>
                    <div className="absolute justify-end flex w-[1300px] -mt-16 h-[600px] rounded-3xl ml-4 ">
                        <div className="flex flex-col  w-[15%] rounded-r-3xl bg-[#3973FF]">
                            <div className=" flex justify-center -center  w-full h-[78%]">
                            <ImQrcode className="text-[#242636] mt-4 text-[110px]" />
                                
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
                            {/* left-div */}
                   <div className=" flex justify-center flex-col items-center h-full w-[35%]">
                    <p className="-mt-8 font-bold text-xl text-primaryText mb-2">RFID Code</p>
                    <div className=" flex justify-center w-[60%]  h-[89%] rounded-3xl bg-[#1E1E2C]">
                        <div className="flex flex-col mt-6">
                        <p className="p-2">dnsjnfihfuhijreijdfmdknk</p>
                        <p className="p-2">dnsjnfihfuhijreijdfmdknk</p>
                        <p className="p-2">dnsjnfihfuhijdfmdknk</p>
                        <p className="p-2">dnsjnfihfuhijreijdfmdknk</p>
                        <p className="p-2">dnsjnfihfuhijknk</p>
                        <p className="p-2">dnsjnfihfuhijreijdfmdknk</p>
                        <p className="p-2">dnsjnfihfijdfmdknk</p>
                        <p className="p-2">dnsjnfihfuhijreijdfmdknk</p>
                        <p className="p-2">dnsjnfjdfmdknk</p>
                        <p className="p-2">dnsjnfihfuhijreijdfmdknk</p>
                        <p className="p-2">dijdfmdknk</p>
                        <p className="p-2">dijdfmccndinfurnfiondknk</p>
                       
                        </div>

                    </div>
                    
                   </div>
                                {/* right-div */}
                   <div className=" flex flex-col h-full  w-[58%]">
                    <div className="h-[26%]  w-full">
                            <div className="flex flex-col justify-center items-center h-full w-[100%] ">
                                <div className=" justify-center items-center h-full w-[70%]">
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
                           

                        </div>
                        {/* <div className="flex justify-end w-[100%] h-[50%] bg-redText items-end">
                            hiii
                            </div> */}
                        {/* center box */}
                        <div className=" w-full h-full">
                        {/* {members.slice(0, showList).map(({name}) => ( */}
                            <div className="flex flex-col w-[82%] h-[90%] rounded-3xl bg-[#1E1E2C]">
                                  {members.map(({name}) => ( 
                                <div className="flex flex-row">
                                <div className="flex flex-col">
                            <ImQrcode className="text-white  ml-14 mt-6 text-[95px]" />
                            <p className="ml-[75px] text-xs mt-2 text-primaryText font-semibold">Seate A1</p>
                            </div>
                            <div className="flex flex-col">
                            <ImQrcode className="text-white  ml-12 mt-6 text-[90px]" />
                            <p className="ml-[70px] text-xs mt-2 text-primaryText font-semibold">Seate B1</p>
                            </div>
                            <div className="flex flex-col">
                            <ImQrcode className="text-white  ml-12 mt-6 text-[90px]" />
                            <p className="ml-[70px] text-xs mt-2 text-primaryText font-semibold">Seate C1</p>
                            </div>
                            <div className="flex flex-col">
                            <ImQrcode className="text-white  ml-12 mt-6 text-[90px]" />
                            <p className="ml-[70px] text-xs mt-2 text-primaryText font-semibold">Seate D1</p>
                            </div>
                            


                            </div>
                              ))} 
                            </div>
                            {/* ))} */}
                            

                            
                        </div>
                   </div>

                   </div>
                    
                    
                    
                    </div>




                   </div>



        </div>
    
    );
}
export default Rfid;