import React from "react";
import { RootNavigation } from "./navigation/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

import styles from "./App.module.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={styles.wrapper}>
          <RootNavigation />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
