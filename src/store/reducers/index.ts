import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth.reducer";
import modalReducer from "./modal.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
});
export default rootReducer;
