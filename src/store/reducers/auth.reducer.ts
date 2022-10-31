import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface authState {
  isLoggedIn: boolean;
  user: object;
}

const initialState: authState = { isLoggedIn: false, user: {} };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN_SUCCESS: (auth, action: PayloadAction<object>) => {
      return { ...auth, isLoggedIn: true, user: action.payload };
    },
    LOGIN_FAIL: (auth, action: PayloadAction<undefined | object>) => {
      return { ...auth, isLoggedIn: false, user: {} };
    },
    LOGOUT: (auth, action: PayloadAction<undefined | object>) => {
      return { isLoggedIn: false, user: {} };
    },
  },
});

export const { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } = authSlice.actions;

export default authSlice.reducer;
