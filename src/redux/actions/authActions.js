import axios from "axios";

import { addNotif } from "./notifActions";
import {
  AUTH_START,
  AUTH_FAIL,
  AUTH_SUCCESS,
  UPDATE_FAIL,
  LOADING_UI,
  STOP_LOADING_UI
} from "../types";

export const loadUser = () => dispatch => {
  dispatch({ type: LOADING_UI });
  if (!localStorage.getItem("token")) {
    dispatch({ type: AUTH_FAIL });
    dispatch({ type: STOP_LOADING_UI });
    return;
  }
  useAthorizationToken();
  axios
    .get("/api/user/")
    .then(response => {
      dispatch({ type: AUTH_SUCCESS, payload: response.data });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch(() => {
      removeAthorizationToken();
      dispatch({ type: AUTH_FAIL });
      dispatch({ type: STOP_LOADING_UI });
    });
};

export const login = (user, setErrors, resetForm) => dispatch => {
  dispatch({ type: AUTH_START });
  axios
    .post("/api/auth/login/", user)
    .then(response => {
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

export const logout = () => dispatch => {
  dispatch({ type: LOADING_UI });
  axios.post("/api/auth/logout/").then(() => {
    removeAthorizationToken();
    dispatch(loadUser());
  });
};

export const updateUser = (user, setErrors) => dispatch => {
  dispatch({ type: AUTH_START });
  axios
    .put("/api/user/", user)
    .then(response => {
      dispatch({ type: AUTH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: UPDATE_FAIL });
      setErrors(error.response.data);
    });
};

const setAthorizationToken = token => {
  token = `Token ${token}`;
  localStorage.setItem("token", token);
  axios.defaults.headers.common["Authorization"] = token;
};

const useAthorizationToken = () => {
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = token;
};

const removeAthorizationToken = () => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
};
