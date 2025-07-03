import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  data: [],
};
const UR = createSlice({
  name: "User",
  initialState,
  reducers: {
    ins: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    del: (state, action) => {
      state.data = state.data.filter((i, index) => index != action.payload);
    },
    upd: (state, action) => {
      state.data = state.data.map((A, index) => {
        if (index == action.payload.id) {
          A = action.payload.info;
        }
        return A;
      });
    },
  },
});

export const { ins, del, upd } = UR.actions;
export default UR.reducer;
