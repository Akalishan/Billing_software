import React, { useState } from "react";
import { Search } from "lucide-react";
export const SearchBox = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text);
  };
  return (
    <div className="mb-3">
      <input
        type="text"
        className=""
        placeholder="Search Items"
        value={searchText}
        onChange={handleInputChange}
      />
      <span className="bg-yellow-400 p-2 flex items-center justify-center rounded-l">
        <Search className="w-5 h-5 text-white" />
      </span>
    </div>
  );
};
