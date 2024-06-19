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

export default function* scheduleSaga() {
    yield takeLatest(scheduleActions.getall.type, getall);
}