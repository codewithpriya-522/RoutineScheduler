import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: {
    },
    isFetching: false
};
const departmentSlice = createSlice({
    name: "department",
    initialState,
    reducers: {
        getall: (state) => {
            state.isFetching = true;
        },
        singleGet: (state) => {
            state.isFetching = true;
        },
        departmentSuccess(state, action) {
            // console.log(action.payload.data)
            state.data = action.payload.data
            state.isFetching = false
        },
        departmentFailed(state, action) {
            state.message = action.payload
            state.isFetching = false
        },
        reset(state) {
            Object.assign(state, initialState)
        }
    },
});
// Actions
export const departmentActions = departmentSlice.actions;
// Reducer
const departmentReducer = departmentSlice.reducer;
export { departmentReducer };