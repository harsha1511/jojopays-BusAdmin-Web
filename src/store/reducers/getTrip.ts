import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripData: {},
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
  },
});

export const { GET_TRIP } = getTripData.actions;

export default getTripData.reducer;
