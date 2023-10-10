import React, { useEffect, useState } from "react";

const Header = ({ changeTheme, dark }) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <header className="p-2 flex flex-col lg:flex-row items-start w-full lg:w-auto lg:items-center gap-10 lg:justify-between bg-gray-800">
      <div
        className={`flex rounded-full items-center w-full lg:w-auto text-xs lg:text-sm justify-center px-2 py-1 text-gray-50 bg-gray-900`}
      >
        <p className="flex items-center gap-1">
          <span>{currentTime}</span>
        </p>
      </div>
      <div
        className={`flex rounded-lg lg:rounded-full items-center text-xs lg:text-sm space-x-2 justify-start lg:justify-center p-2 lg:px-2 lg:py-1 w-full lg:w-auto text-gray-50 bg-gray-900`}
      >
        <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <li className="hover:bg-gray-50 hover:text-gray-900 transition-all ease-in-out duration-100 rounded-full p-2 lg:p-0 w-full lg:w-auto lg:px-2">
            <a href="/">Home</a>
          </li>
          <li className="hover:bg-gray-50 hover:text-gray-900 transition-all ease-in-out duration-100 rounded-full p-2 lg:p-0 w-full lg:w-auto lg:px-2">
            <a href="/projects">Projects</a>
          </li>
          <li className="hover:bg-gray-50 hover:text-gray-900 transition-all ease-in-out duration-100 rounded-full p-2 lg:p-0 w-full lg:w-auto lg:px-2">
            <a href="/certificates">Certificates</a>
          </li>
          <li className="hover:bg-gray-50 hover:text-gray-900 transition-all ease-in-out duration-100 rounded-full p-2 lg:p-0 w-full lg:w-auto lg:px-2">
            <a href="/education">Education</a>
          </li>
        </ul>
      </div>
      <div
        className={`flex rounded-full items-center w-full lg:w-auto text-xs lg:text-sm space-x-2 justify-center px-2 py-1 text-gray-50 bg-gray-900`}
      >
        <span>Theme: </span>
        <span>{dark ? "Dark" : "Light"}</span>
        <div
          onClick={() => changeTheme((old_dark) => !old_dark)}
          className={`cursor-pointer hover:bg-gray-50 hover:text-gray-900 flex rounded-full items-center text-xs lg:text-sm justify-center px-2 py-1 text-gray-50 bg-gray-700`}
        >
          <span>Change</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
