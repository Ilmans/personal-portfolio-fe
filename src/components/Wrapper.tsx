import React from "react";

function Wrapper({ children, className = "" }) {
  return (
    <div
      className={`${className} p-4 lg:from-zinc-100 lg:to-transparent lg:border-zinc-300 border-0 lg:border border-b-0 rounded-lg lg:bg-gradient-to-br lg:dark:from-zinc-900 lg:dark:to-transparent dark:border-zinc-800 `}>
      {children}
    </div>
  );
}

export default Wrapper;
