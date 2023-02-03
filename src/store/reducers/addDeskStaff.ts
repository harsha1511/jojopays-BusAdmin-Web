import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileDetails: {},
  assignTask: [],
  staffCreds: {},
};

const addDeskStaffSlice = createSlice({
  name: "addDeskStaff",
  initialState,
  reducers: {
    PROFILE_DETAILS: (addDeskStaff, action: PayloadAction<any>) => {
      return {
        ...addDeskStaff,
        profileDetails: action.payload,
      };
    },
    ASSIGN_TASK: (addDeskStaff, action: PayloadAction<any>) => {
      return {
        ...addDeskStaff,
        assignTask: action.payload,
      };
    },
    STAFF_CREDS: (addDeskStaff, action: PayloadAction<any>) => {
      return {
        ...addDeskStaff,
        staffCreds: action.payload,
      };
    },
  },
});

export const { PROFILE_DETAILS, ASSIGN_TASK, STAFF_CREDS } =
  addDeskStaffSlice.actions;

export default addDeskStaffSlice.reducer;
