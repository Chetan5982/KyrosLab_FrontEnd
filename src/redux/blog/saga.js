import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-hot-toast";
import { DELETE, FORM_DATA_POST, GET, POST, PUT } from "../../services/methods";
import {
  fetchLoading,
  fileUploadLoading,
  getAllBlogs,
  getAllCategory,
  storeBlogImage,
} from "./blog.reducer";
import {
  CREATE_BLOG,
  CREATE_CATEGORY,
  DELETE_BLOG,
  EDIT_BLOG,
  GET_ALL_BLOG,
  GET_CATEGORY,
  UPLOAD_BLOG_IMAGE,
  UPLOAD_BLOG_IMAGE_WITH_URL,
} from "./blog.type";

function* addBlog(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(POST, "/blog", req.payload);
    toast.success(res.message);
    yield getBlogs();
  } catch (error) {
    toast.error(error.message);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* addCategory(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(POST, "/category", req.payload);
    toast.success(res.data.message);
    yield getCategory();
  } catch (error) {
    toast.error(error.message);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* uploadBlogImage(req) {
  try {
    let blogData = new FormData();
    for (const file of req.files) {
      const myNewFile = new File(
        [file],
        `${Date.now()}`,
        { type: file.type }
      );
      blogData.append("file", myNewFile);
    }
    yield put(fileUploadLoading(true));
    const res = yield call(FORM_DATA_POST, "/blog/imageUpload", blogData);
    yield put(storeBlogImage(res.data.imageUrl));
  } catch (error) {
    if (error.message === "Request failed with status code 413") {
      toast.error("Please upload image less than 1mb.");
    }
  } finally {
    yield put(fileUploadLoading(false));
  }
}

function* uploadBlogImageWithURL(req) {
  try {
    let blogData = new FormData();
    const myNewFile = new File(
      [req.file],
      `${Date.now()}`,
      { type: req.file.type }
    );
    blogData.append("file", myNewFile);
    yield put(fileUploadLoading(true));
    const res = yield call(FORM_DATA_POST, "/blog/imageUpload", blogData);
    req.getImageUrl(res.data.imageUrl);
    yield put(storeBlogImage(res.data.imageUrl));
  } catch (error) {
    if (error.message === "Request failed with status code 413") {
      toast.error("Please upload image less than 1mb.");
    }
    // toast.error(error.message);
  } finally {
    yield put(fileUploadLoading(false));
  }
}

function* getCategory() {
  try {
    const res = yield call(GET, "/category");
    yield put(getAllCategory(res.data));
  } catch (error) {
    console.log("getCAtegory  failed: ", error);
  }
}

function* getBlogs() {
  try {
    const res = yield call(GET, "/blog");
    yield put(getAllBlogs(res.data));
  } catch (error) {
    console.log("getBlogs failed: ", error);
  }
}

function* editBlog(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(PUT, `/blog/${req.id}`, req.payload);
    yield getBlogs();
    toast.success(res.data.message);
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    yield put(fetchLoading(false));
  }
}
function* deleteBlogs(req) {
  try {
    const res = yield call(DELETE, `/blog/${req.payload.id}`);
    yield getBlogs();
    toast.success(res.data.message);
    yield getBlogs();
  } catch (error) {
    toast.error(error.data.message);
  }
}

function* blogSaga() {
  yield takeEvery(CREATE_BLOG, addBlog);
  yield takeEvery(GET_ALL_BLOG, getBlogs);
  yield takeEvery(UPLOAD_BLOG_IMAGE, uploadBlogImage);
  yield takeEvery(UPLOAD_BLOG_IMAGE_WITH_URL, uploadBlogImageWithURL);
  yield takeEvery(EDIT_BLOG, editBlog);
  yield takeEvery(DELETE_BLOG, deleteBlogs);
  yield takeEvery(CREATE_CATEGORY, addCategory);
  yield takeEvery(GET_CATEGORY, getCategory);
}

export default blogSaga;
