"use client";
import React from "react";

function ThemeProvider({ children }) {
  const theme = localStorage.getItem("theme") || "dark";

  return (
    <html data-color-mode="dark" className={`${theme} `}>
      {children}
    </html>
  );
}

export default ThemeProvider;
