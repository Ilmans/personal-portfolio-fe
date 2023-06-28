import React from "react";

function Button({ text, className = "" }: { text: String; className: String }) {
  return (
    <button
      className={`px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-zinc-900 dark:hover:bg-teal-400 hover:bg-teal-400 ${className}`}>
      {text}
    </button>
  );
}

export default Button;
