import React,{useState} from "react";
import { Link } from "react-router-dom";
import Addnewbus from "./components/Addnewbus";
import { BsSearch } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiBus } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { FaBusAlt } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { HiClock } from "react-icons/hi";
import { BsCalendarCheck } from "react-icons/bs";
import { BsCalendarX } from "react-icons/bs";
import {BusInfo} from "./components/BusInfo";






const Bus = () => {


  
  const [showList, setShowList] =useState<number>(1);

    const members = [
        { name : "bus1"},
        { name : "bus2"},
        { name : "bus3"},
        { name : "bus4"},
       
       
    ]
    const[open, setOpen]=useState(false)
    console.log(open);
    




  return<div>
   
    <div className="relative">
    {open &&
    <div className="absolute flex justify-end items-center w-full h-full">
    <div className="z-10 absolute w-full  h-full"onClick={() => setOpen(!open)}></div> 
      <div className="z-20 mr-[135px] mt-[95px]">
        <BusInfo />
      </div>
    </div>
    }
  <div className="flex w-[96vw] h-screen">
    <Addnewbus/>
    
    <div className="w-[100%] h-full">
      <div className=" w-full h-[11%] mt-6">
        <div className="flex flex-row w-full h-full">
        <div className="flex flex-row justify-center w-[85%] h-full items-center">
        <div className="flex justify-center border-2 w-[360px] mx-3 border-[#0095E2]  h-[36px] my-6 rounded-full px-5">
              <input
                type="text"
                placeholder="Search Bus..."
                className="bg-transparent border-none py-2 px-2 text-white outline-none w-[300px]"
              />       
        </div>
        <div>
          <BsSearch className="mt-2 text-[23px] text-[#0095E2]"/>
          </div>
        </div>
        <div className="flex justify-end w-[6%] h-full items-center">
        <button className={`z-30 text-[60px] text-[#0095E2] transition ${open ? "" : " scale-75"}`} onClick={() => setOpen(!open)}>
          <AiFillInfoCircle/>
        </button>
        </div>
        </div>
        </div>
 
          
      
      <div className="flex w-full mt-4 h-[85%]">
      <div className="bg-secondary w-[41%] h-full overflow-y-auto rounded-3xl">
        <section className="flex flex-col w-full h-[10%]">
          <p className="flex justify-center mt-6 text-redText font-semibold">Active Busses</p>
        </section>
        
         <div className="grid grid-cols-2  border-b-2 border-tertiary gap-2 w-[100%] h-[100%]">  
         {members.map(({name}) => (      
         <section className="flex flex-row  border-b-full border-tertiary w-[70%] h-[100%]">
              <Link to="/bus-viewdetails">
              <div className="w-[100%] h-full">
            
                <div className="flex flex-start justify-center w-[85%] h-[60%]  ml-[60px]  rounded-[40px] bg-white">
                  <div className="flex justify-center w-[100%]  h-[70%] rounded-[40px] bg-pinkText">
                  <div className="flex justify-center mt-8 w-[56%] h-[50%] bg-white rounded-[100px]"></div>
                  </div>
                </div>
               <p className=" flex start ml-[100px] text-pinkText font-bold">{name}</p>
              </div>
              </Link>
            </section>
            ))}
            </div>  
      </div>
      <div className="w-[10%] h-full justify-center flex ">
        <div className="flex flex-col items-center w-[40%] rounded-2xl h-[35%] bg-[#2F3142]">
          <div className="flex w-[100%] text-redText text-[60px] justify-center items-center h-[30%] bg-[#3973FF] rounded-2xl">
            <BsFilter className="text-white"/>
          </div>
          <div className="text-[38px] text-[#3973FF]">
          <FaBusAlt className="p-2 "/>
          <FaBus className="p-2"/>
          <HiClock  className="p-2"/>
          <HiClock  className="p-2"/>
          </div>
        
        </div>
       
      
      </div>
      <div className="bg-secondary w-[41%] h-full overflow-y-auto rounded-3xl">
        <section className="flex flex-col w-full h-[10%]">
          <div className="flex flex-row mt-4 w-full h-[10%]">
            <div className="flex justify-center ml-[60px] h-full w-[80%]">
          <p className="flex justify-center text-redText font-semibold">Available Busses</p>
          </div>
          <div className="flex justify-end w-[5%]">
          <div className="mr-6 text-[26px] font-semibold text-[#0095E2]"><BsCalendarCheck/></div>
          <div className="mr-6 text-[26px] text-white font-semibold"><BsCalendarX/></div>
          </div>
          
          </div>
        </section>
        <div className="grid grid-cols-2 w-[100%] h-[100%]">  
         {members.map(({name}) => (      
         <section className="flex flex-row  border-b-full border-tertiary w-[70%] h-[100%]">
              <div className="w-[100%]">
                <p className="flex flex-start justify-center w-[75%] h-[60%]  ml-[60px]  rounded-[40px]  bg-white">
                  <p className="flex justify-center w-[100%]  h-[75%] rounded-[40px] bg-redText">
                    <p className="flex justify-center mt-8 w-[56%] h-[50%] bg-white rounded-[100px] "></p>
                  </p>
                </p>
                  <p className=" flex start ml-[100px] text-redText font-bold">{name}</p>
              </div>
            </section>
            ))}
            </div>
       
      </div>
      
    </div>
    </div>
      
  </div>
  
  </div>
  </div>

  
};

