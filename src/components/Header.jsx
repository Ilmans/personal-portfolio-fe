"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ProfileCard from "./ProfileCard";

function Header({ darkMode, setDarkMode, mobileMenuShow, setMobileMenuShow }) {
  const currentRoute = usePathname();

  return (
    <header className="flex items-center justify-between py-5 text-zinc-500 dark:text-zinc-300">
      {/* MENU NAVIGATION */}
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
      {/* END MENU NAVIGATION */}
      <div className="w-4/6 text-xl lg:w-2/6">
        <h1 className="font-bold ">MnZ</h1>
      </div>
      <div>
        <button
          onClick={() => setMobileMenuShow(true)}
          className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full lg:hidden hover:border-zinc-600 active:bg-zinc-600 border-zinc-400">
          Menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center gap-4 p-2 transition-all border rounded-lg border-zinc-300 hover:border-gray-600">
        <d className="items-center hidden font-normal lg:flex">
          <span className={`align-middle ${darkMode ? "text-teal-400" : ""}`}>
            Dark/
          </span>{" "}
          <span className={`align-middle ${darkMode ? "" : "text-teal-400"}`}>
            Light
          </span>
        </d>
        {darkMode ? (
          <MoonIcon setDarkMode={setDarkMode} />
        ) : (
          <SunIcon setDarkMode={setDarkMode} />
        )}
      </div>
    </header>
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

function SunIcon({ setDarkMode }) {
  return (
    <svg
      onClick={() => setDarkMode(true)}
      className="w-6 h-6 text-teal-400 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx={12} cy={12} r={5} />
      <line x1={12} y1={1} x2={12} y2={3} />
      <line x1={12} y1={21} x2={12} y2={23} />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1={1} y1={12} x2={3} y2={12} />
      <line x1={21} y1={12} x2={23} y2={12} />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}
function MoonIcon({ setDarkMode }) {
  return (
    <svg
      onClick={() => setDarkMode(false)}
      className="w-6 h-6 text-teal-400 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default Header;
