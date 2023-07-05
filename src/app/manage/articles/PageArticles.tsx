"use client";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import { deleteArticle, getArticles } from "../../../lib/api";
import { toast } from "react-toastify";
import Pagination from "../../../components/Pagination";
import List from "./List";
import EmptyData from "../../../components/Dashboard/EmptyData";
import Link from "next/link";
import HeadSection from "../../../components/Dashboard/HeadSection";
import SearchBar from "../../articles/SearchBar";

function PageArticles() {
  const token =
    typeof window !== undefined ? localStorage.getItem("token") : "";
  const [articles, setArticles] = useState(null);
  const [meta, setMeta] = useState(null);
  const [fatalError, setFatalError] = useState(false);
  useEffect(() => {
    getArticles()
      .then((res) => {
        setArticles(res.data);
        setMeta(res.paging);
      })
      .catch(() => {
        setFatalError(true);
      });
  }, []);

  const onPageChange = (toPage) => {
    setArticles(null);
    getArticles(toPage).then((res) => {
      setArticles(res.data);
      setMeta(res.paging);
    });
  };

  const deleteArt = (id: any) => {
    const ask = confirm("Are you sure want to delete this?");
    if (ask) {
      deleteArticle(token, id)
        .then((res) => {
          getArticles().then((res) => {
            setArticles(res.data);
            setMeta(res.paging);
          });
          toast.success("Article deleted");
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    }
  };
  return (
    <Fragment>
      <HeadSection
        title={"My Articles"}
        desc={"Here is my articles"}
        right={
          <div className="">
            <SearchBar
              full={true}
              getArticles={getArticles}
              articles={articles}
              setArticles={setArticles}
            />
          </div>
        }
      />
      <Link
        href="/manage/articles/create"
        className="-mt-8 text-teal-500 underline dark:text-teal-300">
        Create Article
      </Link>
      <div className="mt-8">
        <div className="w-full p-2 border shadow-sm rounded-xl dark:shadow-none text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700">
          {articles === null || articles.length === 0 ? (
            <EmptyData />
          ) : (
            <Suspense fallback={<>Get data</>}>
              <List deleteArt={deleteArt} articles={articles} />
            </Suspense>
          )}
          {meta !== null && articles !== null && articles.length !== 0 && (
            <div className="mt-4">
              <Pagination
                onPageChange={onPageChange}
                currentPage={meta.page}
                totalPages={meta.total_page}
              />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default PageArticles;
