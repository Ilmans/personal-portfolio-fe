"use client";
import React from "react";
import { BookIcon, CodeIcon, TagIcon } from "../Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-1/4 h-screen ">
      <ul className="font-poppins">
        <li
          className={`py-2 my-2 ${
            pathname === "/manage/articles" &&
            "bg-teal-400 dark:text-zinc-100 font-normal"
          } transition-all duration-100 rounded-lg hover:bg-zinc-700 dark:text-zinc-300 hover:dark:text-white`}>
          <Link href="/manage/articles" className="text-sm ">
            <BookIcon className="inline w-4 h-4 mx-2 icon-goyang" />
            Articles
          </Link>
        </li>

        <li className="py-2 my-2 transition-all duration-100 rounded-lg hover:bg-zinc-700 dark:text-zinc-300 hover:dark:text-white">
          <a href="#" className="text-sm ">
            <CodeIcon className="inline w-4 h-4 mx-2 icon-goyang" />
            Projects
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
