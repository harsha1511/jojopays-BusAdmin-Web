import React, { useState } from "react";


const BankDetails = () => {
  const [bank, setBank] = useState(1)

  console.log(bank);
  



    return (
    <div className="flex justify-center flex-col ml-10 mt-10 w-[680px] bg-secondary  rounded-t-xl rounded-b-[50px] shadow-2xl">
        <div className="flex justify-around mt-4 w-full border-b-2 border-tertiary">
              <div
              onClick={() => setBank(1)} 
              className={`${bank === 1 ? "border-b-4 pb-1 mb-1 border-primaryText rounded-sm cursor-pointer" : "cursor-pointer"}`}>
                UPI Number
              </div>
              <div
              onClick={()=> setBank(2)}
              className={`${bank === 2 ? "border-b-4 pb-1 mb-1 border-primaryText rounded-sm cursor-pointer" : "cursor-pointer"}`}>
                Debit Card
              </div>
              <div
              onClick={() => setBank(3)}
              className={`${bank === 3 ? "border-b-4 pb-1 mb-1 border-primaryText rounded-sm cursor-pointer" : "cursor-pointer"}`}
              >
                Credit Card
              </div>
            </div>
            <div className="flex justify-center py-8">
              {bank=== 1 ? 
              <button className="px-10 py-[5px] rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm bg-primaryText">Add New UPI</button> : bank ===2 ?
              <button className="px-10 py-[5px] rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm bg-primaryText">Add New Card</button> :
              <button className="px-10 py-[5px] rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm bg-primaryText">Add new Credit Card</button>
              }
            </div>
    </div>
    )
}


export default BankDetails;