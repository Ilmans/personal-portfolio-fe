"use client";
import React, { useState, useEffect } from "react";
import { SearchIcon, XCircle } from "../../components/Icon";
import { getCategories } from "../../lib/api";


function SearchBar({ setArticles, getArticles, articles, full = false }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState(null);

  const [fatalError, setFatalError] = useState(false);
  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch(() => setFatalError(true));
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getArticles(1, searchTerm).then((res) => setArticles(res.data));
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="my-4">
        <ul className="flex gap-8 p-2 font-semibold text-teal-500 text-sx lg:text-sm dark:text-teal-300 font-poppins">
          {categories !== null ? (
            <>
              {categories.map((category, i) => (
                <li
                  onClick={() => setSearchTerm(`#${category.name}`)}
                  className={`${
                    searchTerm == "#" + category.name ? "underline" : ""
                  } cursor-pointer`}
                  key={i}>
                  {category.name}
                </li>
              ))}
            </>
          ) : (
            <>..</>
          )}
        </ul>
        <div className={`relative ${full ? "w-full" : "lg:w-2/3"} `}>
          <input
            onChange={handleSearch}
            value={searchTerm}
            placeholder="Search title or #category"
            className="w-full p-2 text-sm bg-transparent border rounded-lg border-zinc-700 text-zinc-400 focus-border-none focus:ring focus:ring-teal-300 ring-0 font-poppins"
            type="text"
          />
          {searchTerm ? (
            <XCircle
              onClick={() => setSearchTerm("")}
              className="absolute w-6 h-6 text-teal-400 right-1 top-2"
            />
          ) : (
            <SearchIcon className="absolute w-6 h-6 p-0.5 right-1 top-2" />
          )}
        </div>
      </div>
      {articles != null && articles.length == 0 && searchTerm && (
        <div className="flex items-center gap-1 ">
          <p>No Articles Found</p>
          <button
            onClick={() => {
              setSearchTerm("");
            }}>
            <XCircle className="w-4 h-4 text-teal-300" />
          </button>
        </div>
      )}
    </>
  );
}

export default SearchBar;
