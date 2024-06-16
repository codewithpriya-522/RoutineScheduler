import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../redux/slice/AuthSlice";
import { teacherReducer } from "../redux/slice/TeacherSlice";

const rootReducer = combineReducers({
 auth:authReducer,
 teacher:teacherReducer,
});

export default rootReducer;
