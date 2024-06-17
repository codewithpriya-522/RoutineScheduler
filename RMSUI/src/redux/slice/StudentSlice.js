import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: {
    },
    isFetching: false
};
const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        getall: (state) => {
            state.isFetching = true;
        },
        studentSuccess(state, action) {
            // console.log(action.payload.data)
            state.data = action.payload.data
            state.isFetching = false
        },
        studentFailed(state, action) {
            state.message = action.payload
            state.isFetching = false
        },
        reset(state) {
            Object.assign(state, initialState)
        }
    },
});
// Actions
export const studentActions = studentSlice.actions;
// Reducer
const studentReducer = studentSlice.reducer;
export { studentReducer };