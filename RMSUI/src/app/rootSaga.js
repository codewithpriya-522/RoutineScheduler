import { all } from "redux-saga/effects";
import authSaga from "../redux/saga/AuthSaga";
import teacherSaga from "../redux/saga/TeacherSaga";
import studentSaga from "../redux/saga/StudentSaga";
import userSaga from "../redux/saga/UserSaga";
import departmentSaga from "../redux/saga/DepartmentSaga";
import batchSaga from "../redux/saga/BatchSaga";


export function* rootSaga() {
    yield all([
       authSaga(),
       teacherSaga(),
       studentSaga(),
       userSaga(),
       departmentSaga(),
       batchSaga()
    ])
}
export default rootSaga; 