"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import React from "react";
import { persistStore } from "redux-persist";
import { store } from "../../redux/store";

function ReduxProvider({ children }: { children: React.ReactNode }) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>;
    </Provider>
  );
}

export default ReduxProvider;
