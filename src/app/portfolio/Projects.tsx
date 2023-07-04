import Image from "next/image";
import React from "react";
import { dummyProjects } from "../../dummies/Api";
import Link from "next/link";
import { config, getDomain } from "../helpers";
import { EyeIcon } from "../../components/Icon";

function Projects({ projects }) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-6 lg:grid-cols-3">
      {projects.map((project) => (
        <div className="p-4 transition-all duration-100 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800">
          {/*  */}
          <div>
            <Image
              className="rounded-lg shadow-md"
              loading="lazy"
              src={`${config.BACKEND_URL}/projects/${project.image}`}
              height={150}
              width={400}
            />
          </div>
          <div className="p-2">
            <h1 className="text-sm font-semibold line-clamp-2">
              {project.name}
            </h1>
            <div className="flex flex-wrap gap-2 mt-4">
              {JSON.parse(project.stacks).map((tech) => (
                <button className="px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  {tech}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <Link
                className="flex items-center gap-1 text-xs hover:text-teal-300"
                href={""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text--400">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <p className="">{getDomain(project.url)}</p>
              </Link>

              <EyeIcon className="w-4 h-4 text-teal-300" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
