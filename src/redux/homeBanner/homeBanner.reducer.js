import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeBanners: [],
  popups:[],
  bannerImages: "",
  isLoading: false,
  isFileUploadLoading: false,
};

export const homeBannerSlice = createSlice({
  name: "homeBanner",
  initialState,
  reducers: {
    getAllBanners: (state, action) => {
      state.homeBanners = action.payload;
    },
    getPopups: (state, action) => {
      state.popups = action.payload;
    },
    storeBannerImages: (state, action) => {
      state.bannerImages = action.payload;
    },
    clearBannerImages: (state) => {
      state.bannerImages = "";
    },
    deleteBannerImage: (state) => {
      state.bannerImages = "";
    },
    fetchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    fileUploadLoading: (state, action) => {
      state.isFileUploadLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllBanners,
  storeBannerImages,
  clearBannerImages,
  deleteBannerImage,
  fetchLoading,
  fileUploadLoading,
  getPopups
} = homeBannerSlice.actions;

export default homeBannerSlice.reducer;
