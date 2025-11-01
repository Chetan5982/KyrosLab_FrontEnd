import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  category: [],
  blogsImage: "",
  isLoading: false,
  isFileUploadLoading: false,
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    getAllBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    getAllCategory: (state, action) => {
      state.category = action.payload;
    },
    storeBlogImage: (state, action) => {
      state.blogsImage = action.payload;
    },
    clearBlogImage: (state) => {
      state.blogsImage = "";
    },
    deleteBlogImage: (state) => {
      state.blogsImage = "";
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
  getAllBlogs,
  getAllCategory,
  fetchLoading,
  fileUploadLoading,
  storeBlogImage,
  clearBlogImage,
  deleteBlogImage,
} = blogSlice.actions;

export default blogSlice.reducer;
