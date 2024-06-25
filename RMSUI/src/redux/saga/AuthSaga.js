import { call, put, takeLatest } from "redux-saga/effects";
import authApi from "../../api/auth/Auth";
import { authActions } from "../slice/AuthSlice";
function* login(action) {
    try {
        const response = yield call(authApi.login, action.payload);
        yield put(authActions.authSuccess(response));
    } catch (error) {
        yield put(authActions.authFailed(error.message));
    }
}

function* refreshLogin(action) {
    try {
        const response = yield call(authApi.refreshlogin, action.payload);
        yield put(authActions.authSuccess(response));
    } catch (error) {
        yield put(authActions.authFailed(error.message));
    }
}
// function* registration(action) {
//     try {
//         const response = yield call(authApi.registration, action.payload);
//         yield put(authActions.authSuccess(response));
//     } catch (error) {
//         yield put(authActions.authFailed(error.message));
//     }
// }

export default function* authSaga() {
    yield takeLatest(authActions.login.type, login);
     yield takeLatest(authActions.refreshLogin.type,refreshLogin);
    // yield takeLatest(authActions.registration.type,registration);
}