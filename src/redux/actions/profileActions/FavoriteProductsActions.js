import axios from "axios";

import { FETCH_FAVORITE_PRODUCTS } from "../../types";

export const fetchFavoriteProducts = () => dispatch => {
  axios.get("/api/user/favorites-products/").then(response => {
    console.log(response);
    dispatch({ type: FETCH_FAVORITE_PRODUCTS, payload: response.data });
  });
};
