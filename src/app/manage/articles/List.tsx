import Link from "next/link";
import React from "react";
import { formateDateForDisplay } from "../../helpers";

function List({ articles }) {
  return (
    <div>
      {articles.map((article: Article, i) => (
        <div
          className="px-2 py-4 border-b rounded-lg cursor-pointer hover:bg-zinc-700 "
          key={i}>
          <Link href="#" className="font-semibold text-zinc-100">
            {article.title}
          </Link>
          <p className="text-xs">
            {formateDateForDisplay(article.createdAt)} - fill in{" "}
            <span className="text-teal-300 ">{article.category.name}</span>
          </p>
          <p
            className="w-1/2 text-sm"
            dangerouslySetInnerHTML={{ __html: article.body.slice(0, 100) }}
          />
        </div>
      ))}
    </div>
  );
}

export default List;
