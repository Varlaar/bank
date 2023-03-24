import types from "./types";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const comments = (state = initialState, action) => {
  console.log("comments reducer >>>", action);
  switch (action.type) {
    case types.FETCH_COMMENTS_REQUEST:
      return { ...state, isLoading: true, error: null };

    case types.FETCH_COMMENTS_SUCCESS:
      const loadComments = action.payload.data.map((res) => {
        return {
          title: res.name,
          id: res.id,
        };
      });
      return {
        ...state,
        comments: loadComments,
        isLoading: false,
        error: null,
      };

    case types.FETCH_COMMENTS_FAILURE:
      return { ...state, isLoading: false, error: action.error };

    case types.COMMENT_CREATE:
      return { ...state, comments: [...state.comments, action.payload] };

    case types.COMMENT_UPDATE:
      const { payload } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex((item) => item.id === payload.id);
      const newComments = [
        ...comments.slice(0, itemIndex),
        payload,
        ...comments.slice(itemIndex + 1),
      ];
      return { ...state, comments: newComments };

    case types.COMMENT_DELETE:
      return (() => {
        const { payload } = action;
        const { comments } = state;
        const itemIndex = comments.findIndex((item) => item.id === payload);
        const newComments = [
          ...comments.slice(0, itemIndex),
          ...comments.slice(itemIndex + 1),
        ];
        return { ...state, comments: newComments };
      })();

    default:
      return state;
  }
};
