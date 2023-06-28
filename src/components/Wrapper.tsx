import React from "react";

function Wrapper({ children, className = "" }) {
  return (
    <div
      className={`${className} p-4 border-none lg:border border-b-0 rounded-lg lg:bg-gradient-to-br lg:dark:from-zinc-800 lg:dark:to-transparent dark:border-zinc-700 `}>
      {children}
    </div>
  );
}

export default Wrapper;
