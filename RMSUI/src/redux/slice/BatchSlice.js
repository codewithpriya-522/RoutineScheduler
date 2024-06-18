import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: {
    },
    isFetching: false
};
const batchSlice = createSlice({
    name: "batch",
    initialState,
    reducers: {
        getall: (state) => {
            state.isFetching = true;
        },
        singleGet: (state) => {
            state.isFetching = true;
        },
        batchSuccess(state, action) {
            // console.log(action.payload.data)
            state.data = action.payload.data
            state.isFetching = false
        },
        batchFailed(state, action) {
            state.message = action.payload
            state.isFetching = false
        },
        reset(state) {
            Object.assign(state, initialState)
        }
    },
});
// Actions
export const batchActions = batchSlice.actions;
// Reducer
const batchReducer = batchSlice.reducer;
export { batchReducer };