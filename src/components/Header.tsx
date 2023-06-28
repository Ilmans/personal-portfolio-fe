"use client";

import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Navigation from "./Navigation";

function Header() {
  const [mobileMenuShow, setMobileMenuShow] = useState<boolean>(false);
  return (
    <header className="flex items-center justify-between py-5 text-zinc-500 dark:text-zinc-300">
      {/* MENU NAVIGATION */}
      <Navigation
        mobileMenuShow={mobileMenuShow}
        setMobileMenuShow={setMobileMenuShow}
      />
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
      <ThemeSwitcher />
    </header>
  );
}




export default Header;
