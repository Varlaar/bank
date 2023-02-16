import { combineReducers } from "redux";
import { cashReducer } from "./cashReducer";

export const rootReducer = combineReducers({
  cashReducer,
});
