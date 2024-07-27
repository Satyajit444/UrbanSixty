import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/types";

interface ProductState {
  products: Product[];
}

// Define the initial state
const initialState: ProductState = {
  products: [],
};

// Create the slice
export const allProductReducer = createSlice({
  name: "allProduct",
  initialState,
  reducers: {
    set_all_product: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

// Export actions
export const { set_all_product } = allProductReducer.actions;

export default allProductReducer.reducer;
