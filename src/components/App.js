import React from "react";
import { Provider } from "react-redux";
import axios from "axios";

import Login from "./auth/login";
import store from "../redux/store";

axios.defaults.baseURL = "http://localhost:8000";

const App = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default App;
