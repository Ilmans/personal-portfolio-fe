"use client";
import React, { useEffect, useState } from "react";

function ThemeSwitcher() {
  const darkOrNo: string = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState<boolean>(darkOrNo === "dark");
  useEffect(() => {
    const themeClass: string = darkMode ? "dark" : "light";
    localStorage.setItem("theme", themeClass);
    document.documentElement.classList.add(themeClass);
    return () => {
      document.documentElement.classList.remove(themeClass);
    };
  }, [darkMode]);
  return (
    <div className="flex items-center gap-4 p-2 transition-all border rounded-lg border-zinc-300 hover:border-gray-600">
      <div className="items-center hidden font-normal lg:flex">
        <span className={`align-middle ${darkMode ? "text-teal-300" : ""}`}>
          Dark/
        </span>{" "}
        <span className={`align-middle ${darkMode ? "" : "text-teal-300"}`}>
          Light
        </span>
      </div>
      {darkMode ? (
        <MoonIcon setDarkMode={setDarkMode} />
      ) : (
        <SunIcon setDarkMode={setDarkMode} />
      )}
    </div>
  );
}
function SunIcon({
  setDarkMode,
}: {
  setDarkMode: (darkMode: boolean) => void;
}) {
  return (
    <svg
      onClick={() => setDarkMode(true)}
      className="w-6 h-6 text-teal-300 cursor-pointer"
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
function MoonIcon({
  setDarkMode,
}: {
  setDarkMode: (darkMode: boolean) => void;
}) {
  return (
    <svg
      onClick={() => setDarkMode(false)}
      className="w-6 h-6 text-teal-300 cursor-pointer"
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
export default ThemeSwitcher;
