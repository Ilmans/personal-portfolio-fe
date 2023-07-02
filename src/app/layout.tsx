import "./globals.css";

import Header from "../components/Header";
import { Metadata } from "next";
import { LoveIcon } from "../components/Icon";
import ThemeProvider from "../ThemeProvider";
import { NextAuthProvider } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "About - Ilman Sunanuddin",
    template: "%s - Ilman Sunanuddin",
  },
  description:
    "Welcome to my personal website. Learn more about Ilman Sunanuddin and his work.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <NextAuthProvider>
        <body className=" dark:noise-bg  dark:text-white from-zinc-50 to-zinc-100 bg-gradient-to-br  dark:from-zinc-900 dark:from-60% dark:to-zinc-950">
          <div className="px-6 pt-10 lg:pt-0 lg:px-32 ">
            <Header />

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
      </NextAuthProvider>
    </ThemeProvider>
  );
}
