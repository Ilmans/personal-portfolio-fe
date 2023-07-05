"use client";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import { getArticles } from "../../lib/api";
import List from "./List";
import Pagination from "../../components/Pagination";
import SearchBar from "./SearchBar";

function PageArticles() {
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
      <Suspense fallback={<>Loadin..</>}>
        <SearchBar
          articles={articles}
          setArticles={setArticles}
          getArticles={getArticles}
        />
      </Suspense>
      {fatalError ? (
        <div className="flex flex-col mt-12">
          <h2 className="font-bold font-poppins">Filed load articles</h2>
          <p>Please try to refresh page</p>
        </div>
      ) : (
        <>
          {articles === null ? (
            <p>getting articles..</p>
          ) : (
            <List articles={articles} />
          )}
        </>
      )}
      {meta !== null && articles !== null && articles.length !== 0 && (
        <Pagination
          totalPages={meta.total_page}
          onPageChange={onPageChange}
          currentPage={meta.page}
        />
      )}
    </Fragment>
  );
}

export default PageArticles;
