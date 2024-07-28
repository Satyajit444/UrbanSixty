// components/Loader.tsx
import React, { Fragment } from "react";
import { LoaderProps } from "@/types";

const Loader: React.FC<LoaderProps> = ({
  color = "#333", // Default color
  size = "w-3 h-3", // Default size
  loadingTitle = "Loading", // Default text
}) => {
  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={size}
        viewBox="0 0 24 24"
      >
        <path
          fill={color}
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          opacity="0.25"
        ></path>
        <path
          fill="currentColor"
          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
        >
          <animateTransform
            attributeName="transform"
            dur="0.75s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          ></animateTransform>
        </path>
      </svg>

      <p className={`text-${color} inline-block`}>
        {loadingTitle || "Loading ..."}
      </p>
    </div>
  );
};

export default Loader;
