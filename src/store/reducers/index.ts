import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth.reducer";
import formReducer from "./form.reducer";
// import notifyReducer from "./notify.reducer";
import modalReducer from "./modal.reducer";
import assignReducer from "./assignTrip";
import getTrip from "./getTrip";
import busCompany from "./busCompany";
import registerUser from "./registerUser";

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  form: formReducer,
  assignTrip: assignReducer,
  getTrip: getTrip,
  busCompany: busCompany,
  register: registerUser,
  // notify: notifyReducer,
});
export default rootReducer;
