import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-hot-toast";
import { DELETE, FORM_DATA_POST, GET, POST, PUT } from "../../services/methods";

import {
  CREATE_HOME_BANNER,
  CREATE_POP_UP,
  DELETE_HOME_BANNER,
  DELETE_POP_UP,
  EDIT_HOME_BANNER,
  GET_ALL_HOME_BANNER,
  GET_POP_UP,
  UPLOAD_HOME_BANNER_IMAGE,
} from "./homeBanner.type";
import {
  fetchLoading,
  fileUploadLoading,
  getAllBanners,
  getPopups,
  storeBannerImages,
} from "./homeBanner.reducer";

function* addHomeBanner(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(POST, "/homeBanner", req.payload);
    toast.success(res.data.message);
    yield getHomeBanners();
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* addPopup(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(POST, "/popup", req.payload);
    toast.success(res.data.message);
    yield getPopup();
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* uploadHomeBannerImage(req) {
  try {
    let blogData = new FormData();
    blogData.append("file", req.file);
    yield put(fileUploadLoading(true));
    const res = yield call(FORM_DATA_POST, "/blog/imageUpload", blogData);
    req.getImageUrl(res.data.imageUrl);
    yield put(storeGallaryImage(res.data.imageUrl));
  } catch (error) {
    console.log("error", error);
    if (error.message === "Request failed with status code 413") {
      toast.error("Please upload image less than 1mb.");
    }
    // toast.error(error.message);
  } finally {
    yield put(fileUploadLoading(false));
  }
}

function* getHomeBanners() {
  try {
    const res = yield call(GET, "/homeBanner");
    yield put(getAllBanners(res.data));
  } catch (error) {
    console.log("get all category failed: ", error);
  }
}

function* getPopup() {
  try {
    const res = yield call(GET, "/popup");
    yield put(getPopups(res.data));
  } catch (error) {
    console.log("get all category failed: ", error);
  }
}

function* deleteHomeBanner(req) {
  try {
    const res = yield call(DELETE, `/homeBanner/${req.payload.id}`);
    toast.success(res.data.message);
    yield getHomeBanners();
  } catch (error) {
    toast.error(error.data.message);
  }
}

function* deletePopup(req) {
  try {
    const res = yield call(DELETE, `/popup/${req.payload.id}`);
    toast.success(res.data.message);
    yield getPopup();
  } catch (error) {
    toast.error(error.data.message);
  }
}
function* editHomeBanner(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(PUT, `/homeBanner/${req.id}`, req.payload);
    toast.success(res.data.message);
    yield getHomeBanners();
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* homeBannerSaga() {
  yield takeEvery(CREATE_HOME_BANNER, addHomeBanner);
  yield takeEvery(CREATE_POP_UP, addPopup);

  yield takeEvery(GET_ALL_HOME_BANNER, getHomeBanners);
  yield takeEvery(GET_POP_UP, getPopup);

  yield takeEvery(UPLOAD_HOME_BANNER_IMAGE, uploadHomeBannerImage);
  yield takeEvery(DELETE_HOME_BANNER, deleteHomeBanner);
  yield takeEvery(DELETE_POP_UP, deletePopup);

  yield takeEvery(EDIT_HOME_BANNER, editHomeBanner);
}

export default homeBannerSaga;
