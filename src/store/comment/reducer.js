import { normalizeLoadComments } from "../../utils";
import types from "./types";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const comments = (state = initialState, action) => {
  const { payload } = action;
  const { comments } = state;
  console.log("comments reducer >>>", action);

  switch (action.type) {
    case types.FETCH_COMMENTS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case types.FETCH_COMMENTS_SUCCESS:
      const loadComments = normalizeLoadComments(action.payload.data);
      return {
        ...state,
        comments: loadComments,
        isLoading: false,
        error: null,
      };

    case types.FETCH_COMMENTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case types.COMMENT_CREATE:
      return { ...state, comments: [...state.comments, action.payload] };

    case types.COMMENT_UPDATE:
      const newCommentsAfterUpdate = comments.reduce((acc, item) => {
        if (item.id === payload.id) {
          return [...acc, payload];
        }
        return [...acc, item];
      }, []);
      return { ...state, comments: newCommentsAfterUpdate };

    case types.COMMENT_DELETE:
      const newCommentsAfterDelete = comments.reduce((acc, item) => {
        if (item.id === payload) {
          return acc;
        }
        return [...acc, item];
      }, []);
      return { ...state, comments: newCommentsAfterDelete };

    default:
      return state;
  }
};
