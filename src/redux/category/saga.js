import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-hot-toast";
import { DELETE, FORM_DATA_POST, GET, POST, PUT } from "../../services/methods";
import {
  CREATE_SINGLE_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  GET_ALL_CATEGORY,
} from "./category.type";
import { fetchLoading, getAllCategories } from "./category.reducer";

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

function* getCategory() {
  try {
    const res = yield call(GET, "/category");
    yield put(getAllCategories(res.data));
  } catch (error) {
    console.log("getCAtegory  failed: ", error);
  }
}

function* editCategory(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(PUT, `/category/${req.id}`, req.payload);
    toast.success(res.data.message);
    yield getCategory();
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* deleteCategory(req) {
  try {
    const res = yield call(DELETE, `/category/${req.payload.id}`);
    toast.success(res.data.message);
    yield getCategory();
  } catch (error) {
    toast.error(error.data.message);
  }
}

function* eventSaga() {
  yield takeEvery(CREATE_SINGLE_CATEGORY, addCategory);
  yield takeEvery(GET_ALL_CATEGORY, getCategory);
  yield takeEvery(EDIT_CATEGORY, editCategory);
  yield takeEvery(DELETE_CATEGORY, deleteCategory);
}

export default eventSaga;
