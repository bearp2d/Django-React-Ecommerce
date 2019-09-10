import axios from "axios";

import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = () => dispatch => {
  axios.get("/api/products/?page=1").then(response => {
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  });
};
