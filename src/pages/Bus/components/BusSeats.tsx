import React,{useState} from "react";
import BackButton from "../../../components/BackButton";
import axios from 'axios'
import { Link } from "react-router-dom";


const BusSeats = () => {

  // interface BoxProps {
  //   seatNo: number;
  //   seatType: string;
  //   normal: boolean;
  // }
  // const Box:BoxProps[] = [
  //   {seatNo: 1, seatType: "", normal: true},
  //   {seatNo: 2, seatType: "", normal: true},
  //   {seatNo: 3, seatType: "", normal: true},
  //   {seatNo: 4, seatType: "", normal: true},
  //   {seatNo: 5, seatType: "", normal: true},
  //   {seatNo: 6, seatType: "", normal: true},
  //   {seatNo: 7, seatType: "", normal: true},
  //   {seatNo: 8, seatType: "", normal: true},
  //   {seatNo: 9, seatType: "", normal: true},
  //   {seatNo: 10, seatType: "", normal: true},
  //   {seatNo: 11, seatType: "", normal: true},
  //   {seatNo: 12, seatType: "", normal: true},
  //   {seatNo: 13, seatType: "", normal: true},
  //   {seatNo: 14, seatType: "", normal: true},
  //   {seatNo: 15, seatType: "", normal: true},
  // ]
  const Box = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]


  const SeatClass = [
    {name: "Normal"},
    {name: "Business"},
    {name: "VIP"},
  ]




  const [boxValue, setBoxValue] = useState<number>(15)
  
  const [addNormal, setAddNormal] = useState<number[]>([]);
  const [addBusiness, setAddBusiness] = useState<number[]>([])
  const [addVip, setAddVip] = useState<number[]>([])

  const [type, setType] = useState<string>("Normal")

  
  

  const Conrtol = (i:any) => {
    switch(type){
      case "Normal":
        return handleAdd(i);
      case "VIP":
        return handleNewAdd(i);
      case "Business":
        return handleBusiness(i)
    }
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
    const resp = await axios.post('http://192.168.1.11:80/summa', busSeats);
    console.log(resp.status); 
  }
  
  

  const changeColor = (i:any, type:any) => {
    let backgroundColor = ""
    switch(type){
      case "Normal":
        return backgroundColor = (addNormal.includes(i) ? "bg-primaryText" : addVip.includes(i) ? "bg-yellowText" : addBusiness.includes(i) ? "bg-quaternaryText" : "bg-greyText hover:bg-primaryText");
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
            <div className="w-[85%] h-[200px] bg-primary rounded-xl -mt-2 rounded-l-[60px] shadow-inner">
              <div className="flex flex-col items-end ml-24 mt-6">
                  <div className="flex-wrap w-[500px] h-40 flex gap-1 mr-4 -mt-2">
                  {Box.map((i) => (
                    <div className={`w-4 h-4 ${changeColor(i,type)} ml-3 mt-2 rounded-sm`}
                    onClick={() => Conrtol(i)}>
                    </div>
                  ))}
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

          <Link to={''}
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