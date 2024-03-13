import { configureStore } from "@reduxjs/toolkit";
import FirstSlice from "./Slices/FirstSlice";

export const store = configureStore({
  reducer: {
    FirstSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
