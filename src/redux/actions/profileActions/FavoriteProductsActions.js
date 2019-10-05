import axios from "axios";

import { FETCH_FAVORITE_PRODUCTS, UPDATE_FAVORITE_PRODUCTS } from "../../types";

export const fetchFavoriteProducts = () => dispatch => {
  axios.get("/api/user/favorites-products/").then(response => {
    dispatch({ type: FETCH_FAVORITE_PRODUCTS, payload: response.data });
  });
};

export const updateFavoriteProducts = id => dispatch => {
  axios.post(`/api/user/favorites-products/update/${id}/`).then(response => {
    dispatch({ type: UPDATE_FAVORITE_PRODUCTS, payload: response.data });
  });
};
