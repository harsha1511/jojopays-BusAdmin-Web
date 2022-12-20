import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAssignTrip {
  busName: string;
  pilotName: string;
  coPilotName: string;
  tripType: string;
  startingTime: string;
}

const initialState: IAssignTrip = {
  busName: "",
  pilotName: "",
  coPilotName: "",
  tripType: "",
  startingTime: "",
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
