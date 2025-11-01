import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
};

export const demoSlice = createSlice({
  name: "users_new",
  initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload[0];
    },
    fetchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getAllUsers, fetchLoading } = demoSlice.actions;

export default demoSlice.reducer;
