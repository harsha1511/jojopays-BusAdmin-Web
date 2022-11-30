import React, { useLayoutEffect, useRef, useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios";
import {
  BsSearch,
  BsCameraFill,
  BsFillFileEarmarkImageFill,
} from "react-icons/bs";
import { FiMoreVertical, FiSend } from "react-icons/fi";
import { GrAttachment } from "react-icons/gr";
import { IoIosContacts } from "react-icons/io";
import { FaMoneyBill } from "react-icons/fa";
import {MdClose} from 'react-icons/md'


import { countReducer, nameShrinker } from "../../utils/helpers";
import CustomForm from "../../components/Form";
import Input from "../../components/Input"
import { Form } from "formik";
import Chat from "./components/Chat";
import Overlay from "../../components/Overlay";

const chatDetails = [
  { title: "Texts", count: 6 },
  { title: "Chats", count: 9 },
];

const searchSchema = yup.object().shape({
  search: yup.string(),
});

const messageSchema = yup.object().shape({
  search: yup.string(),
});

const Chats = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [sendContact, setSendContact] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);

  const chatRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useLayoutEffect(
    () => chatRef.current.scrollIntoView({ behavior: "smooth" }),
    []
  );

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    setSendContact(false)
  }
  const handleContact = () => setSendContact(true);
  const handleOpenFeatures = () => setOpenFeatures(!openFeatures);

  const handleExpand = (e: React.ChangeEvent<any>) => {
    e.target.style.cssText = "-moz-box-sizing:content-box";
    e.target.style.cssText =
      "height:" + Math.min(e.target.scrollHeight, 70) + "px";
  };

  const handleSearch = (values: any) => {
    console.log(values);
  };

  const handleSendMessage = (values: any) => {
    console.log(values, "MESSAGE");
  };


  return (
    <>
    <div className="relative grid grid-cols-6">
    {sendContact && 
      <div className="z-10 w-full h-full absolute flex justify-center items-center">
        <div className="flex flex-col items-center w-[650px] h-[400px] bg-tertiary rounded-3xl">
         <div className="flex w-full justify-end" onClick={handleShowOptions}>
          <MdClose className='w-8 h-6 mr-6 mt-2 text-primaryText font-bold cursor-pointer' />
          </div>
          <div>
            <p className="w-full text-lg font-semibold text-primaryText">Select Contact</p>
          </div>
        </div>
      </div>
    }
      <section className="h-screen overflow-y-auto overflow-x-hidden col-span-1 bg-quaternary rounded-r-2xl">
        <CustomForm
          initialValues={{ search: "" }}
          validationSchema={searchSchema}
          onSubmit={handleSearch}
        >
          <div className="flex items-center border-2 border-primaryText my-6 mx-3 rounded-full px-3">
            <Input
              type="text"
              name="search"
              placeholder="Search..."
              className="bg-transparent border-none py-2 px-4 text-white outline-none w-full"
            />
            <button className="" type="submit">
              <BsSearch className="text-primaryText" />
            </button>
          </div>
        </CustomForm>
        <div className="h-5/6 overflow-y-auto overflow-x-hidden">
          <div className="bg-primary h-14 mx-4 rounded-lg flex items-center p-2 justify-between mb-2 cursor-pointer">
            <div className="flex items-center gap-2">
              <img
                src="https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
                alt="profile"
                className="rounded-full bg-secondary w-10 h-10 object-cover overflow-hidden"
              />
              <h2 className="truncate">{nameShrinker("Arul Valan Antoo", 12)}</h2>
            </div>
            <p className="bg-red-500 rounded-full px-2 py-1 text-xs">
              {countReducer(200, 99)}
            </p>
          </div>
        </div>
      </section>
      <section className="col-span-4 flex flex-col h-screen">
        <div className="flex-90 overflow-y-auto overflow-x-hidden p-5 pt-7 flex flex-col">
            <Chat 
            />
          <div ref={chatRef}></div>
        </div>
        <div className="pt-3 flex-12">
          {/* The above class from index.css */}
          <form>
              <div className="flex px-4 gap-4">
                <input
                  type="text"
                  name="message"
                  placeholder="Type here"
                  className="w-[85%] bg-transparent border-2 border-primaryText focus-border-primaryText focus:border-2 py-2 px-4 flex-1 resize-none h-12 rounded"
                />
                <button
                  type="submit"
                  className="bg-primaryText text-white py-4 px-4 rounded-full transform hover:scale-105 transition-all"
                >
                  <FiSend />
                </button>
                <div className="relative">
                  
                  {showMoreOptions && (
                    <>
                    <div className="z-20">
                      <Overlay onClick={handleShowOptions}/>
                    </div>
                      <div className="absolute -top-72 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-5">
                        <button
                          type="button"
                          className="bg-primaryText text-black rounded-full p-4 transform hover:scale-105 transition-all"
                        >
                          <BsCameraFill
                            className="text-white "
                            color="inherit"
                          />
                        </button>
                        <button
                          type="button"
                          className="bg-blue-800 rounded-full p-4 transform hover:scale-105 transition-all"
                        >
                          <BsFillFileEarmarkImageFill
                            className="text-white "
                            color="inherit"
                          />
                        </button>
                        <button
                          type="button"
                          onClick={handleContact}
                          className="bg-secondaryText rounded-full p-4 transform hover:scale-105 transition-all"
                        >
                          <IoIosContacts fontSize="1rem" />
                        </button>
                        <button
                          type="button"
                          className="bg-quaternaryText text-black rounded-full p-4 transform hover:scale-105 transition-all"
                        >
                          <FaMoneyBill color="inherit" />
                        </button>
                      </div>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={handleShowOptions}
                    className="bg-secondaryText text-white py-4 px-4 rounded-full transform hover:scale-105 transition-all"
                  >
                    <GrAttachment className="text-white" color="inherit" />
                  </button>
                </div>
              </div>
          </form>
        </div>
      </section>
      <section className="col-span-1 bg-quaternary p-2 py-4 rounded-l-2xl">
        <div className="relative">
          {openFeatures && (
            <>
              <Overlay onClick={handleOpenFeatures} />
              <div className="absolute top-10 left-0 bg-gray-700 w-48 p-3 rounded">
                <button className="p-2">Report & Block</button>
                <button className="p-2">Block</button>
                <p className="underline p-2 underline-offset-1">
                  Mute Notification
                </p>
                <button className="p-2">For 1 Hour</button>
                <button className="p-2">For 24 Hour</button>
                <button className="p-2">Unmute</button>
              </div>
            </>
          )}
          <button onClick={handleOpenFeatures} type="button">
            <FiMoreVertical
              fontSize="2em"
              className={`text-secondaryText cursor-pointer transition-all ${
                openFeatures ? "rotate-90" : "rotate-0"
              }`}
            />
          </button>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h3 className="my-2 text-gray-500">Bill</h3>
          <img
            src="https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
            alt="profile"
            className="w-36 h-36 rounded-full border-2 border-primaryText border-dashed p-1"
          />
        </div>
        <div className="flex items-center flex-col">
          <h2 className="text-3xl font-bold my-4 mb-6 text-center">DMs</h2>
          {chatDetails.map(({ title, count }) => (
            <div className="flex items-center gap-6 mb-4">
              <h4 className="text-gray-300">{title}</h4>
              <p className="bg-primary rounded text-2xl px-5 py-1 w-16 flex items-center justify-center font-semibold">
                {count}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default Chats;
