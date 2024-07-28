import { configureStore } from "@reduxjs/toolkit";
import allProductReducer from "./product/product";
import allUserReducer from "./product/user";

export const store = configureStore({
  reducer: {
    allProductReducer,
    allUserReducer,
  },
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
