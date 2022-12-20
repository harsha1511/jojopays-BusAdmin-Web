import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth.reducer";
import formReducer from "./form.reducer";
// import notifyReducer from "./notify.reducer";
import modalReducer from "./modal.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  form: formReducer,
  // assignTrip: assignTripReducer,
  // notify: notifyReducer,
});
export default rootReducer;
