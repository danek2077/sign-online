import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState: { flag: boolean; time: string; userChosen: number | null } =
  {
    flag: false,
    time: "",
    userChosen: null,
  };

export const FirstSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeFlag: (state) => {
      state.flag = true;
    },
    timeNow: (state) => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const rez = `13/03 ${hours}:${minutes}`;
      state.time = rez;
    },
    userNumberChange: (state, action: PayloadAction<number>) => {
      state.userChosen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeFlag, timeNow, userNumberChange } = FirstSlice.actions;

export default FirstSlice.reducer;
