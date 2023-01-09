import React,{useState} from "react";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
import axios from "../../../API/axios";
import { Seatings } from "./Seatings";
import { RiSteering2Fill } from "react-icons/ri";


const BusSeats = () => {

  const BoxA = ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13","A14","A15"];
  const BoxB = ["B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","B11","B12","B13","B14","B15"]
  const BoxC = ["C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13","C14","C15"]



  const SeatClass = [
    {name: "Normal"},
    {name: "Business"},
    {name: "VIP"},
  ]




  const [boxValue, setBoxValue] = useState<number>(15)
  
  const [rows, setRow] = useState<string>()
  const [addNormal, setAddNormal] = useState<number[]>([]);
  const [addBusiness, setAddBusiness] = useState<number[]>([])
  const [addVip, setAddVip] = useState<number[]>([])

  const [type, setType] = useState<string>("Normal")

  
  console.log(rows, "rowsss");
  

  const Conrtol = (i:any) => {
    switch(type){
      case "Normal":
        return handleAdd(i);
      case "VIP":
        return handleNewAdd(i);
      case "Business":
        return handleBusiness(i)
    }
  };

  const click = () => {
    console.log("hiiii");
  }
  const clickkk = () => {
    console.log("helloooo");
    
  }

  const handleAdd = (i:any) => {
      if(addNormal?.includes(i) || addVip?.includes(i) || addBusiness?.includes(i)){
        setAddNormal(addNormal.filter((w:any) => w !== i));
      } else{
        setAddNormal(addNormal => [...addNormal, i]);
      };
  }
  const handleNewAdd = (i:any) => {
      if(addVip.includes(i) || addNormal.includes(i) || addBusiness?.includes(i)){
        setAddVip(addVip.filter((b:any) => b !== i ))
        } else{
          setAddVip(addVip => [...addVip, i])
        };
      } 
  const handleBusiness = (i:any) => {
    if(addBusiness.includes(i) || addVip.includes(i) || addNormal?.includes(i)){
        setAddBusiness(addBusiness.filter((c:any) => c !== i ))
        } else{
          setAddBusiness(addBusiness => [...addBusiness, i])
        };
  }
    
  const busSeats = {
    normalSeats: addNormal,
    VIPSeats: addVip,
    BusinessSeats: addBusiness,
  }
    
  console.log("ADDED BUSES", busSeats);
    
  const send =async () => {
    const resp = await axios.post('http://192.168.1.9:81/getSeatsData', busSeats);
    console.log(resp.status, "seat sended"); 
  };
  

  const changeColor = (i:any, type:any) => {
    let backgroundColor = ""
    switch(type){
      case "Normal":
        return backgroundColor = 
        (addNormal.includes(i) ? "bg-primaryText" : addVip.includes(i) ? "bg-yellowText" : addBusiness.includes(i) ? "bg-quaternaryText" : "bg-greyText hover:bg-primaryText");
      case "VIP":
        return backgroundColor = (addVip.includes(i) ? "bg-yellowText" : addNormal.includes(i) ? "bg-primaryText" : addBusiness.includes(i) ? "bg-quaternaryText" : "bg-greyText hover:bg-yellowText");
      case "Business":
        return backgroundColor = (addBusiness.includes(i) ? "bg-quaternaryText" : addNormal.includes(i) ? "bg-primaryText" : addVip.includes(i) ? "bg-yellowText" : "bg-greyText hover:bg-quaternaryText")
    }
  }

  



  return <div>
    <div className="flex flex-col justify-start items-center w-[96vw] h-screen">
      <div className='z-10 flex justify-center items-center w-[600px] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
        <p className='font-bold tracking-wider text-3xl text-primaryText'>Add New Bus</p>
      </div>
      <div className='flex flex-col items-center w-[1300px] h-[600px] rounded-3xl bg-secondary bg-cover bg-center bg-no-repeat -mt-4'>
        <div className="flex justify-end items-center pr-8 w-[100%] h-20">
          <BackButton />
        </div>
        <div className="flex flex-col items-center w-[700px] h-96 mt-8">
            <p className="text-primaryText pt-4 font-semibold" onClick={send}>Select Seating Arrangement</p>
            <div className="flex justify-around px-6 rounded-3xl bg-primary py-2 mt-4">
              {SeatClass.map(({name}) => (
                <p className={`flex justify-center px-4 font-semibold cursor-pointer
                ${type === name ? "text-primaryText" : ""}`}
                onClick={() =>setType(name)}>
                  {name}
                </p>
              ))}
            </div>
            <div className="flex justify-around items-center h-10 mt-4 w-full">
                <div className="w-10 h-3 rounded-3xl bg-primary"></div>
                <div className="w-10 h-3 rounded-3xl bg-primary"></div>
            </div>
            <div className="flex justify-between relative w-[90%] h-[210px] bg-primary rounded-xl -mt-2 rounded-l-[60px] shadow-inner">
              <div className="flex items-end absolute ml-16 h-full">
                <RiSteering2Fill scale={30} className="-rotate-90 text-2xl text-pinkText mb-6" />
              </div>
              <div className="flex flex-col ml-32">
                  <div className="">
                    <Seatings data="i" typeOfSeats={type} boxName={BoxA} />
                    <Seatings data="j" typeOfSeats={type} boxName={BoxB} />
                    <Seatings data="k" typeOfSeats={type} boxName={BoxC} />
                    <Seatings data="l" typeOfSeats={type} boxName={BoxC} />
                    <Seatings data="m" typeOfSeats={type} boxName={BoxC} />
                    <Seatings data="n" typeOfSeats={type} boxName={BoxC} />
                  </div>
              </div>
            </div>
            <div className="flex justify-around items-center h-10 -mt-2 w-full">
                <div className="w-10 h-3 rounded-3xl bg-primary"></div>
                <div className="w-10 h-3 rounded-3xl bg-primary"></div>
            </div>
        </div>
        <div className="flex justify-between items-center w-full mt-10">
          <div className="flex flex-col items-center ml-8">
            <p className="flex justify-center items-center w-32 h-14 mb-2 bg-primary rounded-lg">
              {busSeats.normalSeats.length + busSeats.BusinessSeats.length + busSeats.VIPSeats.length}
            </p>
           <p className="text-primaryText font-semibold">No. of Seats</p>
          </div>

          <Link to={''} onClick={send}
          className="flex shadow-2xl justify-center items-center w-44 mr-8 rounded-3xl
          text-[#50FF84] h-[50px] bg-[#2F3142] text-3xl font-semibold">
              Next
          </Link>
        </div>
        {boxValue}
      </div>
    </div>

  </div>;
};

export default BusSeats;