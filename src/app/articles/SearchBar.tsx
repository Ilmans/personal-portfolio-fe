"use client";
import React, { useState, useEffect } from "react";
import { SearchIcon, XCircle } from "../../components/Icon";

const getCategories = async () => {
  const res = await fetch("http://localhost:3120/categories", {
    cache: "default",
  });
  return res.json();
};
function SearchBar({ setArticles, getArticles, articles }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
  }, []);

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
    <>
      <div className="my-4">
        <ul className="flex gap-8 p-2 text-teal-300 font-poppins">
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
            new Array(3)
              .fill(1)
              .map(() => (
                <li
                  className={` w-24 h-2 rounded-lg animate-pulse bg-zinc-400`}></li>
              ))
          )}
        </ul>
        <div className="relative lg:w-2/3">
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
      {articles != null && articles.length == 0 && (
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
