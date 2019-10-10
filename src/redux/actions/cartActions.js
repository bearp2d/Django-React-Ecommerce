import axios from "axios";

import { FETCH_CART, START_LOADING_UI, STOP_LOADING_UI } from "../types";

export const fetchCart = () => dispatch => {
  dispatch({ type: START_LOADING_UI });
  axios.get("/api/cart/").then(response => {
    dispatch({ type: FETCH_CART, payload: response.data });
    dispatch({ type: STOP_LOADING_UI });
  });
};
