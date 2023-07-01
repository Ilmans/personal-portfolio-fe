"use client";
import React, { useState, useEffect } from "react";

const getCategories = async () => {
  const res = await fetch("http://localhost:3120/categories", {
    cache: "default",
  });
  return res.json();
};
function SearchBar({ setArticles, getArticles }) {
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
      <input
        onChange={handleSearch}
        value={searchTerm}
        placeholder="Search title or #category"
        className="w-2/3 p-2 text-sm bg-transparent border rounded-lg border-zinc-700 text-zinc-400 focus-border-none focus:ring focus:ring-teal-300 ring-0 font-poppins "
        type="text"
      />
    </div>
  );
}

export default SearchBar;
