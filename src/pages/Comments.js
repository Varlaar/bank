import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SingleComment } from "../components";
import { commentCreate, fetchComments } from "../store/comment/actions";
import { selectComments } from "../store/comment/selector";
import { Loader } from "../components";
import { Input } from "../components/Input";
import uniqid from "uniqid";

export const Comments = () => {
  const [textComment, setTextComment] = useState("");
  const dispatch = useDispatch();
  const { comments, isLoading, error } = useSelector(selectComments);

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
    dispatch(fetchComments({ _limit: 10 }));
  }, [dispatch]);

  return (
    <>
      {error && (
        <div className="flex flex-col items-center text-center text-base font-bold text-red-700">
          <h3>{error}</h3>
          <h3>Пожалуйста, перезагрузите страницу</h3>
        </div>
      )}
      {isLoading && <Loader />}
      <h1 className="mb-8 mt-8 text-3xl font-bold text-violet-500">
        Комментарии
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
          className="input mb-5"
          placeholder="Введите текст"
          type="text"
          value={textComment}
          onInput={handleInputTextChange}
        />
        <input type="submit" hidden></input>
      </form>
      {comments.length > 0 && (
        <div className="h-52 overflow-y-auto rounded-md border border-gray-500 p-4">
          {comments && commentsList}
        </div>
      )}
      <Link className="mt-8" to="/">
        Вернуться назад
      </Link>
    </>
  );
};
