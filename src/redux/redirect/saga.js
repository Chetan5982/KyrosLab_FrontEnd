import { call, put, takeEvery } from "redux-saga/effects";
import { getRedirects } from "./redirect.reducer";
import {
  CREATE_REDIRECT,
  DELETE_REDIRECT,
  GET_REDIRECT,
  UPDATE_REDIRECT,
} from "./redirect.type";
import { DELETE, GET, POST, PUT } from "@/services/methods";
import { toast } from "react-hot-toast";

function* getRedirect() {
  try {
    const res = yield call(GET, "/redirect");
    yield put(getRedirects(res.data));
  } catch (error) {
    console.log("get all category failed: ", error);
  }
}

function* addRedirect(req) {
  try {
    //   yield put(fetchLoading(true));
    const res = yield call(POST, "/redirect", req.payload);
    toast.success(res.data.message);
    yield getRedirect();
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    //   yield put(fetchLoading(false));
  }
}

function* editRedirect(req) {
  try {
    //   yield put(fetchLoading(true));
    const res = yield call(PUT, `/redirect/${req.id}`, req.payload);
    toast.success(res.data.message);
    yield getRedirect();
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    //   yield put(fetchLoading(false));
  }
}

function* deleteRedirect(req) {
  try {
    const res = yield call(DELETE, `/redirect/${req.payload.id}`);
    toast.success(res?.data?.message);
    yield getRedirect();
  } catch (error) {
    toast.error(error?.data?.message);
  }
}

function* redirectSaga() {
  yield takeEvery(GET_REDIRECT, getRedirect);
  yield takeEvery(CREATE_REDIRECT, addRedirect);
  yield takeEvery(UPDATE_REDIRECT, editRedirect);
  yield takeEvery(DELETE_REDIRECT, deleteRedirect);
}

export default redirectSaga;
