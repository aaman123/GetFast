import { configureStore } from "@reduxjs/toolkit";
import NavReducer from "./slices/NavSlice";

const store = configureStore({
  reducer: {
    nav: NavReducer,
  },
});

export default store;
