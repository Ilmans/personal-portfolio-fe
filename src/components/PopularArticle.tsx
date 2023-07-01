import Link from "next/link";
import React, { useState } from "react";
import { config } from "../app/helpers";

const getPopularArticles = async () => {
  const res = await fetch(`${config.BACKEND_URL}/articles/popular`, {
    cache: "default",
  });
  return res.json();
};
const PopularArticle: any = React.memo(async () => {
  const articles = await getPopularArticles();

  return (
    <ul className="mt-4 space-y-2 text-xs">
      {articles.data.map((article, i) => (
        <li key={i} className="hover:text-teal-300">
          <Link
            href={"/article/" + article.slug}
            className="flex items-center gap-1 dark:hover:text-teal-300 dark:text-zinc-400 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p className="">{article.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
});

export default PopularArticle;
