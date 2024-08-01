"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { hideToast, ToastState } from "@/provider/redux/others/ToastSlice";
import { ToastPopUpProps } from "@/types";

const ToastPopUp: React.FC<ToastPopUpProps> = () => {
  const dispatch = useDispatch();
  const { toastType, message, isOpen } = useSelector(
    (state: { toast: ToastState }) => state.toast
  );
  const toast = [
    {
      name: "Error",
      bodyColor: "border-red-500 bg-red-100 text-red-500",
      image: "/svg/icon-error.svg",
      messageColor: "text-red-700",
      crossColor: "border-red-500",
    },
    {
      name: "Warning",
      bodyColor: "border-yellow-500 bg-yellow-100 text-yellow-500",
      image: "/svg/icon-alert.svg",
      messageColor: "text-yellow-700",
      crossColor: "border-yellow-500",
    },
    {
      name: "Info",
      bodyColor: "border-blue-300 bg-blue-100 text-blue-800",
      image: "/svg/icon-info.svg",
      messageColor: "",
      crossColor: "border-gray-300 text-gray-500",
    },
    {
      name: "Success",
      bodyColor: "border-green-500 bg-green-100 text-green-500",
      image: "/svg/icon-success.svg",
      messageColor: "text-green-700",
      crossColor: "border-green-500",
    },
    {
      name: "Notification",
      bodyColor: "border-blue-500 bg-blue-100 text-blue-500",
      image: "/svg/icon-notification.svg",
      messageColor: "",
      crossColor: "border-blue-500",
    },
  ];

  const result = toast.find(
    (t) => t.name.toLowerCase() === toastType.toLowerCase()
  );

  useEffect(() => {
    if (isOpen) {
      const timeoutId = setTimeout(() => {
        dispatch(hideToast());
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, dispatch]);

  return (
    <>
      {isOpen && (
        <div
          className={`w-fit h-[70px] border flex items-center justify-between text-normal capitalize font-medium p-6 absolute top-2 right-3 z-50`}
          data-testid="toast"
        >
          <div className={`flex gap-2 items-center`}>
            <Image
              src={result?.image ? result?.image : ""}
              width={24}
              height={24}
              alt="warning-image"
            />
            <p className={``}>{message}</p>
          </div>
          <div
            className={`rounded-full bg-transparent border-2 px-1 text-[10px] font-semibold cursor-pointer ml-2 ${result?.crossColor}`}
          >
            x
          </div>
        </div>
      )}
    </>
  );
};

export default ToastPopUp;
