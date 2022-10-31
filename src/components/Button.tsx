import React from "react";
import { Link } from "react-router-dom";

import ButtonLoader from "../components/ButtonLoader";

interface ButtonProps {
  title: string;
  className: string;
  type?: "button" | "submit" | "reset" | undefined;
  link?: string;
  isLoading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({
  title,
  className = "",
  type,
  link,
  isLoading = false,
  onClick = () => {},
}: ButtonProps) => {
  const style = isLoading
    ? `${className} bg-gray-500 text-white cursor-not-allowed p-3 flex item-center justify-center`
    : className;

  return link ? (
    <Link
      to={link}
      className={`shadow rounded rounded-bl-3xl rounded-tr-3xl flex items-center justify-center ${style}`}
    >
      {title}
    </Link>
  ) : (
    <button
      className={`shadow rounded rounded-bl-3xl rounded-tr-3xl ${style}`}
      type={type}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <div>
          <ButtonLoader />
        </div>
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
