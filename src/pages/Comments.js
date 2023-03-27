import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SingleComment } from "../components/SingleComment";
import { commentCreate, fetchComments } from "../store/comment/actions";
import { selectComments } from "../store/comment/selector";
import { Loader } from "../components/Loader";
import uniqid from "uniqid";

export const Comments = () => {
  const [textComment, setTextComment] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);

  const commentsList = comments.map((comment) => (
    <SingleComment key={comment.id} title={comment.title} id={comment.id} />
  ));

  const handleInputTextChange = ({ target: { value } }) =>
    setTextComment(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };

  useEffect(() => {
    dispatch(fetchComments({_limit: 10}));
  }, []);

  return (
    <>
      <Loader />
      <h1 className="text-violet-500 font-bold text-3xl mb-8 mt-8">
        Комментарии
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={textComment}
          onInput={handleInputTextChange}
        ></input>
        <input type="submit" hidden></input>
      </form>
      {!!comments.length && commentsList}
      <Link className="mt-8" to="/">
        Вернуться назад
      </Link>
    </>
  );
};
