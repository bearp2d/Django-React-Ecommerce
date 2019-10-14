import { FETCH_CART } from "../types";

const initialState = {
  total_price: null,
  total_customer_profit: null,
  items_count: null,
  items: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CART:
      return { ...state, ...payload };
    default:
      return state;
  }
};
