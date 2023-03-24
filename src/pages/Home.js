import React from "react";
import { Link } from "react-router-dom";
import { DisplayCash } from "../components/DisplayCash";
import { ControlCash } from "../components/ControlCash";

export const Home = () => {
  return (
    <>
      <DisplayCash />
      <ControlCash />
      <Link className="mt-7" to="/comments">
        Оставить комментарий
      </Link>
    </>
  );
};
