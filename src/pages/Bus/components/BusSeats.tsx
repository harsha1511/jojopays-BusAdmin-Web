import React,{useState} from "react";
import BackButton from "../../../components/BackButton";
import axios from 'axios'


const BusSeats = () => {

  const Box:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  const SeatClass = [
    {name: "Normal"},
    {name: "VIP"},
  ]


  const [boxValue, setBoxValue] = useState<number>(15)
  const [add, setAdd] = useState<number[]>([])
  const [addVip, setAddVip] = useState<number[]>([])

  const [type, setType] = useState<string>("Normal")

  
  

  const Conrtol = (i:any) => {
    switch(type){
      case "Normal":
        return handleAdd(i);
      case "VIP":
        return handleNewAdd(i);
    }
  }

  const handleAdd = (i:any) => {
        if(add?.includes(i) || addVip?.includes(i)){
          setAdd(add.filter((w:any) => w !== i ));
        } else{
          setAdd(add => [...add, i]);
        };
  }

  const handleNewAdd = (i:any) => {
      if(addVip.includes(i) || add.includes(i)){
        setAddVip(addVip.filter((b:any) => b !== i ))
        } else{
          setAddVip(addVip => [...addVip, i])
        };
      } 
    
  const busSeats = {
    normalSeats: add,
    VIPSeats: addVip
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
        return backgroundColor = (add.includes(i) ? "bg-primaryText" : addVip.includes(i) ? "bg-yellowText" : "bg-greyText hover:bg-primaryText");
      case "VIP":
        return backgroundColor = (addVip.includes(i) ? "bg-yellowText" : add.includes(i) ? "bg-primaryText" : "bg-greyText hover:bg-yellowText");
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
            <div className="flex justify-around w-40 rounded-3xl bg-primary py-2 mt-4">
              {SeatClass.map(({name}) => (
                <p className={`flex justify-center w-[50%] font-semibold cursor-pointer ${type === name ? "text-primaryText" : ""}`}
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
                  <div className="flex gap-1 mr-4 -mt-2">
                  {Box.map((i, index) => (
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
        {boxValue}
      </div>
    </div>
  </div>;
};

export default BusSeats;