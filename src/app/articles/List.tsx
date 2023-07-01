import Link from "next/link";
import React, { useEffect, useState } from "react";
import { formateDateForDisplay } from "../helpers";
import { XCircle } from "../../components/Icon";

// function timeout(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

function List({ articles }: { articles: any }) {
  return (
    <div className="lg:border-l mt-14 border-zinc-700 ">
      {articles.map((article: Article, i) => (
        <div key={i} className="items-start lg:flex">
          <div className="px-4 ml-2 border-l lg:border-none border-zinc-700 lg:ml-8 lg:px-0 lg:py-8 lg:w-1/4 ">
            <p className="text-xs text-zinc-400 font-poppins">
              {formateDateForDisplay(article.createdAt)}
            </p>
          </div>
          <Link
            href={`/article/${article.slug}`}
            className="block p-6 space-y-2 transition-all duration-150 ease-in-out cursor-pointer lg:w-3/4 shadow-full rounded-xl dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800 font-poppins">
            <h1 className="text-xl leading-6">{article.title}</h1>
            <div className="text-xs lg:text-sm text-zinc-500">
              Filled by {article.author.full_name} in{" "}
              <span className="px-2 text-xs bg-teal-400 rounded-lg text-zinc-300">
                {article.category.name}
              </span>
            </div>
            <p className="text-xs lg:text-sm text-zinc-400">
              {article.body.slice(1, 150)}
            </p>
            <p className="flex items-center gap-2 text-sm text-teal-300">
              Read Articles{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default List;
