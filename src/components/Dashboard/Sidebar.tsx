"use client";
import React from "react";
import { BookIcon, CodeIcon, TagIcon } from "../Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-1/4 h-screen p-4 ">
      <ul className="font-poppins">
        <li
          className={`py-2 my-2 ${
            pathname === "/manage/articles" &&
            "dark:bg-teal-400 text-white bg-zinc-400 dark:text-zinc-100 font-normal"
          } transition-all duration-100 rounded-lg  dark:hover:bg-zinc-700 dark:text-zinc-300 hover:text-white`}>
          <Link href="/manage/articles" className="text-sm ">
            <BookIcon className="inline w-4 h-4 mx-2 icon-goyang" />
            Articles
          </Link>
        </li>
        <li
          className={`py-2 my-2 ${
            pathname === "/manage/projects" &&
            "dark:bg-teal-400 text-white bg-zinc-400 dark:text-zinc-100 font-normal"
          } transition-all duration-100 rounded-lg  dark:hover:bg-zinc-700 dark:text-zinc-300 hover:text-white`}>
          <Link href="/manage/projects" className="text-sm ">
            <CodeIcon className="inline w-4 h-4 mx-2 icon-goyang" />
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
