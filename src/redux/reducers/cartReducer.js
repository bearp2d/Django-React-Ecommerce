import { FETCH_CART } from "../types";

const initialState = {
  cart: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CART:
      return { ...state, cart: payload };
    default:
      return state;
  }
};
