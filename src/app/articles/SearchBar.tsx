"use client";
import React, { useState, useEffect } from "react";

function SearchBar({ setArticles, getArticles }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getArticles(searchTerm).then((res) => setArticles(res.data));
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="my-4">
      <ul className="flex gap-8 px-2 text-teal-300 font-poppins">
        <li>Tutorial</li>
        <li>Programming</li>
        <li>Tech</li>
      </ul>
      <input
        onChange={handleSearch}
        placeholder="Search title or #category"
        className="w-2/3 p-2 bg-transparent border-none rounded-lg font-poppins "
        type="text"
      />
    </div>
  );
}

export default SearchBar;
