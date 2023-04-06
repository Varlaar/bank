import instance from "./instance";
import { paramsToString } from "../utils";

export const requestComments = (params = {}) =>
  instance.get(`/comments?${paramsToString(params)}`);
