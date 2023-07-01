import React from "react";

function SearchBar() {
  return (
    <div className="my-4">
      <ul className="flex gap-8 px-2 text-teal-300 font-poppins">
        <li>Tutorial</li>
        <li>Programming</li>
        <li>Tech</li>
      </ul>
      <input
        placeholder="Search title or #category"
        className="w-2/3 p-2 bg-transparent border-none rounded-lg font-poppins "
        type="text"
      />
    </div>
  );
}

export default SearchBar;
