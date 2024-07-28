import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VisibilityState {
  [key: string]: boolean;
}

const initialState: VisibilityState = {};

const visibilitySlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    show(state, action: PayloadAction<string>) {
      state[action.payload] = true;
    },
    hide(state, action: PayloadAction<string>) {
      state[action.payload] = false;
    },
    toggle(state, action: PayloadAction<string>) {
      state[action.payload] = !state[action.payload];
    },
  },
});

export const { show, hide, toggle } = visibilitySlice.actions;
export default visibilitySlice.reducer;
