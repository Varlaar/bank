import instance from "./instance";
import paramsToString from "../utils/paramsToString";

export const requestComments = (params = {}) =>
  instance.get(`/comments?${paramsToString(params)}`);
