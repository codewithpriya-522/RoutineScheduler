import { all } from "redux-saga/effects";
import authSaga from "../redux/saga/AuthSaga";
import teacherSaga from "../redux/saga/TeacherSaga";


export function* rootSaga() {
    yield all([
       authSaga(),
       teacherSaga(),
    ])
}
export default rootSaga; 