import { call, put, takeLatest } from "redux-saga/effects";
import teacherApi from "../../api/teacher/Teacher";
import { teacherActions } from "../slice/TeacherSlice";
import { toast } from "react-toastify";
function* getall(action) {
    try {
        const response = yield call(teacherApi.getAll, action.payload);
        yield put(teacherActions.teacherSuccess(response));
    } catch (error) {
        yield put(teacherActions.teacherFailed(error.message));
    }
}
function* singleGet(action){
    try{
        const id=action.payload
        const response  =yield call(teacherApi.singleGet,id);
        yield put(teacherActions.teacherSuccess(response))
    }
    catch(error){
        yield put(teacherActions.teacherFailed(error.message))
    }
  }
  function* update(action) {
    try {
      const params = action.payload;
      // console.log(params)
      const response = yield call(teacherApi.update, params);
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
        yield put(teacherActions.teacherSuccess(({data:response?.data})));
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
        yield put(teacherActions.teacherSuccess((response)));
      }
     
    } catch (error) {
      yield put(teacherActions.teacherFailed(error.message));
    }
  }
export default function* teacherSaga() {
    yield takeLatest(teacherActions.getall.type, getall);
    yield takeLatest(teacherActions.singleGet.type, singleGet);
    yield takeLatest(teacherActions.update.type, update);
}