import axios from "axios";

import { addNotif } from "./notifActions";
import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  START_LOADING_UI,
  STOP_LOADING_UI,
  START_LOADING_BUTTON,
  STOP_LOADING_BUTTON
} from "../types";

export const loadUser = () => dispatch => {
  dispatch({ type: START_LOADING_UI });
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

export const login = (user, setErrors, resetForm) => (dispatch, getState) => {
  dispatch({ type: START_LOADING_BUTTON });
  axios
    .post("/api/auth/login/", user)
    .then(response => {
      setAthorizationToken(response.data.token);
      dispatch({ type: AUTH_SUCCESS, payload: response.data.user });
      dispatch({ type: STOP_LOADING_BUTTON });
      resetForm();
      dispatch(
        addNotif({
          message: `Welcome ${getState().auth.user.first_name || ""}`,
          options: { variant: "info" }
        })
      );
    })
    .catch(error => {
      dispatch({ type: AUTH_FAIL });
      setErrors(error.response.data);
      dispatch({ type: STOP_LOADING_BUTTON });
    });
};

export const register = (user, setErrors, resetForm) => dispatch => {
  dispatch({ type: START_LOADING_BUTTON });
  axios
    .post("/api/auth/register/", user)
    .then(response => {
      setAthorizationToken(response.data.token);
      dispatch({ type: AUTH_SUCCESS, payload: response.data.user });
      dispatch({ type: STOP_LOADING_BUTTON });
      resetForm();
      dispatch(addNotif({ message: "Your account registered successfully" }));
    })
    .catch(error => {
      dispatch({ type: AUTH_FAIL });
      setErrors(error.response.data);
      dispatch({ type: STOP_LOADING_BUTTON });
    });
};

export const logout = () => dispatch => {
  dispatch({ type: START_LOADING_UI });
  axios.post("/api/auth/logout/").then(() => {
    removeAthorizationToken();
    dispatch(loadUser());
  });
};

export const changePassword = (
  data,
  setErrors,
  resetForm,
  history
) => dispatch => {
  dispatch({ type: START_LOADING_BUTTON });
  axios
    .put("/api/auth/change-password/", data)
    .then(response => {
      dispatch({ type: STOP_LOADING_BUTTON });
      resetForm();
      history.push("/profile");
      dispatch(
        addNotif({ message: "Your password has been changed successfully" })
      );
    })
    .catch(error => {
      setErrors(error.response.data);
      dispatch({ type: STOP_LOADING_BUTTON });
    });
};

export const updateUser = (user, setErrors, history) => dispatch => {
  dispatch({ type: START_LOADING_BUTTON });
  axios
    .put("/api/user/", user)
    .then(response => {
      dispatch({ type: AUTH_SUCCESS, payload: response.data });
      dispatch({ type: STOP_LOADING_BUTTON });
      history.push("/profile/personal-info");
      dispatch(
        addNotif({
          message: "Personal info was updated",
          options: { variant: "info" }
        })
      );
    })
    .catch(error => {
      setErrors(error.response.data);
      dispatch({ type: STOP_LOADING_BUTTON });
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
