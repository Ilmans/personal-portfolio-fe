"use client";
import React, { useEffect, useState } from "react";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof window !== undefined) {
      const t = localStorage.getItem("theme") || "dark";
      setTheme(t);
    }
  }, []);
  return (
    <html data-color-mode="" className={`${theme} `}>
      {children}
    </html>
  );
}

export default ThemeProvider;
