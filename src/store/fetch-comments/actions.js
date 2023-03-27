// import types from "./types";
// import requestComments from "../../api/commentsApi";

// export const fetchComments = () => async (dispatch) => {
//   dispatch({
//     type: types.FETCH_COMMENTS_REQUEST,
//   });

//   try {
//     const response = await requestComments(10);
//     dispatch({
//       type: types.FETCH_COMMENTS_SUCCESS,
//       payload: {
//         data: response.data,
//       },
//     });
//   } catch (error) {
//     dispatch({
//       type: types.FETCH_COMMENTS_FAILURE,
//       error,
//     });
//   }
// };
