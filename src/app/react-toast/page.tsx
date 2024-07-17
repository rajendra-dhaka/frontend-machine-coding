import React from "react";

const colorClasses = {
  red: "bg-red-600",
  blue: "bg-blue-600",
  green: "bg-green-600",
  // Add other colors as needed
};

const Button = ({ text, color }) => {
  return <button className={`py-1 px-4 ${colorClasses.red}`}>{text}</button>;
};

const Page = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-2 items-center">
        <Button text="Raja" color={"red"} />
      </div>
    </div>
  );
};

export default Page;
