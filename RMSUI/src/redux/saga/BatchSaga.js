import { call, put, takeLatest } from "redux-saga/effects";
import batchApi from "../../api/batch/BatchApi";
import { batchActions } from "../slice/BatchSlice";
function* getall(action) {
    try {
        const response = yield call(batchApi.getAll, action.payload);
        yield put(batchActions.batchSuccess(response));
    } catch (error) {
        yield put(batchActions.batchFailed(error.message));
    }
}
function* singleGet(action){
    try{
        const id=action.payload
        const response  =yield call(batchApi.singleGet,id);
        yield put(batchActions.batchSuccess(response))
    }
    catch(error){
        yield put(batchActions.batchFailed(error.message))
    }
  }
export default function* batchSaga() {
    yield takeLatest(batchActions.getall.type, getall);
    yield takeLatest(batchActions.singleGet.type, singleGet);
}