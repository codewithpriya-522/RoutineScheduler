import { call, put, takeLatest } from "redux-saga/effects";
import batchApi from "../../api/batch/BatchApi";
import { batchActions } from "../slice/BatchSlice";
import { toast } from "react-toastify";
function* getall(action) {
    try {
        const response = yield call(batchApi.getAll, action.payload);
        yield put(batchActions.batchSuccess(response));
    } catch (error) {
        yield put(batchActions.batchFailed(error.message));
    }
}
function* singleGet(action){
    try{
        const id=action.payload
        const response  =yield call(batchApi.singleGet,id);
        yield put(batchActions.batchSuccess(response))
    }
    catch(error){
        yield put(batchActions.batchFailed(error.message))
    }
  }
  function* update(action) {
    try {
      const params = action.payload;
      // console.log(params)
      const response = yield call(batchApi.update, params);
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
        yield put(batchActions.batchSuccess(({data:response?.data})));
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
        yield put(batchActions.batchSuccess((response)));
      }
     
    } catch (error) {
      yield put(batchActions.batchFailed(error.message));
    }
  }
export default function* batchSaga() {
    yield takeLatest(batchActions.getall.type, getall);
    yield takeLatest(batchActions.singleGet.type, singleGet);
    yield takeLatest(batchActions.update.type, update);
}