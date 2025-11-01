import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  isLoading: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getAllCategories: (state, action) => {
      state.categories = action.payload;
    },
    fetchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllCategories, fetchLoading } = categorySlice.actions;

export default categorySlice.reducer;
