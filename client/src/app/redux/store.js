"use client";

import { configureStore } from "@reduxjs/toolkit";
// import artistReducer from "./features/artists/artistsSlice";
// import stylesReducer from "./features/styles/stylesSlice";
import userReducer from "./features/user/userSlice";
import sizeReducer from "./features/size/sizeSlice";

export const store = configureStore({
  reducer: {
    size: sizeReducer,
    user: userReducer,
   
  },
});
