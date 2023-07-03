import Link from "next/link";
import React from "react";
import { formateDateForDisplay } from "../../helpers";

function List({ deleteArt, articles }) {
  return (
    <div>
      {articles.map((article: any, i) => (
        <div
          className="px-4 py-4 border-b rounded-lg cursor-pointer font-poppins hover:bg-zinc-200 dark:hover:bg-zinc-700 "
          key={i}>
          <Link
            href={`/article/${article.slug}`}
            className="font-semibold text-zinc-500 dark:text-zinc-100">
            {article.title}
          </Link>
          <p className="text-xs">
            {formateDateForDisplay(article.createdAt)} - fill in{" "}
            <span className="text-teal-500 dark:text-teal-300 ">
              {article.category.name}
            </span>
          </p>
          <div className="flex gap-4 dark:text-zinc-100 text-zinc-700">
            <p className="text-xs">{article.views} Views</p>
            <button
              onClick={() => {
                deleteArt(article.id);
              }}
              className="text-xs text-red-400 hover:text-red-800">
              Remove
            </button>
            <Link
              href={`/manage/articles/edit/${article.slug}`}
              className="text-xs text-teal-400 hover:text-teal-800">
              Edit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
