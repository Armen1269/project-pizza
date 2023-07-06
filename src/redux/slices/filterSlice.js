import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catigoriesIndex: 0,
  pagination: 1,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCatigoriesIndex(state, action) {
      state.catigoriesIndex = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPagination(state, action) {
      state.pagination = action.payload;
    },
  },
});
export const { setCatigoriesIndex, setPagination, setSort } =
  filterSlice.actions;
export default filterSlice.reducer;
