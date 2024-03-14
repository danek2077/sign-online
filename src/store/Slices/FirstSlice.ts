import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
  flag: boolean;
  time: string;
  selectedUser: number | null;
} = {
  flag: false,
  time: "",
  selectedUser: null,
};

export const FirstSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeFlag: (state) => {
      state.flag = true;
    },
    userNumberChange: (state, action: PayloadAction<number>) => {
      state.selectedUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeFlag,  userNumberChange } = FirstSlice.actions;

export default FirstSlice.reducer;
