"use client";
import React from "react";

function ThemeProvider({ children }) {
  const theme = localStorage.getItem("theme") || "dark";

  return <html className={`${theme} `}>{children}</html>;
}

export default ThemeProvider;
