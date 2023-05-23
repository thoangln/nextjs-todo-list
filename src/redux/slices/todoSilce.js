import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  todoList: [
    {
      comment: "Gojo looks nice. Excellent work amigo!",
      username: "Saitama",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addComment } = todoSlice.actions;
export const selectComments = (state) => state.todosReducer;
export default todoSlice.reducer;
