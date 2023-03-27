import { combineReducers } from "redux";
import { cash } from "./cash/reducer";
import { comments } from "./comment/reducer";

export const rootReducer = combineReducers({
  cash,
  comments,
});
