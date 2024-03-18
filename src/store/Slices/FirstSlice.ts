import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type TodoUserType = { name: string; roomNum: number };
const initialState: {
  time: string;
  selectedUser: number | null;
  todoUsers: TodoUserType[];
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
    addTodoUser: (state, action: PayloadAction<TodoUserType>) => {
      if (Boolean(state.todoUsers[0]) === false) {
        state.todoUsers[0] = action.payload;
      } else {
        state.todoUsers.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { userNumberChange, addTodoUser } = FirstSlice.actions;

export default FirstSlice.reducer;
