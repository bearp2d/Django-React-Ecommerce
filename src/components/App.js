import React from "react";
import { Provider } from "react-redux";

import store from "../redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <h2>React & Redux</h2>
    </Provider>
  );
};

export default App;
