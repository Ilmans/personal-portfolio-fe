"use client";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import { getProjects } from "../../lib/api";
import Projects from "./Projects";
import Pagination from "../../components/Pagination";

function PagePortfolio() {
  const [projects, setProjects] = useState(null);
  const [meta, setMeta] = useState(null);
  const [fatalError, setFatalError] = useState(false);
console.log(process.env.BACKEND_URL);

  
  useEffect(() => {
    
    
    getProjects()
      .then((res) => {
        setProjects(res.data);
        setMeta(res.paging);
      })
      .catch((e) => {
    
        setFatalError(true);
      });
  }, []);

  const onPageChange = (toPage) => {
    setProjects(null);
    getProjects(toPage).then((res) => {
      setProjects(res.data);
      setMeta(res.paging);
    });
  };
  return (
    <Fragment>
      {meta !== null && projects !== null && projects.length !== 0 && (
        <Suspense fallback={<p>Something went wrong when get projects</p>}>
          <Projects projects={projects} />
        </Suspense>
      )}
      {meta !== null && projects !== null && projects.length !== 0 && (
        <div className="mt-4">
          <Pagination
            onPageChange={onPageChange}
            currentPage={meta.page}
            totalPages={meta.total_page}
          />
        </div>
      )}
    </Fragment>
  );
}

export default PagePortfolio;
