"use client";
import React, { useEffect, useState } from "react";
import { config } from "../app/helpers";
import Link from "next/link";

const PopularArticle = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPopularArticles = async () => {
      try {
        const res = await fetch(`${config.BACKEND_URL}/articles/popular`, {
          cache: "default",
        });
        const data = await res.json();
        setArticles(data.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getPopularArticles();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-xs text-zinc-400">Failed to load popular articles</p>
    );
  }

  return (
    <ul className="mt-4 space-y-2 text-xs">
      {articles.map((article, i) => (
        <li key={i} className="hover:text-teal-300">
          <Link
            href={"/article/" + article.slug}
            className="flex items-baseline justify-start gap-1 dark:hover:text-teal-300 dark:text-zinc-400 ">
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
};

export default PopularArticle;
