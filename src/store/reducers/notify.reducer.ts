// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface InitialProps {
//     failure: string;
//     success: string;
// }
// const initialState:InitialProps = {
//    failure: "",
//    success: "",
// }

// const modalSlice = createSlice({
//     name: 'notify',
//     initialState,
//     reducers: {
//         SET_FAILURE: (notify, action:PayloadAction<string>) => {
//             return {...notify, failuer: action.payload}
//         },
//         REMOVE_FAILURE: (notify, action) => {
//             return { ...notify, failure: "" };
//         },
//         SET_SUCCESS: (notify, action) => {
//             return { ...notify, success: action.payload };
//         },
//         REMOVE_SUCCESS: (notify, action) => {
//             return { ...notify, success: "" };
//         },
//     },
// });

// export const {SET_FAILURE,REMOVE_FAILURE, SET_SUCCESS, REMOVE_SUCCESS } = 
// modalSlice.actions;

// export default modalSlice.reducer;