import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface authState {
  user: object;
}

const initialState: authState = { user: {} };

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    REGISTER_USER: (register, action: PayloadAction<object>) => {
      return { ...register, user: action.payload };
    },
  },
});

export const { REGISTER_USER } = registerSlice.actions;

export default registerSlice.reducer;
