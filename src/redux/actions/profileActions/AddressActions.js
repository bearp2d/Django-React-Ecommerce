import axios from "axios";

import { FETCH_ADDRESSES } from "../../types";

export const fetchAddresses = () => dispatch => {
  axios.get("/api/user/addresses/").then(response => {
    dispatch({ type: FETCH_ADDRESSES, payload: response.data });
  });
};
