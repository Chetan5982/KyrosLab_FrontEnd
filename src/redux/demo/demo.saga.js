const { PUT, GET, POST, DELETE } = require("@/services/methods");
const { getAllUsers, fetchLoading } = require("./demo.reducer");
import { call, put, takeEvery } from "redux-saga/effects";
import { EDIT_USER, GET_ALL_USER, ADD_USER } from "./demo.type";
import toast from "react-hot-toast";

function* updateUser(req) {
  try {
    yield put(fetchLoading(true));
    const { obj } = req.payload;
    const res = yield call(PUT, "/demo/User", obj);
    toast.success(res.data.message);
    yield GetAllusers();
  } catch (error) {
    toast.error(error.message);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* GetAllusers() {
  try {
    yield put(fetchLoading(true));
    const res = yield call(GET, "/demo/Users");
    yield put(getAllUsers(res.data.message));
  } catch (error) {
    toast.error(error.message);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* AddUser(req) {
  try {
    yield put(fetchLoading(true));
    const { obj } = req.payload;
    const res = yield call(POST, "/demo/User", obj);
    toast.success(res.data.message);
    yield GetAllusers();
  } catch (error) {
    toast.error(error.message);
  } finally {
    yield put(fetchLoading(false));
  }
}


function* DeleteUser(req) {
  try {
    yield put(fetchLoading(true));
    const { obj } = req.payload;
    const res = yield call(DELETE, "/demo/User", obj);
    toast.success(res.data.message);
    yield GetAllusers();
  } catch (error) {
    toast.error(error.message);
  } finally {
    yield put(fetchLoading(false));
  }
}


function* demoSaga() {
  yield takeEvery(ADD_USER, AddUser);
  yield takeEvery(GET_ALL_USER, GetAllusers);
  yield takeEvery(EDIT_USER, updateUser);
}

export default demoSaga;
