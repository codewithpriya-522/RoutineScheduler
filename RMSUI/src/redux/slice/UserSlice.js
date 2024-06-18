import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: {
    },
    isFetching: false
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getall: (state) => {
            state.isFetching = true;
        },
        singleGet: (state) => {
            state.isFetching = true;
        },
        userSuccess(state, action) {
            // console.log(action.payload.data)
            state.data = action.payload.data
            state.isFetching = false
        },
        userFailed(state, action) {
            state.message = action.payload
            state.isFetching = false
        },
        reset(state) {
            Object.assign(state, initialState)
        }
    },
});
// Actions
export const userActions = userSlice.actions;
// Reducer
const userReducer = userSlice.reducer;
export { userReducer };