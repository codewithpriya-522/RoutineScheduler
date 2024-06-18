import { call, put, takeLatest } from "redux-saga/effects";
import userApi from "../../api/user/UserApi";
import { userActions } from "../slice/UserSlice";
function* getall(action) {
    try {
        const response = yield call(userApi.getAll, action.payload);
        yield put(userActions.userSuccess(response));
    } catch (error) {
        yield put(userActions.userFailed(error.message));
    }
}
function* singleGet(action){
    try{
        const id=action.payload
        const response  =yield call(userApi.singleGet,id);
        yield put(userActions.userSuccess(response))
    }
    catch(error){
        yield put(userActions.userFailed(error.message))
    }
  }
export default function* userSaga() {
    yield takeLatest(userActions.getall.type, getall);
    yield takeLatest(userActions.singleGet.type, singleGet);
}