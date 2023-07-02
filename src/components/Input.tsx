import React from "react";

function Input({ ...props }) {
  return (
    <input
      {...props}
      className={` w-full p-2 text-sm bg-transparent border rounded-lg outline-none ring-1 ring-zinc-400 dark:ring-0  dark:border-zinc-700 focus:dark:ring-1 focus:dark:ring-teal-300`}
    />
  );
}

export default Input;
