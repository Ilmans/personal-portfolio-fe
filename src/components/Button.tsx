import React from "react";

function Button({
  text,
  className = "",
  onClick,
  disabled = false,
}: {
  text: String;
  className: string;
  onClick: any;
  disabled: boolean;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 `}>
      {text}
    </button>
  );
}

export default Button;
