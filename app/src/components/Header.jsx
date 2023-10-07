import React from "react";

const Header = ({ pageVisits, changeTheme, dark }) => {
  return (
    <header className="p-2 flex items-center justify-between bg-gray-800">
      <div
        className={`flex rounded-full items-center text-sm justify-center px-2 py-1 text-gray-50 bg-gray-900`}
      >
        <p>
          <span>Current Date &amp; Time: </span>
          <span>
            {new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
          </span>
        </p>
      </div>
      <div
        className={`flex rounded-full items-center text-sm justify-center px-2 py-1 text-gray-50 bg-gray-900`}
      >
        <p>
          <span>You have visited my site: </span>
          <span>{pageVisits}</span>
        </p>
      </div>
      <div
        className={`flex rounded-full items-center text-sm space-x-2 justify-center px-2 py-1 text-gray-50 bg-gray-900`}
      >
        <span>Theme: </span>
        <span>{dark ? "Dark" : "Light"}</span>
        <div
          onClick={() => changeTheme(old_dark => !old_dark)}
          className={`cursor-pointer hover:bg-gray-50 hover:text-gray-900 flex rounded-full items-center text-sm justify-center px-2 py-1 text-gray-50 bg-gray-700`}
        >
          <span>Change</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
