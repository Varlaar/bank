import React from "react";
import { DisplayCash } from "./components/DisplayCash";
import { ControlCash } from "./components/ControlCash";

const App = () => {
  return (
    <div className="flex flex-col items-center absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
      <DisplayCash />
      <ControlCash />
    </div>
  );
};

export default App;
