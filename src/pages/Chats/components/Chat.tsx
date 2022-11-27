import React, { useCallback, useEffect, useState } from "react";
import { MdDone, MdDoneAll } from "react-icons/md";
import axios from "axios";
import instance  from "../../../API/axios";

import { classNames } from "../../../utils/helpers";

interface ChatProps {
  isYours: string;
  message: string;
  status?: "delivered" | "seen" | "sent";
}

const Chat = ({ isYours, message, status }: ChatProps) => {
  const renderTick = useCallback(() => {
    return status === "delivered" ? (
      <MdDoneAll />
    ) : status === "sent" ? (
      <MdDone />
    ) : status === "seen" ? (
      <MdDoneAll color="#3973FF" />
    ) : (
      ""
    );
  }, [status]);


  const [chat, setChat] = useState<any>();


  useEffect(() => {
  const getChatData = async () => {
    try {
      const response = await axios.get(`${instance}getChatData`);
      // const response = await axios.get(instance.constants.auth.login);
      console.log(response.data, "HELLO");
      setChat(response.data) 
    }
    catch(err) {
      console.log(err); 
    }
  }
  getChatData(); 
}, []);




  return (
  
  <div>
    {chat?.map((c:any) => (
    <div
      className={`flex flex-col  ${
      c.senderId === "1001" ?
        "w-[800px] ml-[520px]":
        "justify-start"
      }`}
    >
      <div
        className={`${classNames(
          c.senderId === "1001",
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
          c.senderId === "1001" ? 
          message : typeof undefined }</p>
        </div>
        {status && (
          <p className="p-3 break-all whitespace-normal self-end">
            {renderTick()}
          </p>
        )}
      </div>
      <p
        className={`${classNames(
          isYours === "",
          "self-end",
          "self-start"
        )} text-xs text-gray-500 mt-1`}
      >
        08.00PM
      </p>
    </div>
    ))}
        </div>
  );
};

export default Chat;
