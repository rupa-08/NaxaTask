import { takeLatest } from "redux-saga/effects";
import { handleGetService } from "./handlers/service";
import { GET_SERVICE } from "../service";

export function* watcherSaga() {
  yield takeLatest(GET_SERVICE, handleGetService);
}
