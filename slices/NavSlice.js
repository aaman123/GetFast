import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  timeToTravel: null,
};

const NavSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTimeToTravel: (state, action) => {
      state.timeToTravel = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTimeToTravel } = NavSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTimeToTravel = (state) => state.nav.timeToTravel;

export default NavSlice.reducer;
