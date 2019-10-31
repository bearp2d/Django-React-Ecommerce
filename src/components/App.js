import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import Routes from "../Routes";
import Notifer from "./layouts/Notifer";
import { loadUser } from "../redux/actions/authActions";

// Set csrf token
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Notifer />
      <Routes />
    </Router>
  );
};

export default App;
