import React,{useState} from "react";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Driverbus from "./driverbus";
import Drivercomment from "./Drivercomment";
import {FaUserAlt} from 'react-icons/fa'
function Tripdetails() {



  const [busName, setBusName] = useState()

  const BusName = [
      {name: "SRV" , pilot: "andrew" , copilot: "Time of order-Ascending"},
      {name: "Intrcity", pilot: "andrew" , copilot: "Time of order-Decending"},
      {name: "Essar" , pilot: "andrew" , copilot: "Time of order-Seating Order"},
  ]



  const [showList, setShowList] =useState<number>(3);

    const members = [
        { name : "10.20am"},
        { name : "09.49am"},
        { name : "10.25am"},
        { name : "10.30am"},
        { name : "09.49am"},
        { name : "09.32am"},
    ]





    return <div>
      




      <div className='flex justify-center items-center w-[96vw] h-screen'>
        
      
        <div className='flex flex-col items-center w-[1300px] h-[630px] rounded-3xl bg-secondary   bg-no-repeat'>
        <div className=" flex fixed text-primaryText font-bold z-10  text-xl -mt-[30px] items-center h-[40px] w-[20%] justify-around rounded-[15px] bg-[#2F3142] shadow-xl">
        <h1>1 August 2021 (Sunday)</h1>
      </div>
        
                                             {/* Top text  */}
          <div className="  items-center rounded-3xl text-[15px]   w-[100%] h-[20%]">
          
            <div className="z-10 flex justify-center items-center w-[75%] ">
              <section className="flex p-[20px] font-semibold justify-between ">
                <p className="m-[15px] -ml-10">Pilot name: <span className="text-primaryText">Drake</span></p>
                <p className="m-[15px]">ID: <span className="text-primaryText">PIL01236</span></p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-quaternary rounded-lg">DM</p>
                <p className="m-[15px]">Ph: <span className="text-primaryText">+916595125521</span></p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-primary text-primaryText rounded-lg">100$</p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-primary text-primaryText rounded-lg">1000$</p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-primary text-primaryText rounded-lg">0$</p>
              </section>
            </div>
            <div className="z-10 drop-shadow-lg flex justify-center  -mt-[80px] p-4 items-center w-[92%] ">
              <section className='flex p-[25px] font-semibold justify-between'>
                <p className="m-[15px] -ml-14">C0-Pilot name: <span className="text-primaryText">Sam</span></p>
                <p className="m-[15px]">ID: <span className="text-primaryText">PIL01236</span></p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-quaternary rounded-2xl">DM</p>
                <p className="m-[15px]">Ph: <span className="text-primaryText">+916595125521</span></p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-primary text-primaryText rounded-lg">100$<br/><p className="text-primaryText">Food</p></p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-primary text-primaryText rounded-lg">0$<br/><p className="text-primaryText">Gas</p></p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-primary text-primaryText rounded-lg">0$<br/><p className="text-primaryText">maintenance</p></p>
                <p className="m-[15px] w-[80px] h-[45px] p-2 -mt-[8px] text-center bg-primary text-primaryText rounded-lg">2,200$<br/><p className=" mt-4 text-redText">Expences</p></p>
                <p className="m-[15px] w-[80px] h-[45px]  p-2 -mt-[8px] text-center bg-primary text-primaryText rounded-lg">10,000$<br/><p className=" -ml-8 w-[130px] mt-4 text-quaternaryText">Income </p></p>
              </section>
               
            </div>
            <div className="  flex flex-row-reverse mr-8 -mt-[130px]"> 
              < BackButton/>         
            </div>
          </div>

         <Drivercomment/>
                                          {/* center-boxs */}
        <div className='absolute left-0 top-0 ml-[480px] mt-[190px] pt-2 pb-4 w-[350px] h-[470px] bg-quaternary rounded-2xl'>
          
        <p className="  text-redText flex justify-center border-b-2 mx-[100px] pb-2 border-tertiary font-semibold">Passenger(s)</p>
        {/* <p className=" flex justify-center  bg-primary w-[90px] h-[30px] m-4 p-2 ml-[125px]
         text-center items-center rounded-lg text-primaryText  font-semibold">50</p>         */}
         <div className=" flex items-center border-b-2 mx-6 border-tertiary m-2 -mt-[6px] font-semibold ">
             
              <p className="p-2  flex justify-center  bg-primary w-[80px] h-[30px] m-4 p-2 ml-[25px]
              text-center items-center rounded-lg text-primaryText  font-semibold">150</p>
               <p className="  text-primaryText flex justify-center border-b-2 mt-10 border-primaryText ml-2 font-semibold">In this trip</p>
          </div>
          <div>
          {/* <div className='w-40 h-[1px] ml-8 bg-text-primaryText'></div> */}
                            <select name="Driver" id="clicking" className='w-62 h-8 ml-[60px] bg-secondary text-primaryText pl-3 rounded-lg rounded-tr-[10px] focus:outline-none drop-shadow-2xl'>
                                
                                {BusName.map(({name,pilot, copilot}) => (
                                  
                                    <option className='pb-2' value={copilot}>{copilot}</option>
                                ))}
                            </select>
                            </div>




              <div className="flex justify-center  border-2 w-[240px] focus:outline-none mt-[15px] border-primaryText h-[30px] my-6 mx-14 rounded-full px-5">
                <input type="text" placeholder="Search Drivers..."
                className="bg-transparent border-none  py-2 px-2 text-white outline-none w-full" />{" "}
              <BsSearch className="mt-2  text-primaryText"/>
            </div>
            <div className="">
            
            {members.slice(0, showList).map(({name}) => (
             
             
            <div className="z-10 flex justify-center drop-shadow-xl  ml-[2px] -mt-4 items-center w-[100%] ">
                <p className="m-[15px] w-[180px] h-[65px] text-xs text-white text-center bg-tertiaryText text-primaryText rounded-lg">{name}
                  <p className="text-xs text-white">IDNO0123
                  <p className="text-xs text-[#B1B1B1]">David</p></p></p>
                <p className="m-[15px] w-[180px] h-[65px] text-xs text-white text-center bg-tertiaryText text-primaryText rounded-lg">{name}
               
                  <p className="text-xs">IDNO0123
                    <p className="text-xs text-[#B1B1B1]">David
                    </p></p>
                  
                    </p>
                <p className="m-[15px] w-[180px] h-[65px] text-xs text-white text-center bg-tertiaryText text-primaryText rounded-lg">{name}
                  <p className="text-xs">IDNO0123
                  <p className="text-xs text-[#B1B1B1]">David
                      </p></p></p>
                </div>
               
))}

</div>





        <div className='absolute left-0 top-0 ml-[375px] font-semibold mt-[5px] pt-2 pb-4 w-[330px] h-[160px] bg-quaternary drop-shadow-2xl rounded-2xl'>
          <p className=" flex justify-center font-semibold">Status :<span className="ml-2 text-quaternaryText"> On Trip</span></p>
            <div className=" flex items-center border-b-2  border-tertiary font-bold m-2 -mt-2 justify-between">
              <p className="p-2 text-pinkText">Noeth road</p>
              <p className="p-2 mt-2 text-sm text-primaryText">Round Trip</p>
              <p className="p-2 text-pinkText">West road</p>
            </div>
            <div className=" flex items-center  m-2 -mt-[6px] font-semibold justify-between">
              <p className="p-2 mt-2 ml-4 text-white font-semibold">8.00 am</p>
              <p className="p-2  text-primaryText text-xs font-semibold">ETA : 32 min</p>
              <p className="p-2 text-white font-semibold">10.42am</p>
            </div>
          <p className=" flex justify-center  bg-primary w-[100px] h-[23px] p-2 ml-[125px] text-center items-center rounded-lg text-primaryText  font-semibold">00:31:54</p>

       
            <div className='absolute left-0 top-0 ml-[346px] -mt-[60px] pt-2 pb-4 w-[165px] h-[220px] bg-white rounded-2xl'>
        
            <div  className=' absolute left-0 top-0 -ml-[346px] mt-[245px] pt-2 pb-4 w-[510px] h-[280px] bg-quaternary rounded-2xl'>
            <div className=" flex flex-row  items-start justify-between">
            <p className="ml-6 text-[#8D8D8D] font-semibold text-[18px]">Status:<span className="ml-2 font-semibold text-pinkText">IN THE BUS</span></p>
              <p className=" text-[#8D8D8D] font-semibold text-[18px]">Payments Status:<span className="ml-2 mr-10 text-[#50FF84]">PAID</span></p>
            </div>
            <div className="flex flex-row w-full h-full">
              <div className="flex flex-col w-[60%] h-[95%] ">
                <div className="ml-8 text-[13px] border-b-2 mx-[60px] border-textblue pb-2 mt-4 h-[50%]">
                <p className="font-semibold  text-[#8D8D8D]">Passenger Name:<span className="ml-2 text-primaryText"> David</span></p>
                <p className="font-semibold  text-[#8D8D8D]">Passenger Mob :<span className="ml-2 text-primaryText"> +94584****</span></p>
                <p className="font-semibold  text-[#8D8D8D]">Serial Number :<span className="ml-4 text-primaryText"> IDNO0748</span></p>
                <p className="font-semibold  text-[#8D8D8D]">Seate(s) :<span className="ml-14 text-primaryText">A1, B1, C1</span></p>
                <p className="font-semibold  text-[#8D8D8D]">Passenger(s) :<span className="ml-8 text-primaryText">3</span></p>
                </div>
                <div className="ml-8 text-[13px] border-b-2  border-textblue mx-[60px]  pb-2 h-[50%]">
                <p className="font-semibold  text-[#8D8D8D]">From:<span className="ml-[80px] text-primaryText"> David</span></p>
                <p className="font-semibold  text-[#8D8D8D]">To :<span className="ml-[90px] text-primaryText"> +94584</span></p>
                </div>
                <div className="ml-8 text-[13px] mt-4 h-[50%]">
                <p className="font-semibold  text-[#8D8D8D]">From:<span className="ml-[80px] text-primaryText">Thu:10,Jun 10.30Am</span></p>
                <p className="font-semibold  text-[#8D8D8D]">From:<span className="ml-[80px] text-primaryText">-----------</span></p>
                </div>
                
              </div>
              <div className="w-[40%] mt-4 h-[95%]">
                <div className="flex items-center justify-center flex-col w-[65%]  rounded-xl h-[40%] bg-[#1E1E2C]">
                  <p className="text-[20px]  text-primaryText">Grand Total</p>
                  <p className="text-[40px] text-[#50FF84]">15  $</p>

                </div>
              </div>
            </div>
           
           
              </div>
            </div>
            </div>
            </div>
            </div>
              
   

    
    </div>
    </div>;
  }
  
  export default Tripdetails;