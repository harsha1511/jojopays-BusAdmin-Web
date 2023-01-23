import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripData: {},
  assignedTrip: [],
};

const getTripData = createSlice({
  name: "assigntrip",
  initialState,
  reducers: {
    GET_TRIP: (assignTrip, action: PayloadAction<any>) => {
      return {
        ...assignTrip,
        tripData: action.payload,
      };
    },
    GET_ASSIGNED_TRIPS: (assignTrip, action: PayloadAction<any>) => {
      return {
        ...assignTrip,
        assignedTrip: action.payload,
      };
    },
  },
});

export const { GET_TRIP, GET_ASSIGNED_TRIPS } = getTripData.actions;

export default getTripData.reducer;
