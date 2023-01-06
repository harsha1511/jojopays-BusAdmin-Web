import React, { useState } from 'react'
import BusSeats from './BusSeats';


interface ISeats {
    data: string;
    typeOfSeats: string;
    boxName?: any;
}
// const BoxA = ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13","A14","A15"]
export const Seatings = ({
data,
typeOfSeats,
boxName
}: ISeats) => {

  // const BoxC = ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13","A14","A15"]
  // const BoxD = ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13","A14","A15"]
  // const BoxE = ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13","A14","A15"]
  // const BoxF = ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13","A14","A15"]

  
  const [normalA, setNormalA] = useState<number[]>([]);
  const [businessA, setBusinessA] = useState<number[]>([])
  const [vipA, setVipA] = useState<number[]>([])
  
  const [normalB, setNormalB] = useState<number[]>([]);
  const [businessB, setBusinessB] = useState<number[]>([])
  const [vipB, setVipB] = useState<number[]>([])

    const [normalC, setNormalC] = useState<number[]>([]);
  const [businessC, setBusinessC] = useState<number[]>([])
  const [vipC, setVipC] = useState<number[]>([])
  
  
  

  const Conrtol = (i:any) => {
    switch(typeOfSeats){
      case "Normal":
        return handleNormal(i);
      case "VIP":
        return handleVip(i);
        case "Business":
        return handleBusiness(i)
    }
  };

  const handleNormal = (i:any) => {
    if(data === "i") {
      if(normalA?.includes(i) || vipA?.includes(i) || businessA?.includes(i)){
        setNormalA(normalA.filter((w:any) => w !== i));
      } else{
        setNormalA(normalA => [...normalA, i]);
      };
    } else if (data === "j") {
        if(normalB?.includes(i) || vipB?.includes(i) || businessB?.includes(i)){
        setNormalB(normalB.filter((w:any) => w !== i));
      } else{
        setNormalB(normalB => [...normalB, i]);
      };
    } else if (data === "k") {
        if(normalC?.includes(i) || vipC?.includes(i) || businessC?.includes(i)){
        setNormalC(normalC.filter((w:any) => w !== i));
      } else{
        setNormalC(normalC => [...normalC, i]);
      };
    }
  }

  

  const handleVip = (i:any) => {
    if(data === "i") {
      if(vipA.includes(i) || normalA?.includes(i) || businessA?.includes(i)){
        setVipA(vipA.filter((b:any) => b !== i ))
      } else{
        setVipA(vipA => [...vipA, i])
      };
    } else if (data === "j") {
      if(vipB.includes(i) || normalB?.includes(i) || businessB?.includes(i)){
        setVipB(vipB.filter((b:any) => b !== i ))
      } else{
        setVipB(vipB => [...vipB, i])
      };
    } else if (data === "k") {
      if(vipC.includes(i) || normalC?.includes(i) || businessC?.includes(i)){
        setVipC(vipC.filter((b:any) => b !== i ))
      } else{
        setVipC(vipC => [...vipC, i])
      };
    }
    
      } 

  const handleBusiness = (i:any) => {
    if(data === "i"){
      if(businessA.includes(i) || vipA.includes(i) || normalA?.includes(i)){
        setBusinessA(businessA.filter((c:any) => c !== i ))
      } else{
        setBusinessA(businessA => [...businessA, i])
      };
    } else if (data === "j") {
      if(businessB.includes(i) || vipB.includes(i) || normalB?.includes(i)){
        setBusinessB(businessB.filter((c:any) => c !== i ))
      } else{
        setBusinessB(businessB => [...businessB, i])
      };
    } else if (data === "k") {
      if(businessC.includes(i) || vipC.includes(i) || normalC?.includes(i)){
        setBusinessC(businessC.filter((c:any) => c !== i ))
      } else{
        setBusinessC(businessC => [...businessC, i])
      };
    }
  }
    
  const seats = {
    normal : [normalA, normalB, normalC],
    Vip: [vipA, vipB, vipC],
    business: [businessA, businessB, businessC],
  }

  console.log(normalB);
  
  
  console.log(seats, "ajsbh");
  
    

  const changeColor = (data:any) => {
    let backgroundColor = ""
    switch(typeOfSeats){
        case "Normal":
          return backgroundColor = 
            (normalA.includes(data) ? "bg-primaryText" : vipA.includes(data) ? "bg-yellowText" : businessA.includes(data) ? "bg-quaternaryText" 
            :
              normalB.includes(data) ? "bg-primaryText" : vipB.includes(data) ? "bg-yellowText" : businessB.includes(data) ? "bg-quaternaryText"
            :
              normalC.includes(data) ? "bg-primaryText" : vipC.includes(data) ? "bg-yellowText" : businessC.includes(data) ? "bg-quaternaryText"
            :
              "bg-greyText hover:bg-primaryText");

      case "VIP":
          return backgroundColor = 
          (vipA.includes(data) ? "bg-yellowText" : normalA.includes(data) ? "bg-primaryText" : businessA.includes(data) ? "bg-quaternaryText" 
          :
            vipB.includes(data) ? "bg-yellowText" : normalB.includes(data) ? "bg-primaryText" : businessB.includes(data) ? "bg-quaternaryText"
          :   
          "bg-greyText hover:bg-yellowText");

      case "Business":
          return backgroundColor = 
          (businessA.includes(data) ? "bg-quaternaryText" : normalA.includes(data) ? "bg-primaryText" : vipA.includes(data) ? "bg-yellowText" 
          :
            businessB.includes(data) ? "bg-quaternaryText" : normalB.includes(data) ? "bg-primaryText" : vipB.includes(data) ? "bg-yellowText"
          :
            businessC.includes(data) ? "bg-quaternaryText" : normalC.includes(data) ? "bg-primaryText" : vipC.includes(data) ? "bg-yellowText"
          :
           "bg-greyText hover:bg-quaternaryText")
    }
  }

  return (
    <div className="flex-wrap w-[500px] flex gap-1 mr-4 mt-2">
        {boxName.map((data:any) => (
                    <div className={`w-4 h-4 ${changeColor(data)} ml-3 mt-2 rounded-sm`}
                    onClick={() => {
                      Conrtol(data)
                    }}>
                    </div>
                  ))}
    </div>
  )
}
