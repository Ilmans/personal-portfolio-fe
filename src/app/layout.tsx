import "./globals.css";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import { Metadata } from "next";

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
    <html className="">
      <body className=" dark:noise-bg  dark:text-white from-zinc-50 to-zinc-100 bg-gradient-to-br  dark:from-zinc-900 dark:from-60% dark:to-zinc-950">
        <div className="px-6 pt-10 lg:pt-0 lg:px-32 ">
          <Header />
          <main className="flex justify-center gap-4 mt-4">
            <ProfileCard className="hidden lg:w-2/7 lg:block" />
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
