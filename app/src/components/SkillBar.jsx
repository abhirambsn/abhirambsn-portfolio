import React from "react";
import LoadingBar from "./LoadingBar";

const SkillBar = ({ name, percentage, color }) => {
  return (
    <div className="flex flex-col gap-3">
      <span>{name}</span>
      <LoadingBar percentage={percentage} color={color} />
    </div>
  );
};

export default SkillBar;
