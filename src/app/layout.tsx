import "./globals.css";

import Header from "../components/Header";
import { Metadata } from "next";
import { LoveIcon } from "../components/Icon";
import ThemeProvider from "./providers/ThemeProvider";
import { NextAuthProvider } from "./providers/providers";
import LayoutProvider from "./providers/LayoutProvider";

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
        <LayoutProvider>{children}</LayoutProvider>
      </NextAuthProvider>
    </ThemeProvider>
  );
}
