import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  travelBus: {},
  travelRoute: {},
  travelTime: {},
};

const assignTripSlice = createSlice({
  name: "assigntrip",
  initialState,
  reducers: {
    ADD_BUS: (assignTrip, action: PayloadAction<any>) => {
      return {
        ...assignTrip,
        travelBus: action.payload,
      };
    },
    ADD_ROUTE: (assignTrip, action: PayloadAction<any>) => {
      return {
        ...assignTrip,
        travelRoute: action.payload,
      };
    },
    ADD_TIME: (assignTrip, action: PayloadAction<any>) => {
      return {
        ...assignTrip,
        travelTime: action.payload,
      };
    },
  },
});

export const { ADD_BUS, ADD_ROUTE, ADD_TIME } = assignTripSlice.actions;

export default assignTripSlice.reducer;
