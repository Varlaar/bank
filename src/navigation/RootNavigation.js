import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Comments } from "../pages/Comments";

export const RootNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comments" element={<Comments />} />
    </Routes>
  );
};
