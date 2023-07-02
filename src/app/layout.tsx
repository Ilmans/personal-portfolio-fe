import "./globals.css";

import { Metadata } from "next";
import ThemeProvider from "./providers/ThemeProvider";
import LayoutProvider from "./providers/LayoutProvider";
import { Provider } from "react-redux";
import ReduxProvider from "./providers/ReduxProvider";

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
      <ReduxProvider>
        <LayoutProvider>{children}</LayoutProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}
