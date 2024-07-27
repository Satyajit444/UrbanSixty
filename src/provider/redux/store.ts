import { configureStore } from "@reduxjs/toolkit";
import { allProductReducer } from "./product/product";

export default configureStore({
  reducer: {
    allProductReducer: allProductReducer.reducer,
  },
});
