import React from "react";

const Pill = ({ text, bgColor = "cyan", textColor = "white" }) => {
  return (
    <div
      className={`flex rounded-full items-center text-xs justify-center px-2 py-1 bg-${bgColor}-500 text-${bgColor}`}
    >
      <span>{text}</span>
    </div>
  );
};

export default Pill;
