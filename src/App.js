import React from "react";
import { RootNavigation } from "./navigation/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center">
          <RootNavigation />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
