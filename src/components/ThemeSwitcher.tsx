"use client";
import React, { useState } from "react";
// import { useTheme } from "next-themes";

function ThemeSwitcher() {
  //const { theme, setTheme } = useTheme();
  const currentTheme: string = localStorage.getItem("theme");
  const [theme, setTheme] = useState(currentTheme);
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.remove(theme);
      document.documentElement.classList.add(newTheme);
    }
  };
  return (
    <div className="flex items-center gap-4 p-2 transition-all border rounded-lg border-zinc-300 hover:border-gray-600">
      <div className="items-center hidden font-normal lg:flex">
        <span
          className={`align-middle ${theme === "dark" ? "text-teal-300" : ""}`}>
          Dark/
        </span>{" "}
        <span
          className={`align-middle ${theme === "dark" ? "" : "text-teal-300"}`}>
          Light
        </span>
      </div>
      {theme == "dark" ? (
        <MoonIcon handleThemeChange={handleThemeChange} />
      ) : (
        <SunIcon handleThemeChange={handleThemeChange} />
      )}
    </div>
  );
}
function SunIcon({ handleThemeChange }: { handleThemeChange: any }) {
  return (
    <svg
      onClick={() => handleThemeChange("dark")}
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
function MoonIcon({ handleThemeChange }: { handleThemeChange: any }) {
  return (
    <svg
      onClick={() => handleThemeChange("light")}
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
