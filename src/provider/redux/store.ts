import { configureStore } from "@reduxjs/toolkit";
import allProductReducer from "./product/product";

export const store = configureStore({
  reducer: {
    allProductReducer,
  },
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
