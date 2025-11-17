import { put, takeEvery } from "redux-saga/effects";
import { toast } from "react-hot-toast";
import { fetchLoading, toggleDiamondSearchSidebar } from "./dimaondSearch.reducer";
import { TOGGLE_DIAMOND_SEARCH_SIDEBAR } from "./dimaondSearch.type";   
import { POST } from "@/services/methods";


function* handleDiamondSearchSidebarToggle() {
  try {
    yield put(toggleDiamondSearchSidebar());
  } catch (error) {
    toast.error(error?.data?.message || "Something went wrong");
  }
}

function* SearchDimaondData(){
  try {
    yield put(fetchLoading(true))

    const result=yield POST(``)

  }
  catch{

  }
  finally{

  }
}

export default function* diamondSearchSaga() {
  yield takeEvery(TOGGLE_DIAMOND_SEARCH_SIDEBAR, handleDiamondSearchSidebarToggle);
}
