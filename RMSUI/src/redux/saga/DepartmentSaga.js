import { call, put, takeLatest } from "redux-saga/effects";
import departmentApi from "../../api/department/DepartmentApi";
import { departmentActions } from "../slice/DepartmentSlice";
import { toast } from "react-toastify";
function* getall(action) {
    try {
        const response = yield call(departmentApi.getAll, action.payload);
        yield put(departmentActions.departmentSuccess(response));
    } catch (error) {
        yield put(departmentActions.departmentFailed(error.message));
    }
}
function* singleGet(action){
    try{
        const id=action.payload
        const response  =yield call(departmentApi.singleGet,id);
        yield put(departmentActions.departmentSuccess(response))
    }
    catch(error){
        yield put(departmentActions.departmentFailed(error.message))
    }
  }
  function* update(action) {
    try {
      const params = action.payload;
      // console.log(params)
      const response = yield call(departmentApi.update, params);
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
        yield put(departmentActions.departmentSuccess(({data:response?.data})));
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
        yield put(departmentActions.departmentSuccess((response)));
      }
     
    } catch (error) {
      yield put(departmentActions.departmentFailed(error.message));
    }
  }
export default function* departmentSaga() {
    yield takeLatest(departmentActions.getall.type, getall);
    yield takeLatest(departmentActions.singleGet.type, singleGet);
    yield takeLatest(departmentActions.update.type, update);
}