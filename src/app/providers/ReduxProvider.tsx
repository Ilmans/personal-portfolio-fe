"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import React, { useEffect, useState } from "react";
import { persistStore } from "redux-persist";
import { store } from "../../redux/store";

function ReduxProvider({ children }: { children: React.ReactNode }) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={true} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default ReduxProvider;
