import React from "react";

import logo from "../assets/images/logo.svg";
import links from "../data/links";
import ActiveLink from "./ActiveLink";

const Sidebar = () => {
  return (
    <nav className="z-10 h-[100vh] hover:h-[100vh] flex-4 w-[72px] group pt-8 hover:w-60 hover:fixed hover:top-0 hover:left-0 hover:z-20 bg-primary transition-all hover:duration-500 shadow-lg shadow-slate-900">
      <div className="h-20 flex justify-center flex-col items-center ">
        <img
          src={logo}
          alt="JoJoPay Logo"
          className="w-10 h-10 object-contain group-hover:scale-150 "
        />
        <p className="text-tertiary text-2xl mt-3 font-bold uppercase hidden group-hover:block transform -translate-x-14 group-hover:translate-x-0 transition-transform duration-700 whitespace-nowrap">
          JoJo Pay
        </p>
      </div>
      <ul className="mt-6">
        {links.map((props) => (
          <li
            className="h-16 p-[18px] group transition-all duration-900 whitespace-nowrap"
            key={props.to}
          >
            <ActiveLink {...props} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
