import { put, takeEvery } from "redux-saga/effects";
import { toast } from "react-hot-toast";
import { toggleDiamondSearchSidebar } from "./dimaondSearch.reducer";
import { TOGGLE_DIAMOND_SEARCH_SIDEBAR } from "./dimaondSearch.type";   


function* handleDiamondSearchSidebarToggle() {
  try {
    debugger;
    yield put(toggleDiamondSearchSidebar());
  } catch (error) {
    toast.error(error?.data?.message || "Something went wrong");
  }
}

export default function* diamondSearchSaga() {
  yield takeEvery(TOGGLE_DIAMOND_SEARCH_SIDEBAR, handleDiamondSearchSidebarToggle);
}
