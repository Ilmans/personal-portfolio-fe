import React from "react";
import Wrapper from "../../components/Wrapper";
import { dummyProjects } from "../../dummies/Api";
import Image from "next/image";
import Link from "next/link";
import { getDomain } from "../helpers";

function page() {
  return (
    <div className="lg:w-5/7 ">
      <div className="w-2/3 px-4 space-y-4 font-poppins">
        <h2 className="text-4xl font-semibold leading-10 ">
          Things I’ve made trying to put my dent in the universe.
        </h2>
        <p className="text-xs dark:text-zinc-300">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {dummyProjects.map((project) => (
          <div className="p-2 transition-all duration-100 rounded-sm shadow-lg cursor-pointer dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800">
            {/*  */}
            <Image
              className="rounded-lg shadow-md"
              loading="lazy"
              src={project.image}
              height={150}
              width={300}
            />
            <div className="p-2">
              <h1 className="text-sm font-semibold line-clamp-2">
                {project.name}
              </h1>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((tech) => (
                  <button className="px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    {tech}
                  </button>
                ))}
              </div>
              <Link
                className="flex items-center gap-1 mt-2 text-xs hover:text-teal-400"
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
