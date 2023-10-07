import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Pill from "./Pill";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
    <div className="flex space-x-2 items-start">
      <Card
        className={`bg-gradient-to-tr from-${color}-600 to-${color}-500 text-white max-w-sm space-y-3`}
      >
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={icon} size="xl" />
          <span className="text-white font-semibold text-lg">{title}</span>
        </div>
        <p className="text-justify">{description}</p>
      </Card>
      <div className="flex flex-col">
        <Card className="group hover:bg-sky-500 hover:cursor-pointer flex flex-col space-y-2 focus-xs">
          <div className="flex items-center space-x-3">
            <span className="group-hover:text-white text-gray-500">Visit</span>
            <FontAwesomeIcon
              className="group-hover:text-white text-gray-400"
              icon={faUpRightFromSquare}
              size="md"
            />
          </div>
          <span className="text-white text-lg group-hover:text-gray-300">
            {deployed_at}
          </span>
        </Card>
        <Card className="flex flex-col space-y-2">
          <span className="text-gray-500">Built using</span>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            {tech_stack_arr.map((ts, key) => (
              <Pill text={ts} key={key} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex flex-col">
        <Card className="flex items-center justify-center space-x-2 hover:bg-green-500 hover:cursor-pointer focus-xs">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <span className="text-gray-50">GitHub</span>
        </Card>
        <Card className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Built in</span>
            <span className="text-gray-50">{year}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-50">{duration}</span>
            <span className="text-gray-50">{months}</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectRow;
