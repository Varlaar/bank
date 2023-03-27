import instance from "./instance";
import paramsToString from "./utils/paramsToString";

// const requestComments = (limit) => instance.get(`/comments?_limit=${limit}`);
export const requestComments = (params = {}) => instance.get(`/comments?${paramsToString(params)}`)


