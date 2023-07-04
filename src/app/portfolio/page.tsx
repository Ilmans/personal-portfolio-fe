"use client";
import React, { Suspense, useEffect, useState } from "react";

import Projects from "./Projects";
import Jumbotron from "../../components/Jumbotron";
import { getProjects } from "../../lib/api";
import Pagination from "../../components/Pagination";

function page() {
  const [projects, setProjects] = useState(null);
  const [meta, setMeta] = useState(null);
  const [fatalError, setFatalError] = useState(false);
  useEffect(() => {
    getProjects()
      .then((res) => {
        setProjects(res.data);
        setMeta(res.paging);
      })
      .catch(() => {
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
    <div className="lg:w-5/7 ">
      <Jumbotron
        title={" Things I’ve made trying to put my dent in the universe. "}
        description="I've worked on a ton of small projects over the years, but well the ones on this list I can highlight."
      />
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
    </div>
  );
}

export default page;
