import React from "react";

function Jumbotron({
  title,
  description,
}: {
  title: String;
  description: string;
}) {
  return (
    <div className="space-y-4  lg:w-2/3 font-poppins">
      <h2 className="text-4xl font-semibold leading-10 ">
       {title}
      </h2>
      <p className="text-xs dark:text-zinc-300">
      {description}
      </p>
    </div>
  );
}

export default Jumbotron;
