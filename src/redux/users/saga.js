import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-hot-toast";
import { DELETE, GET, POST, PUT } from "../../services/methods";

import {
  CREATE_USERS,
  DELETE_USERS,
  EDIT_USERS,
  GET_ALL_USERS,
} from "./users.type";
import { fetchLoading, getAllUsers } from "./users.reducer";

function* addUser(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(POST, "/user", req.payload);
    toast.success(res.message);
    yield getUsers();
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* getUsers() {
  try {
    const res = yield call(GET, "/user");
    yield put(getAllUsers(res.data));
  } catch (error) {
    console.log("get user failed: ", error);
  }
}

function* deleteUser(req) {
  try {
    const res = yield call(DELETE, `/user/${req.payload.id}`);
    toast.success(res.data.message);
    yield getUsers();
  } catch (error) {
    toast.error(error.data.message);
  }
}
function* editUser(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(PUT, `/user/${req.id}`, req.payload);
    toast.success(res.message);
    yield getUsers();
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* usersSaga() {
  yield takeEvery(CREATE_USERS, addUser);
  yield takeEvery(GET_ALL_USERS, getUsers);
  yield takeEvery(DELETE_USERS, deleteUser);
  yield takeEvery(EDIT_USERS, editUser);
}

export default usersSaga;
