import { ADD_CASH, GET_CASH } from "./actionTypes";

export const addCash = (inputCash) => {
  return {
    type: ADD_CASH,
    payload: inputCash,
  };
};

export const getCash = (inputCash) => {
  return {
    type: GET_CASH,
    payload: inputCash,
  };
};
