import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate } from "../store/comment/actions";
import { commentDelete } from "../store/comment/actions";

export const SingleComment = ({payload}) => {
  const [commentText, setCommentText] = useState("");
  const {title, id} = payload;
  const dispatch = useDispatch();

  const handleChangeInputText = ({target: {value}}) => {
    setCommentText(value)
  }

  const handleUpdateTextComment = (e) => {
    e.preventDefault();
    console.log('submit >>>', commentText)
    dispatch(commentUpdate(commentText, id))
  }

  const handleDeleteTextComment = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id))
  }

  useEffect(() => {
    if(title) {
      setCommentText(title)
    }
  }, [title])

  return (
    <form onSubmit={handleUpdateTextComment} className="flex flex-row justify-between items-center">
    <input className="mt-3" type="text" value={commentText} onChange={handleChangeInputText}></input>
    <input type="submit" hidden></input>
    <button className="text-center" onClick={handleDeleteTextComment}>&times;</button>
  </form>
  );
};