import Link from "next/link";
import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import { usePathname } from "next/navigation";

interface NavigationProps {
  mobileMenuShow: boolean;
  setMobileMenuShow: (mobileMenuShow: boolean) => void;
}
function Navigation({ mobileMenuShow, setMobileMenuShow }: NavigationProps) {
  const currentRoute = usePathname();

  return (
    <div
      className={`fixed inset-0 z-10 h-screen transition-transform duration-200 transform ${
        mobileMenuShow ? "" : "scale-0"
      } lg:scale-100 lg:h-fit lg:static backdrop-filter backdrop-blur-xl lg:backdrop-blur-0 lg:w-4/6`}>
      <ul className="pb-6 m-6 space-y-4 shadow-2xl lg:shadow-none rounded-xl bg-zinc-50 lg:pb-0 lg:m-0 dark:bg-zinc-800 lg:dark:bg-transparent lg:rounded-none">
        <li className="flex items-center justify-between px-4 py-2 text-sm lg:py-0 lg:hidden">
          <p>Navigation</p>
          <button
            onClick={() => setMobileMenuShow(false)}
            className="box-content px-4 py-2 border rounded-full border-zinc-500 hover:bg-zinc-900">
            X
          </button>
        </li>
        <NavLi active={currentRoute === "/"} url={"/"} text={"About"} />
        <NavLi
          active={currentRoute === "/portfolio"}
          url={"/portfolio"}
          text={"Portfolio"}
        />

        <NavLi text={"Articles"} />
        <NavLi text={"Hire me!"} />
      </ul>
      <ProfileCard className="block mx-6 shadow-2xl bg-zinc-50 dark:bg-zinc-800 lg:hidden" />
    </div>
  );
}

function NavLi({ text, url = "#", active = false }) {
  return (
    <li className="block mx-4 mr-10 font-normal border-b lg:py-2 lg:px-4 lg:font-bold border-zinc-700 lg:m-0 lg:inline-block">
      <Link
        href={url}
        className={`text-lg transition-all hover:text-teal-400 ${
          active ? "text-teal-400" : ""
        }`}>
        {text}
        {/* <span className="absolute bottom-0 h-0.5 transition-transform duration-300 transform scale-x-0 bg-teal-400 right-3 left-3 group-hover:scale-x-100"></span> */}
      </Link>
    </li>
  );
}

export default Navigation;
