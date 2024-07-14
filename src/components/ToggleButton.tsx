"use client";
import { useState } from "react";

const ToggleButton = ({
  onToggleOn,
}: {
  onToggleOn: (isOn: boolean) => void;
}) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevState) => {
      const newState = !prevState;
      onToggleOn(newState);
      return newState;
    });
  };

  return (
    <div
      className={`flex items-center cursor-pointer w-16 h-8 rounded-full ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
      onClick={handleToggle}
    >
      <div
        className={`w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transform transition-transform ${
          isOn ? "translate-x-8 rotate-360" : "translate-x-2 rotate-0"
        }`}
      >
        <span
          className={`text-[0.5rem] font-semibold ${
            isOn ? "text-green-500" : "text-gray-500"
          }`}
        >
          {isOn ? "ON" : "OFF"}
        </span>
      </div>
    </div>
  );
};

export default ToggleButton;
