import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    comment: "Gojo looks nice. Excellent work amigo!",
    username: "Saitama",
  },
];

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
export default todoSlice.reducer;
