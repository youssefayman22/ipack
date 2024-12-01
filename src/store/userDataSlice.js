import { createSlice, createSelector } from "@reduxjs/toolkit";

//Note all: Please use the predefined states imported from UserData Folder above for clarity ex: season.Summer
const initialState = {
  name: "",
  gender: null,
  destination: null,
  transportation: null,
  season: null,
  days: 1,
  isChildren: null,
  isPet: null,
  activities: [],
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    //add reducers here in this format
    changeName: (state, { payload }) => {
      state.name = payload.name;
    },
    /* action: (state,action)=> {effect of dispatching this action} */
    updateUserData: (state, { payload }) => payload,
  },
});

const selectSelf = (state) => state.userDataReducer;
export const userDataSelector = createSelector(selectSelf, (state) => state);

export const { changeName } = userDataSlice.actions;
export const { updateUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
