import { combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSilce";

const rootReducer = combineReducers({
  todosReducer: todoSlice.reducer,
});

export default rootReducer;
