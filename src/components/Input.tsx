import React from "react";

function Input({ ...props }) {
  return (
    <input
      {...props}
      className="w-full p-2 text-sm bg-transparent border rounded-lg outline-none border-zinc-700 focus:ring-1 focus:ring-teal-300"
    />
  );
}

export default Input;
