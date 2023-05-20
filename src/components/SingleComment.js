import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate, commentDelete } from "../store/comment/actions";
import { Button } from "./Button";

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
    // <form
    //   onSubmit={handleTextCommentUpdate}
    //   className="mt-3 flex items-center justify-between"
    // >
    //   <span>{commentText}</span>
    //   {/* <Input
    //     className="input"
    //     type="text"
    //     value={commentText}
    //     onInput={handleInputTextChange}
    //   />
    //   <input type="submit" hidden></input> */}
    //    </form>
    <div className="mt-3 flex items-center justify-start">
      <span>{commentText}</span>
      <Button
        title="&#9998;"
        type="submit"
        className="ml-4 text-2xl"
        onClick={handleTextCommentDelete}
      ></Button>
      <Button
        title="&times;"
        type="submit"
        className="ml-4 text-4xl"
        onClick={handleTextCommentDelete}
      ></Button>
    </div>
  );
};

export default SingleComment;
