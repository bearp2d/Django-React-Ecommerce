import axios from "axios";

import {
  FETCH_FAVORITE_PRODUCTS,
  UPDATE_FAVORITE_PRODUCTS,
  START_LOADING_UI,
  STOP_LOADING_UI,
  START_LOADING_BUTTON,
  STOP_LOADING_BUTTON
} from "../../types";

export const fetchFavoriteProducts = () => dispatch => {
  dispatch({ type: START_LOADING_UI });
  axios.get("/api/user/favorites-products/").then(response => {
    dispatch({ type: FETCH_FAVORITE_PRODUCTS, payload: response.data });
    dispatch({ type: STOP_LOADING_UI });
  });
};

export const updateFavoriteProducts = id => dispatch => {
  axios.post(`/api/user/favorites-products/update/${id}/`).then(response => {
    dispatch({ type: UPDATE_FAVORITE_PRODUCTS, payload: response.data });
  });
};
