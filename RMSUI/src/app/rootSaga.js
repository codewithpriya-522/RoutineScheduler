import { all } from "redux-saga/effects";
import authSaga from "../redux/saga/AuthSaga";
import teacherSaga from "../redux/saga/TeacherSaga";
import studentSaga from "../redux/saga/StudentSaga";
import userSaga from "../redux/saga/UserSaga";


export function* rootSaga() {
    yield all([
       authSaga(),
       teacherSaga(),
       studentSaga(),
       userSaga()
    ])
}
export default rootSaga; 