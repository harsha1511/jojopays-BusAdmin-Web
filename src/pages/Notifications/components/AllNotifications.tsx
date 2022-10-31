import React from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { BiBus } from "react-icons/bi";
import { MdClear, MdLocationOn } from "react-icons/md";

const count = 10;
const avatarURL =
  "https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg";

const AllNotifications = () => {
  return (
    <div className="bg-secondary w-full h-auto p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="bg-primary flex-1 shadow-md h-auto p-3 rounded-lg flex items-center justify-between">
          <img
            src={avatarURL}
            alt="logo"
            className="w-12 h-12 rounded-full bg-white overflow-hidden"
          />
          <div>
            <h5 className="font-bold">JoJoPay</h5>
            <p className="text-gray-500 text-sm">Payment</p>
          </div>
          <div
            className={`${
              true ? "text-green-500" : "text-red-500"
            } flex items-center gap-2`}
          >
            <h4>4000$</h4>
            {false ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
          </div>
          <div className="text-gray-600 text-sm text-right">
            <p>21-10-2021</p>
            <p>23:12:00</p>
          </div>
          <button
            type="button"
            className="text-red-500 text-lg transform tra hover:scale-105"
          >
            <MdClear />
          </button>
        </div>
        <div className="text-gray-600 text-lg text-right flex-1">
          <p>21-10-2021</p>
          <p>23:12:00</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-1 bg-primary border-2 border-primaryText p-4 rounded-2xl flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-primaryText font-bold text-xl">Bonus Day</h4>
              <p className="text-gray-500 text-sm">Manual Payment Mode</p>
            </div>
            <p className="bg-secondary py-2 font-bold px-4 rounded text-sm">
              Jan,20-08:00am
            </p>
            <div className="flex gap-2">
              <div className="flex ">
                {Array.from({ length: 4 }).map((_, i) => (
                  <img
                    key={i}
                    src={avatarURL}
                    alt="avatar"
                    className="w-5 h-5 rounded-full bg-white overflow-hidden"
                  />
                ))}
              </div>
              {count > 5 && (
                <p className="text-xs text-gray-500">+27 persons</p>
              )}
            </div>
          </div>
          <form className="flex items-start justify-between">
            <div className="flex flex-col">
              <p className="bg-secondary py-2 px-6 text-green-500 font-bold text-center">
                $300
              </p>
              <span className="text-xs text-primaryText">
                Total Payable Amount
              </span>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="password"
                className="bg-secondary py-2 px-6 font-bold text-center focus:border-primaryText outline-none"
              />
              <span className="text-xs text-primaryText">Enter Pin</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="px-4 py-2 bg-primaryText text-white font-bold rounded-lg"
              >
                Pay
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg"
              >
                Skip
              </button>
            </div>
          </form>
        </div>
        <div className="text-gray-600 text-lg text-right flex-1">
          <p>21-10-2021</p>
          <p>23:12:00</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-[900px] bg-primary p-3 px-5 flex items-center justify-between h-20 rounded-lg relative overflow-hidden shadow-md">
          <div className="bg-primaryText absolute top-0 left-0 w-14 h-full"></div>
          <img
            src={avatarURL}
            alt="avatar"
            className="bg-gray-300 rounded-full h-16 w-16 overflow-hidden z-10"
          />
          <h1 className="flex flex-col gap-2 border-r-2 border-gray-600 px-5">
            <span className="text-primaryText font-bold flex items-center gap-4">
              <BiBus className="text-lg" /> BUS NO 25684851
            </span>
            <span className="flex items-center gap-4 text-sm">
              <MdLocationOn className="text-red-500 text-lg" /> Nairobi Central
              - Parklands Rd
            </span>
          </h1>
          <h1 className="flex flex-col gap-2 border-r-2 border-gray-600 pr-5">
            <span className="flex gap-3">
              <span className="w-24 text-primaryText text-right">Driver:</span>
              Robby
            </span>
            <span className="flex gap-3">
              <span className="w-24 text-primaryText text-right">
                Co-driver:
              </span>
              James bond
            </span>
          </h1>
          <h1 className="flex flex-col gap-2 items-end text-gray-600 text-sm">
            <span className="flex gap-3">21-10-2021</span>
            <span className="flex gap-3">23:12:00</span>
          </h1>
          <button
            type="button"
            className="text-red-500 text-lg transform tra hover:scale-105"
          >
            <MdClear />
          </button>
        </div>
        <div className="text-gray-600 text-lg text-right flex-1">
          <p>21-10-2021</p>
          <p>23:12:00</p>
        </div>
      </div>
    </div>
  );
};

export default AllNotifications;
