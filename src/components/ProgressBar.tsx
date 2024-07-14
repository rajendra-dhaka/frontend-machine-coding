"use client";
import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev === 100) {
          clearInterval(timer);
        }

        return Math.min(100, prev + 5);
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-4 w-96 rounded-md overflow-hidden border-2 border-neutral-400">
      <div
        className="h-full w-full bg-green-400"
        style={{ transform: `translate(${progress - 100}%)` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
