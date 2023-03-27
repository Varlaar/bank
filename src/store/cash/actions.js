import types from "./types";

export const addCash = (cash) => ({
  type: types.ADD_CASH,
  payload: cash,
});

export const getCash = (cash) => ({
  type: types.GET_CASH,
  payload: cash,
});
