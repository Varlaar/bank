import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SingleComment } from "../components/SingleComment";
import { commentCreate } from "../store/comment/actions";
import { selectComments } from "../store/comment/selector";
import { fetchComments } from "../store/comment/actions";
import { Loader } from "../components/Loader";
// import { selectFetchComments } from "../store/fetch-comments/selector";
import uniqid from "uniqid";
// import { selectLoader } from "../store/loader/selector";

export const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  // const loader = useSelector(selectLoader);
  // console.log('spinner >>>', loader)
  // const loadComments = useSelector(selectFetchComments);
  const [textComment, setTextComment] = useState("");

  const handleChangeInputText = ({ target: { value } }) => {
    setTextComment(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  return (
    <>
      <Loader />
      <h1 className="text-violet-500 font-bold text-3xl mb-8 mt-8">Комментарии</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={textComment}
          onInput={handleChangeInputText}
        ></input>
        <input type="submit" hidden></input>
      </form>
      {!!comments.length &&
        comments.map((comment) => {
          return <SingleComment key={comment.id} payload={comment} />;
        })}
      <Link className="mt-8" to="/">
        Вернуться назад
      </Link>
    </>
  );
};
