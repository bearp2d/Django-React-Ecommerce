import axios from "axios";

import { addNotif } from "./notifActions";
import {
  FETCH_CART,
  ADD_TO_CART,
  START_LOADING_UI,
  STOP_LOADING_UI,
  START_LOADING_BUTTON,
  STOP_LOADING_BUTTON
} from "../types";

export const fetchCart = () => dispatch => {
  dispatch({ type: START_LOADING_UI });
  axios.get("/api/cart/").then(response => {
    dispatch({ type: FETCH_CART, payload: response.data });
    dispatch({ type: STOP_LOADING_UI });
  });
};

export const addToCart = id => dispatch => {
  dispatch({ type: START_LOADING_BUTTON });
  axios.post("/api/cart/", { product: id }).then(response => {
    dispatch({ type: ADD_TO_CART });
    dispatch({ type: STOP_LOADING_BUTTON });
    dispatch(
      addNotif({
        message: "Item has been added to your cart",
        options: { variant: "info" }
      })
    );
  });
};
