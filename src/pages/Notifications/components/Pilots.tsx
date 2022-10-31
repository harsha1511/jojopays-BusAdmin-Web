import React from "react";
import { BiBus } from "react-icons/bi";
import { MdClear, MdLocationOn, MdWarningAmber } from "react-icons/md";

const Pilots = () => {
  return (
    <div className="grid grid-cols-7 gap-6">
      <div className="col-span-5 bg-secondary h-auto rounded-lg overflow-y-auto overflow-x-hidden p-4">
        <h3 className="text-center text-gray-500 mb-6">Updates</h3>
        <div className="flex flex-col gap-4">
          <div className="bg-primary p-3 px-5 flex items-center justify-between h-20 rounded-lg w-full relative overflow-hidden shadow-md">
            <div className="bg-primaryText absolute top-0 left-0 w-14 h-full"></div>
            <img
              src="https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
              alt="avatar"
              className="bg-gray-300 rounded-full h-16 w-16 overflow-hidden z-10"
            />
            <h1 className="flex flex-col gap-2 border-r-2 border-gray-600 px-5">
              <span className="text-primaryText font-bold flex items-center gap-4">
                <BiBus className="text-lg" /> BUS NO 25684851
              </span>
              <span className="flex items-center gap-4 text-sm">
                <MdLocationOn className="text-red-500 text-lg" /> Nairobi
                Central - Parklands Rd
              </span>
            </h1>
            <h1 className="flex flex-col gap-2 border-r-2 border-gray-600 pr-5">
              <span className="flex gap-3">
                <span className="w-24 text-primaryText text-right">
                  Driver:
                </span>
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
        </div>
      </div>
      <div className="col-span-2 bg-secondary h-auto rounded-lg overflow-x-hidden overscroll-y-auto p-4">
        <h3 className="text-center text-gray-500 mb-6">Alerts</h3>
        <div className="flex flex-col gap-3">
          <div className="bg-primary w-full h-auto p-3 flex flex-col gap-2 text-tertiary text-sm rounded-lg">
            <p className="flex items-center gap-3">
              <MdWarningAmber className="text-lg text-yellow-500" /> More
              passengers
            </p>
            <p className="flex items-center gap-3">
              <MdLocationOn className="text-red-500 text-lg" /> Nairobi
            </p>
            <p className="flex items-center gap-3">
              <BiBus className="text-lg text-primaryText" /> BUSNO25684851
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pilots;
