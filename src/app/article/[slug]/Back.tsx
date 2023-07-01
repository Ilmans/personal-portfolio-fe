"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Back() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="p-2 transition-all duration-100 ease-in border rounded-full dark:text-zinc-400 w-fit dark:border-zinc-400 dark:hover:border-zinc-200 dark:hover:text-zinc-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
        />
      </svg>
    </div>
  );
}

export default Back;
