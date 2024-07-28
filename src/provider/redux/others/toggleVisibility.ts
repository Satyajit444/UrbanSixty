import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VisibilityState {
  isOpen: boolean;
}

const initialState: VisibilityState = {
  isOpen: false,
};

const visibilitySlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    show(state) {
      state.isOpen = true;
    },
    hide(state) {
      state.isOpen = false;
    },
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { show, hide, toggle } = visibilitySlice.actions;
export default visibilitySlice.reducer;
