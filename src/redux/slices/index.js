import { combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice";

const rootReducer = combineReducers({
  todosReducer: todoSlice.reducer,
});

export default rootReducer;
