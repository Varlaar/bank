import types from "./types";

const initialState = {
  cash: 0,
};

export const cash = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CASH:
      return { ...state, cash: state.cash + action.payload };

    case types.GET_CASH:
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};
