import React from "react";

const Wallet = () => {
  return <div>
    <div className="flex w-[96vw] h-screen">
      <section className="w-[80%]">
        {/* Filter */}
        <div className="flex w-[90%] h-48 ml-8 bg-secondary rounded-b-md rounded-tr-3xl">
          <div className="w-[50%] h-full border-r-2 border-greyText/5">
            <div className=" flex justify-between items-center pl-4 w-full h-[33%]">
              <label className="font-semibold text-lg text-greyText">All Transaction: <span className="ml-4 font-normal text- bg-primary py-1 px-2 rounded-md">Overall</span></label>
            </div>
          </div>
          <div className="w-[25%] h-full border-r-2 border-greyText/5"></div>
          <div className="w-[25%] h-full"></div>
        </div>
      </section>
      <section className="w-[20%] bg-yellow-200">
        profile
      </section>
    </div>
  </div>;
};

export default Wallet;
