import { call, put, takeLatest } from "redux-saga/effects";
import teacherApi from "../../api/teacher/Teacher";
import { teacherActions } from "../slice/TeacherSlice";
function* getall(action) {
    try {
        const response = yield call(teacherApi.getAll, action.payload);
        yield put(teacherActions.teacherSuccess(response));
    } catch (error) {
        yield put(teacherActions.teacherFailed(error.message));
    }
}

export default function* teacherSaga() {
    yield takeLatest(teacherActions.getall.type, getall);
}