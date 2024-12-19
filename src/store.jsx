import { configureStore } from "@reduxjs/toolkit";
import employeSlice from "./slices/employeeslice";

const store = configureStore({
  reducer: {
    empstore: employeSlice,
  },
});

export default store;
