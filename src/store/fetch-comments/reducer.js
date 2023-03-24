// import types from "./types";

// const initialState = {
//   comments: [],
//   isLoading: false,
//   error: null,
// };

// export const fetchComments = (state = initialState, action) => {
//   console.log("comments reducer >>>", action);
//   switch (action.type) {
//     case types.FETCH_COMMENTS_REQUEST:
//       return { ...state, isLoading: true, error: null };
//     case types.FETCH_COMMENTS_SUCCESS:
//       const loadComments = action.payload.data.map((res) => {
//         return {
//           title: res.name,
//           id: res.id,
//         };
//       });
//       return {
//         ...state,
//         comments: loadComments,
//         isLoading: false,
//         error: null,
//       };
//     case types.FETCH_COMMENTS_FAILURE:
//       return { ...state, isLoading: false, error: action.error };
//     default:
//       return state;
//   }
// };
