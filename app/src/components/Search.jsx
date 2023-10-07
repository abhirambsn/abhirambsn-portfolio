import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Search = ({ searchTerm, setSearchTerm, placeHolder }) => {
  return (
    <div className="flex px-4 items-center bg-gray-800 rounded-lg">
      <FontAwesomeIcon
        icon={faSearch}
        size="lg"
        className="group-focus:text-gray-50 text-gray-300"
      />
      <input
        type="search"
        name="search"
        id="search"
        placeholder={placeHolder}
        className="input w-full p-4 bg-gray-800 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
