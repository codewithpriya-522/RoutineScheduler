import { call, put, takeLatest } from "redux-saga/effects";
import studentApi from "../../api/student/StudentApi";
import { studentActions } from "../slice/StudentSlice";
import { toast } from "react-toastify";
function* getall(action) {
  try {
    const response = yield call(studentApi.getAll, action.payload);
    yield put(studentActions.studentSuccess(response));
  } catch (error) {
    yield put(studentActions.studentFailed(error.message));
  }
}
function* singleGet(action) {
  try {
    const id = action.payload
    const response = yield call(studentApi.singleGet, id);
    yield put(studentActions.studentSuccess(response))
  }
  catch (error) {
    yield put(studentActions.studentFailed(error.message))
  }
}
function* update(action) {
  try {
    const params = action.payload;
    // console.log(params)
    const response = yield call(studentApi.update, params);
    console.log('response:',response)
    if(response?.status===200&&response?.data?.status){
      toast.success(response?.data?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      yield put(studentActions.studentSuccess(({data:response?.data})));
    }
    else{
      toast.error(response?.data?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      yield put(studentActions.studentSuccess((response)));
    }
   
  } catch (error) {
    yield put(studentActions.studentFailed(error.message));
  }
}

export default function* studentSaga() {
  yield takeLatest(studentActions.getall.type, getall);
  yield takeLatest(studentActions.singleGet.type, singleGet);
  yield takeLatest(studentActions.update.type, update);
}