"use client";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore } from "redux-persist";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [load, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (typeof window !== undefined) {
      const t = localStorage.getItem("theme") || "dark";
      setTheme(t);
      setLoading(false);
    }
  }, []);
  // const theme =
  //   typeof localStorage !== "undefined"
  //     ? localStorage.getItem("theme") || "dark"
  //     : "dark";

  const persistor = persistStore(store);
  return (
    <html data-color-mode="" className={`${theme} `}>
      <Provider store={store}>
        {load ? (
          <PersistGate persistor={persistor}>{children}</PersistGate>
        ) : (
          children
        )}
      </Provider>
    </html>
  );
}

export default ThemeProvider;
