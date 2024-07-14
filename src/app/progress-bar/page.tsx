"use client";
import { ProgressBar, ToggleButton } from "@/components";
import React, { useCallback, useEffect, useState } from "react";

const Page = () => {
  const [showProgress, setShowProgress] = useState(false);

  const handleToggle = useCallback((isOn: boolean) => {
    setShowProgress(isOn);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        {showProgress && <ProgressBar />}
        <ToggleButton onToggleOn={handleToggle} />
      </div>
    </div>
  );
};

export default Page;
