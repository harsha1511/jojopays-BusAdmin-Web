import { createSlice } from "@reduxjs/toolkit";

interface InitialProps {
    isOpen: boolean
}
const initialState:InitialProps = {
    isOpen: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
           return { ...state, isOpen: true };
        },
        closeModal: (state, action) => {
           return { ...state, isOpen: false };
        
        },
    },
});

export const {openModal, closeModal} = modalSlice.actions;

export default modalSlice.reducer;