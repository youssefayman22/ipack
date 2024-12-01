import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userDataSlice";
import dataListReducer from "./dataSlice";
import statusBarReducer from "./statusBarSlice";

export const store = configureStore({
  reducer: {
    //adding reducers here
    userDataReducer,
    dataListReducer,
    statusBarReducer,
  },
});
