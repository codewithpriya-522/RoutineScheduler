import { call, put, takeLatest } from "redux-saga/effects";
import userApi from "../../api/user/UserApi";
import { userActions } from "../slice/UserSlice";
import { toast } from "react-toastify";
function* getall(action) {
    try {
        const response = yield call(userApi.getAll, action.payload);
        yield put(userActions.userSuccess(response));
    } catch (error) {
        yield put(userActions.userFailed(error.message));
    }
}
function* singleGet(action){
    try{
        const id=action.payload
        const response  =yield call(userApi.singleGet,id);
        yield put(userActions.userSuccess(response))
    }
    catch(error){
        yield put(userActions.userFailed(error.message))
    }
  }
  function* update(action) {
    try {
      const params = action.payload;
      // console.log(params)
      const response = yield call(userApi.update, params);
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
        yield put(userActions.userSuccess(({data:response?.data})));
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
        yield put(userActions.userSuccess((response)));
      }
     
    } catch (error) {
      yield put(userActions.userFailed(error.message));
    }
  }
export default function* userSaga() {
    yield takeLatest(userActions.getall.type, getall);
    yield takeLatest(userActions.singleGet.type, singleGet);
    yield takeLatest(userActions.update.type, update);
}