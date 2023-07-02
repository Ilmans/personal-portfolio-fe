"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useAuthRedirect } from "../../../hook/useAuthRedirect";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Link from "next/link";
import { BookIcon } from "../../../components/Icon";
import { config } from "../../helpers";
import HeadSection from "../../../components/Dashboard/HeadSection";
import EmptyData from "../../../components/Dashboard/EmptyData";
import List from "./List";
import SearchBar from "../../articles/SearchBar";
import Pagination from "../../../components/Pagination";

const getArticles = async (page = 1, searchTerms = "") => {
  const res = await fetch(
    `${config.BACKEND_URL}/articles?search=` +
      encodeURIComponent(searchTerms) +
      "&page=" +
      page,
    {
      cache: "no-store",
    }
  );
  return res.json();
};

function page({}) {
  useAuthRedirect("/login", true);
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
      <div className="mt-8">
        <div className="w-full p-2 border rounded-lg text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700">
          {articles === null ? <EmptyData /> : <List articles={articles} />}
          {meta !== null && (
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

export default page;
