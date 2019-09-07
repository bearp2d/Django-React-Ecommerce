import axios from "axios";

import {
  FETCH_ADDRESSES,
  CREATE_ADDRESS,
  DELETE_ADDRESS,
  UPDATE_ADDRESS
} from "../../types";
import { addNotif } from "../notifActions";

export const fetchAddresses = () => dispatch => {
  axios.get("/api/user/addresses/").then(response => {
    dispatch({ type: FETCH_ADDRESSES, payload: response.data });
  });
};

export const createAddress = (address, setErrors, handleClose) => dispatch => {
  axios
    .post("/api/user/addresses/", address)
    .then(response => {
      dispatch({ type: CREATE_ADDRESS, payload: response.data });
      handleClose();
      dispatch(addNotif({ message: "Address has been created" }));
    })
    .catch(error => {
      setErrors(error.response.data);
    });
};

export const deleteAddress = (id, handleClose) => dispatch => {
  axios.delete(`/api/user/addresses/${id}/`).then(() => {
    dispatch({ type: DELETE_ADDRESS, payload: id });
    handleClose();
    dispatch(
      addNotif({
        message: "Address has been deleted",
        options: { variant: "error" }
      })
    );
  });
};

export const updateAddress = (
  address,
  id,
  setErrors,
  handleClose
) => dispatch => {
  axios
    .put(`/api/user/addresses/${id}/`, address)
    .then(response => {
      dispatch({ type: UPDATE_ADDRESS, payload: response.data });
      handleClose();
      dispatch(
        addNotif({
          message: "Address was updated",
          options: { variant: "info" }
        })
      );
    })
    .catch(error => {
      console.log(error);
      setErrors(error.response.data);
    });
};
