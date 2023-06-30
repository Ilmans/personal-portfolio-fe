import { notFound } from "next/navigation";
import React from "react";
import Article from "./Article";
import { formateDateForDisplay } from "../../helpers";
import { TwitterIcon } from "../../../components/SocialIcon";
import Toc from "./Toc";

const getArticleBySlug = async (slug: string) => {
  const res = await fetch("http://localhost:3120/article/" + slug);
  if (res.status === 404) {
    notFound();
  }
  return res.json();
};
async function page({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);

  return (
    <div className="flex gap-4">
      <div className="w-4/5">
        <div className="flex gap-6">
          <div className="w-1/5">
            <div className="p-2 transition-all duration-100 ease-in border rounded-full dark:text-zinc-400 w-fit dark:border-zinc-400 dark:hover:border-zinc-200 dark:hover:text-zinc-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
            </div>
          </div>

          <div className="w-4/5 px-8 font-poppins">
            <div className="-space-y-4">
              <p className="pb-4 text-sm text-teal-300 uppercase font-semibol">
                {article.data.category.name}
              </p>
              <h1 className="text-4xl font-bold text-4">
                {article.data.title}
              </h1>
            </div>
            <div className="py-4 mb-12 text-xs border-b border-zinc-600">
              By{" "}
              <span className="font-bold">{article.data.author.full_name}</span>{" "}
              * Updated : {formateDateForDisplay(article.data.updatedAt)}
            </div>
            {/* Table Of Contents */}
            <div>
              <Toc markdownContent={article.data.body} />
            </div>
            {/*  */}
            <Article article={article} />
            <hr className="mt-12 bg-zinc-500 text-zinc-500" />
            <div className="p-8 mt-12 border rounded-lg border-zinc-400">
              <div className="flex items-center gap-2 text-lg font-semibold font-syne">
                <h2 className="">Did you enjoy this article?</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <div className="flex gap-4">
                <a className="text-sm text-teal-300 underline ">
                  Buy me a coffee
                </a>
                <a className="text-sm text-teal-300 underline">
                  <span>
                    <TwitterIcon className="inline w-4 h-4 mx-1" />
                  </span>
                  Share to twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
