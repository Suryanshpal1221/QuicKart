import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {},
};

const itemDetailsSlice = createSlice({
  name: "itemDetails",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { setDetails } = itemDetailsSlice.actions;

export default itemDetailsSlice.reducer;
