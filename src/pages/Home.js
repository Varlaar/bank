import React from "react";
import { Link } from "react-router-dom";
import { DisplayCash } from "../components";
import { ControlCash } from "../components";
import { useSelector } from "react-redux";
import { selectCash } from "../store/cash/selector";

export const Home = () => {
  const cash = useSelector(selectCash);
  return (
    <>
      <DisplayCash cash={cash}/>
      <ControlCash />
      <Link className="mt-10" to="/comments">
        Оставить комментарий
      </Link>
    </>
  );
};
