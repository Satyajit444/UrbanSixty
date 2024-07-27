import React from "react";
import { ButtonProps } from "@/types/types";

const Button: React.FC<ButtonProps> = ({
  bgColor,
  textColor,
  label,
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[${bgColor}] text-[${textColor}] border-none py-2 px-4 rounded-md cursor-pointer`}
    >
      {label}
    </button>
  );
};

export default Button;
