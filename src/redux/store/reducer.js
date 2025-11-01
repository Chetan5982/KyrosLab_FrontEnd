import { combineReducers } from "redux";

// reducer import
import authReducer from "../auth/auth.reducer";
import blogSlice from "../blog/blog.reducer";
import eventSlice from "../event/event.reducer";
import gallarySlice from "../gallary/gallary.reducer";
import usersSlice from "../users/users.reducer";
import homeBannerSlice from "../homeBanner/homeBanner.reducer";
import redirectSlice from "../redirect/redirect.reducer";
import categorySlice from "../category/category.reducer";
import demoSlice from "../demo/demo.reducer";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  auth: authReducer,
  blogs: blogSlice,
  event: eventSlice,
  gallary: gallarySlice,
  users: usersSlice,
  homeBanner: homeBannerSlice,
  redirect: redirectSlice,
  category: categorySlice,
  demo: demoSlice,
});

export default reducer;
