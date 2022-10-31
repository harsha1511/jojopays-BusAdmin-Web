import React from "react";
import { Link, useLocation } from "react-router-dom";

import { classNames } from "../utils/helpers";
import { IconType } from "react-icons";


interface ActiveLinkProps {
  to: string;
  title: string;
  Icon: IconType;
  active: string;
}

const ActiveLink = ({ to, title, Icon, active }: ActiveLinkProps) => {
  const location = useLocation();

  const check: boolean = location.pathname.split("/")[1] === active;

  return (
    <Link
      to={to}
      className="flex items-center justify-between hover:text-primaryText text-tertiary"
    >
      <span
        className={`hidden group-hover:block  hover:text-primaryText group-hover:opacity-100 opacity-0 transition-opacity duration-700 ${classNames(
          check,
          "text-primaryText",
          "text-white hover:text-primaryText"
        )}`}
      >
        {title}
      </span>
      <span
        className={`relative transform group-hover:translate-x-[1.1rem]  group-hover:p-3 rounded-l-full rounded-md ${classNames(
          check,
          "bg-secondary p-3 translate-x-2 text-primaryText"
        )}`}
        id={classNames(check, 'inverted-radius')}
      >
        <Icon size="1.5em" />
      </span>
    </Link>
  );
};

export default ActiveLink;
