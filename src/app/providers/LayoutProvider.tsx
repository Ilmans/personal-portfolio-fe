"use client";
import { redirect, usePathname } from "next/navigation";
import React from "react";
import Header from "../../components/Header";
import { LoveIcon } from "../../components/Icon";
import Sidebar from "../../components/Dashboard/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function LayoutProvider({ children }) {
  

  // useEffect(() => {
  //   const currentTheme = localStorage.getItem("theme") || "dark";
  //   document.documentElement.classList.add(currentTheme);

  //   return () => {
  //     document.documentElement.classList.remove(currentTheme);
  //   };
  // }, []);

  return (
    <body className=" dark:noise-bg  dark:text-white from-zinc-50 to-zinc-100 bg-gradient-to-br  dark:from-zinc-900 dark:from-60% dark:to-zinc-950">
      <div className="px-6 pt-10 lg:pt-0 lg:px-32 ">
        <Header />
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        {children}

        <div className="my-12 text-center font-poppins">
          <p className="flex items-center gap-2 text-zinc-400">
            Build With{" "}
            <span>
              <LoveIcon className="w-4 h-4" />
            </span>
            By Ilman Sunanuddin
          </p>
        </div>
      </div>
    </body>
  );
}

export default LayoutProvider;
