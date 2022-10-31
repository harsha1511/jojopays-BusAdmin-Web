import React from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { MdClear } from "react-icons/md";

const count = 10;

const Money = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="col-span-1 bg-secondary h-auto rounded-lg overflow-x-hidden overscroll-y-auto p-4">
        <h3 className="text-center text-gray-500 mb-6">Received</h3>
        <div className="flex flex-col gap-3">
          <div className="bg-primary shadow-md w-full h-auto p-3 rounded-lg flex items-center justify-between">
            <img
              src="https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
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
        </div>
      </div>
      <div className="col-span-1 bg-secondary h-auto rounded-lg overflow-y-auto overflow-x-hidden p-4">
        <h3 className="text-center text-gray-500 mb-6">Schedule Send</h3>
        <div className="flex flex-col gap-3">
          <div className="w-full bg-primary border-2 border-primaryText p-4 rounded-2xl flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-primaryText font-bold text-xl">
                  Bonus Day
                </h4>
                <p className="text-gray-500 text-sm">Manual Payment Mode</p>
              </div>
              <p className="bg-secondary py-2 font-bold px-4 rounded text-sm">
                Jan,20-08:00am
              </p>
              <div className="flex gap-2">
                <div className="flex ">
                  <img
                    src=""
                    alt="avatar"
                    className="w-5 h-5 rounded-full bg-white overflow-hidden"
                  />
                  <img
                    src=""
                    alt="avatar"
                    className="w-5 h-5 rounded-full bg-white overflow-hidden"
                  />
                  <img
                    src=""
                    alt="avatar"
                    className="w-5 h-5 rounded-full bg-white overflow-hidden"
                  />
                  <img
                    src=""
                    alt="avatar"
                    className="w-5 h-5 rounded-full bg-white overflow-hidden"
                  />
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
        </div>
      </div>
    </div>
  );
};

export default Money;
