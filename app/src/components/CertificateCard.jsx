import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from 'react-markdown'

const CertificateCard = ({
  name,
  description,
  image,
  url,
  awarded_by,
  awarded_on,
}) => {
  return (
    <Card className="flex flex-col p-0">
      <img
        src={image}
        alt={name}
        className="h-48 object-cover w-full rounded-t-xl"
      />
      <div className="flex flex-col mx-1 p-2 space-y-3">
        <h3 className="text-xl font-bold">{name}</h3>
        <ReactMarkdown className="text-justify text-sm">{description}</ReactMarkdown>
        <p className="flex flex-col space-y-1">
          <span className="text-sm text-gray-200">{awarded_by}</span>
          <span className="text-xs text-gray-300">{awarded_on}</span>
        </p>
        <a
          className="p-3 rounded-xl transition-all duration-100 ease-in-out bg-gray-900 hover:bg-gray-50 hover:text-gray-900 flex items-center justify-center space-x-2"
          href={url}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
          <span>View Certificate</span>
        </a>
      </div>
    </Card>
  );
};

export default CertificateCard;
