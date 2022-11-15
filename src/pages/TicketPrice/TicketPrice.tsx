import React, { useCallback, useState } from "react";
import { AutoPriceChange } from "./components/AutoPriceChange";
import { AutoPriceRoutes } from "./components/AutoPriceRoutes";
import { CustomPrice } from "./components/CustomPrice";

const TicketPrice = () => {

  const TicketFilter = [
    {name: "Auto Price Change"},
    {name: "Auto Price-Routes"},
    {name: "Custom Price"}
  ]
  const [ticketFilter, setTicketFIlter] = useState("Auto Price Change")

  const renderTicketPrice = useCallback(() => {
    switch(ticketFilter) {
      case "Auto Price Change":
        return <AutoPriceChange />
      case "Auto Price-Routes":
        return <AutoPriceRoutes />
      case "Custom Price":
        return <CustomPrice />
    }
  },[ticketFilter])


  return <div>
    <div className="w-[96vw] h-screen">
      <div className="flex flex-col items-center w-[73%] h-full">
        <div className="flex mt-10 w-[94%] h-40">
          <div className="w-[63%] border-t-[1px] border-greyText/50">
            <p className="text-2xl text-primaryText font-bold pt-4">Manual Overwrite</p>
          </div>
          <div className="w-[37%] border-t-[1px] border-l-[1px] border-greyText/50">
            <p className="text-2xl text-primaryText font-bold pt-4 pl-4">Default Price</p>
            <p className="flex justify-center items-center mt-4 ml-4 w-32 h-12 bg-quaternary rounded-xl text-xl font-semibold">5.00 $</p>
            <p className="ml-10 mt-1 text-primaryText">Ticket / km</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-[94%] h-[510px] mt-2 rounded-t-3xl border-[1px] border-primaryText">
          <div className="flex justify-around items-center w-[95%] h-14 mt-2 border-b-[1px] border-greyText/50">
            {TicketFilter.map(({name}) => (
              <p 
              onClick={() => setTicketFIlter(name)}
              className={`text-xl font-bold tracking-wider text-white pb-3 mt-4 ${ticketFilter === name ? "border-b-[4px] border-primaryText" : ""}`}>
                {name}
              </p>
            ))}
          </div>
          <div className="w-[94%] h-[87%]">
          {renderTicketPrice()}
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default TicketPrice;
