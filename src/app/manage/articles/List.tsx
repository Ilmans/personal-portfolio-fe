import Link from "next/link";
import React from "react";
import { formateDateForDisplay } from "../../helpers";

function List({ deleteArt, articles }) {
  return (
    <div>
      {articles.map((article: any, i) => (
        <div
          className="px-2 py-4 border-b cursor-pointer hover:bg-zinc-700 "
          key={i}>
          <Link href="#" className="font-semibold text-zinc-100">
            {article.title}
          </Link>
          <p className="text-xs">
            {formateDateForDisplay(article.createdAt)} - fill in{" "}
            <span className="text-teal-300 ">{article.category.name}</span>
          </p>
          <div className="flex gap-4">
            <p className="text-sm">{article.views} Views</p>
            <button
              onClick={() => {
                deleteArt(article.id);
              }}
              className="text-sm text-red-400 hover:text-red-800">
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
