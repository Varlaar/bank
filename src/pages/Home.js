import React from "react";
import { Link } from "react-router-dom";
import { DisplayCash } from "../components/DisplayCash";
import { ControlCash } from "../components/ControlCash";

import "./Home.scss";

export const Home = () => {
  return (
    <>
      <DisplayCash />
      <ControlCash />
      <Link className="com" to="/comments">
        Оставить комментарий
      </Link>
    </>
  );
};
