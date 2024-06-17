import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../redux/slice/AuthSlice";
import { teacherReducer } from "../redux/slice/TeacherSlice";
import { studentReducer } from "../redux/slice/StudentSlice";
import { userReducer } from "../redux/slice/UserSlice";

const rootReducer = combineReducers({
 auth:authReducer,
 teacher:teacherReducer,
 student:studentReducer,
 user:userReducer
});

export default rootReducer;
