import { call, put, takeLatest } from "redux-saga/effects";
import scheduleApi from "../../api/schedule/ScheduleApi";
import { scheduleActions } from "../slice/ScheduleSlice";
function* getall(action) {
    try {
        const response = yield call(scheduleApi.getAll, action.payload);
        yield put(scheduleActions.scheduleSuccess(response));
    } catch (error) {
        yield put(scheduleActions.scheduleFailed(error.message));
    }
}
function* generate(action) {
    try {
        const id=action.payload
        const response = yield call(scheduleApi.generate, id);
        yield put(scheduleActions.scheduleSuccess(response));
    } catch (error) {
        yield put(scheduleActions.scheduleFailed(error.message));
    }
}
function* save(action) {
    try {
        const response = yield call(scheduleApi.save, action.payload);
        yield put(scheduleActions.scheduleSuccess(response));
    } catch (error) {
        yield put(scheduleActions.scheduleFailed(error.message));
    }
}
export default function* scheduleSaga() {
    yield takeLatest(scheduleActions.getall.type, getall);
    yield takeLatest(scheduleActions.generate.type, generate);
    yield takeLatest(scheduleActions.save.type, save);
}