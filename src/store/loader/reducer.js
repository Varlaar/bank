import types from "./types";

const initialState = {
  loading: false,
};

export const loader = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADER_DISPLAY_ON:
      return { ...state, loading: true};

    case types.LOADER_DISPLAY_OFF:
      return { ...state, loading: false};

    default:
      return state;
  }
};
