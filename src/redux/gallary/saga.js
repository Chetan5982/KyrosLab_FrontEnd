import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-hot-toast";
import { DELETE, FORM_DATA_POST, GET, POST, PUT } from "../../services/methods";
import {
  fetchLoading,
  fileUploadLoading,
  getAllGallary,
  storeGallaryImage,
} from "./gallary.reducer";
import {
  CREATE_GALLARY,
  DELETE_GALLARY,
  EDIT_GALLARY,
  GET_ALL_GALLARY,
  UPLOAD_GALLARY_IMAGE,
} from "./gallary.type";

function* addGallary(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(POST, "/gallery", req.payload);
    toast.success(res.data.message);
    yield getGallary();
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* uploadGallaryImage(req) {
  try {
    yield put(fileUploadLoading({ key: req.key, value: true }));
    const data = Promise.all(
      [...req.file].map(async (image) => {
        let blogData = new FormData();
        blogData.append("file", image);
        const res = await FORM_DATA_POST("/blog/imageUpload", blogData);
        return res;
      })
    );
    const resData = yield data;
    const imageArray = resData.map((item) => item.data.imageUrl);
    req.getImageUrl(imageArray);
    yield put(storeGallaryImage(imageArray));
  } catch (error) {
    if (error.message === "Request failed with status code 413") {
      toast.error("Please upload image less than 1mb.");
    }
  } finally {
    yield put(fileUploadLoading({ key: req.key, value: false }));
  }
}

function* getGallary() {
  try {
    const res = yield call(GET, "/gallery");
    yield put(getAllGallary(res.data));
  } catch (error) {
    console.log("getBlogs failed: ", error);
  }
}

function* editGallary(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(PUT, `/gallery/${req.id}`, req.payload);
    yield getGallary();
    toast.success(res.data.message);
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    yield put(fetchLoading(false));
  }
}
function* deleteGellary(req) {
  try {
    const res = yield call(DELETE, `/gallery/${req.payload.id}`);
    yield getGallary();
    toast.success(res.data.message);
  } catch (error) {
    toast.error(error.data.message);
  }
}

function* gallarySaga() {
  yield takeEvery(CREATE_GALLARY, addGallary);
  yield takeEvery(GET_ALL_GALLARY, getGallary);
  yield takeEvery(UPLOAD_GALLARY_IMAGE, uploadGallaryImage);
  yield takeEvery(EDIT_GALLARY, editGallary);
  yield takeEvery(DELETE_GALLARY, deleteGellary);
}

export default gallarySaga;
