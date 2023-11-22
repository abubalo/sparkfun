import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

export const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in non-production environments
  });

  return store;
};

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
