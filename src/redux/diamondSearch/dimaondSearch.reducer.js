
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDiamondSearchSidebarOpen: false,
};

export const diamondSearchSlice = createSlice({
  name: "diamond_Search",
  initialState,
  reducers: {
   toggleDiamondSearchSidebar: (state) => {
      state.isDiamondSearchSidebarOpen = !state.isDiamondSearchSidebarOpen;
    },
  },
});

export const { toggleDiamondSearchSidebar } = diamondSearchSlice.actions;

export default diamondSearchSlice.reducer;

