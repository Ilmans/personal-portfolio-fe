import Link from "next/link";
import React from "react";
import { config, formateDateForDisplay } from "../../helpers";

function ListProjects({ deleteProj, projects }) {
  return (
    <div>
      {projects.map((project: any, i) => (
        <div
          className="flex flex-row px-4 py-4 border-b rounded-lg cursor-pointer font-poppins hover:bg-zinc-200 dark:hover:bg-zinc-700 "
          key={i}>
          <div>
            <img
              height={200}
              width={300}
              src={`${config.BACKEND_URL}/projects/${project.image}`}
              alt="sf"
            />
          </div>
          <Link
            href={`#`}
            className="font-semibold text-zinc-500 dark:text-zinc-100">
            {project.name}
          </Link>
          <button
            onClick={() => {
              deleteProj(project.id);
            }}
            className="text-xs text-red-400 hover:text-red-800">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListProjects;
