import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/saga";
import eventSaga from "./event/saga";
import blogSaga from "./blog/saga";
import gallarySaga from "./gallary/saga";
import usersSaga from "./users/saga";
import homeBannerSaga from "./homeBanner/saga";
import redirectSaga from "./redirect/saga";
import categorySaga from "./category/saga";
import demoSaga from "./demo/demo.saga";

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(eventSaga),
    fork(blogSaga),
    fork(gallarySaga),
    fork(usersSaga),
    fork(homeBannerSaga),
    fork(redirectSaga),
    fork(categorySaga),
    fork(demoSaga),
  ]);
}
