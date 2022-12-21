import React from "react";
import { Link } from "react-router-dom";
import BackButton from '../../../components/BackButton';
import { BsPlusLg } from 'react-icons/bs'
import { MdDirectionsBusFilled } from 'react-icons/md'
import {ImQrcode} from "react-icons/im"

function Generateqr(){
    return(<div className="flex flex-col w-[96vw] h-screen">
                                {/* top div */}
                <div className="flex flex-row w-full h-[12%]">
                    <div className="flex justify-center items-center w-full h-full ">
                        <p className='z-10 flex justify-center items-center ml-[110px] font-bold bg-secondary rounded-b-3xl drop-shadow-2xl tracking-[5px]
                          w-[35%] h-full text-2xl text-primaryText'>Generate QR</p>  
                    </div>
                    <div className="flex justify-end items-center  pr-14  w-[6%] h-full">
                        <BackButton />
                    </div>
                </div>
                                {/* center div */}
                <div className=" relative flex justify-center items-center w-[96vw] h-screen">
                    <div className="absolute flex bg-bus-qr-cover w-[1300px] bg-cover bg-[length:40vw_80vh] bg-top 
                      opacity-50 bg-center bg-no-repeat -mt-16 h-[600px] rounded-3xl ml-4 bg-[#242636]">
                    </div>
                    <div className="absolute justify-end flex w-[1300px] -mt-16 h-[600px] rounded-3xl ml-4 ">
                        <div className="flex w-[15%] flex justify-center rounded-r-3xl bg-[#3973FF]">
                        <ImQrcode className="text-[#242636] mt-4 text-[110px]" />
                        </div>
                   </div>
                    <div className="absolute flex w-[1300px] -mt-16 h-[600px] rounded-3xl ml-4">
                                                    {/* left div */}
                        <div className="flex  flex-col items-center w-[30%] h-full">
                                                        {/* new QR */}
                            <div className="flex-col relative flex justify-center items-center w-full h-[34%]">
                                <div className=" w-[70%] h-[65%] bg-[#2F3142] rounded-3xl">
                                    < Link to="/createnew-qr"> 
                                    <div className="flex justify-end">
                                        <div className="absolute w-[15%] h-[65%]  opacity-20 flex justify-center bg-white rounded-r-3xl">
                                        <ImQrcode className="text-black mt-4 text-[25px]" />
                                        </div>
                                    </div>
                                   <div className="flex justify-center items-center w-[60%] h-[65%] bg-[#2F3142] rounded-3xl">
                                        <BsPlusLg className="items-center ml-8 mt-8 text-[55px] text-[#3973FF]"/>
                                    </div>
                                    </Link>
                                </div>
                                <p className="m-2 text-[#3973FF] font-semibold">Generate new QR</p>
                            </div>
                            <div className="flex-col relative flex justify-center items-center w-full h-[33%]">
                                <div className=" w-[70%] h-[65%] bg-[#2F3142] rounded-3xl">
                                    < Link to="/Driver-detail"> 
                                    <div className="flex justify-end">
                                        <div className=" flex justify-center absolute w-[15%] h-[65%]  opacity-20 bg-white rounded-r-3xl">
                                        <ImQrcode className="text-black mt-4 text-[25px]" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-[60%] h-[65%] ml-4 mt-6 bg-[#2F3142] bg-no-repeat bg-top 
                                        bg-[length:110px_100px] bg-cover bg-bus-cover rounded-3xl">
                                    </div>
                                    </Link>
                                </div>
                                <p className="m-2 text-white font-semibold">Bus 1</p>
                            </div>
                            <div className="flex-col relative flex justify-center items-center w-full h-[33%]">
                                <div className=" w-[70%] h-[65%] bg-[#2F3142] rounded-3xl">
                                    < Link to="/Driver-detail"> 
                                    <div className="flex justify-end">
                                        <div className="flex justify-center absolute w-[15%] h-[65%]  opacity-20 bg-white rounded-r-3xl">
                                        <ImQrcode className="text-black mt-4 text-[25px]" />
                                        </div>
                                    </div>
                                   <div className="flex flex-row justify-center items-center w-full h-full">
                                    <div className="flex w-[20%] h-full justify-center items-center">
                                    <MdDirectionsBusFilled className="text-[70px] text-[#3973FF] -ml-10"/>
                                    </div>
                                    <div className="flex flex-col text-redText font-semibold text-xs justify-center items-center w-[40%] h-full">
                                        <p>A/C</p>
                                        <p>bus:56</p>
                                        <p></p>
                                    </div>
                                   </div>
                                    </Link>
                                </div>
                                <p className="m-2 text-white font-semibold">bus 5</p>
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <div className="flex flex-row justify-center items-center w-full h-[27%]"></div>
                                                            {/* center div */}
                            <div className="flex flex-row items-center w-[90%] h-[45%]">
                                                        {/* center bus */}
                                <div className="flex-col relative flex justify-center items-center w-[40%] h-full">
                                    <div className=" w-[75%] h-[52%] bg-[#2F3142] rounded-3xl">
                                            {/* < Link to="/Driver-detail">  */}
                                        <div className="flex justify-end">
                                            <div className="absolute w-[15%] h-[52%]  opacity-20 flex justify-center bg-white rounded-r-3xl">
                                            <ImQrcode className="text-black mt-4 text-[25px]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center w-full h-full">
                                            <div className="flex w-[20%] h-full justify-center items-center">
                                                <MdDirectionsBusFilled className="text-[70px] text-[#3973FF] -ml-10"/>
                                            </div>
                                            <div className="flex flex-col text-redText font-semibold text-xs justify-center items-center 
                                                w-[40%] h-full">
                                                <p>A/C</p>
                                                <p>bus:56</p>
                                                <p></p>
                                            </div>
                                        </div>
                                                {/* </Link> */}
                                     </div>
                                        <p className="m-2 text-white font-semibold">bus 2</p>
                                </div>
                                <div className="flex-col relative flex justify-center items-center w-[40%] h-full">
                                    <div className=" w-[75%] h-[52%] bg-[#2F3142] rounded-3xl">
                                            {/* < Link to="/Driver-detail">  */}
                                        <div className="flex justify-end">
                                            <div className="absolute w-[15%] h-[52%]  opacity-20 flex justify-center bg-white rounded-r-3xl">
                                            <ImQrcode className="text-black mt-4 text-[25px]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center w-full h-full">
                                            <div className="flex w-[20%] h-full justify-center items-center">
                                                <MdDirectionsBusFilled className="text-[70px] text-[#3973FF] -ml-10"/>
                                            </div>
                                            <div className="flex flex-col text-redText font-semibold text-xs justify-center items-center 
                                                w-[40%] h-full">
                                                <p>A/C</p>
                                                <p>bus:56</p>
                                                <p></p>
                                            </div>
                                        </div>
                                                {/* </Link> */}
                                     </div>
                                        <p className="m-2 text-white font-semibold">bus 3</p>
                                </div>
                                <div className="z-20 flex-col relative flex justify-center items-center w-[40%] h-full">
                                    <div className=" w-[75%] h-[52%] bg-[#2F3142] rounded-3xl">
                                            {/* < Link to="/Driver-detail">  */}
                                        <div className="flex justify-end">
                                            <div className="absolute w-[15%] h-[52%] flex justify-center opacity-20 bg-white rounded-r-3xl">
                                            <ImQrcode className="text-black mt-4 text-[25px]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center w-full h-full">
                                            <div className="flex w-[20%] h-full justify-center items-center">
                                                <MdDirectionsBusFilled className="text-[70px] text-[#3973FF] -ml-10"/>
                                            </div>
                                            <div className="flex flex-col text-redText font-semibold text-xs justify-center items-center 
                                                w-[40%] h-full">
                                                <p>A/C</p>
                                                <p>bus:56</p>
                                                <p></p>
                                            </div>
                                        </div>
                                                {/* </Link> */}
                                     </div>
                                        <p className="m-2 text-white font-semibold">bus 4</p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center w-full h-[28%]"></div>

                        </div>
                    
                    </div>
                    
                    

                    
                   
                    
                </div> 

            </div>
       
           

        
        
        
        
    
    

   
        );
}
export default Generateqr;  