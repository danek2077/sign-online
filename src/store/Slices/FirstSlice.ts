import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type TodoUsersType = { name: string; roomNum: number };
const initialState: {
  
  time: string;
  selectedUser: number | null;
  todoUsers: TodoUsersType[];
} = {
  time: "",
  selectedUser: null,
  todoUsers: [],
};

export const FirstSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    userNumberChange: (state, action: PayloadAction<number>) => {
      state.selectedUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userNumberChange } = FirstSlice.actions;

export default FirstSlice.reducer;
