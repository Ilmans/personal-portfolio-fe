import React from "react";

import Projects from "./Projects";

function page() {
  return (
    <div className="lg:w-5/7 ">
      <div className="px-4 space-y-4 lg:w-2/3 font-poppins">
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
      <Projects />
    </div>
  );
}

export default page;
