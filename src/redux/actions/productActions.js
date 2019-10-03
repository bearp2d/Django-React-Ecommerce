import axios from "axios";

import { FETCH_PRODUCTS, FETCH_PRODUCT } from "../types";

export const fetchProducts = (query = "?page=1") => dispatch => {
  axios.get(`/api/products/${query}`).then(response => {
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  });
};

export const fetchProduct = slug => dispatch => {
  axios.get(`/api/products/${slug}/`).then(response => {
    dispatch({ type: FETCH_PRODUCT, payload: response.data });
  });
};
