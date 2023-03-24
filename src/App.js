import React from "react";
import thunk from "redux-thunk";
import { RootNavigation } from "./navigation/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="flex flex-col items-center absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
        <RootNavigation />
      </div>
    </Provider>
    </ BrowserRouter>
  );
};

export default App;
