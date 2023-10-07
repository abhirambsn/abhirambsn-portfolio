import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Pill from "./Pill";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const colorMapping = {
    docker: "blue",
    python: "yellow",
    javascript: "yellow",
    nodejs: "green",
    c: "white",
    cpp: "white"
}

const ProjectRow = ({
  icon,
  title,
  description,
  tech_stack_arr,
  year,
  duration,
  months,
  deployed_url,
  deployed_at,
  github,
  color,
}) => {
  return (
    <div className="flex gap-2 items-start flex-col lg:flex-row">
      <Card
        className={`bg-gradient-to-tr from-${color}-600 to-${color}-500 text-white max-w-sm h-full`}
      >
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={icon} size="xl" />
          <span className="text-white font-semibold text-lg">{title}</span>
        </div>
        <p className="mt-5 text-justify">{description}</p>
      </Card>
      <div className="flex-1 w-full lg:w-auto flex flex-col gap-1">
        <Card className="group hover:bg-sky-500 hover:cursor-pointer flex flex-col gap-2 focus-xs">
          <div className="flex items-center gap-3">
            <span className="group-hover:text-white text-gray-500">Visit</span>
            <FontAwesomeIcon
              className="group-hover:text-white text-gray-400"
              icon={faUpRightFromSquare}
            />
          </div>
          <span className="text-white text-lg">
            {deployed_at}
          </span>
        </Card>
        <Card className="flex flex-col gap-2">
          <span className="text-gray-500">Built using</span>
          <div className="flex flex-col md:flex-row items-center gap-2">
            {tech_stack_arr.map((ts, key) => (
              <Pill text={ts} key={key} bgColor={colorMapping[ts.toLowerCase()]} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-1 w-full lg:w-auto flex flex-col gap-3">
        <Card className="flex flex-1 p-6 items-center justify-center gap-2 hover:bg-green-500 hover:cursor-pointer focus-xs">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <span className="text-gray-50">GitHub</span>
        </Card>
        <Card className="flex flex-1 flex-col gap-3">
          <div className="flex flex-1 items-center justify-between">
            <span className="text-gray-500">Built in</span>
            <span className="text-gray-50">{year}</span>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <span className="text-gray-50">{duration}</span>
            <span className="text-gray-50">{months}</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectRow;