export default Bus;




// import React,{useState} from "react";
// import BackButton from "../../components/BackButton";
// import axios from 'axios'


// const Bus = () => {

//   const Box:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//   const SeatClass = [
//     {name: "Normal"},
//     {name: "VIP"},
//   ]


//   const [boxValue, setBoxValue] = useState<number>(15)
//   const [add, setAdd] = useState<number[]>([])
//   const [addVip, setAddVip] = useState<number[]>([])

//   const [type, setType] = useState<string>("Normal")

  
  

//   const Conrtol = (i:any) => {
//     switch(type){
//       case "Normal":
//         return handleAdd(i);
//       case "VIP":
//         return handleNewAdd(i);
//     }
//   }

//   const handleAdd = (i:any) => {
//         if(add?.includes(i) || addVip?.includes(i)){
//           setAdd(add.filter((w:any) => w !== i ));
//         } else{
//           setAdd(add => [...add, i]);
//         };
//   }

//   const handleNewAdd = (i:any) => {
//       if(addVip.includes(i) || add.includes(i)){
//         setAddVip(addVip.filter((b:any) => b !== i ))
//         } else{
//           setAddVip(addVip => [...addVip, i])
//         };
//       } 
    
//   const busSeats = {
//     normalSeats: add,
//     VIPSeats: addVip
//   }
    
//   console.log("ADDED BUSES", busSeats);
    
//   const send =async () => {
//     const resp = await axios.post('http://192.168.1.11:80/summa', busSeats);
//     console.log(resp.status); 
//   }
  
  

//   const changeColor = (i:any, type:any) => {
//     let backgroundColor = ""
//     switch(type){
//       case "Normal":
//         return backgroundColor = (add.includes(i) ? "bg-primaryText" : addVip.includes(i) ? "bg-yellowText" : "bg-greyText hover:bg-primaryText");
//       case "VIP":
//         return backgroundColor = (addVip.includes(i) ? "bg-yellowText" : add.includes(i) ? "bg-primaryText" : "bg-greyText hover:bg-yellowText");
//     }
//   }



//   return <div>
//     <div className="flex flex-col justify-start items-center w-[96vw] h-screen">
//       <div className='z-10 flex justify-center items-center w-[600px] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
//         <p className='font-bold tracking-wider text-3xl text-primaryText'>Add New Bus</p>
//       </div>
//       <div className='flex flex-col items-center w-[1300px] h-[600px] rounded-3xl bg-secondary bg-cover bg-center bg-no-repeat -mt-4'>
//         <div className="flex justify-end items-center pr-8 w-[100%] h-20">
//           <BackButton />
//         </div>
//         <div className="flex flex-col items-center w-[700px] h-96 mt-8">
//             <p className="text-primaryText pt-4 font-semibold" onClick={send}>Select Seating Arrangement</p>
//             <div className="flex justify-around w-40 rounded-3xl bg-primary py-2 mt-4">
//               {SeatClass.map(({name}) => (
//                 <p className={`flex justify-center w-[50%] font-semibold cursor-pointer ${type === name ? "text-primaryText" : ""}`}
//                 onClick={() =>setType(name)}>
//                   {name}
//                 </p>
//               ))}
//             </div>
//             <div className="flex justify-around items-center h-10 mt-4 w-full">
//                 <div className="w-10 h-3 rounded-3xl bg-primary"></div>
//                 <div className="w-10 h-3 rounded-3xl bg-primary"></div>
//             </div>
//             <div className="w-[85%] h-[200px] bg-primary rounded-xl -mt-2 rounded-l-[60px] shadow-inner">
//               <div className="flex flex-col items-end ml-24 mt-6">
//                   <div className="flex gap-1 mr-4 -mt-2">
//                   {Box.map((i, index) => (
//                     <div className={`w-4 h-4 ${changeColor(i,type)} ml-3 mt-2 rounded-sm`}
//                       onClick={() => Conrtol(i)}>
//                     </div>
//                   ))}
//                   </div>
//               </div>
//             </div>
//             <div className="flex justify-around items-center h-10 -mt-2 w-full">
//                 <div className="w-10 h-3 rounded-3xl bg-primary"></div>
//                 <div className="w-10 h-3 rounded-3xl bg-primary"></div>
//             </div>
//         </div>
//         {boxValue}
//       </div>
//     </div>
//   </div>;
// };

// export default Bus;