import React, { useState } from "react";

import { WalletNavBar } from "../components/WalletNavBar";
import { MyTransaction } from "../components/MyTransaction";

export const PilotsTransaction = () => {

  return (
    <div>
        <div className="flex w-[96vw] h-screen">
            <section className="w-[80%]">
                <MyTransaction />
            </section>
            <section className="w-[20%]">
                <WalletNavBar pageName="Pilots" />
            </section>
        </div>
    </div>
  )
}
