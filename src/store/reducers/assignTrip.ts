import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAssignTrip {
  busName: string;
  driverName: string;
  coPilotName: string;
  tripType: string;
  tripStartTime: string;
}

const initialState: IAssignTrip = {
  busName: "",
  driverName: "",
  coPilotName: "",
  tripType: "",
  tripStartTime: "",
};

const assignTripSlice = createSlice({
  name: "assigntrip",
  initialState,
  reducers: {
    ADD_BUS: (assignTrip, action: PayloadAction<any>) => {
      return { ...assignTrip, [action.type]: [action.payload] };
    },
  },
});

export const { ADD_BUS } = assignTripSlice.actions;

export default assignTripSlice.reducer;
