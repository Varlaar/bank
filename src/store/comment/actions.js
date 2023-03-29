import types from "./types";
import { requestComments } from "../../api/commentsApi";

export const commentCreate = (title, id) => ({
  type: types.COMMENT_CREATE,
  payload: {
    title,
    id,
  },
});

export const commentUpdate = (title, id) => ({
  type: types.COMMENT_UPDATE,
  payload: {
    title,
    id,
  },
});

export const commentDelete = (id) => ({
  type: types.COMMENT_DELETE,
  payload: id,
});

export const fetchComments = (params) => async (dispatch) => {
  dispatch({
    type: types.FETCH_COMMENTS_REQUEST,
  });

  try {
    const response = await requestComments(params);
    setTimeout(() => {
      dispatch({
        type: types.FETCH_COMMENTS_SUCCESS,
        payload: {
          data: response.data,
        },
      });
    }, 2000);
  } catch (error) {
    dispatch({
      type: types.FETCH_COMMENTS_FAILURE,
      payload: error.message,
    });
  }
};
