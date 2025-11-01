import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  redirectData: [],
};

export const redirectSlice = createSlice({
  name: "redirect",
  initialState,
  reducers: {
    getRedirects: (state, action) => {
      state.redirectData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getRedirects } = redirectSlice.actions;

export default redirectSlice.reducer;
