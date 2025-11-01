import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
};

export const usersSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
    fetchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllUsers, fetchLoading } = usersSlice.actions;

export default usersSlice.reducer;
