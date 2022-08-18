import { call, put } from "redux-saga/effects";
import { setService } from "../../service";
import { requestGetService } from "../request/service";

export function* handleGetService(action) {
  try {
    const response = yield call(requestGetService);
    const { data } = response;
    yield put(setService(data));
  } catch (error) {
    console.log(error);
  }
}
