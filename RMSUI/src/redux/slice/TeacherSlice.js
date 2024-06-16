import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: {
    },
    isFetching: false
};
const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {
        getall: (state) => {
            state.isFetching = true;
        },
        teacherSuccess(state, action) {
            // console.log(action.payload.data)
            state.data = action.payload.data
            state.isFetching = false
        },
        teacherFailed(state, action) {
            state.message = action.payload
            state.isFetching = false
        },
        reset(state) {
            Object.assign(state, initialState)
        }
    },
});
// Actions
export const teacherActions = teacherSlice.actions;
// Reducer
const teacherReducer = teacherSlice.reducer;
export { teacherReducer };