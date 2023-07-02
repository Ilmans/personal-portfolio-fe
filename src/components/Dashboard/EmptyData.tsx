import React from "react";
import { BookIcon } from "../Icon";

function EmptyData() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-32 border rounded-lg text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700">
      <BookIcon className="block w-8 h-8" />
      <p className="">Your articles will be display here</p>
    </div>
  );
}

export default EmptyData;
