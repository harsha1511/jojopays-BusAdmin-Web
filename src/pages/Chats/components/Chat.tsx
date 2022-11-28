import React, { useCallback, useEffect, useState } from "react";
import { MdDone, MdDoneAll } from "react-icons/md";
import axios from "axios";
import instance  from "../../../API/axios";

import { classNames } from "../../../utils/helpers";

interface ChatProps {
  isYours?: string;
  message?: string;
  status?: "delivered" | "seen" | "sent";
}

const Chat = ({ isYours, message, status }: ChatProps) => {
  const renderTick = useCallback((c:any) => {
    return c === "delivered" ? (
      <MdDoneAll />
    ) : c === "sent" ? (
      <MdDone />
    ) : c === "seen" ? (
      <MdDoneAll color="#3973FF" />
    ) : (
      ""
    );
  }, [status]);


  // const [chat, setChat] = useState<any>();

  const chat = [
    {send:"me", rec:"jones", msg: "hiiii", status:"delivered"},
    {send:"jones", rec:"me", msg: "how are you..?", status:"sent"},
    {send:"me", rec:"jones", msg: "fyn..what about you", status:"seen"},
    {send:"jones", rec:"me", msg: "ok bye", status:"sent"},
    {send:"jones", rec:"me", msg: "ok bye", status:"sent"},
    {send:"me", rec:"jones", msg: "ok bye", status:"sent"},
  ]

  // useEffect(() => {
  // const getChatData = async () => {
  //   try {
  //     const response = await axios.get(`${instance}getChatData`);
  //     // const response = await axios.get(instance.constants.auth.login);
  //     console.log(response.data, "HELLO");
  //     setChat(response.data) 
  //   }
  //   catch(err) {
  //     console.log(err); 
  //   }
  // }
  // getChatData(); 
// }, []);




  return (
  
  <div>
    {chat?.map((c:any) => (
    <div
      className={`flex flex-col mt-6 ${
      c.send === "me" ?
        "items-end":
        "items-start"
      }`}
    >
      <div
        className={`${classNames(
          c.send === "me",
          "bg-quaternary rounded-bl-3xl rounded-md",
          "bg-primaryText rounded-br-3xl rounded-md"
        )} flex flex-col w-[400px] h-auto mt-2`}
      >
        <div className="flex items-center transform -translate-y-5 gap-2">
          <img
            src="https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
            alt="profile"
            className="w-10 h-10 rounded-full ml-2"
          />
          <h6 className="transform -translate-y-3 text-sm text-gray-700 font-medium">
            Jay
          </h6>
        </div>
        <div>
          <p className="p-3 pt-0 break-all whitespace-normal">{
          c.send === "me" ? 
          c.msg : c.send !== "me" ? c.msg : null }</p>
        </div>
        {c.status && (
          <p className="p-3 break-all whitespace-normal self-end">
            {renderTick(c.status)}
          </p>
        )}
      </div>
      <p
        className={`flex flex-col ${classNames(
          c.send === "me",
          "self-end",
          "self-start"
        )} text-xs text-gray-500 mt-1`}
      >
        08.00PM
      </p>
    </div>
    ))}
        </div>
  // <div>
  //   gii
  //   {chat.map((data) => (
  //     <div className="text-white w-80 h-10 bg-redText">
  //       {
  //         data.send === "me" ? 
  //         <div>
  //           {data.msg}
  //         </div> :
  //         data.send !== "me" ?
  //           <div className="float-right">{data.msg}</div> :
  //           null
  //       }
  //     </div>
  //   ))}
  // </div>
  );
};

export default Chat;
