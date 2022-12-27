import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth.reducer";
import formReducer from "./form.reducer";
// import notifyReducer from "./notify.reducer";
import modalReducer from "./modal.reducer";
import assignReducer from "./assignTrip";

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  form: formReducer,
  assignTrip: assignReducer,
  // notify: notifyReducer,
});
export default rootReducer;
