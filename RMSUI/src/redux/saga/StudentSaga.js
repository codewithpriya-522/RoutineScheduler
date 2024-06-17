import { call, put, takeLatest } from "redux-saga/effects";
import studentApi from "../../api/student/StudentApi";
import { studentActions } from "../slice/StudentSlice";
function* getall(action) {
    try {
        const response = yield call(studentApi.getAll, action.payload);
        yield put(studentActions.studentSuccess(response));
    } catch (error) {
        yield put(studentActions.studentFailed(error.message));
    }
}

export default function* studentSaga() {
    yield takeLatest(studentActions.getall.type, getall);
}