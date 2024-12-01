import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getNewItemId } from "../utils/helpers";

const initialState = {
  documents: {},
  electronics: {},
  outerwearClothes: {},
  homewearClothes: {},
  Medications: {},
  personalCare: {},
};

export const dataSlice = createSlice({
  name: "dataList",
  initialState,
  reducers: {
    //payload must include sectionName and the three lists inside dataObject

    updateDataList: (state, { payload }) => {
      const { sectionName, dataObject } = payload;
      state[sectionName] = dataObject;
    },

    addItem: (state, { payload }) => {
      const { listName, newItemName, sectionName } = payload;
      let array = state[sectionName][listName];
      array.push(getNewItemId(array, newItemName));
    },

    //payload form for delete:{id:integer,listName:string}
    deleteItem: (state, { payload }) => {
      const { id, sectionName, listName } = payload;
      let array = state[sectionName][listName];
      let index = array.findIndex((element) => element.id === id);
      index !== -1 && array.splice(index, 1);
    },
    resetDataLists: (state) => initialState,
  },
});
const selectSelf = (state) => state.dataListReducer;
export const dataList = createSelector(selectSelf, (state) => state);
//exporting actions
export const { updateDataList, deleteItem, resetDataLists, addItem } =
  dataSlice.actions;
export default dataSlice.reducer;
