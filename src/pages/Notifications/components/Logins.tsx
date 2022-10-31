import React from "react";

import { MdClear } from "react-icons/md";

const Logins = () => {
  return (
    <div className="bg-secondary h-max w-full overflow-x-hidden overflow-y-auto p-4 rounded">
      <h3 className="text-center text-gray-500 mb-6">Logins</h3>
      <div className="flex flex-col gap-4">
        <div className="bg-primary p-3 px-5 flex items-center justify-between h-20 rounded-lg w-[700px] relative overflow-hidden">
          <div className="bg-primaryText absolute top-0 left-0 w-14 h-full "></div>
          <img
            src="https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
            alt="avatar"
            className="bg-gray-300 rounded-full h-16 w-16 overflow-hidden z-10"
          />
          <h1 className="flex items-center gap-2">
            <span className="text-primaryText font-bold">Name: </span>
            <span>Arul Valan Anto S</span>
          </h1>
          <h1 className="flex items-center gap-2">
            <span className="text-primaryText font-bold">LoggedIn: </span>
            <span>Arul Valan Anto S</span>
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
  );
};

export default Logins;
