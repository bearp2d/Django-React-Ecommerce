import axios from "axios";

import { addNotif } from "./notifActions";
import {
  AUTH_START,
  AUTH_FAIL,
  AUTH_SUCCESS,
  LOADING_UI,
  STOP_LOADING_UI
} from "../types";

export const loadUser = () => dispatch => {
  dispatch({ type: LOADING_UI });
  if (localStorage.token) {
    setAthorizationToken(localStorage.getItem("token"));
  }
  axios
    .get("/api/user/")
    .then(response => {
      dispatch({ type: AUTH_SUCCESS, payload: response.data });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch(() => {
      dispatch({ type: AUTH_FAIL });
      dispatch({ type: STOP_LOADING_UI });
    });
};

export const login = (user, setErrors, resetForm) => dispatch => {
  dispatch({ type: AUTH_START });
  axios
    .post("/api/auth/login/", user)
    .then(response => {
      localStorage.setItem("token", `Token ${response.data.token}`);
      setAthorizationToken(response.data.token);
      dispatch({ type: AUTH_SUCCESS, payload: response.data.user });
      resetForm();
      dispatch(addNotif({ message: "You loged in successfully" }));
    })
    .catch(error => {
      dispatch({ type: AUTH_FAIL });
      setErrors(error.response.data);
    });
};

export const register = (user, setErrors, resetForm) => dispatch => {
  dispatch({ type: AUTH_START });
  axios
    .post("/api/auth/register/", user)
    .then(response => {
      localStorage.setItem("token", `Token ${response.data.token}`);
      setAthorizationToken(response.data.token);
      dispatch({ type: AUTH_SUCCESS, payload: response.data.user });
      resetForm();
      dispatch(addNotif({ message: "Your account registered successfully" }));
    })
    .catch(error => {
      dispatch({ type: AUTH_FAIL });
      setErrors(error.response.data);
    });
};

const setAthorizationToken = token => {
  axios.defaults.headers.common["Authorization"] = token;
};
