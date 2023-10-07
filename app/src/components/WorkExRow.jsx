import React, { useState } from "react";
import Card from "./Card";
import Pill from "./Pill";
import { Dialog, Transition } from "@headlessui/react";

const colorMapping = {
  docker: "blue",
  python: "yellow",
  javascript: "yellow",
  nodejs: "green",
  c: "white",
  cpp: "white",
  rest: "purple",
  android: "lime",
  java: "red",
  "web development": "sky",
  html: "orange",
  css3: "cyan",
};

const WorkExRow = ({
  logo,
  company_name,
  designation,
  description,
  tech_stack_arr,
  year,
  duration,
  months,
  color,
  word_lim = 50,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const words = description.split(" ");

  // Select the first 80 words and join them back together
  const initialText = words.slice(0, word_lim).join(" ");

  return (
    <div className="flex gap-2 items-start flex-col lg:flex-row mx-4 lg:mx-0">
      <Card
        className={`w-full bg-gradient-to-tr from-${color}-600 to-${color}-500 text-white max-w-sm h-full`}
      >
        <div className="flex flex-col items-center gap-3">
          <img src={logo} className="w-32 h-32 rounded-lg object-contain" />
          <div className="mt-9 gap-1 flex flex-col">
            <span className="text-white text-lg">{designation}</span>
            <span className=" text-white font-semibold">{company_name}</span>
          </div>
        </div>
      </Card>
      <Card className="flex-1 h-full w-full lg:w-auto flex flex-col flex-grow gap-2">
        <div className="flex items-center justify-between">
          <span className="text-left flex-grow text-gray-500">Description</span>
          {word_lim < words.length && (
            <span
              onClick={() => setIsOpen(true)}
              className="text-right text-blue-300 hover:cursor-pointer hover:underline"
            >
              More info
            </span>
          )}
        </div>
        <p className="text-white mt-2 text-justify flex-1 flex-grow text-[0.8rem]">
          {initialText}
          {word_lim < words.length && <>...</>}
        </p>
      </Card>
      <div className="w-full lg:w-auto flex flex-col gap-1">
        <Card className="flex flex-col gap-2">
          <span className="text-gray-500">Technologies Learned / Applied</span>
          <div className="grid grid-cols-2 lg:grid-cols-3 mt-4 gap-2">
            {tech_stack_arr.map((ts, key) => (
              <Pill
                text={ts}
                key={key}
                bgColor={colorMapping[ts.toLowerCase()] || colorMapping["rest"]}
              />
            ))}
          </div>
        </Card>
        <div className="flex-1 w-full lg:w-auto flex flex-col gap-3">
          <Card className="flex flex-1 flex-col gap-3">
            <div className="flex flex-1 items-center justify-between">
              <span className="text-gray-500">Duration</span>
              <span className="text-gray-50">{year}</span>
            </div>
            <div className="flex flex-1 items-center justify-between">
              <span className="text-gray-50">{duration}</span>
              <span className="text-gray-50">{months}</span>
            </div>
          </Card>
        </div>
      </div>

      <Transition show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-100"
                >
                  More Info
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-blue-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default WorkExRow;
