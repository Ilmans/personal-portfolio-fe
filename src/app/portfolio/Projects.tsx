import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { config, getDomain } from "../helpers";
import { EyeIcon } from "../../components/Icon";
import Modal from "../../components/Modal";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Projects({ projects }) {
  const [whichShow, setWhichShow] = useState(null);
  return (
    <div className="grid grid-cols-1 gap-4 mt-6 lg:grid-cols-3">
      {whichShow !== null && (
        <Modal
          open={true}
          onClose={() => {
            setWhichShow(null);
          }}
          title={"Description Project : " + whichShow.name}>
          <ReactMarkdown className="space-y-8 text-sm dark:text-zinc-300 markdown">
            {whichShow.description}
          </ReactMarkdown>
        </Modal>
      )}
      {projects.map((project) => (
        <div
          key={project.id}
          className="p-4 transition-all duration-100 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800">
          {/*  */}
          <div>
            <Image
              className="rounded-lg shadow-md"
              loading="lazy"
              src={`${config.BACKEND_URL}/uploads/projects/${project.image}`}
              height={150}
              width={400}
            />
          </div>
          <div className="p-2">
            <h1 className="text-sm font-semibold line-clamp-2">
              {project.name}
            </h1>
            <div className="flex flex-wrap gap-2 mt-4">
              {JSON.parse(project.stacks).map((tech, i) => (
                <button
                  key={i}
                  className="px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  {tech}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <button
                onClick={() => {
                  if (typeof window !== undefined) {
                    window.open(project.url, "_blank");
                  }
                }}
                className="flex items-center gap-1 text-xs hover:text-teal-300">
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
              </button>

              <button
                onClick={() => {
                  setWhichShow(project);
                }}>
                <EyeIcon className="w-4 h-4 text-teal-300" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
