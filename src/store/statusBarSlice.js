import { createSlice, createSelector } from "@reduxjs/toolkit";

//Note all: Please use the predefined states imported from UserData Folder above for clarity ex: season.Summer
const initialState = {
  currentDirection: 1,
};

export const statusBarSlice = createSlice({
  name: "statusBar",
  initialState,
  reducers: {
    currentAnimationStatus: (state, { payload }) => {
      state.currentDirection = payload;
    },
  },
});

const selectSelf = (state) => state.statusBarReducer;
export const statusBarSelector = createSelector(selectSelf, (state) => state);

export const { currentAnimationStatus } = statusBarSlice.actions;
export default statusBarSlice.reducer;
