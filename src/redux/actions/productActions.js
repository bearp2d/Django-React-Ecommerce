import axios from "axios";

import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = (query = "?page=1") => dispatch => {
  axios.get(`/api/products/${query}`).then(response => {
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  });
};
