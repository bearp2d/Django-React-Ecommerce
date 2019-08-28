import axios from "axios";

import { AUTH_START, AUTH_FAIL, AUTH_SUCCESS } from "../types";

export const login = (user, setErrors, resetForm) => dispatch => {
  dispatch({ type: AUTH_START });
  axios
    .post("/api/auth/login/", user)
    .then(response => {
      localStorage.setItem("token", `Token ${response.data.token}`);
      setAthorizationToken(response.data.token);
      dispatch({ type: AUTH_SUCCESS, payload: response.data.user });
      resetForm();
      // TODO: redirect to dashboard
    })
    .catch(error => {
      dispatch({ type: AUTH_FAIL });
      setErrors(error.response.data);
    });
};

const setAthorizationToken = token => {
  axios.defaults.headers.common["Authorization"] = token;
};
