import { call, put, takeLatest } from "redux-saga/effects";
import departmentApi from "../../api/department/DepartmentApi";
import { departmentActions } from "../slice/DepartmentSlice";
function* getall(action) {
    try {
        const response = yield call(departmentApi.getAll, action.payload);
        yield put(departmentActions.departmentSuccess(response));
    } catch (error) {
        yield put(departmentActions.departmentFailed(error.message));
    }
}
function* singleGet(action){
    try{
        const id=action.payload
        const response  =yield call(departmentApi.singleGet,id);
        yield put(departmentActions.departmentSuccess(response))
    }
    catch(error){
        yield put(departmentActions.departmentFailed(error.message))
    }
  }
export default function* departmentSaga() {
    yield takeLatest(departmentActions.getall.type, getall);
    yield takeLatest(departmentActions.singleGet.type, singleGet);
}