"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSize: null,
  publications: [],
  };
  
  
  export const sizeSlice = createSlice({
    name: "size",
    initialState,
    reducers: {
      setSize: (state, action) => {
        state.selectedSize = action.payload;
      },
      setPublications: (state, action) => {
        state.publications = action.payload;
      },
    },
  });
  
  export const { setSize, setPublications } = sizeSlice.actions;
  
  export default sizeSlice.reducer;