import { combineReducers } from "redux";
import { cash } from "./cash/reducer";
import { comments } from "./comment/reducer";
// import { fetchComments } from "./fetch-comments/reducer";

export const rootReducer = combineReducers({
  cash,
  comments,
  // fetchComments
});
