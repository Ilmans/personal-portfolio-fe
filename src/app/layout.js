"use client";
import Header from "@/components/Header";
import "./globals.css";
import { useEffect, useState } from "react";
import ProfileCard from "@/components/ProfileCard";

export default function RootLayout({ children }) {
  const darkOrNo = localStorage.getItem("theme");
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const [darkMode, setDarkMode] = useState(darkOrNo === "dark");
  useEffect(() => {
    const themeClass = darkMode ? "dark" : "light";
    localStorage.setItem("theme", themeClass);
    document.documentElement.classList.add(themeClass);
    return () => {
      document.documentElement.classList.remove(themeClass);
    };
  }, [darkMode]);
  return (
    <html className={darkMode ? "dark" : ""}>
      <body className=" dark:noise-bg  dark:text-white from-zinc-50 to-zinc-100 bg-gradient-to-br  dark:from-zinc-900 dark:from-60% dark:to-zinc-950">
        <div className="px-6 pt-10 lg:px-32 ">
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            mobileMenuShow={mobileMenuShow}
            setMobileMenuShow={setMobileMenuShow}
          />
          <main className="flex justify-center gap-4 mt-4">
            <ProfileCard className="hidden lg:block" />
            {children}
          </main>
          <div className="my-6 text-center font-poppins">
            <p className="text-zinc-400">
              @2023 Ilman Sunanuddin. All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
