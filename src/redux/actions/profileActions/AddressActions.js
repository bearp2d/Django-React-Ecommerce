import axios from "axios";

import { FETCH_ADDRESSES, CREATE_ADDRESS } from "../../types";
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
