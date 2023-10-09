import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const EducationCard = ({
  institute_name,
  percentage,
  metric,
  course_name,
  discipline,
  start,
  end = "Present",
  color = "gray",
}) => {
  return (
    <>
      <div className="lg:flex gap-2 items-start flex-col lg:flex-row focus-xs hidden">
        <Card
          className={`bg-gradient-to-tr flex-grow from-${color}-600 to-${color}-500 text-white flex-1 h-full max-w-md`}
        >
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faGraduationCap} size="xl" />
              <span className="text-white font-semibold text-lg">
                {institute_name}
              </span>
            </div>
            <div className="mt-2 flex items-start flex-col lg:flex-row gap-8 justify-between">
              <div className="gap-1 flex flex-col">
                <span className="text-white text-2xl tracking-wide">
                  {course_name}
                </span>
                <span className=" text-white font-semibold">{discipline}</span>
              </div>

              <div className="gap-1 flex flex-col justify-center">
                <span className="text-white text-2xl font-light tracking-wide">
                  {percentage}
                </span>
                <span className=" text-white tracking-wider font-semibold">
                  {metric}
                </span>
              </div>
            </div>
            <div className="hidden lg:flex flex-1 items-center justify-between w-full">
              <span className="text-gray-50 font-bold">Duration</span>
              <span className="text-gray-50">
                {start} to {end}
              </span>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex gap-2 items-start flex-col lg:flex-row focus-xs lg:hidden">
        <Card
          className={`bg-gradient-to-tr flex-grow from-${color}-600 to-${color}-500 text-white flex-1 h-full max-w-md`}
        >
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faGraduationCap} size="xl" />
              <span className="text-white font-semibold text-lg">
                {institute_name}
              </span>
            </div>
            <div className="mt-2 flex items-start flex-col lg:flex-row gap-8 justify-between">
              <div className="gap-1 flex flex-col">
                <span className="text-white text-2xl tracking-wide">
                  {course_name}
                </span>
                <span className=" text-white font-semibold">{discipline}</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="gap-1 flex flex-col justify-center">
                  <span className="text-white text-2xl font-light tracking-wide">
                    {percentage}
                  </span>
                  <span className=" text-white tracking-wider font-semibold">
                    {metric}
                  </span>
                </div>
                <div className="lg:hidden gap-1 flex flex-col justify-center">
                  <span className="text-white text-2xl font-light tracking-wide">
                    {start} to {end}
                  </span>
                  <span className=" text-white tracking-wider font-semibold">
                    Duration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default EducationCard;
