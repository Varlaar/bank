import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SingleComment } from "../components";
import { commentCreate, fetchComments } from "../store/comment/actions";
import { selectComments } from "../store/comment/selector";
import { Loader } from "../components";
import { Input } from "../components/Input";
import { MODE_COMMENTS_EDIT, MODE_COMMENTS_VIEW } from "../enums/enumComments";
import { Button } from "../components/Button";
import uniqid from "uniqid";

export const Comments = () => {
  const [textComment, setTextComment] = useState("");
  const [mode, setMode] = useState(MODE_COMMENTS_VIEW);
  const dispatch = useDispatch();
  const { comments, isLoading, error } = useSelector(selectComments);

  const commentsList = comments.map((comment) => (
    <SingleComment key={comment.id} title={comment.title} id={comment.id} />
  ));

  // Изменение текущего режима: просмотр или редактирование комментария
  const handleModeChange = (newMode) => setMode(newMode);

  const handleInputTextChange = ({ target: { value } }) =>
    setTextComment(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };

  useEffect(() => {
    dispatch(fetchComments({ _limit: 5 }));
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
      {comments.length > 0 && (
        <div className="h-52 overflow-y-auto rounded-md border border-gray-500 p-4">
          {comments && commentsList}
        </div>
      )}
      <div className="mt-5 flex flex-col items-end rounded-md bg-whiteColor p-5">
        <Input
          className="input resize-none border-transparent border-violet-500 p-2"
          placeholder="Введите текст"
          value={textComment}
          onInput={handleInputTextChange}
        />
        <Button
          className="bth w-25 mt-5"
          title="Отправить"
          onClick={handleSubmit}
        />
      </div>
      <Link className="mt-8" to="/">
        Вернуться назад
      </Link>
    </>
  );
};
