import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import store from "../redux/store";
import Routes from "../Routes";
import { loadUser } from "../redux/actions/authActions";

axios.defaults.baseURL = "http://localhost:8000";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
