import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Routes from "../Routes";
import Notifer from "./layouts/Notifer";
import { loadUser } from "../redux/actions/authActions";
import LoadingPage from "./layouts/LoadingPage";

axios.defaults.baseURL = "http://localhost:8000";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.ui.loading);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Notifer />
      {loading ? <LoadingPage /> : <Routes />}
    </Router>
  );
};

export default App;
