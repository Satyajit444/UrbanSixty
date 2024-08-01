import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToastState {
  toastType: string;
  message: string;
  isOpen: boolean;
}

export interface IPayload {
  toastType: string;
  message: string;
}
const initialState: ToastState = {
  toastType: "info",
  message: "",
  isOpen: false,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, { payload }: PayloadAction<IPayload>) => {
      state.toastType = payload.toastType;
      state.message = payload.message;
      state.isOpen = true;
    },
    hideToast: (state) => {
      state.isOpen = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
