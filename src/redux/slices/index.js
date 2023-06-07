import { combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice";
import { modalSlice } from "./modalSlice";

const rootReducer = combineReducers({
  todosReducer: todoSlice.reducer,
  modalReducer: modalSlice.reducer,
});

export default rootReducer;
