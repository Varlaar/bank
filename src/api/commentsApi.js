import instance from "./instance";

const requestComments = (num) => {
  return instance.get(`/comments?_limit=${num}`);
};

export default requestComments;
