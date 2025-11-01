import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gallary: [],
  gallaryImage: [],
  isLoading: false,
  isFileUploadLoading: false,
};

export const gallarySlice = createSlice({
  name: "gallary",
  initialState,
  reducers: {
    getAllGallary: (state, action) => {
      state.gallary = action.payload;
    },
    storeGallaryImage: (state, action) => {
      state.gallaryImage = action.payload;
    },
    clearGallaryImage: (state) => {
      state.gallaryImage = "";
    },
    deleteGallaryImage: (state) => {
      state.gallaryImage = "";
    },
    fetchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    fileUploadLoading: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllGallary,
  fetchLoading,
  fileUploadLoading,
  storeGallaryImage,
  clearGallaryImage,
  deleteGallaryImage,
} = gallarySlice.actions;

export default gallarySlice.reducer;
