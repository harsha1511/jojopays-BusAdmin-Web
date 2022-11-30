import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { object } from "prop-types";

interface FormProps {
    formData: object
}

const initialState:FormProps = {formData:{}};

const formSlice = createSlice({
    name:"form",
    initialState,
    reducers: {
        SUBMIT_FORM_ONE: (form, action:PayloadAction<object>) => {
            return {...form, formData: action.payload }
        },
        SUBMIT_FORM_TWO: (form, action:PayloadAction<object>) => {
            return {...form, user: {} }
        }
    },
});

export const {SUBMIT_FORM_ONE , SUBMIT_FORM_TWO} = formSlice.actions
export default formSlice.reducer;