import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: {
    },
    isFetching: false
};
const scheduleSlice = createSlice({
    name: "schedule",
    initialState,
    reducers: {
        getall: (state) => {
            state.isFetching = true;
        },
        generate: (state) => {
            state.isFetching = true;
        },
        singleGet: (state) => {
            state.isFetching = true;
        },
        update: (state) => {
            state.isFetching = true;
        },
        save: (state) => {
            state.isFetching = true;
        },
        scheduleSuccess(state, action) {
            // console.log(action.payload.data)
            state.data = action.payload.data
            state.isFetching = false
        },
        scheduleFailed(state, action) {
            state.message = action.payload
            state.isFetching = false
        },
        reset(state) {
            Object.assign(state, initialState)
        }
    },
});
// Actions
export const scheduleActions = scheduleSlice.actions;
// Reducer
const scheduleReducer = scheduleSlice.reducer;
export { scheduleReducer };