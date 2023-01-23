import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  allBuses: [],
  allDriver: [],
};

const busCompany = createSlice({
  name: "busCompany",
  initialState,
  reducers: {
    GET_BUSES: (busCompany, action: PayloadAction<any>) => {
      return {
        ...busCompany,
        allBuses: action.payload,
      };
    },
    GET_DRIVERS: (busCompany, action: PayloadAction<any>) => {
      return {
        ...busCompany,
        allDriver: action.payload,
      };
    },
  },
});

export const { GET_BUSES, GET_DRIVERS } = busCompany.actions;

export default busCompany.reducer;
