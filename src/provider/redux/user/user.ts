import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/types";

interface UserState {
  users: User[];
}

// Define the initial state
const initialState: UserState = {
  users: [],
};

// Create the slice
export const allUserReducer = createSlice({
  name: "allUser",
  initialState,
  reducers: {
    set_all_users: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

// Export actions
export const { set_all_users } = allUserReducer.actions;

export default allUserReducer.reducer;
