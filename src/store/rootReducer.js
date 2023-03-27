import { combineReducers } from "redux";
import { cash } from "./cash/reducer";
import { comments } from "./comment/reducer";
import {loader} from "./loader/reducer";
// import { fetchComments } from "./fetch-comments/reducer";

export const rootReducer = combineReducers({
  cash,
  comments,
  loader
  // fetchComments
});
