import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../redux/slice/AuthSlice";
import { teacherReducer } from "../redux/slice/TeacherSlice";
import { studentReducer } from "../redux/slice/StudentSlice";
import { userReducer } from "../redux/slice/UserSlice";
import { batchReducer } from "../redux/slice/BatchSlice";
import { departmentReducer } from "../redux/slice/DepartmentSlice";

const rootReducer = combineReducers({
 auth:authReducer,
 teacher:teacherReducer,
 student:studentReducer,
 user:userReducer,
 batch:batchReducer,
 department:departmentReducer
});

export default rootReducer;
