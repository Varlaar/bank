import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate, commentDelete } from "../store/comment/actions";

export const SingleComment = ({ title, id }) => {
  const [commentText, setCommentText] = useState(title);
  const dispatch = useDispatch();

  const handleInputTextChange = ({ target: { value } }) => {
    setCommentText(value);
  };

  const handleTextCommentUpdate = (e) => {
    e.preventDefault();
    console.log("submit >>>", commentText);
    dispatch(commentUpdate({ commentText, id }));
  };

  const handleTextCommentDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

  return (
    <form
      onSubmit={handleTextCommentUpdate}
      className="mt-3 flex items-center justify-between"
    >
      <input
        type="text"
        value={commentText}
        onChange={handleInputTextChange}
      ></input>
      <input type="submit" hidden></input>
      <button
        type="submit"
        className="text-center"
        onClick={handleTextCommentDelete}
      >
        <span className="text-4xl">&times;</span>
      </button>
    </form>
  );
};
