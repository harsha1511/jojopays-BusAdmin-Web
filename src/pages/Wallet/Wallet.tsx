import React, {useCallback, useState } from "react";

import {FiChevronRight} from 'react-icons/fi'
import {BiWallet} from "react-icons/bi"


import { MyTransaction } from "./components/MyTransaction";
import { Link } from "react-router-dom";
import { WalletNavBar } from "./components/WalletNavBar";


const Wallet = () => {


  const [hover, setHover] = useState<number>(0)
  

  return<div>
    <div className="flex w-[96vw] h-screen">
      <section className="w-[80%]">
       <MyTransaction />
      </section>
      {/* SIDE BAR */}
      <section className="w-[20%]">
        <WalletNavBar pageName="Wallet" />
      </section>
    </div>
  </div>;
};

export default Wallet;
