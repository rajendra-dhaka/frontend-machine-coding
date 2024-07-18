"use client";

import { StatusColorsType } from "@/types";
import React, { useCallback, useEffect, useRef, useState } from "react";

const toastData = [
  {
    status: "success",
    message: "Toast Success!",
  },
  {
    status: "error",
    message: "Toast Error!",
  },
  {
    status: "warning",
    message: "Toast Warning!",
  },
  {
    status: "info",
    message: "Toast Info!",
  },
];

const statusColors: StatusColorsType = {
  success: "bg-green-500",
  error: "bg-red-500",
  warning: "bg-yellow-500",
  info: "bg-blue-500",
};

const Button = ({ status, message, onToast }) => {
  return (
    <button
      className={`py-1 px-4 min-w-40 bg-black rounded-md text-xl font-medium text-white`}
      onClick={() => onToast({ status, message })}
    >
      {status?.charAt(0).toUpperCase() + status.slice(1)}
    </button>
  );
};

const Page = () => {
  const [toasts, setToasts] = useState([]);
  const timerRef = useRef({});

  const handleToast = (toast) => {
    setToasts((prev) => {
      const id = new Date().getTime();
      console.log(id, "this is id");
      const newData = [...prev, { ...toast, id }];
      return newData;
    });
  };

  const onCloseToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
    clearTimeout(timerRef.current[id]);
    delete timerRef.current[id];
  }, []);

  useEffect(() => {
    if (toasts.length > 0) {
      const latestToast = toasts[toasts.length - 1];
      timerRef.current[latestToast.id] = setTimeout(() => {
        onCloseToast(latestToast.id);
      }, 3000);
    }
  }, [toasts, onCloseToast]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      <div className="flex gap-2 items-center">
        {toastData.map((toast, i) => (
          <Button key={i} {...toast} onToast={handleToast} />
        ))}
      </div>
      {/* Toast Container */}
      <div className="fixed top-2 right-2 flex flex-col gap-2">
        {toasts.map((toast, i) => (
          <div
            key={i}
            className={`relative min-w-80 min-h-16 ${
              statusColors[toast.status]
            } rounded-lg flex items-center justify-center text-lg text-white font-semibold`}
          >
            {toast.message}
            <span
              className="absolute top-1 right-2 text-sm cursor-pointer"
              onClick={() => onCloseToast(toast.id)}
            >
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
