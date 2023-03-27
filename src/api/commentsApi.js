import instance from "./instance";

const requestComments = (limit) => instance.get(`/comments?_limit=${limit}`);

export default requestComments;
