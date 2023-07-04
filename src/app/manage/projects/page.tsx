"use client";
import Link from "next/link";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import HeadSection from "../../../components/Dashboard/HeadSection";
import { useAuthRedirect } from "../../../hook/useAuthRedirect";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { deleteProject, getProjects } from "../../../lib/api";
import EmptyData from "../../../components/Dashboard/EmptyData";
import Pagination from "../../../components/Pagination";
import ListProjects from "./ListProjects";
import { toast } from "react-toastify";

function Page() {
  useAuthRedirect("/login", true);
  const token = useSelector<RootState>((state) => state.auth.value.user?.token);
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

  const deleteProj = (id: any) => {
    const ask = confirm("Are you sure want to delete this?");
    if (ask) {
      deleteProject(token, id)
        .then((res) => {
          getProjects().then((res) => {
            setProjects(res.data);
            setMeta(res.paging);
          });
          toast.success("Project deleted");
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    }
  };
  return (
    <Fragment>
      <HeadSection
        title={"My Projects"}
        desc={"Here is my projects"}
        right={<></>}
      />
      <Link
        href="/manage/projects/create"
        className="-mt-8 text-teal-500 underline dark:text-teal-300">
        Add Projects
      </Link>
      <div className="mt-8">
        <div className="w-full p-2 border shadow-sm rounded-xl dark:shadow-none text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700">
          {projects === null || projects.length === 0 ? (
            <EmptyData />
          ) : (
            <Suspense fallback={<>Get data</>}>
              <ListProjects deleteProj={deleteProj} projects={projects} />
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
      </div>
    </Fragment>
  );
}

export default Page;
