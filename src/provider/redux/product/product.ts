import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const allProductReducer = createSlice({
  name: "allProduct",
  initialState,
  reducers: {
    set_all_product: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { set_all_product } = allProductReducer.actions
