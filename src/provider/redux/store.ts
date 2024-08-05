import { configureStore } from "@reduxjs/toolkit";
import allProductReducer from "./product/product";
import allUserReducer from "./user/user";
import visibilityReducer from "./others/toggleVisibility";
import  toastSlice  from "./others/ToastSlice";

const store = configureStore({
  reducer: {
    all_products: allProductReducer,
    all_users: allUserReducer,
    visibility: visibilityReducer,
    toast: toastSlice,

  },
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
