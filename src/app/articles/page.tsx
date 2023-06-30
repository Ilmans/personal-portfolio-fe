import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../components/SocialIcon";
import { formateDateForDisplay } from "../helpers";
import Link from "next/link";

const getArticles = async () => {
  const res = await fetch("http://localhost:3120/articles");
  return res.json();
};
async function page() {
  const articles: any = await getArticles();

  return (
    <div className="flex gap-4">
      <div className="w-4/5">
        <Jumbotron
          title={
            "Write about my opinion about computer program, code, design, and technique"
          }
          description="All of my long-form thoughts on programming, design, and more, collected in chronological order."
        />
        <div className="border-l mt-14 border-zinc-700 ">
          {articles.data.map((article: any) => (
            <div className="flex items-start">
              <div className="w-1/4 py-8 ml-8 ">
                <p className="text-xs text-zinc-400 font-poppins">
                  {formateDateForDisplay(article.createdAt)}
                </p>
              </div>
              <Link
                href={`/article/${article.slug}`}
                className="w-3/4 p-6 space-y-2 transition-all duration-150 ease-in-out cursor-pointer shadow-full rounded-xl dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800 font-poppins">
                <h1 className="text-xl leading-6">{article.title}</h1>
                <div className="text-sm text-zinc-500">
                  Filled by {article.author.full_name} in{" "}
                  <span className="px-2 text-xs rounded-lg text-zinc-900 bg-zinc-400">
                    {article.category.name}
                  </span>
                </div>
                <p className="text-sm text-zinc-400">
                  {article.body.slice(1, 150)}
                </p>
                <p className="flex items-center gap-2 text-sm text-teal-400">
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
      </div>
      <div className="w-1/5">
        <Wrapper>
          <h2>Popular Articles</h2>
          <ul className="mt-4 space-y-2 text-xs">
            <PopularArticleList text="lorem ipsum dolor sit amet." />
            <PopularArticleList text="lorem ipsum dolor sit amet." />
            <PopularArticleList text="lorem ipsum dolor sit amet." />
            <PopularArticleList text="lorem ipsum dolor sit amet." />
            <PopularArticleList text="lorem ipsum dolor sit amet." />
          </ul>
        </Wrapper>
        <Wrapper className="mt-6 text-sm">
          <h2 className="text-lg">Social Media</h2>
          <button className="flex items-center gap-2 mt-4">
            <InstagramIcon className="w-6 h-6" /> Follow on Instagram
          </button>
          <button className="flex items-center gap-2 mt-4">
            <TwitterIcon className="w-6 h-6" /> Follow on Instagram
          </button>
          <button className="flex items-center gap-2 mt-4 ">
            <FacebookIcon className="w-6 h-6" /> Follow on Facebook
          </button>
        </Wrapper>
      </div>
    </div>
  );
}

const PopularArticleList: any = ({ text, href = "#" }) => {
  return (
    <li className="hover:text-teal-400">
      <a
        href={href}
        className="flex items-center gap-1 dark:hover:text-teal-400 dark:text-zinc-400 ">
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

        <p className="">{text}</p>
      </a>
    </li>
  );
};

export default page;
