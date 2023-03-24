import types from "./types";

export const loaderOn = () => ({
  type: types.LOADER_DISPLAY_ON
});

export const loaderOff = () => ({
    type: types.LOADER_DISPLAY_OFF
  });