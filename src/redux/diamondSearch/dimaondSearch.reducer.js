
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDiamondSearchSidebarOpen: false,
  isLoading:false,
  diamondData:[]
};

export const diamondSearchSlice = createSlice({
  name: "diamond_Search",
  initialState,
  reducers: {
   toggleDiamondSearchSidebar: (state) => {
      state.isDiamondSearchSidebarOpen = !state.isDiamondSearchSidebarOpen;
    },
    GetSearchDiamondResult:(state,action) =>{
      state.diamondData=action.payload;
    },
    fetchLoading:(state,action)=>{
      state.isLoading=action.payload;
    }
  },
});

export const { toggleDiamondSearchSidebar,GetSearchDiamondResult,fetchLoading } = diamondSearchSlice.actions;

export default diamondSearchSlice.reducer;

