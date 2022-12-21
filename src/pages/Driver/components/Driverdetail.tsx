import React,{useState} from "react";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Driverbus from "./driverbus";
function Driverdetail() {



  const [busName, setBusName] = useState()

  const BusName = [
      {copilot: "Time of order-Ascending"},
      {copilot: "Time of order-Decending"},
      {copilot: "Time of order-Seating Order"},
  ]



  const [showList, setShowList] =useState<number>(3);

    const members = [
        { name : "A1"},
        { name : "C1"},
        { name : "D1"},
        { name : "B1"},
        { name : "A1"},
        { name : "D1"},
    ]





    return <div>
      




      <div className='flex justify-center items-center w-[96vw] h-screen'>
        <div className='flex flex-col items-center w-[100%] h-[630px] rounded-3xl bg-secondary   bg-no-repeat'>
                                             {/* Top text   */}
          <div className="  items-center rounded-3xl    w-[100%] h-[20%]">
            <div className="flex flex-col absolute left-0 top-0 h-16 sm:ml-[80px]   w-16  ">
              <img src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png" alt="" className="  w-[95px] h-[95px]  mt-[16px]  rounded-full "/>
              <p className=" text-[23px] font-bold text-primaryText">Daniel</p>
              <p className=" text-[14px] w-[180px] -ml-16 font-bold text-white">Co-pilot name:<span className="text-textblue"> Sam</span></p>
            </div>
            <div className="z-10 flex justify-center  ml-[28px] items-center w-[75%] ">
              <section className='flex p-[20px] font-semibold justify-between'>
                <p className="m-[15px]">ID: <span className="text-primaryText">PIL01236</span></p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-quaternary rounded-lg">DM</p>
                <p className="m-[15px]">Ph: <span className="text-primaryText">+916595125521</span></p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-primary text-primaryText rounded-lg">100$</p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-primary text-primaryText rounded-lg">1000$</p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-primary text-primaryText rounded-lg">0$</p>
              </section>
            </div>
            <div className="z-10 drop-shadow-lg flex justify-center ml-[10px] -mt-[80px] p-4 items-center w-[95%] ">
              <section className='flex p-[25px] font-semibold justify-between'>
                <p className="m-[15px]">ID: <span className="text-textblue">PIL01236</span></p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-quaternary rounded-2xl">DM</p>
                <p className="m-[15px]">Ph: <span className="text-textblue">+916595125521</span></p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-primary text-textblue rounded-lg">100$<br/><p className="text-primaryText">Food</p></p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-primary text-textblue rounded-lg">0$<br/><p className="text-primaryText">Gas</p></p>
                <p className="m-[15px] w-[70px] h-[22px]  text-center bg-primary text-textblue rounded-lg">0$<br/><p className="text-primaryText">maintenance</p></p>
                <p className="m-[15px] w-[80px] h-[45px] p-2 -mt-[8px] text-center bg-primary text-textblue rounded-lg">2,200$<br/><p className=" mt-4 text-redText">Expences</p></p>
                <p className="m-[15px] w-[80px] h-[45px]  p-2 -mt-[8px] text-center bg-primary text-textblue rounded-lg">10,000$<br/><p className=" -ml-8 w-[130px] mt-4 text-quaternaryText">Income Till Now</p></p>
              </section>
                <p className="  -mr-[120px] ml-[25px] font-semibold  -mt-4 text-white">Bus No.: <span className="text-textblue">PILO1417</span></p>
            </div>
            <div className="  flex flex-row-reverse mr-8 -mt-[130px]"> 
              < BackButton/>         
            </div>
          </div>

          <Driverbus/>
                                           {/* center-boxs  */}
        <div className='absolute left-0 top-0 ml-[480px] mt-[190px] pt-2 pb-4 w-[350px] h-[470px] bg-quaternary rounded-2xl'>
          
        <p className="  text-redText flex justify-center border-b-2  border-tertiary font-semibold">Passenger(s)</p>
        {/* <p className=" flex justify-center  bg-primary w-[90px] h-[30px] m-4 p-2 ml-[125px]
         text-center items-center rounded-lg text-textblue  font-semibold">50</p>         */}
         <div className=" flex items-center border-b-2  border-tertiary m-2 -mt-[6px] font-semibold justify-between">
              <p className="p-2 mt-8 ml-4 text-primaryText font-semibold">8.00 am</p>
              <p className="p-2  flex justify-center  bg-primary w-[90px] h-[30px] m-4 p-2 ml-[25px]
              text-center items-center rounded-lg text-primaryText  font-semibold">50</p>
              <p className="p-2 mt-8 text-primaryText font-semibold">End Time</p>

          </div>
          <div className="w-[95%] flex justify-center h-[8%]">
           {/* <div className='w-40 h-[1px] ml-8 bg-primaryText'></div>  */}
                            <select name="Driver" id="clicking" className='w-[90%] h-8 ml-[10px] bg-redText 
                            text-textblue pl-2 rounded-lg rounded-tr-[10px] focus:outline-none drop-shadow-2xl'>
                                <option >Seating order</option>
                                {BusName.map(({ copilot}) => (
                                    <option className="" value={copilot}>{copilot}</option>
                                ))}
                            </select>
                            </div>




          <div className="flex justify-center ml-12 border-2 w-[240px]  focus:outline-none mt-[15px] border-primaryText h-[30px] my-6 mx-3 rounded-full px-3">
              <input
                type="text"
                placeholder="Search Drivers..."
                className="bg-transparent border-none py-2 px-2 text-white outline-none w-full"
              />{" "}
              <BsSearch className="mt-2 text-primaryText"/>
            </div>
            <div>
            {members.slice(0, showList).map(({name}) => (
            <div className="z-10 flex justify-center drop-shadow-xl  ml-[2px] -mt-4 items-center w-[100%] ">
                <p className="m-[15px] w-[180px] h-[65px] text-xs text-white text-center bg-tertiaryText text-primaryText rounded-lg">{name}
                  <p className="text-xs">IDNO0123
                  <p className="text-xs">Dacid</p></p></p>
                <p className="m-[15px] w-[180px] h-[65px] text-white text-center bg-tertiaryText text-primaryText rounded-lg">{name}
                  <p className="text-xs">IDNO0123
                  <p className="text-xs">Dacid
                    </p></p></p>
                <p className="m-[15px] w-[180px] h-[65px]text-xs text-white text-center bg-tertiaryText text-primaryText rounded-lg">C1
                  <p className="text-xs">IDNO0123
                  <p className="text-xs">Dacid
                      </p></p></p>
                </div>
))}
</div>





        <div className='absolute left-0 top-0 ml-[375px] font-semibold mt-[5px] pt-2 pb-4 w-[330px] h-[160px] bg-quaternary drop-shadow-2xl rounded-2xl'>
          <p className=" flex justify-center font-semibold">Status :<span className="ml-2 text-quaternaryText"> On Trip</span></p>
            <div className=" flex items-center border-b-2  border-tertiary font-bold m-2 -mt-2 justify-between">
              <p className="p-2 text-pinkText">Noeth road</p>
              <p className="p-2 mt-2 text-sm text-textblue">Round Trip</p>
              <p className="p-2 text-pinkText">West road</p>
            </div>
            <div className=" flex items-center  m-2 -mt-[6px] font-semibold justify-between">
              <p className="p-2 mt-2 ml-4 text-white font-semibold">8.00 am</p>
              <p className="p-2  text-textblue text-xs font-semibold">ETA : 32 min</p>
              <p className="p-2 text-white font-semibold">End Time</p>
            </div>
          <p className=" flex justify-center  bg-primary w-[100px] h-[23px] p-2 ml-[125px] text-center items-center rounded-lg text-textblue  font-semibold">00:31:54</p>

       
            <div className='absolute left-0 top-0 ml-[346px] -mt-[60px] pt-2 pb-4 w-[165px] h-[220px] bg-quaternary rounded-2xl'>
        
            <div className='absolute left-0 top-0 -ml-[346px] mt-[245px] pt-2 pb-4 w-[510px] h-[280px] bg-quaternary rounded-2xl'>
              </div>
            </div>
            </div>
            </div>
            </div>
              
   

    
    </div>
    </div>;
  }
  
  export default Driverdetail;